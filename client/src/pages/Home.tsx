/*
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Home page - Asymmetric layouts, generous whitespace, natural imagery
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { ArrowRight, Lightbulb, Package, Palette } from 'lucide-react';


export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Asymmetric layout with background image */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                {t.home.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                {t.home.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                    For Brands & Buyers
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/classroom">
                  <Button size="lg" variant="outline">
                    Our Design Method
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section - 60/40 split */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="text-sm font-mono text-primary uppercase tracking-wider">01</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                {t.home.whoWeAre.title}
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.home.whoWeAre.description}
              </p>
              <ul className="space-y-4">
                {[t.home.whoWeAre.point1, t.home.whoWeAre.point2, t.home.whoWeAre.point3].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section - Cards */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">02</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              {t.home.whatWeOffer.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: t.home.whatWeOffer.service1Title,
                desc: t.home.whatWeOffer.service1Desc,
              },
              {
                icon: Package,
                title: t.home.whatWeOffer.service2Title,
                desc: t.home.whatWeOffer.service2Desc,
              },
              {
                icon: Lightbulb,
                title: t.home.whatWeOffer.service3Title,
                desc: t.home.whatWeOffer.service3Desc,
              },
            ].map((service, i) => {
              const ServiceIcon = service.icon;
              return (
                <Card key={i} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <ServiceIcon className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Approach Section */}
      <section className="py-24 bg-accent/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">03</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              {t.home.designApproach.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.home.designApproach.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              t.home.designApproach.principle1,
              t.home.designApproach.principle2,
              t.home.designApproach.principle3,
            ].map((principle, i) => (
              <div key={i} className="p-6 bg-background rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">{i + 1}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Capabilities Section - Simplified with featured icons */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-mono text-primary uppercase tracking-wider">04</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Learning Capabilities Framework
            </h2>
          </div>

          {/* Featured Capabilities - 4 representative icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { emoji: '👁️', label: 'Observation' },
              { emoji: '🧠', label: 'Reasoning' },
              { emoji: '🎨', label: 'Creativity' },
              { emoji: '🤝', label: 'Social Skills' },
            ].map((capability, i) => (
              <div key={i} className="text-center p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{capability.emoji}</div>
                <p className="text-sm font-medium text-foreground/80">{capability.label}</p>
              </div>
            ))}
          </div>

          {/* Summary and CTA */}
          <div className="text-center">
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Every toy we design targets one or more foundational learning capabilities that screens and automation cannot replicate.
            </p>
            <Link href="/capabilities">
              <Button size="lg" variant="default" className="gap-2">
                View all learning capabilities
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Role-specific CTAs */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-3xl mx-auto">
            {t.home.finalCta.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                For Brands & Buyers
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/classroom">
              <Button size="lg" className="gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground">
                Our Design Method
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
