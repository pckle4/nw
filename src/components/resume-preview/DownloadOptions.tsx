
import React from 'react';
import { File, FileImage, FileText, Image, Loader2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download } from 'lucide-react';

interface DownloadOptionsProps {
  isDownloading: boolean;
  onDownloadPDF: () => void;
  onDownloadPNG: () => void;
  onDownloadJPG: () => void;
  onDownloadDOCX: () => void;
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
  isDownloading,
  onDownloadPDF,
  onDownloadPNG,
  onDownloadJPG,
  onDownloadDOCX
}) => {
  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button 
                size="sm" 
                className="bg-resume-purple hover:bg-resume-dark-purple transition-all"
                disabled={isDownloading}
                data-preview-download
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download your professional resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={onDownloadPDF} className="cursor-pointer flex items-center" disabled={isDownloading}>
          <File className="mr-2 h-4 w-4" />
          <div>
            <span>PDF Document (.pdf)</span>
            <p className="text-xs text-gray-500">Best for job applications</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDownloadPNG} className="cursor-pointer flex items-center" disabled={isDownloading}>
          <Image className="mr-2 h-4 w-4" />
          <div>
            <span>PNG Image (.png)</span>
            <p className="text-xs text-gray-500">High-quality transparent image</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDownloadJPG} className="cursor-pointer flex items-center" disabled={isDownloading}>
          <FileImage className="mr-2 h-4 w-4" />
          <div>
            <span>JPG Image (.jpg)</span>
            <p className="text-xs text-gray-500">Smaller file size</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDownloadDOCX} className="cursor-pointer flex items-center" disabled={isDownloading}>
          <FileText className="mr-2 h-4 w-4" />
          <div>
            <span>Word Document (.docx)</span>
            <p className="text-xs text-gray-500">Coming soon</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadOptions;
