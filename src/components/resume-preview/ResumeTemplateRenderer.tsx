
import React from 'react';
import { ResumeData } from '@/types/resume';
import ModernTemplate from '../templates/ModernTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import ColorfulTemplate from '../templates/ColorfulTemplate';

interface ResumeTemplateRendererProps {
  data: ResumeData;
  templateId: string;
}

const ResumeTemplateRenderer: React.FC<ResumeTemplateRendererProps> = ({ data, templateId }) => {
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
