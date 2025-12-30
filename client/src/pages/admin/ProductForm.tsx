import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { trpc } from '@/lib/trpc';
import { useLocation } from 'wouter';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

interface ProductFormProps {
  productId?: string;
}

export default function ProductForm({ productId }: ProductFormProps) {
  const [, setLocation] = useLocation();
  const isEdit = !!productId;

  const [formData, setFormData] = useState({
    name: '',
    nameZh: '',
    category: 'language' as 'language' | 'math' | 'spatial' | 'hands-on' | 'multi-skill',
    description: '',
    descriptionZh: '',
    ageRange: '',
    published: false,
  });

  const { data: product, isLoading } = trpc.products.getById.useQuery(
    { id: parseInt(productId!) },
    { enabled: isEdit }
  );

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        nameZh: product.nameZh || '',
        category: product.category,
        description: product.description || '',
        descriptionZh: product.descriptionZh || '',
        ageRange: product.ageRange || '',
        published: product.published === 1,
      });
    }
  }, [product]);

  const createMutation = trpc.products.create.useMutation({
    onSuccess: () => {
      toast.success('Product created successfully');
      setLocation('/admin/products');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = trpc.products.update.useMutation({
    onSuccess: () => {
      toast.success('Product updated successfully');
      setLocation('/admin/products');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (isEdit) {
      await updateMutation.mutateAsync({
        id: parseInt(productId!),
        ...formData,
      });
    } else {
      await createMutation.mutateAsync(formData);
    }
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
            {isEdit ? '编辑产品' : '新建产品'}
          </h1>
          <p className="text-muted-foreground mt-2">
            {isEdit ? '更新产品详情' : '添加新产品到产品库'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>产品详情</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">产品名称 (English) *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Product name in English"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nameZh">产品名称 (中文)</Label>
                  <Input
                    id="nameZh"
                    value={formData.nameZh}
                    onChange={(e) => setFormData(prev => ({ ...prev, nameZh: e.target.value }))}
                    placeholder="产品中文名称"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">分类 *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value: any) => setFormData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="language">Language Learning</SelectItem>
                      <SelectItem value="math">Math & Logic</SelectItem>
                      <SelectItem value="spatial">Spatial Reasoning</SelectItem>
                      <SelectItem value="hands-on">Hands-On Skills</SelectItem>
                      <SelectItem value="multi-skill">Multi-Skill</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ageRange">适用年龄</Label>
                  <Input
                    id="ageRange"
                    value={formData.ageRange}
                    onChange={(e) => setFormData(prev => ({ ...prev, ageRange: e.target.value }))}
                    placeholder="例如：3-6岁"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">产品描述 (English)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Product description in English"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="descriptionZh">产品描述 (中文)</Label>
                <Textarea
                  id="descriptionZh"
                  value={formData.descriptionZh}
                  onChange={(e) => setFormData(prev => ({ ...prev, descriptionZh: e.target.value }))}
                  placeholder="产品中文描述"
                  rows={4}
                />
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
                  {isEdit ? '更新产品' : '创建产品'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setLocation('/admin/products')}
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
