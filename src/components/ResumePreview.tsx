
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ResumeData } from '@/types/resume';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import ColorfulTemplate from './templates/ColorfulTemplate';
import { Download, Eye, FileText, Settings, File, Image, FileImage } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from '@/hooks/use-mobile';

interface ResumePreviewProps {
  data: ResumeData;
  templateId: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, templateId }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isDownloading, setIsDownloading] = useState(false);
  const [scale, setScale] = useState(1);

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

  const captureCanvas = async () => {
    if (!resumeRef.current) return null;
    
    try {
      // Higher quality settings for better output
      const canvas = await html2canvas(resumeRef.current, {
        scale: 4, // Increased from 2 to 4 for higher quality
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        imageTimeout: 0,
      });
      
      return canvas;
    } catch (error) {
      console.error('Error capturing canvas:', error);
      return null;
    }
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    toast({
      title: "Preparing your PDF...",
      description: "This might take a few seconds.",
    });

    try {
      const canvas = await captureCanvas();
      if (!canvas) throw new Error("Failed to capture resume");
      
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
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadPNG = async () => {
    setIsDownloading(true);
    toast({
      title: "Preparing your PNG image...",
      description: "This might take a few seconds.",
    });

    try {
      const canvas = await captureCanvas();
      if (!canvas) throw new Error("Failed to capture resume");
      
      const imageURL = canvas.toDataURL('image/png', 1.0);
      
      const link = document.createElement('a');
      link.download = data.personalInfo.fullName 
        ? `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.png`
        : 'Resume.png';
      link.href = imageURL;
      link.click();
      
      toast({
        title: "PNG image downloaded successfully!",
        description: `Saved as ${link.download}`,
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating PNG:', error);
      
      toast({
        title: "Oops! Something went wrong",
        description: "There was an error downloading your resume as PNG. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadJPG = async () => {
    setIsDownloading(true);
    toast({
      title: "Preparing your JPG image...",
      description: "This might take a few seconds.",
    });

    try {
      const canvas = await captureCanvas();
      if (!canvas) throw new Error("Failed to capture resume");
      
      const imageURL = canvas.toDataURL('image/jpeg', 0.95);
      
      const link = document.createElement('a');
      link.download = data.personalInfo.fullName 
        ? `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.jpg`
        : 'Resume.jpg';
      link.href = imageURL;
      link.click();
      
      toast({
        title: "JPG image downloaded successfully!",
        description: `Saved as ${link.download}`,
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating JPG:', error);
      
      toast({
        title: "Oops! Something went wrong",
        description: "There was an error downloading your resume as JPG. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadDOCX = async () => {
    toast({
      title: "DOCX format coming soon",
      description: "We're working on adding DOCX export functionality.",
      variant: "default",
    });
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-t-lg border-b">
        <h3 className="font-medium flex items-center gap-2">
          <Eye className="h-4 w-4" /> Resume Preview
        </h3>
        <div className="flex items-center gap-2">
          {!isMobile && (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" onClick={handleZoomOut}>-</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Zoom out</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" onClick={handleResetZoom}>{Math.round(scale * 100)}%</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Reset zoom</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" onClick={handleZoomIn}>+</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Zoom in</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          )}
          
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
          
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      size="sm" 
                      className="bg-resume-purple hover:bg-resume-dark-purple"
                      disabled={isDownloading}
                      data-preview-download
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {isDownloading ? "Processing..." : "Download"}
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download your resume</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={handleDownloadPDF} className="cursor-pointer flex items-center">
                <File className="mr-2 h-4 w-4" />
                <span>PDF Document (.pdf)</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDownloadPNG} className="cursor-pointer flex items-center">
                <Image className="mr-2 h-4 w-4" />
                <span>PNG Image (.png)</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDownloadJPG} className="cursor-pointer flex items-center">
                <FileImage className="mr-2 h-4 w-4" />
                <span>JPG Image (.jpg)</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDownloadDOCX} className="cursor-pointer flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                <span>Word Document (.docx)</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto bg-gray-200 p-4 flex justify-center">
        <div 
          className={`transition-all duration-300 ease-out flex items-start justify-center pt-4`}
          style={{ transform: `scale(${scale})` }}
        >
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
    </div>
  );
};

export default ResumePreview;
