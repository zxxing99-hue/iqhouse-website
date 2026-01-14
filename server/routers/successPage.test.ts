import { describe, it, expect, beforeEach, vi } from 'vitest';
import * as db from '../db';
import { successPageRouter } from './successPage';
import { TRPCError } from '@trpc/server';

// Mock the database module
vi.mock('../db', () => ({
  getSuccessPageConfig: vi.fn(),
  updateSuccessPageConfig: vi.fn(),
}));

describe('Success Page Router', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getConfig', () => {
    it('should return config for English language', async () => {
      const mockConfig = {
        id: 1,
        language: 'en' as const,
        title: 'Thank You',
        description: 'We received your message',
        imageUrl: 'https://example.com/image.jpg',
        videoUrl: null,
        ctaText: 'Back to Home',
        ctaLink: '/',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(db.getSuccessPageConfig).mockResolvedValue(mockConfig);

      const caller = successPageRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.getConfig({ language: 'en' });
      
      expect(result).toEqual(mockConfig);
      expect(db.getSuccessPageConfig).toHaveBeenCalledWith('en');
    });

    it('should return config for Chinese language', async () => {
      const mockConfig = {
        id: 2,
        language: 'zh' as const,
        title: '感谢您的联系',
        description: '我们已收到您的消息',
        imageUrl: null,
        videoUrl: 'https://example.com/video.mp4',
        ctaText: '返回首页',
        ctaLink: '/',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(db.getSuccessPageConfig).mockResolvedValue(mockConfig);

      const caller = successPageRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.getConfig({ language: 'zh' });
      
      expect(result).toEqual(mockConfig);
      expect(db.getSuccessPageConfig).toHaveBeenCalledWith('zh');
    });

    it('should return default config when none exists', async () => {
      vi.mocked(db.getSuccessPageConfig).mockResolvedValue(undefined);

      const caller = successPageRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.getConfig({ language: 'en' });
      
      expect(result).toEqual({
        language: 'en',
        title: 'Thank You',
        description: null,
        imageUrl: null,
        videoUrl: null,
        ctaText: null,
        ctaLink: null,
      });
    });

    it('should handle database errors gracefully', async () => {
      vi.mocked(db.getSuccessPageConfig).mockRejectedValue(new Error('DB Error'));

      const caller = successPageRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      await expect(caller.getConfig({ language: 'en' })).rejects.toThrow();
    });
  });

  describe('updateConfig', () => {
    it('should require admin role', async () => {
      const caller = successPageRouter.createCaller({
        user: { id: 1, role: 'user' } as any,
        req: {} as any,
        res: {} as any,
      });

      await expect(
        caller.updateConfig({
          language: 'en',
          title: 'New Title',
        })
      ).rejects.toThrow(TRPCError);
    });

    it('should update config with admin role', async () => {
      vi.mocked(db.updateSuccessPageConfig).mockResolvedValue(undefined);

      const caller = successPageRouter.createCaller({
        user: { id: 1, role: 'admin' } as any,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.updateConfig({
        language: 'en',
        title: 'Updated Title',
        description: 'Updated description',
        imageUrl: 'https://example.com/new-image.jpg',
        videoUrl: null,
        ctaText: 'Click Here',
        ctaLink: '/home',
      });

      expect(result).toEqual({ success: true });
      expect(db.updateSuccessPageConfig).toHaveBeenCalledWith('en', {
        title: 'Updated Title',
        description: 'Updated description',
        imageUrl: 'https://example.com/new-image.jpg',
        videoUrl: null,
        ctaText: 'Click Here',
        ctaLink: '/home',
      });
    });

    it('should handle update errors', async () => {
      vi.mocked(db.updateSuccessPageConfig).mockRejectedValue(new Error('Update failed'));

      const caller = successPageRouter.createCaller({
        user: { id: 1, role: 'admin' } as any,
        req: {} as any,
        res: {} as any,
      });

      await expect(
        caller.updateConfig({
          language: 'en',
          title: 'Title',
        })
      ).rejects.toThrow(TRPCError);
    });

    it('should validate required fields', async () => {
      const caller = successPageRouter.createCaller({
        user: { id: 1, role: 'admin' } as any,
        req: {} as any,
        res: {} as any,
      });

      // Title is required
      await expect(
        caller.updateConfig({
          language: 'en',
          title: '',
        })
      ).rejects.toThrow();
    });
  });
});
