import { z } from 'zod';
import { router, protectedProcedure } from '../_core/trpc';
import { storagePut } from '../storage';

export const uploadRouter = router({
  uploadImage: protectedProcedure
    .input(
      z.object({
        filename: z.string(),
        contentType: z.string(),
        base64Data: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { filename, contentType, base64Data } = input;
      
      // Convert base64 to buffer
      const buffer = Buffer.from(base64Data, 'base64');
      
      // Generate unique filename with timestamp
      const timestamp = Date.now();
      const ext = filename.split('.').pop();
      const uniqueFilename = `uploads/${timestamp}-${Math.random().toString(36).substring(7)}.${ext}`;
      
      // Upload to S3
      const result = await storagePut(uniqueFilename, buffer, contentType);
      
      return {
        url: result.url,
        key: result.key,
      };
    }),
});
