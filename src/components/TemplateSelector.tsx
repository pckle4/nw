
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, CheckCircle, Download } from 'lucide-react';
import { templates } from '@/data/templates';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (id: string) => void;
  onNext: () => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  selectedTemplate, 
  onSelectTemplate,
  onNext
}) => {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
            Build Your Dream Resume
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose a template, fill in your details, and download your professional resume in seconds
        </p>
        
        <div className="flex gap-2 items-center justify-center mt-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-resume-purple text-white">1</div>
          <ArrowRight className="h-5 w-5 text-gray-400" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500">2</div>
          <ArrowRight className="h-5 w-5 text-gray-400" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500">3</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {templates.map((template) => (
              <CarouselItem key={template.id} className="md:basis-1/2 lg:basis-1/3">
                <div 
                  className={`template-card relative ${selectedTemplate === template.id ? 'active scale-105 shadow-lg' : ''} transition-all duration-300`}
                  onClick={() => onSelectTemplate(template.id)}
                >
                  <div className="relative aspect-[210/297] w-full overflow-hidden">
                    <div className={`absolute inset-0 ${template.bgClass}`}></div>
                    <img 
                      src={template.thumbnail} 
                      alt={template.name} 
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                    {selectedTemplate === template.id && (
                      <div className="absolute top-2 right-2 z-20 bg-resume-purple rounded-full p-1">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-medium text-xl text-gray-900 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-resume-purple" />
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="ml-2 h-8 w-8" />
            <CarouselNext className="mr-2 h-8 w-8" />
          </div>
        </Carousel>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={onNext} 
          size="lg" 
          disabled={!selectedTemplate}
          className="px-8 py-6 text-lg flex items-center gap-2 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          Continue with {selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.name : ''}
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="bg-gray-50 py-10 mt-10 rounded-xl">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose ColorBurst Resume?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-resume-light-purple/50 flex items-center justify-center rounded-full mx-auto mb-4">
                <FileText className="h-6 w-6 text-resume-purple" />
              </div>
              <h3 className="font-bold text-xl mb-2">Professional Templates</h3>
              <p className="text-gray-600">Choose from our professionally designed templates that stand out from the crowd</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-resume-light-purple/50 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-resume-purple">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple step-by-step process to create your perfect resume in minutes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-resume-light-purple/50 flex items-center justify-center rounded-full mx-auto mb-4">
                <Download className="h-6 w-6 text-resume-purple" />
              </div>
              <h3 className="font-bold text-xl mb-2">Instant Download</h3>
              <p className="text-gray-600">Download your resume as a PDF immediately after completing your information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
