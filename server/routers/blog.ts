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

export const blogRouter = router({
  list: publicProcedure
    .input(z.object({
      language: z.enum(['en', 'zh']).optional(),
      publishedOnly: z.boolean().default(false),
    }))
    .query(async ({ input }) => {
      return await db.getAllPosts(input.language, input.publishedOnly);
    }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const post = await db.getPostById(input.id);
      if (!post) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Post not found' });
      }
      return post;
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const post = await db.getPostBySlug(input.slug);
      if (!post) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Post not found' });
      }
      return post;
    }),

  create: adminProcedure
    .input(z.object({
      title: z.string().min(1),
      slug: z.string().min(1),
      excerpt: z.string().optional(),
      content: z.string().min(1),
      coverImage: z.string().optional(),
      language: z.enum(['en', 'zh']).default('en'),
      published: z.boolean().default(false),
    }))
    .mutation(async ({ input, ctx }) => {
      // Check if slug already exists
      const existing = await db.getPostBySlug(input.slug);
      if (existing) {
        throw new TRPCError({ code: 'CONFLICT', message: 'Slug already exists' });
      }

      await db.createPost({
        ...input,
        published: input.published ? 1 : 0,
        authorId: ctx.user.id,
        publishedAt: input.published ? new Date() : null,
      });

      return { success: true };
    }),

  update: adminProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().min(1).optional(),
      slug: z.string().min(1).optional(),
      excerpt: z.string().optional(),
      content: z.string().min(1).optional(),
      coverImage: z.string().optional(),
      language: z.enum(['en', 'zh']).optional(),
      published: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const { id, ...updateData } = input;

      // Check if post exists
      const existing = await db.getPostById(id);
      if (!existing) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Post not found' });
      }

      // Check if slug is being changed and if it conflicts
      if (updateData.slug && updateData.slug !== existing.slug) {
        const slugExists = await db.getPostBySlug(updateData.slug);
        if (slugExists) {
          throw new TRPCError({ code: 'CONFLICT', message: 'Slug already exists' });
        }
      }

      const dataToUpdate: any = { ...updateData };
      if (updateData.published !== undefined) {
        dataToUpdate.published = updateData.published ? 1 : 0;
        if (updateData.published && !existing.publishedAt) {
          dataToUpdate.publishedAt = new Date();
        }
      }

      await db.updatePost(id, dataToUpdate);

      return { success: true };
    }),

  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const existing = await db.getPostById(input.id);
      if (!existing) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Post not found' });
      }

      await db.deletePost(input.id);

      return { success: true };
    }),
});
