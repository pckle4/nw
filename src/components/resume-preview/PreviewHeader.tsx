
import React from 'react';
import { Settings, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ZoomControls from './ZoomControls';
import DownloadOptions from './DownloadOptions';
import { useIsMobile } from '@/hooks/use-mobile';

interface PreviewHeaderProps {
  scale: number;
  isDownloading: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  onDownloadPDF: () => void;
  onDownloadPNG: () => void;
  onDownloadJPG: () => void;
  onDownloadDOCX: () => void;
}

const PreviewHeader: React.FC<PreviewHeaderProps> = ({
  scale,
  isDownloading,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onDownloadPDF,
  onDownloadPNG,
  onDownloadJPG,
  onDownloadDOCX
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-t-lg border-b">
      <h3 className="font-medium flex items-center gap-2">
        <Eye className="h-4 w-4" /> Resume Preview
      </h3>
      <div className="flex items-center gap-2">
        {!isMobile && (
          <ZoomControls 
            scale={scale} 
            onZoomIn={onZoomIn} 
            onZoomOut={onZoomOut} 
            onResetZoom={onResetZoom} 
          />
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
        
        <DownloadOptions 
          isDownloading={isDownloading}
          onDownloadPDF={onDownloadPDF}
          onDownloadPNG={onDownloadPNG}
          onDownloadJPG={onDownloadJPG}
          onDownloadDOCX={onDownloadDOCX}
        />
      </div>
    </div>
  );
};

export default PreviewHeader;
