/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Contact page with form
 */

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, MessageSquare, Video } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

export default function Contact() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: '',
  });

  const submitMessage = trpc.messages.submit.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitMessage.mutateAsync({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        country: formData.country,
        message: formData.message,
      });
      
      toast.success(t.contact.form.success);
      setFormData({ name: '', email: '', company: '', country: '', message: '' });
    } catch (error) {
      console.error('Error submitting message:', error);
      toast.error('Failed to submit message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.contact.hero.title}
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              {t.contact.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.contact.form.name}
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.form.namePlaceholder}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.contact.form.email}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.contact.form.emailPlaceholder}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.contact.form.company}
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t.contact.form.companyPlaceholder}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.contact.form.country}
                        </label>
                        <Input
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder={t.contact.form.countryPlaceholder}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.contact.form.message}
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={loading}
                    >
                      {loading ? t.contact.form.sending : t.contact.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Image */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">{t.contact.info.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t.contact.info.emailLabel}</p>
                        <div className="space-y-1">
                          <a
                            href="mailto:andy@iqhousekids.com"
                            className="text-foreground hover:text-primary transition-colors block"
                          >
                            andy@iqhousekids.com
                          </a>
                          <a
                            href="mailto:iqhouse1989@gmail.com"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                          >
                            iqhouse1989@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">WhatsApp</p>
                        <a
                          href="https://wa.me/447925192549"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          +44 7925 192549
                          WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-3">
                        {t.contact.info.followLabel}
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="https://www.linkedin.com/in/iqhouse/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="https://www.tiktok.com/@iqhousekids"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          title="TikTok"
                        >
                          <Video className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <img
                src="/images/contact-partnership.png"
                alt="Partnership"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
