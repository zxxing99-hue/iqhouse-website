import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, Mail } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();

  const handleGoHome = () => {
    setLocation("/");
  };

  const content = {
    en: {
      title: "Page Not Found",
      description: "We couldn't find the page you're looking for.",
      suggestion: "If you're looking for specific product information or partnership opportunities, please feel free to reach out to us directly.",
      contact: "Contact us at",
      goHome: "Go to Homepage",
    },
    zh: {
      title: "页面未找到",
      description: "抱歉，我们找不到您要访问的页面。",
      suggestion: "如果您正在寻找特定的产品信息或合作机会，请随时直接与我们联系。",
      contact: "联系我们",
      goHome: "返回首页",
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#F5F1E8] to-[#E8DCC8]">
      <Card className="w-full max-w-2xl mx-4 shadow-lg border-0 bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-12 pb-12 px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2F5233]/10 rounded-full animate-pulse" />
              <AlertCircle className="relative h-20 w-20 text-[#2F5233]" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-[#2F5233] mb-3">404</h1>

          <h2 className="text-2xl font-semibold text-[#2F5233]/90 mb-4">
            {t.title}
          </h2>

          <p className="text-[#2F5233]/70 mb-6 leading-relaxed text-lg">
            {t.description}
          </p>

          <div className="bg-[#F5F1E8] rounded-lg p-6 mb-8 border border-[#2F5233]/10">
            <p className="text-[#2F5233]/80 mb-4 leading-relaxed">
              {t.suggestion}
            </p>
            <div className="flex items-center justify-center gap-2 text-[#2F5233]">
              <Mail className="w-5 h-5" />
              <span className="font-medium">{t.contact}:</span>
              <a 
                href="mailto:iqhouse1989@gmail.com" 
                className="text-[#C17A5C] hover:text-[#C17A5C]/80 font-semibold underline transition-colors"
              >
                iqhouse1989@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGoHome}
              size="lg"
              className="bg-[#2F5233] hover:bg-[#2F5233]/90 text-white px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              {t.goHome}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
