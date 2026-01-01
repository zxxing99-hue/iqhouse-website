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

const categoryEnum = z.enum(["language", "math", "spatial", "hands-on", "multi-skill"]);

export const productsRouter = router({
  list: publicProcedure
    .input(z.object({
      category: categoryEnum.optional(),
      publishedOnly: z.boolean().default(false),
    }))
    .query(async ({ input }) => {
      return await db.getAllProducts(input.category, input.publishedOnly);
    }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const product = await db.getProductById(input.id);
      if (!product) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Product not found' });
      }
      return product;
    }),

  create: adminProcedure
    .input(z.object({
      name: z.string().min(1),
      nameZh: z.string().optional(),
      category: categoryEnum,
      description: z.string().optional(),
      descriptionZh: z.string().optional(),
      images: z.string().optional(), // JSON array
      features: z.string().optional(), // JSON array
      featuresZh: z.string().optional(),
      ageRange: z.string().optional(),
      published: z.boolean().default(false),
    }))
    .mutation(async ({ input }) => {
      await db.createProduct({
        ...input,
        published: input.published ? 1 : 0,
      });

      return { success: true };
    }),

  update: adminProcedure
    .input(z.object({
      id: z.number(),
      name: z.string().min(1).optional(),
      nameZh: z.string().optional(),
      category: categoryEnum.optional(),
      description: z.string().optional(),
      descriptionZh: z.string().optional(),
      images: z.string().optional(),
      features: z.string().optional(),
      featuresZh: z.string().optional(),
      ageRange: z.string().optional(),
      published: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const { id, ...updateData } = input;

      const existing = await db.getProductById(id);
      if (!existing) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Product not found' });
      }

      const dataToUpdate: any = { ...updateData };
      if (updateData.published !== undefined) {
        dataToUpdate.published = updateData.published ? 1 : 0;
      }

      await db.updateProduct(id, dataToUpdate);

      return { success: true };
    }),

  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const existing = await db.getProductById(input.id);
      if (!existing) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Product not found' });
      }

      await db.deleteProduct(input.id);

      return { success: true };
    }),
});
