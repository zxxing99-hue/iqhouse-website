/*
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Premium B2B Footer - Refined visual hierarchy and typography
 */

import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Mail, MessageSquare, Video, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  // Simplified Quick Links - only 5 key items
  const quickLinks = [
    { href: '/oem-odm', label: t.nav.oemOdm },
    { href: '/capabilities', label: t.nav.capabilities },
    { href: '/product-library', label: t.nav.productLibrary },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground diagonal-divider">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Brand Section - 5 columns */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-3">IQHouse</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70 mb-3">
              {language === 'en' 
                ? 'Design-led Learning Toys for Brands & Distributors'
                : '为品牌和经销商设计的学习玩具'}
            </p>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Middle: Quick Links - 3 columns */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Connect Section - 4 columns */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground mb-6">
              {t.footer.connect}
            </h4>
            
            {/* Contact Methods & Social */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:andy@iqhousekids.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>andy@iqhousekids.com</span>
              </a>
              <a
                href="https://wa.me/447925192549"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5 flex-shrink-0" />
                <span>+44 7925 192549</span>
              </a>

              {/* Social Icons - Small, Icon Only */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/iqhouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@iqhousekids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  title="TikTok"
                >
                  <Video className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Legal Links - Smaller, Separated */}
            <div className="pt-4 border-t border-primary-foreground/20">
              <div className="space-y-2">
                <Link href="/terms">
                  <a className="flex items-center gap-2 text-xs text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors duration-200">
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    {language === 'en' ? 'Terms of Service' : '服务条例'}
                  </a>
                </Link>
                <Link href="/privacy">
                  <a className="flex items-center gap-2 text-xs text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors duration-200">
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    {language === 'en' ? 'Privacy Policy' : '隐私条例'}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Left Aligned */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-xs text-primary-foreground/60">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
