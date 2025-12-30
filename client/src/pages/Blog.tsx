/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Blog/Insights page
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24">
        <div className="container">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <p className="text-lg text-muted-foreground">
                {t.blog.noArticles}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
