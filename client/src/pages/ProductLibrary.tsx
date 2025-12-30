/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Product Library page - showcasing products from backend
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trpc } from '@/lib/trpc';
import { useState } from 'react';

export default function ProductLibrary() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch published products only
  const { data: products, isLoading } = trpc.products.list.useQuery({
    publishedOnly: true,
  });

  const categoryLabels: Record<string, { en: string; zh: string }> = {
    language: { en: 'Language Learning', zh: '语言学习' },
    math: { en: 'Math & Logic', zh: '数学逻辑' },
    spatial: { en: 'Spatial Thinking', zh: '空间思维' },
    'hands-on': { en: 'Hands-On Exploration', zh: '动手探索' },
    'multi-skill': { en: 'Multi-Skill Development', zh: '综合能力' },
  };

  // Group products by category
  const productsByCategory = products?.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  const categories = Object.keys(categoryLabels);
  const filteredCategories = selectedCategory
    ? [selectedCategory]
    : categories;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.productLibrary.hero.title}
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              {t.productLibrary.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge
              variant={selectedCategory === null ? 'default' : 'outline'}
              className="cursor-pointer px-6 py-2 text-base"
              onClick={() => setSelectedCategory(null)}
            >
              {language === 'zh' ? '全部分类' : 'All Categories'}
            </Badge>
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                className="cursor-pointer px-6 py-2 text-base"
                onClick={() => setSelectedCategory(cat)}
              >
                {categoryLabels[cat][language]}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === 'zh' ? '加载中...' : 'Loading...'}
              </p>
            </div>
          ) : !products || products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === 'zh' ? '暂无产品' : 'No products available'}
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredCategories.map((category) => {
                const categoryProducts = productsByCategory?.[category] || [];
                if (categoryProducts.length === 0) return null;

                return (
                  <div key={category}>
                    <h2 className="text-3xl font-bold mb-8">
                      {categoryLabels[category][language]}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {categoryProducts.map((product) => (
                        <Card
                          key={product.id}
                          className="overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          {product.imageUrl && (
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={product.imageUrl}
                                alt={language === 'zh' && product.nameZh ? product.nameZh : product.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">
                              {language === 'zh' && product.nameZh
                                ? product.nameZh
                                : product.name}
                            </h3>
                            {product.ageRange && (
                              <Badge variant="secondary" className="mb-3">
                                {language === 'zh' ? '适用年龄: ' : 'Age: '}
                                {product.ageRange}
                              </Badge>
                            )}
                            <p className="text-muted-foreground">
                              {language === 'zh' && product.descriptionZh
                                ? product.descriptionZh
                                : product.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
