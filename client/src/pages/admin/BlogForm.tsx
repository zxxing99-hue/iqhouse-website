import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageUpload } from '@/components/ImageUpload';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { trpc } from '@/lib/trpc';
import { useLocation } from 'wouter';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

interface BlogFormProps {
  postId?: string;
}

export default function BlogForm({ postId }: BlogFormProps) {
  const [, setLocation] = useLocation();
  const isEdit = !!postId;

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImage: '',
    language: 'en' as 'en' | 'zh',
    published: false,
  });

  const { data: post, isLoading } = trpc.blog.getById.useQuery(
    { id: parseInt(postId!) },
    { enabled: isEdit }
  );

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || '',
        content: post.content,
        coverImage: post.coverImage || '',
        language: post.language,
        published: post.published === 1,
      });
    }
  }, [post]);

  const createMutation = trpc.blog.create.useMutation({
    onSuccess: () => {
      toast.success('Post created successfully');
      setLocation('/admin/blog');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = trpc.blog.update.useMutation({
    onSuccess: () => {
      toast.success('Post updated successfully');
      setLocation('/admin/blog');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.slug || !formData.content) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (isEdit) {
      await updateMutation.mutateAsync({
        id: parseInt(postId!),
        ...formData,
      });
    } else {
      await createMutation.mutateAsync(formData);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  if (isEdit && isLoading) {
    return (
      <AdminLayout>
        <div className="p-6">
          <p className="text-center">加载中...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">
            {isEdit ? '编辑文章' : '新建文章'}
          </h1>
          <p className="text-muted-foreground mt-2">
            {isEdit ? '更新您的博客文章' : '创建一篇新的博客文章'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>文章详情</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">标题 *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="输入文章标题"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL别名 *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="post-url-slug"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  用于URL的标题版本
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">摘要</Label>
                <Input
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="文章简要摘要"
                />
              </div>

              <ImageUpload
                label="封面图片"
                value={formData.coverImage}
                onChange={(url) => setFormData(prev => ({ ...prev, coverImage: url }))}
              />

              <div className="space-y-2">
                <Label htmlFor="language">语言 *</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value: 'en' | 'zh') => setFormData(prev => ({ ...prev, language: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="zh">中文</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">内容 *</Label>
                <div data-color-mode="light">
                  <MDEditor
                    value={formData.content}
                    onChange={(val) => setFormData(prev => ({ ...prev, content: val || '' }))}
                    height={400}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, published: checked }))}
                />
                <Label htmlFor="published">立即发布</Label>
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                  {isEdit ? '更新文章' : '创建文章'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setLocation('/admin/blog')}
                >
                  取消
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </AdminLayout>
  );
}
