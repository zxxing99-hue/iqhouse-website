/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Footer component with diagonal divider signature element
 */

import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/oem-odm', label: t.nav.oemOdm },
    { href: '/philosophy', label: t.nav.philosophy },
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
                href="mailto:contact@iqhouse.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@iqhouse.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
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
