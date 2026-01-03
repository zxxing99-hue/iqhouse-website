import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import * as db from "../db";

/**
 * 发送企微消息到webhook
 */
async function sendToWeChat(message: {
  name: string;
  email: string;
  company: string;
  country: string;
  message: string;
  createdAt: Date;
}) {
  try {
    // 获取webhook URL从settings表
    const webhookSetting = await db.getSetting("wechat_webhook_url");
    
    if (!webhookSetting) {
      console.warn("WeChat webhook URL not configured");
      return;
    }

    const webhookUrl = webhookSetting.value;

    // 格式化时间
    const formattedTime = new Date(message.createdAt).toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // 构建企微消息
    const wechatMessage = {
      msgtype: "text",
      text: {
        content: `📬 新留言通知\n\n姓名: ${message.name}\n邮箱: ${message.email}\n公司: ${message.company}\n国家: ${message.country}\n\n留言内容:\n${message.message}\n\n提交时间: ${formattedTime}`,
      },
    };

    // 发送到企微
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wechatMessage),
    });

    if (!response.ok) {
      console.error("Failed to send WeChat message:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending WeChat message:", error);
  }
}

export const messagesRouter = router({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email"),
        company: z.string().min(1, "Company is required"),
        country: z.string().min(1, "Country is required"),
        message: z.string().min(1, "Message is required"),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // 保存留言到数据库
        const result = await db.createMessage({
          name: input.name,
          email: input.email,
          company: input.company,
          country: input.country,
          message: input.message,
        });

        // 异步发送企微消息（不阻塞响应）
        const messageData = {
          name: input.name,
          email: input.email,
          company: input.company,
          country: input.country,
          message: input.message,
          createdAt: new Date(),
        };
        
        sendToWeChat(messageData).catch((err) => {
          console.error("WeChat push failed:", err);
        });

        return { success: true };
      } catch (error) {
        console.error("Error submitting message:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to submit message",
        });
      }
    }),
});
