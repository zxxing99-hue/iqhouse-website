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

export const settingsRouter = router({
  getSetting: publicProcedure
    .input(z.object({ key: z.string() }))
    .query(async ({ input }) => {
      const setting = await db.getSetting(input.key);
      return setting || null;
    }),

  setSetting: adminProcedure
    .input(
      z.object({
        key: z.string().min(1),
        value: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      try {
        await db.setSetting(input.key, input.value);
        return { success: true };
      } catch (error) {
        console.error("Error saving setting:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to save setting",
        });
      }
    }),

  getAllSettings: adminProcedure.query(async () => {
    try {
      const settings = await db.getAllSettings();
      return settings;
    } catch (error) {
      console.error("Error fetching settings:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch settings",
      });
    }
  }),
});
