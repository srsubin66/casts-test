import { 
  Gavel, 
  Landmark, 
  GraduationCap, 
  Briefcase, 
  Video, 
  ChartLine, 
  User 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation, type Language } from "@/lib/i18n";

interface IndustriesProps {
  language: Language;
}

export default function Industries({ language }: IndustriesProps) {
  const { t } = useTranslation(language);

  const industries = [
    {
      icon: Gavel,
      title: language === 'ar' ? 'قانوني' : 'Legal',
      description: language === 'ar' ? 'عقود، وثائق محكمة، وثائق معتمدة' : 'Contracts, court docs, certified documents',
      details: language === 'ar' 
        ? 'نقدم خدمات ترجمة متخصصة للوثائق القانونية بما في ذلك العقود والمرافعات ووثائق المحكمة والشهادات المعتمدة.'
        : 'We provide specialized translation services for legal documents including contracts, pleadings, court documents, and certified certificates.',
    },
    {
      icon: Landmark,
      title: language === 'ar' ? 'حكومي وقطاع عام' : 'Government & Public Sector',
      description: language === 'ar' ? 'وثائق رسمية ومراسلات' : 'Official documents and communications',
      details: language === 'ar'
        ? 'ترجمة الوثائق الحكومية والمراسلات الرسمية والتقارير والسياسات للجهات الحكومية ومؤسسات القطاع العام.'
        : 'Translation of government documents, official correspondence, reports, and policies for government agencies and public sector institutions.',
    },
    {
      icon: GraduationCap,
      title: language === 'ar' ? 'تعليم وأكاديمي' : 'Education & Academia',
      description: language === 'ar' ? 'أوراق بحثية، مواد دراسية، شهادات' : 'Research papers, course materials, certificates',
      details: language === 'ar'
        ? 'ترجمة الأوراق البحثية والأطروحات والمواد التعليمية والشهادات الأكاديمية لمؤسسات التعليم العالي ومنصات التعلم الإلكتروني.'
        : 'Translation of research papers, theses, educational materials, and academic certificates for higher education institutions and e-learning platforms.',
    },
    {
      icon: Briefcase,
      title: language === 'ar' ? 'أعمال وشركات' : 'Business & Corporate',
      description: language === 'ar' ? 'تقارير، دليل الموارد البشرية، عروض تقديمية' : 'Reports, HR manuals, presentations',
      details: language === 'ar'
        ? 'ترجمة التقارير السنوية وأدلة الموظفين والعروض التقديمية والعقود التجارية لمختلف الشركات والمؤسسات التجارية.'
        : 'Translation of annual reports, employee handbooks, presentations, and business contracts for various companies and commercial institutions.',
    },
    {
      icon: Video,
      title: language === 'ar' ? 'إعلام وتسويق' : 'Media & Marketing',
      description: language === 'ar' ? 'سكريبتات، ترجمات فورية، محتوى وسائل التواصل' : 'Scripts, subtitles, social media content',
      details: language === 'ar'
        ? 'ترجمة وترجمة فورية للمحتوى الإعلامي والتسويقي بما في ذلك الأفلام والإعلانات ومحتوى وسائل التواصل الاجتماعي.'
        : 'Translation and subtitling of media and marketing content including films, advertisements, and social media content.',
    },
    {
      icon: ChartLine,
      title: language === 'ar' ? 'مالية واستشارات' : 'Finance & Consultancies',
      description: language === 'ar' ? 'مراجعات، بيانات، تقارير' : 'Audits, statements, reports',
      details: language === 'ar'
        ? 'ترجمة التقارير المالية وتقارير المراجعة والبيانات المالية لشركات المحاسبة الكبرى والمؤسسات الاستشارية.'
        : 'Translation of financial reports, audit reports, and financial statements for Big Four accounting firms and consultancy institutions.',
    },
    {
      icon: User,
      title: language === 'ar' ? 'الجمهور العام' : 'General Public',
      description: language === 'ar' ? 'تأشيرات، وثائق هوية، وثائق شخصية' : 'Visas, ID docs, personal documents',
      details: language === 'ar'
        ? 'ترجمة معتمدة للوثائق الشخصية بما في ذلك جوازات السفر والشهادات ووثائق الزواج وطلبات التأشيرة.'
        : 'Certified translation of personal documents including passports, certificates, marriage documents, and visa applications.',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            {t("industries.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("industries.subtitle")}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <industry.icon className="text-brand-red" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-3 text-center">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {industry.description}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {industry.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-brand-red to-red-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === 'ar' ? 'عملاؤنا المتنوعون' : 'Our Diverse Clientele'}
              </h2>
              <p className="text-red-100 text-lg max-w-3xl mx-auto">
                {language === 'ar'
                  ? 'نفخر بخدمة عملاء متنوعين عبر جميع القطاعات، من الجهات الحكومية إلى شركات الاستشارات الأربع الكبرى، ومن المؤسسات التعليمية إلى وكالات الإعلام والتسويق، بالإضافة إلى الشركات الخاصة والجمهور العام.'
                  : 'We are proud to serve diverse clients across all sectors, from government entities to Big Four consultancies, from educational institutions to media and marketing agencies, as well as private businesses and the general public.'
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
