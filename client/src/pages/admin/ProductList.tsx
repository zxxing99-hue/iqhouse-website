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

export default function ProductList() {
  const utils = trpc.useUtils();
  const { data: products, isLoading } = trpc.products.list.useQuery({ publishedOnly: false });
  const deleteMutation = trpc.products.delete.useMutation({
    onSuccess: () => {
      utils.products.list.invalidate();
      toast.success('Product deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const togglePublishMutation = trpc.products.update.useMutation({
    onSuccess: () => {
      utils.products.list.invalidate();
      toast.success('Product updated successfully');
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

  const categoryLabels: Record<string, string> = {
    language: 'Language Learning',
    math: 'Math & Logic',
    spatial: 'Spatial Reasoning',
    'hands-on': 'Hands-On Skills',
    'multi-skill': 'Multi-Skill',
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-muted-foreground mt-2">
              Manage your product library
            </p>
          </div>
          <Link href="/admin/products/new">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Product
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Products</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-center py-8 text-muted-foreground">Loading...</p>
            ) : products && products.length > 0 ? (
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold truncate">{product.name}</h3>
                        {product.nameZh && (
                          <span className="text-sm text-muted-foreground">({product.nameZh})</span>
                        )}
                        <Badge variant={product.published ? 'default' : 'secondary'}>
                          {product.published ? 'Published' : 'Draft'}
                        </Badge>
                        <Badge variant="outline">{categoryLabels[product.category]}</Badge>
                      </div>
                      {product.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      {product.ageRange && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Age Range: {product.ageRange}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleTogglePublish(product.id, product.published)}
                        title={product.published ? 'Unpublish' : 'Publish'}
                      >
                        {product.published ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                      <Link href={`/admin/products/edit/${product.id}`}>
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
                            <AlertDialogTitle>Delete Product</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{product.name}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(product.id)}>
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
                <p className="text-muted-foreground mb-4">No products yet</p>
                <Link href="/admin/products/new">
                  <Button>Create your first product</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
