/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Product Library page - showcasing design categories, not SKUs
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export default function ProductLibrary() {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'language',
      image: '/images/reading-pen-usage.jpg',
    },
    {
      id: 'math',
      image: '/images/store-photo-1.jpg',
    },
    {
      id: 'spatial',
      image: '/images/store-photo-2.jpg',
    },
    {
      id: 'hands-on',
      image: '/images/students-group.jpg',
    },
    {
      id: 'multi-skill',
      image: '/images/students-playground.jpg',
    },
  ];

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

      {/* Categories Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={`${category.id} category`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {t.productLibrary.categories[category.id as keyof typeof t.productLibrary.categories].title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {t.productLibrary.categories[category.id as keyof typeof t.productLibrary.categories].description}
                  </p>
                  <div className="space-y-2">
                    {t.productLibrary.categories[category.id as keyof typeof t.productLibrary.categories].examples.map((example: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground diagonal-divider">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {t.productLibrary.cta.title}
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              {t.productLibrary.cta.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
