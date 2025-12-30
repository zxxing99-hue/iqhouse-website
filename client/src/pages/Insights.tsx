/**
 * Blog/Insights listing page
 * Displays published blog posts with language filtering
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trpc } from '@/lib/trpc';
import { Link } from 'wouter';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Insights() {
  const { t, language } = useLanguage();

  // Fetch published posts only
  const { data: posts, isLoading } = trpc.blog.list.useQuery({
    language,
    publishedOnly: true,
  });

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'zh' ? '洞察与思考' : 'Insights & Thinking'}
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              {language === 'zh'
                ? '关于儿童学习、教具设计和教育理念的深度思考'
                : 'Deep thoughts on child learning, toy design, and educational philosophy'}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === 'zh' ? '加载中...' : 'Loading...'}
              </p>
            </div>
          ) : !posts || posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === 'zh' ? '暂无文章' : 'No posts available'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/insights/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    {post.coverImage && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.publishedAt || post.createdAt)}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {post.excerpt && (
                        <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                      )}
                      
                      <div className="flex items-center text-primary font-medium mt-auto">
                        {language === 'zh' ? '阅读更多' : 'Read More'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
