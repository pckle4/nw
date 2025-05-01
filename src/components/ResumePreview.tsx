
import React, { useRef, useState } from 'react';
import { ResumeData } from '@/types/resume';
import { useZoom } from './resume-preview/useZoom';
import { useResumeDownload } from './resume-preview/useResumeDownload';
import PreviewHeader from './resume-preview/PreviewHeader';
import ResumeTemplateRenderer from './resume-preview/ResumeTemplateRenderer';
import TipBox from './TipBox';

interface ResumePreviewProps {
  data: ResumeData;
  templateId: string;
}

const resumeTips = [
  "Keep your resume to 1 page for most positions (2 pages max for senior roles).",
  "Use bullet points to make information easily scannable for recruiters.",
  "Quantify your achievements with numbers when possible (e.g., 'Increased sales by 25%').",
  "Tailor your resume for each specific job application.",
  "Use ATS-friendly formatting to ensure your resume passes automated screening.",
  "Proofread your resume multiple times or ask someone else to review it.",
  "Focus on achievements rather than just listing job responsibilities.",
  "Use powerful action verbs to start bullet points (e.g., 'implemented', 'created', 'managed').",
  "Include keywords from the job description to pass ATS screening.",
  "Exclude references – simply state 'References available upon request'.",
  "Remove outdated skills or irrelevant experience.",
  "Include a LinkedIn profile that matches your resume information."
];

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, templateId }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { scale, handleZoomIn, handleZoomOut, handleResetZoom } = useZoom();
  const [showTips, setShowTips] = useState(true);
  const { 
    isDownloading, 
    handleDownloadPDF, 
    handleDownloadPNG, 
    handleDownloadJPG, 
    handleDownloadDOCX 
  } = useResumeDownload(resumeRef, data);

  return (
    <div className="flex flex-col h-full">
      <PreviewHeader 
        scale={scale}
        isDownloading={isDownloading}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        onDownloadPDF={handleDownloadPDF}
        onDownloadPNG={handleDownloadPNG}
        onDownloadJPG={handleDownloadJPG}
        onDownloadDOCX={handleDownloadDOCX}
      />
      
      {showTips && (
        <div className="px-4 pt-4">
          <TipBox 
            tips={resumeTips} 
            title="Resume Preview Tips"
            onClose={() => setShowTips(false)}
          />
        </div>
      )}
      
      <div className="flex-1 overflow-auto bg-gray-200 p-4">
        <div 
          className="flex flex-col items-center gap-8 transition-all duration-300 ease-out pt-4"
          style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
        >
          <div 
            ref={resumeRef}
            className="w-full bg-white shadow-lg mx-auto"
            style={{ 
              maxWidth: '800px',
              aspectRatio: '210/297', // A4 aspect ratio
            }}
          >
            <ResumeTemplateRenderer data={data} templateId={templateId} showNowhileBranding={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
