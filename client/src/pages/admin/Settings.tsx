import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AdminLayout from '@/components/DashboardLayout';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Settings as SettingsIcon } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export default function Settings() {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const getSetting = trpc.settings.getSetting.useQuery({ key: 'wechat_webhook_url' });
  const setSetting = trpc.settings.setSetting.useMutation();

  // Load webhook URL from server
  useEffect(() => {
    if (getSetting.data?.value) {
      setWebhookUrl(getSetting.data.value);
      setIsSaved(true);
    }
  }, [getSetting.data]);

  const handleSave = async () => {
    if (!webhookUrl.trim()) {
      toast.error('Webhook URL cannot be empty');
      return;
    }

    if (!webhookUrl.startsWith('https://')) {
      toast.error('Webhook URL must start with https://');
      return;
    }

    setLoading(true);
    try {
      await setSetting.mutateAsync({
        key: 'wechat_webhook_url',
        value: webhookUrl,
      });

      setIsSaved(true);
      toast.success('Webhook URL saved successfully');
    } catch (error) {
      console.error('Error saving webhook URL:', error);
      toast.error('Failed to save webhook URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">设置</h1>
          <p className="text-muted-foreground mt-2">
            管理网站配置和集成
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="w-5 h-5" />
              企业微信Webhook配置
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Webhook URL
              </label>
              <Input
                type="url"
                value={webhookUrl}
                onChange={(e) => {
                  setWebhookUrl(e.target.value);
                  setIsSaved(false);
                }}
                placeholder="https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=..."
                className="font-mono text-sm"
              />
              <p className="text-sm text-muted-foreground mt-2">
                输入企业微信机器人的Webhook地址。当用户提交联系表单时，留言将被推送到此地址。
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={handleSave}
                disabled={loading || !webhookUrl.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                {loading ? '保存中...' : '保存'}
              </Button>
              {isSaved && (
                <span className="text-sm text-green-600 font-medium">
                  ✓ 已保存
                </span>
              )}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold text-blue-900 mb-2">如何获取Webhook URL？</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>打开企业微信应用</li>
                <li>进入"应用管理"或"机器人"设置</li>
                <li>创建或选择一个机器人</li>
                <li>复制机器人的Webhook URL</li>
                <li>粘贴到上方输入框并保存</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
