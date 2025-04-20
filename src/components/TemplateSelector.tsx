
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, CheckCircle, ArrowLeft, Sparkles } from 'lucide-react';
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
import { Slider } from "@/components/ui/slider";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handlePrevTemplate = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : templates.length - 1));
  };

  const handleNextTemplate = () => {
    setCurrentIndex(prev => (prev < templates.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-12 animate-fade-in" id="templates">
      <div className="text-center space-y-4 max-w-3xl mx-auto mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
            Select Your Perfect Template
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose a professionally designed template that matches your style and industry
        </p>
        
        <div className="flex gap-2 items-center justify-center mt-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-resume-purple text-white shadow-md animate-pulse-gentle">
            <span className="text-sm font-medium">1</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
            <span className="text-sm">2</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
            <span className="text-sm">3</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col items-center mb-8">
            <div className="w-full max-w-xs mb-4">
              <Slider
                defaultValue={[currentIndex * (100 / (templates.length - 1))]}
                max={100}
                step={100 / (templates.length - 1)}
                onValueChange={(values) => {
                  const newIndex = Math.round(values[0] / (100 / (templates.length - 1)));
                  setCurrentIndex(newIndex);
                }}
                className="py-4"
              />
            </div>
            <div className="flex justify-between w-full max-w-xs text-xs text-gray-500">
              <span>Simple</span>
              <span>Modern</span>
              <span>Creative</span>
            </div>
          </div>
          
          <Carousel className="w-full">
            <div className="flex justify-center mb-4">
              <Button
                onClick={handlePrevTemplate}
                variant="outline"
                size="icon"
                className="mr-2 h-8 w-8 rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={handleNextTemplate}
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <CarouselContent>
              {templates.map((template, index) => (
                <CarouselItem key={template.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div 
                          className={`template-card relative cursor-pointer group overflow-hidden ${selectedTemplate === template.id ? 'ring-2 ring-resume-purple' : ''}`}
                          onClick={() => onSelectTemplate(template.id)}
                          onMouseEnter={() => setHoverIndex(index)}
                          onMouseLeave={() => setHoverIndex(null)}
                        >
                          <div className="relative aspect-[210/297] w-full overflow-hidden rounded-t-lg">
                            {/* Background gradient */}
                            <div className={`absolute inset-0 ${template.bgClass} transition-transform duration-500 ${hoverIndex === index ? 'scale-110' : ''}`}></div>
                            
                            {/* Template image */}
                            <img 
                              src={template.thumbnail} 
                              alt={template.name} 
                              className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                            />
                            
                            {/* Selection indicator */}
                            {selectedTemplate === template.id && (
                              <div className="absolute top-2 right-2 z-20 bg-resume-purple rounded-full p-1 animate-fade-in">
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                            )}
                            
                            {/* Hover overlay */}
                            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center z-20 transition-opacity duration-300 ${hoverIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-white border-white hover:bg-white hover:text-gray-800 transition-all"
                              >
                                Preview
                              </Button>
                            </div>
                          </div>
                          
                          {/* Template info */}
                          <div className="p-4 bg-white rounded-b-lg border-t border-gray-100">
                            <h3 className="font-medium text-base text-gray-900 flex items-center gap-2">
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
          </Carousel>
        </div>
      </div>
      
      <div className="flex justify-center mt-10">
        <Button 
          onClick={onNext} 
          size="lg" 
          disabled={!selectedTemplate}
          className="px-8 py-6 text-base flex items-center gap-3 rounded-xl shadow-lg hover:shadow-xl transition-all bg-resume-purple hover:bg-resume-dark-purple group"
        >
          <Sparkles className="h-5 w-5 text-yellow-200 animate-pulse-gentle" />
          Continue with {selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.name : 'Selected Template'}
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default TemplateSelector;
