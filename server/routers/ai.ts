import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import WebSocket from "ws";
import crypto from "crypto";

const XUNFEI_API_KEY = process.env.XUNFEI_API_KEY || "cb6b61377383f30d4ffec2a8de754063";
const XUNFEI_API_SECRET = process.env.XUNFEI_API_SECRET || "MGRhZmVkZjdjYzkzZmM5M2Y0ZTkzZGMy";
const XUNFEI_ASSISTANT_ID = "k81niq6r2sg4_v1";
const XUNFEI_WS_URL = "wss://spark-openapi.cn-huabei-1.xf-yun.com/v1/assistants/k81niq6r2sg4_v1";

// Store active WebSocket connections per session
const activeConnections = new Map<string, WebSocket>();

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

export const aiRouter = router({
  // Initialize WebSocket connection
  connect: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const { sessionId } = input;

        // Close existing connection if any
        const existingWs = activeConnections.get(sessionId);
        if (existingWs) {
          existingWs.close();
        }

        const { url, headers } = generateAuthHeader();

        // Create new WebSocket connection
        const ws = new WebSocket(url, {
          headers: {
            Authorization: headers.Authorization,
            Date: headers.Date,
          },
        });

        // Store connection
        activeConnections.set(sessionId, ws);

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

  // Send message through WebSocket
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
        const ws = activeConnections.get(sessionId);

        if (!ws || ws.readyState !== WebSocket.OPEN) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "WebSocket connection not established",
          });
        }

        // Prepare message in Xunfei format
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

        // Send message
        ws.send(JSON.stringify(xunfeiMessage));

        return {
          success: true,
          message: "Message sent",
        };
      } catch (error) {
        console.error("Error sending message:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send message",
        });
      }
    }),

  // Disconnect WebSocket
  disconnect: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const { sessionId } = input;
        const ws = activeConnections.get(sessionId);

        if (ws) {
          ws.close();
          activeConnections.delete(sessionId);
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
      };
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "AI service error",
      });
    }
  }),
});
