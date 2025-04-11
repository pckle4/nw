
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, CheckCircle, Download, HelpCircle } from 'lucide-react';
import { templates } from '@/data/templates';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4 max-w-3xl mx-auto mt-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
            Create Your Professional Resume
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose a template, fill in your details, and download your resume in minutes
        </p>
        
        <div className="flex gap-2 items-center justify-center mt-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-resume-purple text-white animate-pulse">1</div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">2</div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">3</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Select Your Template</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {templates.map((template) => (
              <CarouselItem key={template.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div 
                        className={`template-card relative ${selectedTemplate === template.id ? 'active scale-105 shadow-lg' : ''} transition-all duration-300 h-full`}
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
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="p-3 bg-white">
                          <h3 className="font-medium text-base text-gray-900 flex items-center gap-1">
                            <FileText className="h-3 w-3 text-resume-purple" />
                            {template.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">{template.description}</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to select {template.name} template</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="ml-2 h-7 w-7" />
            <CarouselNext className="mr-2 h-7 w-7" />
          </div>
        </Carousel>
      </div>
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={onNext} 
          size="lg" 
          disabled={!selectedTemplate}
          className="px-6 py-5 text-base flex items-center gap-2 rounded-xl shadow-md hover:shadow-lg transition-all animate-pulse-gentle"
        >
          Continue with {selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.name : 'Selected Template'}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="bg-gray-50 py-8 mt-8 rounded-xl">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Nowhile?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 bg-resume-light-purple/50 flex items-center justify-center rounded-full mx-auto mb-3">
                <FileText className="h-5 w-5 text-resume-purple" />
              </div>
              <h3 className="font-bold text-lg mb-2">Professional Templates</h3>
              <p className="text-gray-600 text-sm">Choose from our professionally designed templates that stand out from the crowd</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 bg-resume-light-purple/50 flex items-center justify-center rounded-full mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-resume-purple">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Easy to Use</h3>
              <p className="text-gray-600 text-sm">Simple step-by-step process to create your perfect resume in minutes</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 bg-resume-light-purple/50 flex items-center justify-center rounded-full mx-auto mb-3">
                <Download className="h-5 w-5 text-resume-purple" />
              </div>
              <h3 className="font-bold text-lg mb-2">Multiple Formats</h3>
              <p className="text-gray-600 text-sm">Download your resume as PDF, PNG, JPG, or DOCX to use anywhere</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto mt-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-resume-light-purple/50 h-14 w-14 rounded-full flex items-center justify-center flex-shrink-0">
            <HelpCircle className="h-7 w-7 text-resume-purple" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Need Help Getting Started?</h3>
            <p className="text-gray-600 mb-4">
              Check out our guide on creating the perfect resume or contact our support team for assistance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                Resume Writing Guide
              </Button>
              <Button variant="secondary" size="sm">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
