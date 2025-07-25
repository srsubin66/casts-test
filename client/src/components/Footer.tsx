import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation, type Language } from "@/lib/i18n";

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Footer({ language, onLanguageChange }: FooterProps) {
  const { t } = useTranslation(language);

  const quickLinks = [
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.industries"), href: "/industries" },
    { name: t("nav.howItWorks"), href: "/how-it-works" },
    { name: t("nav.whyHuman"), href: "/why-human-translation" },
    { name: t("nav.contact"), href: "/contact" },
    { name: t("footer.privacy"), href: "/privacy" },
  ];

  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C&S</span>
              </div>
              <span className="ml-3 text-xl font-semibold rtl:mr-3 rtl:ml-0">
                {t("company.fullName")}
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              {t("hero.subtitle")}
            </p>
            
            {/* Availability Notice */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-green-400 font-semibold">
                {t("footer.availability")}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contactInfo")}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-brand-red mr-3 rtl:ml-3 rtl:mr-0" />
                <span className="text-gray-300">info@corestyle.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-brand-red mr-3 rtl:ml-3 rtl:mr-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="w-5 h-5 text-green-500 mr-3 rtl:ml-3 rtl:mr-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
                <span className="text-sm text-gray-400 ml-2 rtl:mr-2 rtl:ml-0">
                  (WhatsApp)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Language Switcher in Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t("footer.copyright")}
          </p>
          
          <div className="mt-4 sm:mt-0">
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={onLanguageChange}
              variant="footer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
