/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * OEM & ODM Cooperation page
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function OemOdm() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.oemOdm.hero.title}
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              {t.oemOdm.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* OEM vs ODM Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t.oemOdm.difference.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">OEM</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.oemOdm.difference.oemTitle}</h3>
                <p className="text-foreground/70 leading-relaxed">{t.oemOdm.difference.oemDesc}</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-secondary">ODM</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.oemOdm.difference.odmTitle}</h3>
                <p className="text-foreground/70 leading-relaxed">{t.oemOdm.difference.odmDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-12">{t.oemOdm.process.title}</h2>
              
              <div className="space-y-8">
                {[
                  { title: t.oemOdm.process.step1, desc: t.oemOdm.process.step1Desc },
                  { title: t.oemOdm.process.step2, desc: t.oemOdm.process.step2Desc },
                  { title: t.oemOdm.process.step3, desc: t.oemOdm.process.step3Desc },
                  { title: t.oemOdm.process.step4, desc: t.oemOdm.process.step4Desc },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/images/oem-odm-cooperation.png"
                alt="OEM ODM Cooperation"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t.oemOdm.advantages.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t.oemOdm.advantages.adv1, desc: t.oemOdm.advantages.adv1Desc },
              { title: t.oemOdm.advantages.adv2, desc: t.oemOdm.advantages.adv2Desc },
              { title: t.oemOdm.advantages.adv3, desc: t.oemOdm.advantages.adv3Desc },
            ].map((adv, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-8">
                  <CheckCircle2 className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground diagonal-divider">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t.oemOdm.cta}
          </h2>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="gap-2">
              {t.nav.contact}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
