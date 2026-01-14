/*
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Footer component with diagonal divider signature element
 */

import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Mail, MessageSquare, Video, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/oem-odm', label: t.nav.oemOdm },
    { href: '/classroom', label: t.nav.classroom },
    { href: '/capabilities', label: t.nav.capabilities },
    { href: '/product-library', label: t.nav.productLibrary },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground diagonal-divider">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">IQHouse</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section - Consolidated */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h4>
            <div className="flex flex-col gap-4">
              {/* Contact Methods */}
              <div className="space-y-3">
                <a
                  href="mailto:andy@iqhousekids.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>andy@iqhousekids.com</span>
                </a>
                <a
                  href="https://wa.me/447925192549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>+44 7925 192549</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/iqhouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.tiktok.com/@iqhousekids"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Video className="w-4 h-4 flex-shrink-0" />
                  <span>TikTok</span>
                </a>
              </div>

              {/* Legal Links */}
              <div className="border-t border-primary-foreground/20 pt-3">
                <div className="space-y-2">
                  <Link href="/terms">
                    <a className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      {language === 'en' ? 'Terms of Service' : '服务条例'}
                    </a>
                  </Link>
                  <Link href="/privacy">
                    <a className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      {language === 'en' ? 'Privacy Policy' : '隐私条例'}
                    </a>
                  </Link>
                </div>
              </div>

              {/* Company Address */}
              <div className="border-t border-primary-foreground/20 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60 mb-2">
                  {language === 'en' ? 'Address' : '地址'}
                </p>
                <p className="text-xs text-primary-foreground/80 leading-relaxed">
                  LEARNING AGE INTERNATIONAL CO., LTD.<br />
                  {language === 'en' 
                    ? 'Room 304, Building B1, Phase II, Auto Parts City, Xinqiao Street, Baoan District, Shenzhen City'
                    : '深圳市宝安区新桥街道汽车配件城二期B1栋304室'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60 text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
