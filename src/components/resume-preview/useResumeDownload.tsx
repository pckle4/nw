
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import jsPDF from 'jspdf';
import { ResumeData } from '@/types/resume';
import { captureCanvas } from './CanvasCapture';

export const useResumeDownload = (resumeRef: React.RefObject<HTMLDivElement>, data: ResumeData) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    toast({
      title: "Preparing your PDF...",
      description: "This might take a few seconds for best quality.",
    });

    try {
      const canvas = await captureCanvas(resumeRef);
      if (!canvas) throw new Error("Failed to capture resume");
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Configure PDF with professional settings
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
        putOnlyUsedFonts: true,
        floatPrecision: 16,
      });

      // A4 size: 210 x 297 mm
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add image with high quality settings
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      
      // Use the person's name in the filename, or default to "resume"
      const filename = data.personalInfo.fullName 
        ? `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`
        : 'Professional_Resume.pdf';
        
      pdf.save(filename);
      
      toast({
        title: "Resume downloaded successfully!",
        description: `Your professional resume has been saved as ${filename}`,
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
      description: "Creating high-resolution image of your resume.",
    });

    try {
      const canvas = await captureCanvas(resumeRef);
      if (!canvas) throw new Error("Failed to capture resume");
      
      // Generate high-quality PNG
      const imageURL = canvas.toDataURL('image/png', 1.0);
      
      const link = document.createElement('a');
      link.download = data.personalInfo.fullName 
        ? `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.png`
        : 'Professional_Resume.png';
      link.href = imageURL;
      link.click();
      
      toast({
        title: "PNG image downloaded successfully!",
        description: `Your high-resolution resume has been saved as ${link.download}`,
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
      description: "Creating high-quality image of your resume.",
    });

    try {
      const canvas = await captureCanvas(resumeRef);
      if (!canvas) throw new Error("Failed to capture resume");
      
      // Generate high-quality JPG with minimal compression
      const imageURL = canvas.toDataURL('image/jpeg', 0.98);
      
      const link = document.createElement('a');
      link.download = data.personalInfo.fullName 
        ? `${data.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.jpg`
        : 'Professional_Resume.jpg';
      link.href = imageURL;
      link.click();
      
      toast({
        title: "JPG image downloaded successfully!",
        description: `Your high-resolution resume has been saved as ${link.download}`,
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
      description: "We're working on adding DOCX export functionality that preserves all styling and formatting.",
      variant: "default",
    });
  };

  return {
    isDownloading,
    handleDownloadPDF,
    handleDownloadPNG,
    handleDownloadJPG,
    handleDownloadDOCX
  };
};
