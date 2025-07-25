import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { type Language } from "@/lib/i18n";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import HowItWorks from "@/pages/HowItWorks";
import WhyHuman from "@/pages/WhyHuman";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router({ language }: { language: Language }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home language={language} />} />
      <Route path="/services" component={() => <Services language={language} />} />
      <Route path="/industries" component={() => <Industries language={language} />} />
      <Route path="/how-it-works" component={() => <HowItWorks language={language} />} />
      <Route path="/why-human-translation" component={() => <WhyHuman language={language} />} />
      <Route path="/contact" component={() => <Contact language={language} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>('en');

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout language={language} onLanguageChange={handleLanguageChange}>
          <Toaster />
          <Router language={language} />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
