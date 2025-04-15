
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

const Index = () => {
  const [step, setStep] = useState<'templates' | 'form' | 'preview'>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
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

  return (
    <TooltipProvider>
      {isLoading && <PreloadingScreen />}
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
        <Header />
        
        <main className="container mx-auto px-4 py-8 flex-grow">
          {step === 'templates' && (
            <>
              <TemplateSelector
                selectedTemplate={selectedTemplate}
                onSelectTemplate={handleSelectTemplate}
                onNext={handleStartForm}
              />
              
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
