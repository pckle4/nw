
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Guide = () => {
  const { toast } = useToast();

  const handleTemplateDownload = (template: string) => {
    toast({
      title: `${template} Template Downloaded!`,
      description: "Check out this template example.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">Resume Guide</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {['Modern', 'Minimal', 'Colorful'].map((template) => (
          <div key={template} 
               className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <h3 className="text-xl font-semibold mb-4 text-resume-purple group-hover:text-resume-dark-purple transition-colors">
              {template} Template
            </h3>
            <p className="text-gray-600 mb-6">
              Perfect for {template.toLowerCase()} and professional presentations.
            </p>
            <Button
              onClick={() => handleTemplateDownload(template)}
              className="w-full group-hover:bg-resume-dark-purple transition-colors flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Template
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-8 animate-fade-in">
        <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-resume-purple">Getting Started</h2>
          <p className="text-gray-600 leading-relaxed">
            Follow our step-by-step guide to create a professional resume that stands out.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-resume-purple">Tips & Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li className="hover:text-resume-purple transition-colors">Keep your resume concise and relevant</li>
            <li className="hover:text-resume-purple transition-colors">Use action verbs to describe your achievements</li>
            <li className="hover:text-resume-purple transition-colors">Customize your resume for each job application</li>
            <li className="hover:text-resume-purple transition-colors">Proofread carefully for errors</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Guide;
