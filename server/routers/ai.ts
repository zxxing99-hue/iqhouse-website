import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import crypto from "crypto";

const XUNFEI_API_KEY = process.env.XUNFEI_API_KEY || "cb6b61377383f30d4ffec2a8de754063";
const XUNFEI_API_SECRET = process.env.XUNFEI_API_SECRET || "MGRhZmVkZjdjYzkzZmM5M2Y0ZTkzZGMy";
const XUNFEI_ASSISTANT_ID = "k81niq6r2sg4_v1";
const XUNFEI_WS_URL = "wss://spark-openapi.cn-huabei-1.xf-yun.com/v1/assistants/k81niq6r2sg4_v1";

// Generate authorization header for Xunfei API
function generateAuthHeader(): string {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signatureRaw = `host=spark-openapi.cn-huabei-1.xf-yun.com&date=${timestamp}&GET /v1/assistants/${XUNFEI_ASSISTANT_ID} HTTP/1.1&authorization=api_key="${XUNFEI_API_KEY}"`;
  
  const signature = crypto
    .createHmac("sha256", XUNFEI_API_SECRET)
    .update(signatureRaw)
    .digest("base64");

  const authorizationHeader = `api_key="${XUNFEI_API_KEY}", algorithm="hmac-sha256", headers="host date request-line authorization", signature="${signature}"`;
  
  return Buffer.from(authorizationHeader).toString("base64");
}

export const aiRouter = router({
  // Get WebSocket connection URL with authentication
  getConnectionUrl: publicProcedure.query(async () => {
    try {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const authHeader = generateAuthHeader();
      
      // Return the WebSocket URL with auth parameters
      // Note: In production, you might want to use a server-side WebSocket proxy
      return {
        url: XUNFEI_WS_URL,
        apiKey: XUNFEI_API_KEY,
        timestamp,
        authHeader,
      };
    } catch (error) {
      console.error("Error generating connection URL:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to generate connection URL",
      });
    }
  }),

  // Send message to AI assistant (server-side)
  sendMessage: publicProcedure
    .input(
      z.object({
        message: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // In a production environment, you would establish a WebSocket connection here
        // and handle the message exchange with Xunfei API
        // For now, we'll return a placeholder response
        
        return {
          success: true,
          message: "Message sent to AI assistant",
        };
      } catch (error) {
        console.error("Error sending message:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send message",
        });
      }
    }),
});
