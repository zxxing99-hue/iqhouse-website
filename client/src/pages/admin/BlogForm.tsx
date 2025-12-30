import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
          <p className="text-center">Loading...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">
            {isEdit ? 'Edit Post' : 'New Post'}
          </h1>
          <p className="text-muted-foreground mt-2">
            {isEdit ? 'Update your blog post' : 'Create a new blog post'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="post-url-slug"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  URL-friendly version of the title
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Input
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief summary of the post"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverImage">Cover Image URL</Label>
                <Input
                  id="coverImage"
                  value={formData.coverImage}
                  onChange={(e) => setFormData(prev => ({ ...prev, coverImage: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language *</Label>
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
                <Label htmlFor="content">Content *</Label>
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
                <Label htmlFor="published">Publish immediately</Label>
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                  {isEdit ? 'Update Post' : 'Create Post'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setLocation('/admin/blog')}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </AdminLayout>
  );
}
