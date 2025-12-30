/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Design & Play Philosophy page
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Hand, Lightbulb, Heart, Target, Puzzle } from 'lucide-react';

export default function Philosophy() {
  const { t } = useLanguage();

  const skillIcons = [Brain, Heart, Lightbulb, Target, Hand, Puzzle];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.philosophy.hero.title}
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              {t.philosophy.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Hands-On Learning Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/design-philosophy.png"
                alt="Hands-on Learning"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">{t.philosophy.handsOn.title}</h2>
              <blockquote className="text-2xl font-display italic text-primary mb-6 border-l-4 border-primary pl-6">
                {t.philosophy.handsOn.quote}
              </blockquote>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t.philosophy.handsOn.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Toys Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{t.philosophy.physicalToys.title}</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.philosophy.physicalToys.description}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t.philosophy.skills.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              t.philosophy.skills.skill1,
              t.philosophy.skills.skill2,
              t.philosophy.skills.skill3,
              t.philosophy.skills.skill4,
              t.philosophy.skills.skill5,
              t.philosophy.skills.skill6,
            ].map((skill, i) => {
              const Icon = skillIcons[i];
              return (
                <Card key={i} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-8 text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold">{skill}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t.philosophy.designPrinciples.title}
          </h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              {
                title: t.philosophy.designPrinciples.principle1,
                desc: t.philosophy.designPrinciples.principle1Desc,
              },
              {
                title: t.philosophy.designPrinciples.principle2,
                desc: t.philosophy.designPrinciples.principle2Desc,
              },
              {
                title: t.philosophy.designPrinciples.principle3,
                desc: t.philosophy.designPrinciples.principle3Desc,
              },
            ].map((principle, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
