import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { trpc } from '@/lib/trpc';
import { FileText, Package, Eye, EyeOff } from 'lucide-react';

export default function AdminDashboard() {
  const { data: blogPosts } = trpc.blog.list.useQuery({ publishedOnly: false });
  const { data: products } = trpc.products.list.useQuery({ publishedOnly: false });

  const publishedPosts = blogPosts?.filter(p => p.published === 1).length || 0;
  const draftPosts = blogPosts?.filter(p => p.published === 0).length || 0;
  const publishedProducts = products?.filter(p => p.published === 1).length || 0;
  const draftProducts = products?.filter(p => p.published === 0).length || 0;

  const stats = [
    {
      title: 'Published Posts',
      value: publishedPosts,
      icon: Eye,
      color: 'text-green-600',
    },
    {
      title: 'Draft Posts',
      value: draftPosts,
      icon: EyeOff,
      color: 'text-yellow-600',
    },
    {
      title: 'Published Products',
      value: publishedProducts,
      icon: Eye,
      color: 'text-blue-600',
    },
    {
      title: 'Draft Products',
      value: draftProducts,
      icon: EyeOff,
      color: 'text-orange-600',
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to IQHouse Admin Panel
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Recent Blog Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              {blogPosts && blogPosts.length > 0 ? (
                <div className="space-y-2">
                  {blogPosts.slice(0, 5).map((post) => (
                    <div key={post.id} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{post.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {post.language.toUpperCase()} • {post.published ? 'Published' : 'Draft'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  No blog posts yet
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Recent Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              {products && products.length > 0 ? (
                <div className="space-y-2">
                  {products.slice(0, 5).map((product) => (
                    <div key={product.id} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {product.category} • {product.published ? 'Published' : 'Draft'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  No products yet
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
