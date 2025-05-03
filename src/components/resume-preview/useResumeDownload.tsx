
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
      description: "This might take a few seconds.",
    });

    try {
      const canvas = await captureCanvas(resumeRef);
      if (!canvas) throw new Error("Failed to capture resume");
      
      // Use higher quality for better resolution
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
        hotfixes: ['px_scaling'], // Fix scaling issues
      });

      // A4 size: 210 x 297 mm
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add higher quality image with improved rendering
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      
      // Enhanced PDF properties for better output
      pdf.setProperties({
        title: `${data.personalInfo.fullName || 'Resume'} - Nowhile Resume`,
        subject: 'Professional Resume',
        creator: 'Nowhile Resume Builder',
        keywords: 'resume, cv, job application',
      });
      
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
      const canvas = await captureCanvas(resumeRef);
      if (!canvas) throw new Error("Failed to capture resume");
      
      // Higher quality PNG output
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
      const canvas = await captureCanvas(resumeRef);
      if (!canvas) throw new Error("Failed to capture resume");
      
      // Higher quality JPG (less compression)
      const imageURL = canvas.toDataURL('image/jpeg', 0.98);
      
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

  return {
    isDownloading,
    handleDownloadPDF,
    handleDownloadPNG,
    handleDownloadJPG,
    handleDownloadDOCX
  };
};
