
import React from 'react';
import { Button } from '@/components/ui/button';
import { ResumeData } from '@/types/resume';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import ColorfulTemplate from './templates/ColorfulTemplate';
import { Download, Eye } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  templateId: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, templateId }) => {
  const renderTemplate = () => {
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

  const handleDownload = () => {
    // In a real app, this would generate a PDF file
    console.log('Downloading resume...');
    // Mock download functionality for now
    alert('Download functionality would be implemented here in a production app.');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-t-lg border-b">
        <h3 className="font-medium flex items-center gap-2">
          <Eye className="h-4 w-4" /> Resume Preview
        </h3>
        <Button size="sm" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto bg-gray-200 p-4">
        <div 
          className="w-full bg-white shadow-lg mx-auto"
          style={{ 
            maxWidth: '800px',
            aspectRatio: '210/297', // A4 aspect ratio
            transformOrigin: 'top center'
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
