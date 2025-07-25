import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { type Language } from "@/lib/i18n";

interface LayoutProps {
  children: ReactNode;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Layout({ children, language, onLanguageChange }: LayoutProps) {
  useEffect(() => {
    // Update HTML attributes for RTL/LTR support
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} onLanguageChange={onLanguageChange} />
      <main className="flex-1">
        {children}
      </main>
      <Footer language={language} onLanguageChange={onLanguageChange} />
    </div>
  );
}
