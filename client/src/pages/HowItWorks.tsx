import { 
  FileText, 
  Search, 
  Calculator, 
  CheckCircle, 
  Play, 
  FileCheck, 
  Eye, 
  Send, 
  Edit, 
  FileOutput, 
  CreditCard,
  ChevronDown
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation, type Language } from "@/lib/i18n";

interface HowItWorksProps {
  language: Language;
}

export default function HowItWorks({ language }: HowItWorksProps) {
  const { t } = useTranslation(language);

  const workflowSteps = [
    {
      icon: FileText,
      title: language === 'ar' ? 'العميل يقدم طلباً' : 'Client submits a request',
      description: language === 'ar' ? 'يرسل العميل الملفات والمتطلبات' : 'Client sends files and requirements',
    },
    {
      icon: Search,
      title: language === 'ar' ? 'مراجعة الملفات' : 'Files are reviewed',
      description: language === 'ar' ? 'نراجع المحتوى ونحدد المتطلبات' : 'We review content and determine requirements',
    },
    {
      icon: Calculator,
      title: language === 'ar' ? 'إعداد عرض السعر' : 'Quotation is prepared',
      description: language === 'ar' ? 'نحسب التكلفة ونرسل عرض السعر المفصل' : 'We calculate costs and send detailed quotation',
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'موافقة العميل' : 'Client approves',
      description: language === 'ar' ? 'العميل يوافق على عرض السعر والجدول الزمني' : 'Client approves quotation and timeline',
    },
    {
      icon: Play,
      title: language === 'ar' ? 'بداية العمل' : 'Translation/subtitling/transcription begins',
      description: language === 'ar' ? 'نبدأ عملية الترجمة/الترجمة الفورية/النسخ' : 'We start the translation/subtitling/transcription process',
    },
    {
      icon: FileCheck,
      title: language === 'ar' ? 'إكمال المسودة الأولى' : 'First draft is completed',
      description: language === 'ar' ? 'ننجز النسخة الأولى من العمل' : 'We complete the first version of the work',
    },
    {
      icon: Eye,
      title: language === 'ar' ? 'مراجعة داخلية للجودة' : 'Internal quality review',
      description: language === 'ar' ? 'نراجع العمل داخلياً للتأكد من الجودة' : 'We internally review work to ensure quality',
    },
    {
      icon: Send,
      title: language === 'ar' ? 'العميل يتلقى المسودة' : 'Client receives draft',
      description: language === 'ar' ? 'نرسل المسودة للعميل للمراجعة' : 'We send draft to client for review',
    },
    {
      icon: Edit,
      title: language === 'ar' ? 'طلب تعديلات (اختياري)' : 'Client may request revisions',
      description: language === 'ar' ? 'العميل قد يطلب تعديلات أو تحسينات' : 'Client may request changes or improvements',
    },
    {
      icon: FileOutput,
      title: language === 'ar' ? 'التسليم النهائي' : 'Final version delivered',
      description: language === 'ar' ? 'نسلم النسخة النهائية المعتمدة' : 'We deliver the final approved version',
    },
    {
      icon: CreditCard,
      title: language === 'ar' ? 'إصدار الفاتورة' : 'Invoice is issued at end of the month',
      description: language === 'ar' ? 'نرسل الفاتورة في نهاية الشهر' : 'We send invoice at month-end',
    },
  ];

  const faqs = [
    {
      question: language === 'ar' ? 'ما أنواع الملفات التي تقبلونها؟' : 'What file types do you accept?',
      answer: language === 'ar' 
        ? 'نقبل جميع أنواع الملفات بما في ذلك PDF، DOC، DOCX، الملفات الصوتية (MP3، WAV)، الملفات المرئية (MP4، AVI)، والصور الممسوحة ضوئياً.'
        : 'We accept all file types including PDF, DOC, DOCX, audio files (MP3, WAV), video files (MP4, AVI), and scanned images.',
    },
    {
      question: language === 'ar' ? 'ما تعريفكم لـ "الصفحة"؟' : 'What is your definition of a "page"?',
      answer: language === 'ar'
        ? 'نعرف الصفحة الواحدة بـ 250 كلمة. هذا هو المعيار الصناعي المستخدم في حساب أسعار الترجمة.'
        : 'We define one page as 250 words. This is the industry standard used for translation pricing calculations.',
    },
    {
      question: language === 'ar' ? 'كم من الوقت تستغرق الترجمة؟' : 'How long does a translation take?',
      answer: language === 'ar'
        ? 'نتعامل عادة مع 50-70 صفحة في اليوم، اعتماداً على تعقيد المحتوى وتنسيق الملف ونوع الخدمة المطلوبة.'
        : 'We typically handle 50-70 pages per day, depending on content complexity, file format, and type of service requested.',
    },
    {
      question: language === 'ar' ? 'هل تقدمون ترجمة قانونية معتمدة؟' : 'Do you provide certified legal translation?',
      answer: language === 'ar'
        ? 'نعم، نقدم خدمات ترجمة قانونية معتمدة للوثائق الرسمية والعقود ووثائق المحكمة.'
        : 'Yes, we provide certified legal translation services for official documents, contracts, and court documents.',
    },
    {
      question: language === 'ar' ? 'هل يمكنني إرسال ملفات فيديو/صوت؟' : 'Can I send you video/audio files?',
      answer: language === 'ar'
        ? 'نعم، نقبل الملفات الصوتية والمرئية ونقدم خدمات النسخ والترجمة الفورية لها.'
        : 'Yes, we accept audio and video files and provide transcription and subtitling services for them.',
    },
    {
      question: language === 'ar' ? 'هل تستخدمون الذكاء الاصطناعي لترجمة الوثائق؟' : 'Do you use AI to translate documents?',
      answer: language === 'ar'
        ? 'لا. نستخدم الذكاء الاصطناعي فقط إذا طلب العميل ذلك صراحة. نعتمد على المترجمين البشريين المحترفين لضمان الجودة.'
        : 'No. We only use AI if a client explicitly requests it. We rely on professional human translators to ensure quality.',
    },
    {
      question: language === 'ar' ? 'هل بياناتي محفوظة وخاصة؟' : 'Is my data kept private?',
      answer: language === 'ar'
        ? 'نعم. جميع المحتويات تُعامل بسرية تامة. لا نشارك الملفات أو نحملها على منصات عامة أبداً.'
        : 'Yes. All content is handled with strict confidentiality. We never share files or upload them to public platforms.',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            {t("nav.howItWorks")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'عملية واضحة ومنظمة لضمان أفضل النتائج'
              : 'A clear and organized process to ensure the best results'
            }
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">
            {language === 'ar' ? 'خطوات سير العمل' : 'Workflow Steps'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto w-6 h-6 bg-brand-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-brand-black mb-2 mt-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Turnaround Time Info */}
        <Card className="bg-blue-50 border-blue-200 mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              {language === 'ar' ? 'معلومات زمن التسليم' : 'Turnaround Time Info'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'ar'
                ? 'نتعامل عادة مع 50-70 صفحة في اليوم، اعتماداً على:'
                : 'We typically handle 50-70 pages per day, depending on:'
              }
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                {language === 'ar' 
                  ? 'تعقيد المحتوى (مثل قانوني مقابل عام)'
                  : 'Complexity of the content (e.g., legal vs. general)'
                }
              </li>
              <li>
                {language === 'ar'
                  ? 'تنسيق الملف (قابل للتحرير مقابل ممسوح ضوئياً/صورة/صوت)'
                  : 'File format (editable vs. scanned/image/audio)'
                }
              </li>
              <li>
                {language === 'ar'
                  ? 'الخدمات المطلوبة (ترجمة فقط مقابل نسخ + ترجمات فورية)'
                  : 'Requested services (translation only vs. transcription + subtitles)'
                }
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left rtl:text-right hover:no-underline">
                    <span className="font-medium text-brand-black">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
