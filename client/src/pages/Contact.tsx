import { useState } from "react";
import { Phone, Mail, Calendar, Clock, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useTranslation, type Language } from "@/lib/i18n";
import { type InsertContactSubmission } from "@shared/schema";

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const { t } = useTranslation(language);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: language === 'ar' ? 'تم الإرسال بنجاح' : 'Message Sent Successfully',
        description: t("contact.success"),
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill in all fields',
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تواصل معنا اليوم للحصول على عرض سعر مجاني'
              : 'Get in touch today for a free quote'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-brand-black mb-6">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-red-700"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending
                    ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...')
                    : t("contact.send")
                  }
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact Options */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-brand-black mb-6">
                  {t("footer.contactInfo")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Mail className="w-6 h-6 text-brand-red" />
                    <div>
                      <p className="font-medium text-brand-black">
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </p>
                      <p className="text-gray-600">info@corestyle.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Phone className="w-6 h-6 text-brand-red" />
                    <div>
                      <p className="font-medium text-brand-black">
                        {language === 'ar' ? 'رقم المكتب' : 'Office Number'}
                      </p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <FaWhatsapp className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="font-medium text-brand-black">
                        {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                      </p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Availability */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <Clock className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-brand-black mb-2">
                      {language === 'ar' ? 'أوقات الخدمة' : 'Service Availability'}
                    </h3>
                    <p className="text-green-700 font-medium">
                      {t("footer.availability")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-brand-red text-white hover:bg-red-700">
                <Phone className="mr-3 h-5 w-5 rtl:ml-3 rtl:mr-0" />
                {t("cta.call")}
              </Button>
              <Button className="w-full bg-green-500 text-white hover:bg-green-600">
                <FaWhatsapp className="mr-3 h-5 w-5 rtl:ml-3 rtl:mr-0" />
                {t("cta.whatsapp")}
              </Button>
              <Button variant="outline" className="w-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                <Calendar className="mr-3 h-5 w-5 rtl:ml-3 rtl:mr-0" />
                {t("cta.schedule")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
