
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { templates } from '@/data/templates';

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
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">Choose Your Resume Template</h1>
        <p className="text-lg text-gray-600">
          Select a template that fits your personal style and career goals
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className={`template-card ${selectedTemplate === template.id ? 'active' : ''}`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <div className="relative aspect-[210/297] w-full overflow-hidden">
              <div className={`absolute inset-0 ${template.bgClass}`}></div>
              <img 
                src={template.thumbnail} 
                alt={template.name} 
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-500">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button 
          onClick={onNext} 
          size="lg" 
          disabled={!selectedTemplate}
          className="px-8"
        >
          Continue with {selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.name : ''}
        </Button>
      </div>
    </div>
  );
};

export default TemplateSelector;
