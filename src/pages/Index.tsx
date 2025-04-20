import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TemplateSelector from '@/components/TemplateSelector';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import AboutSection from '@/components/AboutSection';
import FaqSection from '@/components/FaqSection';
import PreloadingScreen from '@/components/PreloadingScreen';
import AiTips from '@/components/AiTips';
import { initialResumeData } from '@/data/initialData';
import { ResumeData } from '@/types/resume';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Slider } from '@/components/ui/slider';
import { FileText, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const Index = () => {
  const [step, setStep] = useState<'templates' | 'form' | 'preview'>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleStartForm = () => {
    setStep('form');
    window.scrollTo(0, 0);
  };

  const handleBackToTemplates = () => {
    setStep('templates');
    window.scrollTo(0, 0);
  };

  const handleFormComplete = () => {
    setStep('preview');
    window.scrollTo(0, 0);
  };

  const updateResumeData = (data: ResumeData) => {
    setResumeData(data);
  };

  const features = [
    { 
      title: "Professional Templates", 
      description: "Choose from beautifully designed resume templates that stand out",
      icon: <FileText className="h-6 w-6 text-resume-purple" />
    },
    { 
      title: "Smart AI Tips", 
      description: "Get intelligent suggestions to improve your resume content",
      icon: <Sparkles className="h-6 w-6 text-resume-purple" />
    },
    { 
      title: "Easy to Customize", 
      description: "Simple editing tools to make your resume perfect",
      icon: <CheckCircle2 className="h-6 w-6 text-resume-purple" />
    }
  ];

  return (
    <TooltipProvider>
      {isLoading && <PreloadingScreen />}
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
        <Header />
        
        <main className="container mx-auto px-4 py-8 flex-grow">
          {step === 'templates' && (
            <>
              <div className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
                <div className="text-center space-y-6 animate-fade-in">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                      Elevate Your Career with Professional Resumes
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Create stunning, ATS-friendly resumes in minutes with our intuitive builder. Stand out from the competition and land your dream job.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <button 
                      onClick={() => window.scrollTo({top: document.getElementById('templates')?.offsetTop - 100, behavior: 'smooth'})}
                      className="px-8 py-3 rounded-xl bg-resume-purple text-white font-medium flex items-center gap-2 transform hover:scale-105 transition-all hover:shadow-lg group"
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button 
                      onClick={() => window.scrollTo({top: document.getElementById('about')?.offsetTop - 100, behavior: 'smooth'})}
                      className="px-8 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 font-medium transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                
                <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="h-12 w-12 bg-resume-light-purple/30 rounded-xl flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-20 relative py-8">
                  <div className="absolute inset-0 bg-resume-light-purple/20 rounded-3xl -rotate-1"></div>
                  <div className="absolute inset-0 bg-resume-soft-blue/30 rounded-3xl rotate-1"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-sm">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">How our users feel</h2>
                      <p className="text-gray-600">Drag the slider to explore feedback from professionals who've used our platform</p>
                    </div>
                    <div className="mb-6">
                      <Slider
                        defaultValue={[50]}
                        max={100}
                        step={1}
                        className="py-4"
                      />
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl italic text-gray-700 text-center">
                      "I landed three interviews within a week of using my new resume created with this tool. The templates are professional and the AI tips helped me highlight my achievements effectively."
                      <div className="mt-4 font-semibold text-resume-purple">— Sarah J., Marketing Manager</div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="templates" className="pt-10">
                <TemplateSelector
                  selectedTemplate={selectedTemplate}
                  onSelectTemplate={handleSelectTemplate}
                  onNext={handleStartForm}
                />
              </div>
              
              <AboutSection />
              <FaqSection />
            </>
          )}
          
          {step === 'form' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ResumeForm 
                initialData={resumeData}
                onUpdateData={updateResumeData}
                onComplete={handleFormComplete}
                onBack={handleBackToTemplates}
              />
              
              <div className="hidden lg:block sticky top-24 h-[calc(100vh-6rem)]">
                <ResumePreview 
                  data={resumeData} 
                  templateId={selectedTemplate} 
                />
              </div>
            </div>
          )}
          
          {step === 'preview' && (
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto mb-8 text-center space-y-4">
                <h1 className="text-4xl font-bold">Your Resume is Ready!</h1>
                <p className="text-lg text-gray-600">
                  Your professional resume has been created. Download it now or go back to make changes.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => setStep('form')}
                    className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Edit Resume
                  </button>
                  <button
                    onClick={() => {
                      const previewElem = document.querySelector('[data-preview-download]');
                      if (previewElem) {
                        (previewElem as HTMLElement).click();
                      }
                    }}
                    className="px-6 py-2 rounded-lg bg-resume-purple text-white hover:bg-resume-dark-purple transition-colors"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <AiTips data={resumeData} templateId={selectedTemplate} />
                
                <ResumePreview 
                  data={resumeData} 
                  templateId={selectedTemplate} 
                />
              </div>
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
