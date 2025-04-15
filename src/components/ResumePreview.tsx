
import React, { useRef } from 'react';
import { ResumeData } from '@/types/resume';
import { useZoom } from './resume-preview/useZoom';
import { useResumeDownload } from './resume-preview/useResumeDownload';
import PreviewHeader from './resume-preview/PreviewHeader';
import ResumeTemplateRenderer from './resume-preview/ResumeTemplateRenderer';

interface ResumePreviewProps {
  data: ResumeData;
  templateId: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, templateId }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { scale, handleZoomIn, handleZoomOut, handleResetZoom } = useZoom();
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
      
      <div className="flex-1 overflow-auto bg-gray-200 p-4 flex justify-center">
        <div 
          className={`transition-all duration-300 ease-out flex items-start justify-center pt-4`}
          style={{ transform: `scale(${scale})` }}
        >
          <div 
            ref={resumeRef}
            className="w-full bg-white shadow-lg mx-auto print:shadow-none"
            style={{ 
              maxWidth: '800px',
              aspectRatio: '210/297', // A4 aspect ratio
              transformOrigin: 'top center',
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            <ResumeTemplateRenderer data={data} templateId={templateId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
