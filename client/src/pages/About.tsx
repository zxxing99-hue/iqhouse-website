/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * About IQHouse page
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.about.hero.title}
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              {t.about.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/about-heritage.png"
                alt="Our Journey"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">{t.about.journey.title}</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t.about.journey.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t.about.difference.title}
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              t.about.difference.point1,
              t.about.difference.point2,
              t.about.difference.point3,
              t.about.difference.point4,
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-background rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              {t.about.partners.title}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed text-center">
              {t.about.partners.description}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-primary text-primary-foreground diagonal-divider">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{t.about.vision.title}</h2>
            <p className="text-xl leading-relaxed opacity-90">
              {t.about.vision.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
