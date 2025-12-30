/**
 * Blog post detail page
 * Displays individual blog post with Markdown rendering
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { trpc } from '@/lib/trpc';
import { useLocation } from 'wouter';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Streamdown } from 'streamdown';

interface InsightDetailProps {
  slug: string;
}

export default function InsightDetail({ slug }: InsightDetailProps) {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const { data: post, isLoading } = trpc.blog.getBySlug.useQuery({ slug });

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <p className="text-muted-foreground">
          {language === 'zh' ? '加载中...' : 'Loading...'}
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'zh' ? '文章未找到' : 'Post Not Found'}
        </h1>
        <Button onClick={() => setLocation('/insights')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'zh' ? '返回列表' : 'Back to List'}
        </Button>
      </div>
    );
  }

  // Check if post language matches current language
  if (post.language !== language) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'zh' ? '该文章暂无中文版本' : 'This post is not available in English'}
        </h1>
        <Button onClick={() => setLocation('/insights')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'zh' ? '返回列表' : 'Back to List'}
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <section className="py-8 border-b">
        <div className="container">
          <Button variant="ghost" onClick={() => setLocation('/insights')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'zh' ? '返回列表' : 'Back to List'}
          </Button>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full aspect-video object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 mb-8 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(post.publishedAt || post.createdAt)}
              </div>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Content with Markdown rendering */}
            <div className="prose prose-lg max-w-none">
              <Streamdown>{post.content}</Streamdown>
            </div>
          </div>
        </div>
      </article>

      {/* Back to List Button */}
      <section className="py-12 border-t">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Button onClick={() => setLocation('/insights')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'zh' ? '返回文章列表' : 'Back to All Posts'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
