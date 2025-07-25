import { 
  FileText, 
  Tag, 
  Video, 
  CheckCircle, 
  Globe, 
  UserCheck,
  BookOpen,
  Shield
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation, type Language } from "@/lib/i18n";

interface ServicesProps {
  language: Language;
}

export default function Services({ language }: ServicesProps) {
  const { t } = useTranslation(language);

  const services = [
    {
      icon: FileText,
      title: language === 'ar' ? 'ترجمة الوثائق (عربي ↔ إنجليزي)' : 'Document Translation (Arabic ↔ English)',
      description: language === 'ar' 
        ? 'ترجمة احترافية لجميع أنواع الوثائق مع الاهتمام بالتفاصيل والفروق الثقافية.'
        : 'Professional translation of all document types with attention to detail and cultural nuances.',
    },
    {
      icon: Tag,
      title: language === 'ar' ? 'ترجمة قانونية معتمدة' : 'Certified Legal Translation',
      description: language === 'ar'
        ? 'ترجمات رسمية معتمدة للوثائق القانونية والعقود والإجراءات القضائية.'
        : 'Official certified translations for legal documents, contracts, and court proceedings.',
    },
    {
      icon: Video,
      title: language === 'ar' ? 'ترجمة فورية' : 'Subtitling',
      description: language === 'ar'
        ? 'خدمات ترجمة فورية احترافية للمحتوى المرئي.'
        : 'Professional subtitling services for video content.',
    },
    {
      icon: FileText,
      title: language === 'ar' ? 'نسخ' : 'Transcription',
      description: language === 'ar'
        ? 'خدمات نسخ احترافية للمحتوى الصوتي والمرئي.'
        : 'Professional transcription services for audio and video content.',
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'تدقيق لغوي' : 'Proofreading',
      description: language === 'ar'
        ? 'تدقيق وتحرير شامل لضمان الدقة والطلاقة في كلا اللغتين.'
        : 'Thorough proofreading and editing to ensure accuracy and fluency in both languages.',
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'توطين المواقع الإلكترونية' : 'Website Localization',
      description: language === 'ar'
        ? 'خدمات توطين شاملة للمواقع الإلكترونية تضمن التكيف الثقافي واللغوي.'
        : 'Complete website localization services ensuring cultural and linguistic adaptation.',
    },
    {
      icon: UserCheck,
      title: language === 'ar' ? 'التكيف الثقافي' : 'Cultural Adaptation',
      description: language === 'ar'
        ? 'ضمان تفاعل المحتوى مع الثقافة والجمهور المستهدف.'
        : 'Ensuring your content resonates with the target culture and audience.',
    },
    {
      icon: BookOpen,
      title: language === 'ar' ? 'معالجة المسارد/المصطلحات' : 'Glossary/Terminology Handling',
      description: language === 'ar'
        ? 'معالجة متخصصة للمسارد والمصطلحات المقدمة عبر البريد الإلكتروني.'
        : 'Specialized handling of glossaries and terminology submitted via email.',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            {t("services.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Section */}
        <Card className="bg-gray-50 mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-brand-black mb-6">
              {language === 'ar' ? 'كيف نحسب التسعير' : 'How We Calculate Pricing'}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                {language === 'ar' 
                  ? 'نحن نقدم عروض أسعار مخصصة لكل وظيفة.'
                  : 'We provide custom quotations for every job.'
                }
              </p>
              <p>
                {language === 'ar'
                  ? 'تُعرَّف الصفحة الواحدة بـ 250 كلمة'
                  : 'One page is defined as 250 words'
                }
              </p>
              <p className="font-medium">
                {language === 'ar' ? 'يعتمد التسعير النهائي على:' : 'Final pricing depends on:'}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{language === 'ar' ? 'عدد الكلمات' : 'Word count'}</li>
                <li>{language === 'ar' ? 'تنسيق الملف (قابل للتحرير مقابل ممسوح ضوئياً أو وسائط)' : 'File format (editable vs. scanned or media)'}</li>
                <li>{language === 'ar' ? 'نوع الخدمة (مثل النسخ، الترجمة الفورية، حرق الترجمات)' : 'Type of service (e.g., transcription, subtitling, burning subtitles)'}</li>
              </ul>
              <p className="font-medium">
                {language === 'ar' 
                  ? 'يتم تقديم تفصيل كامل مع كل عرض سعر.'
                  : 'A full itemized breakdown is provided with every quote.'
                }
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Privacy */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <Shield className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-brand-black mb-3">
                  {language === 'ar' ? 'ملاحظة خصوصية البيانات' : 'Data Privacy Note'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === 'ar'
                    ? 'جميع الملفات والمراسلات سرية للغاية.'
                    : 'All files and communications are strictly confidential.'
                  }
                </p>
                <p className="text-gray-700">
                  {language === 'ar'
                    ? 'نحن لا نستخدم أدوات آلية أو ذكاء اصطناعي إلا عند الطلب. لا يتم مشاركة الوثائق أو تحميلها على منصات عامة أبداً.'
                    : 'We do not use automated or AI tools unless requested. Documents are never shared or uploaded to public platforms.'
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
