import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import * as db from "../db";

const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
  }
  return next({ ctx });
});

export const successPageRouter = router({
  // Get success page config by language (public)
  getConfig: publicProcedure
    .input(z.object({ language: z.enum(['en', 'zh']).default('en') }))
    .query(async ({ input }) => {
      try {
        const config = await db.getSuccessPageConfig(input.language);
        return config || {
          language: input.language,
          title: 'Thank You',
          description: null,
          imageUrl: null,
          videoUrl: null,
          ctaText: null,
          ctaLink: null,
        };
      } catch (error) {
        console.error("Error fetching success page config:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch success page config",
        });
      }
    }),

  // Update success page config (admin only)
  updateConfig: adminProcedure
    .input(
      z.object({
        language: z.enum(['en', 'zh']),
        title: z.string().min(1),
        description: z.string().nullable().optional(),
        imageUrl: z.string().nullable().optional(),
        videoUrl: z.string().nullable().optional(),
        ctaText: z.string().nullable().optional(),
        ctaLink: z.string().nullable().optional(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { language, ...config } = input;
        await db.updateSuccessPageConfig(language, config);
        return { success: true };
      } catch (error) {
        console.error("Error updating success page config:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update success page config",
        });
      }
    }),
});
