import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trpc } from '@/lib/trpc';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function BlogList() {
  const utils = trpc.useUtils();
  const { data: posts, isLoading } = trpc.blog.list.useQuery({ publishedOnly: false });
  const deleteMutation = trpc.blog.delete.useMutation({
    onSuccess: () => {
      utils.blog.list.invalidate();
      toast.success('Post deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const togglePublishMutation = trpc.blog.update.useMutation({
    onSuccess: () => {
      utils.blog.list.invalidate();
      toast.success('Post updated successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleDelete = async (id: number) => {
    await deleteMutation.mutateAsync({ id });
  };

  const handleTogglePublish = async (id: number, currentStatus: number) => {
    await togglePublishMutation.mutateAsync({
      id,
      published: currentStatus === 0,
    });
  };

  const formatDate = (date: Date | string | null) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Blog Posts</h1>
            <p className="text-muted-foreground mt-2">
              Manage your blog content
            </p>
          </div>
          <Link href="/admin/blog/new">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Posts</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-center py-8 text-muted-foreground">Loading...</p>
            ) : posts && posts.length > 0 ? (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold truncate">{post.title}</h3>
                        <Badge variant={post.published ? 'default' : 'secondary'}>
                          {post.published ? 'Published' : 'Draft'}
                        </Badge>
                        <Badge variant="outline">{post.language.toUpperCase()}</Badge>
                      </div>
                      {post.excerpt && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        Created: {formatDate(post.createdAt)} • Updated: {formatDate(post.updatedAt)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleTogglePublish(post.id, post.published)}
                        title={post.published ? 'Unpublish' : 'Publish'}
                      >
                        {post.published ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                      <Link href={`/admin/blog/edit/${post.id}`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Post</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{post.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(post.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No blog posts yet</p>
                <Link href="/admin/blog/new">
                  <Button>Create your first post</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
