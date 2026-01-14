import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { trpc } from '@/lib/trpc';

export default function ThankYou() {
  const { language } = useLanguage();
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch success page config from backend
  const { data: successConfig } = trpc.successPage.getConfig.useQuery({
    language: language as 'en' | 'zh',
  });

  useEffect(() => {
    if (successConfig) {
      setConfig(successConfig);
      setLoading(false);
    }
  }, [successConfig]);

  const defaultContent = {
    en: {
      title: 'Thank You for Reaching Out',
      description: 'We have received your message and will get back to you as soon as possible.',
      ctaText: 'Back to Home',
      ctaLink: '/',
    },
    zh: {
      title: '感谢您的联系',
      description: '我们已收到您的消息，将尽快与您联系。',
      ctaText: '返回首页',
      ctaLink: '/',
    },
  };

  const content = config || defaultContent[language as keyof typeof defaultContent];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {content.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            {content.description}
          </p>

          {/* Image - if configured */}
          {config?.imageUrl && (
            <div className="mb-12">
              <img
                src={config.imageUrl}
                alt="Success"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Video - if configured */}
          {config?.videoUrl && (
            <div className="mb-12">
              <div className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                <video
                  src={config.videoUrl}
                  controls
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}

          {/* CTA Button */}
          <Link href={config?.ctaLink || defaultContent[language as keyof typeof defaultContent].ctaLink}>
            <Button size="lg" className="gap-2">
              {config?.ctaText || content.ctaText}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'en'
                ? 'In the meantime, feel free to explore our website or contact us directly.'
                : '在此期间，欢迎浏览我们的网站或直接与我们联系。'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline">
                  {language === 'en' ? 'Explore Our Website' : '浏览网站'}
                </Button>
              </Link>
              <a href="https://wa.me/447925192549" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  {language === 'en' ? 'Contact via WhatsApp' : '通过WhatsApp联系'}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
