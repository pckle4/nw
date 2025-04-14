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
import AnimatedSection from '@/components/AnimatedSection';
import { initialResumeData } from '@/data/initialData';
import { ResumeData } from '@/types/resume';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import { Download, Edit, Check, ArrowLeft } from 'lucide-react';

const Index = () => {
  const [step, setStep] = useState<'templates' | 'form' | 'preview'>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

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
    if (!selectedTemplate) {
      toast({
        title: "Template selection required",
        description: "Please select a template to continue",
        variant: "destructive",
      });
      return;
    }
    
    setStep('form');
    window.scrollTo(0, 0);
    
    toast({
      title: "Template selected!",
      description: "Now fill in your resume details",
    });
  };

  const handleBackToTemplates = () => {
    setStep('templates');
    window.scrollTo(0, 0);
  };

  const handleFormComplete = () => {
    if (!resumeData.personalInfo.fullName || !resumeData.personalInfo.email) {
      toast({
        title: "Missing information",
        description: "Please provide at least your name and email before proceeding",
        variant: "destructive",
      });
      return;
    }
    
    setStep('preview');
    window.scrollTo(0, 0);
    
    toast({
      title: "Resume complete!",
      description: "Your professional resume is ready for download",
    });
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
              <AnimatedSection className="mt-4">
                <TemplateSelector
                  selectedTemplate={selectedTemplate}
                  onSelectTemplate={handleSelectTemplate}
                  onNext={handleStartForm}
                />
              </AnimatedSection>
              
              <AnimatedSection id="about">
                <AboutSection />
              </AnimatedSection>
              
              <AnimatedSection id="faq">
                <FaqSection />
              </AnimatedSection>
            </>
          )}
          
          {step === 'form' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedSection>
                <ResumeForm 
                  initialData={resumeData}
                  onUpdateData={updateResumeData}
                  onComplete={handleFormComplete}
                  onBack={handleBackToTemplates}
                />
              </AnimatedSection>
              
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
              <AnimatedSection className="max-w-4xl mx-auto mb-8">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-bold text-gray-900 font-typewriter">Your Resume is Ready!</h1>
                  <div className="w-24 h-1 bg-resume-purple mx-auto rounded-full"></div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto font-typewriter">
                    Your professional resume has been created. Download it now or go back to make changes.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <button 
                      onClick={() => setStep('form')}
                      className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2 font-typewriter"
                    >
                      <Edit className="h-4 w-4" />
                      <span>Edit Resume</span>
                    </button>
                    <button
                      onClick={() => {
                        const previewElem = document.querySelector('[data-preview-download]');
                        if (previewElem) {
                          (previewElem as HTMLElement).click();
                        }
                      }}
                      className="px-6 py-3 rounded-lg bg-resume-purple text-white hover:bg-resume-dark-purple transition-colors flex items-center gap-2 font-typewriter"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download PDF</span>
                    </button>
                    <button
                      onClick={() => {
                        handleBackToTemplates();
                      }}
                      className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2 font-typewriter"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Start Over</span>
                    </button>
                  </div>
                </div>
              </AnimatedSection>
              
              <div className="max-w-4xl mx-auto space-y-8">
                <AnimatedSection>
                  <div className="p-5 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-2 mt-1">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 font-typewriter">Resume Success Checklist</h3>
                        <ul className="mt-3 space-y-2 text-sm text-blue-800 font-typewriter">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Professional layout and design</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Clear contact information</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Optimized for ATS (Applicant Tracking Systems)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Skill levels clearly indicated</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection>
                  <AiTips data={resumeData} templateId={selectedTemplate} />
                </AnimatedSection>
                
                <AnimatedSection>
                  <ResumePreview 
                    data={resumeData} 
                    templateId={selectedTemplate} 
                  />
                </AnimatedSection>
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
