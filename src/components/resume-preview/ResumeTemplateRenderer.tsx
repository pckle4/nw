
import React from 'react';
import { ResumeData } from '@/types/resume';
import ModernTemplate from '../templates/ModernTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import ColorfulTemplate from '../templates/ColorfulTemplate';
import { AlertTriangle } from 'lucide-react';

interface ResumeTemplateRendererProps {
  data: ResumeData;
  templateId: string;
}

const ResumeTemplateRenderer: React.FC<ResumeTemplateRendererProps> = ({ data, templateId }) => {
  // Check if data is valid before rendering
  if (!data || !data.personalInfo) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-red-50">
        <div className="text-center p-8">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-red-700">Resume Data Error</h3>
          <p className="text-sm text-gray-700 mt-2">
            There was a problem loading your resume data. Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  switch (templateId) {
    case 'modern':
      return <ModernTemplate data={data} />;
    case 'minimal':
      return <MinimalTemplate data={data} />;
    case 'colorful':
      return <ColorfulTemplate data={data} />;
    default:
      return <ModernTemplate data={data} />;
  }
};

export default ResumeTemplateRenderer;
