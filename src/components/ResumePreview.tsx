
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ResumeData } from '@/types/resume';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import ColorfulTemplate from './templates/ColorfulTemplate';
import { Download, Eye, FileText, Settings } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ResumePreviewProps {
  data: ResumeData;
  templateId: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, templateId }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    
    toast({
      title: "Preparing your resume...",
      description: "This might take a few seconds.",
    });

    try {
      // Higher quality settings for better PDF output
      const canvas = await html2canvas(resumeRef.current, {
        scale: 4, // Increased from 2 to 4 for higher quality
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        imageTimeout: 0,
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      // A4 size: 210 x 297 mm
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      
      // Use the person's name in the filename, or default to "resume"
      const filename = data.personalInfo.fullName 
        ? `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`
        : 'Resume.pdf';
        
      pdf.save(filename);
      
      toast({
        title: "Resume downloaded successfully!",
        description: `Saved as ${filename}`,
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      toast({
        title: "Oops! Something went wrong",
        description: "There was an error downloading your resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-t-lg border-b">
        <h3 className="font-medium flex items-center gap-2">
          <Eye className="h-4 w-4" /> Resume Preview
        </h3>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Customize template settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" onClick={handleDownload} className="bg-resume-purple hover:bg-resume-dark-purple">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download your resume as high-quality PDF</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto bg-gray-200 p-4">
        <div 
          ref={resumeRef}
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
