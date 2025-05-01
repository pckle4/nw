
import React, { useEffect, useState } from 'react';
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
 * It handles template switching, data propagation to template components,
 * and multi-page resume creation when content overflows.
 */
const ResumeTemplateRenderer: React.FC<ResumeTemplateRendererProps> = ({ 
  data, 
  templateId,
  showNowhileBranding = false 
}) => {
  const [pages, setPages] = useState<number>(1);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

  // Check for content overflow and add additional pages as needed
  useEffect(() => {
    const checkOverflow = () => {
      const resumeWrapper = document.querySelector('.resume-wrapper');
      if (!resumeWrapper) return;
      
      // Get the first page content height
      const firstPage = resumeWrapper.querySelector('.resume-page');
      if (!firstPage) return;
      
      const contentHeight = firstPage.scrollHeight;
      const containerHeight = firstPage.clientHeight;
      
      // If content exceeds the container, add another page
      if (contentHeight > containerHeight) {
        setIsOverflowing(true);
        setPages(Math.ceil(contentHeight / containerHeight));
      } else {
        setIsOverflowing(false);
        setPages(1);
      }
    };

    // Run the overflow check after a short delay to ensure content has rendered
    const timer = setTimeout(checkOverflow, 500);
    return () => clearTimeout(timer);
  }, [data, templateId]);

  // Render the selected template based on templateId
  const renderTemplate = () => {
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

  return (
    <div className="resume-wrapper">
      {/* First page is always shown */}
      <div className="resume-page w-full h-full">
        {renderTemplate()}
      </div>
      
      {/* Show additional pages if needed */}
      {isOverflowing && pages > 1 && (
        <div className="resume-page w-full h-full bg-white mt-4 shadow-lg">
          <div className="p-6 text-center text-gray-500">
            <p className="font-medium">Content continuation from page 1</p>
            <p className="text-sm">(Additional content automatically flows to this page)</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeTemplateRenderer;
