import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';
import { Loader2 } from 'lucide-react';

export default function SuccessPageConfig() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    videoUrl: '',
    ctaText: '',
    ctaLink: '',
  });

  const { data: config, isLoading: isLoadingConfig } = trpc.successPage.getConfig.useQuery({
    language,
  });

  const updateConfig = trpc.successPage.updateConfig.useMutation();

  useEffect(() => {
    if (config) {
      setFormData({
        title: config.title || '',
        description: config.description || '',
        imageUrl: config.imageUrl || '',
        videoUrl: config.videoUrl || '',
        ctaText: config.ctaText || '',
        ctaLink: config.ctaLink || '',
      });
    }
  }, [config]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateConfig.mutateAsync({
        language,
        title: formData.title,
        description: formData.description,
        imageUrl: formData.imageUrl,
        videoUrl: formData.videoUrl,
        ctaText: formData.ctaText,
        ctaLink: formData.ctaLink,
      });

      toast.success('成功页面配置已更新');
    } catch (error) {
      console.error('Error updating config:', error);
      toast.error('更新失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  if (isLoadingConfig) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">成功页面配置</h2>
        <p className="text-muted-foreground">
          配置表单提交后显示的感谢页面内容。此页面用于 Google Ads 转化追踪。
        </p>
      </div>

      {/* Language Selector */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                language === 'zh'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              中文
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Config Form */}
      <Card>
        <CardHeader>
          <CardTitle>{language === 'en' ? 'English' : '中文'} 配置</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-2">
                标题 *
              </label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="例如：感谢您的联系"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2">
                描述文字
              </label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="例如：我们已收到您的消息，将尽快与您联系。"
                rows={4}
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium mb-2">
                图片 URL
              </label>
              <Input
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                type="url"
              />
              {formData.imageUrl && (
                <div className="mt-3">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="max-w-xs h-auto rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Video URL */}
            <div>
              <label className="block text-sm font-medium mb-2">
                视频 URL
              </label>
              <Input
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleChange}
                placeholder="https://example.com/video.mp4"
                type="url"
              />
              {formData.videoUrl && (
                <div className="mt-3">
                  <video
                    src={formData.videoUrl}
                    controls
                    className="max-w-xs h-auto rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* CTA Text */}
            <div>
              <label className="block text-sm font-medium mb-2">
                按钮文字
              </label>
              <Input
                name="ctaText"
                value={formData.ctaText}
                onChange={handleChange}
                placeholder="例如：返回首页"
              />
            </div>

            {/* CTA Link */}
            <div>
              <label className="block text-sm font-medium mb-2">
                按钮链接
              </label>
              <Input
                name="ctaLink"
                value={formData.ctaLink}
                onChange={handleChange}
                placeholder="例如：/"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  保存中...
                </>
              ) : (
                '保存配置'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>预览</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">{formData.title}</h3>
            {formData.description && (
              <p className="text-muted-foreground mb-6">{formData.description}</p>
            )}
            {formData.imageUrl && (
              <div className="mb-6">
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  className="max-w-xs h-auto rounded-lg mx-auto"
                />
              </div>
            )}
            {formData.videoUrl && (
              <div className="mb-6">
                <video
                  src={formData.videoUrl}
                  controls
                  className="max-w-xs h-auto rounded-lg mx-auto"
                />
              </div>
            )}
            {formData.ctaText && (
              <Button>{formData.ctaText}</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
