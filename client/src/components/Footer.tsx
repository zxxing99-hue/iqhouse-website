/*
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Footer component with diagonal divider signature element
 */

import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Mail, MessageSquare, Video } from 'lucide-react';

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

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:andy@iqhousekids.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                andy@iqhousekids.com
              </a>
              <a
                href="https://wa.me/447925192549"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                +44 7925 192549
              </a>
              <a
                href="https://www.linkedin.com/in/iqhouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.tiktok.com/@iqhousekids"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Video className="w-4 h-4" />
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Company Info & Legal */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Address */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                {language === 'en' ? 'Company Address' : '公司地址'}
              </h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                LEARNING AGE INTERNATIONAL CO., LTD.<br />
                {language === 'en' 
                  ? 'Room 304, Building B1, Phase II, Auto Parts City, Xinqiao Street, Baoan District, Shenzhen City'
                  : '深圳市宝安区新桥街道汽车配件城二期B1栋304室'}
              </p>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                {language === 'en' ? 'Legal' : '法律'}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms">
                    <a className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      {language === 'en' ? 'Terms of Service' : '服务条例'}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <a className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      {language === 'en' ? 'Privacy Policy' : '隐私条例'}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* WhatsApp Direct */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                {language === 'en' ? 'Get in Touch' : '联系我们'}
              </h4>
              <p className="text-sm text-primary-foreground/80 mb-3">
                WhatsApp: <strong>+44 7925 192549</strong>
              </p>
              <a
                href="https://wa.me/447925192549"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm px-4 py-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded transition-colors"
              >
                {language === 'en' ? 'Message on WhatsApp' : '在WhatsApp上发送消息'}
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/60 text-center">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
