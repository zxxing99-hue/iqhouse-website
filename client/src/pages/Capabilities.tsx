/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Learning Capabilities page - 12 foundational skills
 * Color: Deep forest green + warm terracotta on soft cream
 * Typography: Playfair Display (headings) + Inter (body)
 * Layout: Grid system with subtle asymmetry
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Eye, 
  Focus, 
  Lightbulb, 
  Search, 
  Repeat, 
  MessageCircle, 
  Calculator, 
  Box, 
  Brain, 
  Layers, 
  Palette, 
  Users 
} from 'lucide-react';

export default function Capabilities() {
  const { t } = useLanguage();

  const capabilities = [
    { icon: Eye, title: t.capabilities.cap1.title, desc: t.capabilities.cap1.desc },
    { icon: Focus, title: t.capabilities.cap2.title, desc: t.capabilities.cap2.desc },
    { icon: Lightbulb, title: t.capabilities.cap3.title, desc: t.capabilities.cap3.desc },
    { icon: Search, title: t.capabilities.cap4.title, desc: t.capabilities.cap4.desc },
    { icon: Repeat, title: t.capabilities.cap5.title, desc: t.capabilities.cap5.desc },
    { icon: MessageCircle, title: t.capabilities.cap6.title, desc: t.capabilities.cap6.desc },
    { icon: Calculator, title: t.capabilities.cap7.title, desc: t.capabilities.cap7.desc },
    { icon: Box, title: t.capabilities.cap8.title, desc: t.capabilities.cap8.desc },
    { icon: Brain, title: t.capabilities.cap9.title, desc: t.capabilities.cap9.desc },
    { icon: Layers, title: t.capabilities.cap10.title, desc: t.capabilities.cap10.desc },
    { icon: Palette, title: t.capabilities.cap11.title, desc: t.capabilities.cap11.desc },
    { icon: Users, title: t.capabilities.cap12.title, desc: t.capabilities.cap12.desc },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              {t.capabilities.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.capabilities.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {capability.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">
              {t.home.finalCta.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.home.capabilities.description}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
