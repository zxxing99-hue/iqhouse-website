/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Navigation component with language switcher
 * Features: Clean layout, subtle interactions, asymmetric spacing
 */

import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/oem-odm', label: t.nav.oemOdm },
    { href: '/classroom', label: t.nav.classroom },
    { href: '/capabilities', label: t.nav.capabilities },
    { href: '/product-library', label: t.nav.productLibrary },
    { href: '/about', label: t.nav.about },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/images/iqhouse-logo.png" 
                alt="IQHouse Logo" 
                className="h-12 w-auto"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors relative group ${
                    location === link.href
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {/* Underline animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      location === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </Link>
            ))}
            
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'EN'}
            </Button>

            {/* Contact CTA */}
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                {t.nav.contact}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`text-base font-medium transition-colors ${
                      location === link.href
                        ? 'text-primary'
                        : 'text-foreground/70'
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="gap-2"
                >
                  <Globe className="w-4 h-4" />
                  {language === 'en' ? '中文' : 'EN'}
                </Button>
                
                <Link href="/contact">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    {t.nav.contact}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
