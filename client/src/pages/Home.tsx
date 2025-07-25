import { 
  Medal, 
  Languages, 
  Clock, 
  Tag, 
  Video, 
  FileText, 
  UserCheck, 
  Building,
  Phone,
  Calendar,
  ArrowRight,
  Gavel,
  Landmark,
  GraduationCap,
  Briefcase,
  ChartLine,
  User,
  CheckCircle,
  Globe
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation, type Language } from "@/lib/i18n";

interface HomeProps {
  language: Language;
}

export default function Home({ language }: HomeProps) {
  const { t } = useTranslation(language);

  const features = [
    {
      icon: Medal,
      title: t("features.experience"),
      description: t("features.experienceDesc"),
    },
    {
      icon: Languages,
      title: t("features.specialization"),
      description: t("features.specializationDesc"),
    },
    {
      icon: Clock,
      title: t("features.turnaround"),
      description: t("features.turnaroundDesc"),
    },
    {
      icon: Tag,
      title: t("features.certified"),
      description: t("features.certifiedDesc"),
    },
    {
      icon: Video,
      title: t("features.workflow"),
      description: t("features.workflowDesc"),
    },
    {
      icon: FileText,
      title: t("features.fileTypes"),
      description: t("features.fileTypesDesc"),
    },
    {
      icon: UserCheck,
      title: t("features.human"),
      description: t("features.humanDesc"),
    },
    {
      icon: Building,
      title: t("features.clientele"),
      description: t("features.clienteleDesc"),
    },
  ];

  const services = [
    {
      icon: FileText,
      title: "Document Translation",
      description: "Professional translation of all document types with attention to detail and cultural nuances.",
    },
    {
      icon: Tag,
      title: "Certified Legal Translation",
      description: "Official certified translations for legal documents, contracts, and court proceedings.",
    },
    {
      icon: Video,
      title: "Subtitling & Transcription",
      description: "Professional subtitling and transcription services for video and audio content.",
    },
    {
      icon: CheckCircle,
      title: "Proofreading",
      description: "Thorough proofreading and editing to ensure accuracy and fluency in both languages.",
    },
    {
      icon: Globe,
      title: "Website Localization",
      description: "Complete website localization services ensuring cultural and linguistic adaptation.",
    },
    {
      icon: UserCheck,
      title: "Cultural Adaptation",
      description: "Ensuring your content resonates with the target culture and audience.",
    },
  ];

  const industries = [
    { icon: Gavel, title: "Legal", description: "Contracts, court docs, certified documents" },
    { icon: Landmark, title: "Government & Public Sector", description: "Official documents and communications" },
    { icon: GraduationCap, title: "Education & Academia", description: "Research papers, course materials, certificates" },
    { icon: Briefcase, title: "Business & Corporate", description: "Reports, HR manuals, presentations" },
    { icon: Video, title: "Media & Marketing", description: "Scripts, subtitles, social media content" },
    { icon: ChartLine, title: "Finance & Consultancies", description: "Audits, statements, reports" },
    { icon: User, title: "General Public", description: "Visas, ID docs, personal documents" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black mb-6 leading-tight">
              {t("hero.title")}<br />
              <span className="text-brand-red">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-brand-red text-white px-8 py-4 text-lg hover:bg-red-700">
                <FileText className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                {t("hero.cta1")}
              </Button>
              <Button variant="outline" className="border-2 border-brand-red text-brand-red px-8 py-4 text-lg hover:bg-brand-red hover:text-white">
                <Calendar className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                {t("hero.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black mb-4">
              {t("features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-gray-50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <button className="text-brand-red font-medium hover:text-red-700 flex items-center">
                    {t("services.learnMore")} 
                    <ArrowRight className={`ml-2 h-4 w-4 ${language === 'ar' ? 'rotate-180 mr-2 ml-0' : ''}`} />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black mb-4">
              {t("industries.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("industries.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 border hover:border-brand-red hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="text-brand-red" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-black mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-red-100 mb-8">
            {t("cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-white text-brand-red px-8 py-4 text-lg hover:bg-gray-100">
              <Phone className="mr-3 h-5 w-5 rtl:ml-3 rtl:mr-0" />
              {t("cta.call")}
            </Button>
            <Button className="bg-green-500 text-white px-8 py-4 text-lg hover:bg-green-600">
              <FaWhatsapp className="mr-3 h-5 w-5 rtl:ml-3 rtl:mr-0" />
              {t("cta.whatsapp")}
            </Button>
            <Button variant="outline" className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-brand-red">
              <Calendar className="mr-3 h-5 w-5 rtl:ml-3 rtl:mr-0" />
              {t("cta.schedule")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
