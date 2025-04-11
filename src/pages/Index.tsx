
import React, { useState } from 'react';
import Header from '@/components/Header';
import TemplateSelector from '@/components/TemplateSelector';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import { initialResumeData } from '@/data/initialData';
import { ResumeData } from '@/types/resume';

const Index = () => {
  const [step, setStep] = useState<'templates' | 'form' | 'preview'>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {step === 'templates' && (
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onSelectTemplate={handleSelectTemplate}
            onNext={handleStartForm}
          />
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
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => setStep('form')}
                  className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Edit Resume
                </button>
                <button
                  onClick={() => alert('Download functionality would be implemented here in a production app.')}
                  className="px-6 py-2 rounded-lg bg-resume-purple text-white hover:bg-resume-dark-purple transition-colors"
                >
                  Download PDF
                </button>
              </div>
            </div>
            
            <div className="h-[calc(100vh-16rem)] max-w-4xl mx-auto">
              <ResumePreview 
                data={resumeData} 
                templateId={selectedTemplate} 
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
