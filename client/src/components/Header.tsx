import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation, type Language } from "@/lib/i18n";

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation(language);

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.industries"), href: "/industries" },
    { name: t("nav.howItWorks"), href: "/how-it-works" },
    { name: t("nav.whyHuman"), href: "/why-human-translation" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C&S</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-brand-black rtl:mr-3 rtl:ml-0">
                {t("company.name")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 rtl:space-x-reverse">
              {navigation.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <span className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "text-brand-red"
                        : "text-gray-600 hover:text-brand-red"
                    }`}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={onLanguageChange}
              variant="header"
            />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-brand-black p-2"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <span
                      className={`block px-3 py-2 text-base font-medium cursor-pointer ${
                        isActive
                          ? "text-brand-red"
                          : "text-gray-600 hover:text-brand-red"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
