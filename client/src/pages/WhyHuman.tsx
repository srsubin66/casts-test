import { User, Bot, CheckCircle, XCircle, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation, type Language } from "@/lib/i18n";

interface WhyHumanProps {
  language: Language;
}

export default function WhyHuman({ language }: WhyHumanProps) {
  const { t } = useTranslation(language);

  const humanAdvantages = [
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'دقة عالية' : 'High Accuracy',
      description: language === 'ar' 
        ? 'المترجمون البشريون يفهمون السياق والمعنى الدقيق'
        : 'Human translators understand context and precise meaning',
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'الحساسية الثقافية' : 'Cultural Sensitivity',
      description: language === 'ar'
        ? 'فهم عميق للفروق الثقافية والتعبيرات المحلية'
        : 'Deep understanding of cultural nuances and local expressions',
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'المرونة في التعامل' : 'Flexibility',
      description: language === 'ar'
        ? 'قدرة على التكيف مع أساليب مختلفة ومتطلبات خاصة'
        : 'Ability to adapt to different styles and special requirements',
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'ضمان الجودة' : 'Quality Assurance',
      description: language === 'ar'
        ? 'مراجعة دقيقة وتدقيق متخصص للنصوص'
        : 'Careful review and specialized proofreading of texts',
    },
  ];

  const aiLimitations = [
    {
      icon: XCircle,
      title: language === 'ar' ? 'الوثائق القانونية' : 'Legal Documents',
      description: language === 'ar'
        ? 'مخاطر في الترجمة الخاطئة والمصطلحات الغامضة'
        : 'Risks with mistranslation and ambiguous terms',
    },
    {
      icon: XCircle,
      title: language === 'ar' ? 'المحتوى التسويقي والإعلامي' : 'Marketing & Media Content',
      description: language === 'ar'
        ? 'صعوبة في فهم النبرة والمراجع الثقافية'
        : 'Difficulty understanding tone and cultural references',
    },
    {
      icon: XCircle,
      title: language === 'ar' ? 'التركيب المعقد للجمل' : 'Complex Sentence Structure',
      description: language === 'ar'
        ? 'مشاكل في فهم التراكيب المعقدة والفروق الدقيقة'
        : 'Problems understanding complex structures and subtle nuances',
    },
    {
      icon: XCircle,
      title: language === 'ar' ? 'الاتساق في المصطلحات' : 'Terminology Consistency',
      description: language === 'ar'
        ? 'صعوبة في الحفاظ على الاتساق عبر النصوص الطويلة'
        : 'Difficulty maintaining consistency across longer texts',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            {t("nav.whyHuman")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'في عالم تصبح فيه أدوات الذكاء الاصطناعي هي القاعدة، نؤمن أن الترجمة البشرية لا تزال تقدم أعلى مستويات الدقة والفهم والاحترافية لأنواع كثيرة من المحتوى.'
              : 'In a world where AI tools are becoming the norm, we believe that human translation still delivers the highest level of accuracy, nuance, and professionalism for many types of content.'
            }
          </p>
        </div>

        {/* Our Policy */}
        <Card className="bg-gradient-to-r from-brand-red to-red-600 text-white mb-16">
          <CardContent className="p-8">
            <div className="text-center">
              <User className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                {language === 'ar' ? 'سياستنا' : 'Our Policy'}
              </h2>
              <p className="text-red-100 text-lg max-w-3xl mx-auto">
                {language === 'ar'
                  ? 'كور آند ستايل لا تستخدم أدوات الذكاء الاصطناعي للترجمة إلا إذا طلب العميل ذلك صراحة. نعتمد على اللغويين البشريين المحترفين لضمان الجودة.'
                  : 'Core & Style does not use AI tools for translation unless explicitly instructed by the client. We rely on professional human linguists to ensure quality.'
                }
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Human Translation Advantages */}
          <div>
            <div className="flex items-center mb-8">
              <User className="w-8 h-8 text-brand-red mr-3 rtl:ml-3 rtl:mr-0" />
              <h2 className="text-2xl font-bold text-brand-black">
                {language === 'ar' ? 'مزايا الترجمة البشرية' : 'Human Translation Advantages'}
              </h2>
            </div>
            <div className="space-y-6">
              {humanAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                  <advantage.icon className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-black mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Limitations */}
          <div>
            <div className="flex items-center mb-8">
              <Bot className="w-8 h-8 text-gray-500 mr-3 rtl:ml-3 rtl:mr-0" />
              <h2 className="text-2xl font-bold text-brand-black">
                {language === 'ar' ? 'حدود الذكاء الاصطناعي' : 'Where AI Falls Short'}
              </h2>
            </div>
            <div className="space-y-6">
              {aiLimitations.map((limitation, index) => (
                <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                  <limitation.icon className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-black mb-1">
                      {limitation.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {limitation.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Comparison Example */}
        <Card className="bg-gray-50 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-brand-black mb-6 text-center">
              {language === 'ar' ? 'مثال مقارنة الجودة' : 'Quality Comparison Example'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-green-600 mr-2 rtl:ml-2 rtl:mr-0" />
                  <h3 className="font-semibold text-green-800">
                    {language === 'ar' ? 'ترجمة بشرية' : 'Human Translation'}
                  </h3>
                </div>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {language === 'ar' ? 'نبرة مناسبة ثقافياً' : 'Culturally appropriate tone'}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {language === 'ar' ? 'دقة في المصطلحات المتخصصة' : 'Accurate specialized terminology'}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {language === 'ar' ? 'تدفق طبيعي للنص' : 'Natural text flow'}
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Bot className="w-6 h-6 text-red-600 mr-2 rtl:ml-2 rtl:mr-0" />
                  <h3 className="font-semibold text-red-800">
                    {language === 'ar' ? 'ترجمة آلية' : 'Machine Translation'}
                  </h3>
                </div>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-center">
                    <XCircle className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {language === 'ar' ? 'أخطاء في فهم السياق' : 'Context understanding errors'}
                  </li>
                  <li className="flex items-center">
                    <XCircle className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {language === 'ar' ? 'ترجمة حرفية غير مناسبة' : 'Inappropriate literal translation'}
                  </li>
                  <li className="flex items-center">
                    <XCircle className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                    {language === 'ar' ? 'عدم اتساق في الأسلوب' : 'Inconsistent style'}
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hybrid Option */}
        <Card className="bg-blue-50 border-blue-200 mb-8">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <Zap className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-brand-black mb-3">
                  {language === 'ar' ? 'ماذا لو كنت تريد ترجمة بالذكاء الاصطناعي؟' : 'What If You Want AI Translation?'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === 'ar'
                    ? 'يمكننا تقديم خيار مختلط إذا كانت السرعة هي أولويتك، ولكن سينعكس هذا على كل من وقت التسليم والتسعير.'
                    : 'We can provide a hybrid option if speed is your priority, but this will be reflected in both delivery time and pricing.'
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Privacy Reminder */}
        <Card className="bg-gray-800 text-white">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <Shield className="text-green-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'ar' ? 'تذكير بخصوصية البيانات' : 'Data Privacy Reminder'}
                </h3>
                <p className="text-gray-300">
                  {language === 'ar'
                    ? 'ملفاتك لا تُحمل أبداً على منصات عامة. كل شيء يبقى خاصاً وآمناً.'
                    : 'Your files are never uploaded to public platforms. Everything stays private and secure.'
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
