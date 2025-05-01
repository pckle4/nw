
import React from 'react';
import { ResumeData } from '@/types/resume';
import ModernTemplate from '../templates/ModernTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import ColorfulTemplate from '../templates/ColorfulTemplate';

interface ResumeTemplateRendererProps {
  data: ResumeData;
  templateId: string;
  showNowhileBranding?: boolean;
}

/**
 * ResumeTemplateRenderer is responsible for rendering the appropriate resume template
 * based on the selected template ID and resume data.
 * It handles template switching and data propagation to template components.
 */
const ResumeTemplateRenderer: React.FC<ResumeTemplateRendererProps> = ({ 
  data, 
  templateId,
  showNowhileBranding = false 
}) => {
  switch (templateId) {
    case 'modern':
      return <ModernTemplate data={data} showNowhileBranding={showNowhileBranding} />;
    case 'minimal':
      return <MinimalTemplate data={data} showNowhileBranding={showNowhileBranding} />;
    case 'colorful':
      return <ColorfulTemplate data={data} showNowhileBranding={showNowhileBranding} />;
    default:
      return <ModernTemplate data={data} showNowhileBranding={showNowhileBranding} />;
  }
};

export default ResumeTemplateRenderer;
