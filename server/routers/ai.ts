import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import WebSocket from "ws";
import crypto from "crypto";

const XUNFEI_API_KEY = process.env.XUNFEI_API_KEY || "cb6b61377383f30d4ffec2a8de754063";
const XUNFEI_API_SECRET = process.env.XUNFEI_API_SECRET || "MGRhZmVkZjdjYzkzZmM5M2Y0ZTkzZGMy";
const XUNFEI_ASSISTANT_ID = "k81niq6r2sg4_v1";
const XUNFEI_WS_URL = "wss://spark-openapi.cn-huabei-1.xf-yun.com/v1/assistants/k81niq6r2sg4_v1";

// Store active connections per session
const sessionConnections = new Map<string, { ws: WebSocket; lastActivity: number }>();

function generateAuthHeader(): { url: string; headers: Record<string, string> } {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signatureRaw = `host=spark-openapi.cn-huabei-1.xf-yun.com&date=${timestamp}&GET /v1/assistants/${XUNFEI_ASSISTANT_ID} HTTP/1.1&authorization=api_key="${XUNFEI_API_KEY}"`;

  const signature = crypto
    .createHmac("sha256", XUNFEI_API_SECRET)
    .update(signatureRaw)
    .digest("base64");

  const authorizationHeader = `api_key="${XUNFEI_API_KEY}", algorithm="hmac-sha256", headers="host date request-line authorization", signature="${signature}"`;

  return {
    url: XUNFEI_WS_URL,
    headers: {
      Authorization: Buffer.from(authorizationHeader).toString("base64"),
      Date: new Date(parseInt(timestamp) * 1000).toUTCString(),
    },
  };
}

async function createXunfeiConnection(sessionId: string): Promise<WebSocket> {
  return new Promise((resolve, reject) => {
    try {
      const { url, headers } = generateAuthHeader();

      const ws = new WebSocket(url, {
        headers: {
          Authorization: headers.Authorization,
          Date: headers.Date,
        },
      });

      const timeout = setTimeout(() => {
        ws.close();
        reject(new Error("Connection timeout"));
      }, 5000);

      ws.onopen = () => {
        clearTimeout(timeout);
        console.log(`[${sessionId}] Connected to Xunfei API`);
        resolve(ws);
      };

      ws.onerror = (error: any) => {
        clearTimeout(timeout);
        console.error(`[${sessionId}] WebSocket error:`, error);
        reject(new Error("Failed to connect to Xunfei API"));
      };

      ws.onclose = () => {
        console.log(`[${sessionId}] Disconnected from Xunfei API`);
        sessionConnections.delete(sessionId);
      };
    } catch (error) {
      reject(error);
    }
  });
}

export const aiRouter = router({
  // Initialize connection
  connect: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const { sessionId } = input;

        // Close existing connection if any
        const existing = sessionConnections.get(sessionId);
        if (existing) {
          existing.ws.close();
        }

        // Create new connection
        const ws = await createXunfeiConnection(sessionId);

        // Store connection
        sessionConnections.set(sessionId, {
          ws,
          lastActivity: Date.now(),
        });

        return {
          success: true,
          sessionId,
          message: "Connected to AI assistant",
        };
      } catch (error) {
        console.error("Error connecting to Xunfei:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to connect to AI assistant",
        });
      }
    }),

  // Send message
  sendMessage: publicProcedure
    .input(
      z.object({
        sessionId: z.string(),
        message: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { sessionId, message } = input;

        // Get or create connection
        let connection = sessionConnections.get(sessionId);
        
        if (!connection || connection.ws.readyState !== WebSocket.OPEN) {
          console.log(`[${sessionId}] Creating new connection...`);
          const ws = await createXunfeiConnection(sessionId);
          connection = { ws, lastActivity: Date.now() };
          sessionConnections.set(sessionId, connection);
        }

        // Update last activity
        connection.lastActivity = Date.now();

        // Prepare message
        const xunfeiMessage = {
          header: {
            app_id: XUNFEI_ASSISTANT_ID,
            uid: sessionId,
          },
          parameter: {
            chat: {
              domain: "assistant",
              temperature: 0.5,
            },
          },
          payload: {
            message: {
              text: [
                {
                  role: "user",
                  content: message,
                },
              ],
            },
          },
        };

        console.log(`[${sessionId}] Sending message:`, message);

        // Send message
        connection.ws.send(JSON.stringify(xunfeiMessage));

        // Wait for response with timeout
        return new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            reject(new Error("Response timeout"));
          }, 10000);

          const onMessage = (event: any) => {
            try {
              clearTimeout(timeout);
              const response = JSON.parse(event.data);
              console.log(`[${sessionId}] Received response:`, response);

              // Remove listener
              connection!.ws.removeEventListener("message", onMessage);

              resolve({
                success: true,
                message: "Message sent successfully",
                response,
              });
            } catch (error) {
              clearTimeout(timeout);
              console.error(`[${sessionId}] Error parsing response:`, error);
              connection!.ws.removeEventListener("message", onMessage);
              reject(error);
            }
          };

          connection!.ws.addEventListener("message", onMessage);
        });
      } catch (error) {
        console.error("Error sending message:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error instanceof Error ? error.message : "Failed to send message",
        });
      }
    }),

  // Disconnect
  disconnect: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const { sessionId } = input;
        const connection = sessionConnections.get(sessionId);

        if (connection) {
          connection.ws.close();
          sessionConnections.delete(sessionId);
        }

        return {
          success: true,
          message: "Disconnected",
        };
      } catch (error) {
        console.error("Error disconnecting:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to disconnect",
        });
      }
    }),

  // Test connection
  test: publicProcedure.query(async () => {
    try {
      return {
        success: true,
        message: "AI service is available",
        apiKeyConfigured: !!XUNFEI_API_KEY,
        activeConnections: sessionConnections.size,
      };
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "AI service error",
      });
    }
  }),
});
