/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * From Classroom to Toy Design page
 * Color: Deep forest green + warm terracotta on soft cream
 * Typography: Playfair Display (headings) + Inter (body)
 * Layout: Asymmetric 60/40 content splits
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Classroom() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              {t.classroom.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.classroom.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Design Starting Point */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                {t.classroom.section1.title}
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section1.p1}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section1.p2}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section1.p3}
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section1.point1}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section1.point2}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section1.point3}
                </li>
              </ul>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section1.p4}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Divider */}
      <section className="py-16 bg-accent/5">
        <div className="container">
          <div className="aspect-[21/9] rounded-lg overflow-hidden">
            <img 
              src="/images/design-philosophy.png" 
              alt="Classroom observation methodology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Designing for Development Stages */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                {t.classroom.section2.title}
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section2.p1}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section2.p2}
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section2.point1}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section2.point2}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section2.point3}
                </li>
              </ul>
              <p className="text-lg text-foreground/80 leading-relaxed italic">
                {t.classroom.section2.p3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: A Method, Not a Trend */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                {t.classroom.section3.title}
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section3.p1}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section3.p2}
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section3.point1}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section3.point2}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section3.point3}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section3.point4}
                </li>
              </ul>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section3.p3}
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section3.result1}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section3.result2}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section3.result3}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 Optimizing: Optimizing Learning Complexity Through Design */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                {language === 'en' ? 'Optimizing Learning Complexity Through Design' : '通过设计优化学习复杂度'}
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {language === 'en' 
                  ? 'Many traditional educational toys contain strong learning value, but are often cognitively demanding for young children.' 
                  : '许多传统教具本身具备良好的学习价值，但在认知层面对幼龄儿童而言往往具有较高门槛。'}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {language === 'en' 
                  ? 'Instead of simplifying learning goals, IQHouse focuses on restructuring learning complexity.' 
                  : 'IQHouse 并非降低学习目标，而是重新结构学习复杂度。'}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                {language === 'en' ? 'We restructure complexity across three dimensions:' : '我们从三个维度重新结构学习复杂度：'}
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {language === 'en' ? 'The number of elements introduced at early stages' : '早期阶段引入的元素数量'}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {language === 'en' ? 'The level of visual guidance provided' : '视觉引导与提示方式'}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {language === 'en' ? 'The progression of difficulty across play stages' : '游戏过程中难度的递进节奏'}
                </li>
              </ul>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {language === 'en' 
                  ? 'This allows children to experience early success, build confidence, and gradually develop deeper understanding through hands-on interaction.' 
                  : '通过这种方式，孩子可以在获得初始成功的同时建立信心，并在动手操作中逐步形成更深入的理解。'}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed italic border-l-4 border-primary pl-4">
                {language === 'en' 
                  ? 'We align learning difficulty with how children naturally understand and progress.' 
                  : '我们通过结构化设计，让学习难度与孩子的理解路径保持一致。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Physical Play Still Matters */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                {t.classroom.section4.title}
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section4.p1}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.classroom.section4.p2}
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section4.point1}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section4.point2}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section4.point3}
                </li>
                <li className="text-lg text-foreground/70 leading-relaxed list-disc">
                  {t.classroom.section4.point4}
                </li>
              </ul>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                {t.classroom.section4.p3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Role as a Design Partner */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold mb-6">
              {t.classroom.section5.title}
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              {t.classroom.section5.p1}
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              {t.classroom.section5.p2}
            </p>
            <ul className="space-y-3 text-left max-w-2xl mx-auto">
              <li className="text-lg leading-relaxed opacity-90 list-disc ml-6">
                {t.classroom.section5.point1}
              </li>
              <li className="text-lg leading-relaxed opacity-90 list-disc ml-6">
                {t.classroom.section5.point2}
              </li>
              <li className="text-lg leading-relaxed opacity-90 list-disc ml-6">
                {t.classroom.section5.point3}
              </li>
            </ul>
            <p className="text-lg leading-relaxed opacity-90 font-medium">
              {t.classroom.section5.p3}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
