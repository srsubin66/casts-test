import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  currentLanguage: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
  variant?: 'header' | 'footer';
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange, variant = 'header' }: LanguageSwitcherProps) {
  const baseClasses = variant === 'header' 
    ? "flex items-center bg-gray-100 rounded-lg p-1"
    : "flex items-center bg-gray-800 rounded-lg p-1";

  const activeClasses = variant === 'header'
    ? "px-3 py-1 text-xs font-medium rounded-md bg-white text-brand-black shadow-sm"
    : "px-3 py-1 text-xs font-medium rounded-md bg-gray-700 text-white";

  const inactiveClasses = variant === 'header'
    ? "px-3 py-1 text-xs font-medium rounded-md text-gray-600 hover:text-brand-black"
    : "px-3 py-1 text-xs font-medium rounded-md text-gray-400 hover:text-white";

  return (
    <div className={baseClasses}>
      <button
        onClick={() => onLanguageChange('en')}
        className={currentLanguage === 'en' ? activeClasses : inactiveClasses}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('ar')}
        className={currentLanguage === 'ar' ? activeClasses : inactiveClasses}
      >
        AR
      </button>
    </div>
  );
}
