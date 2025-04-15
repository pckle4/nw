
import React, { useState } from 'react';
import { File, FileImage, FileText, Image } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
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
        <DropdownMenuItem onClick={onDownloadPDF} className="cursor-pointer flex items-center">
          <File className="mr-2 h-4 w-4" />
          <span>PDF Document (.pdf)</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDownloadPNG} className="cursor-pointer flex items-center">
          <Image className="mr-2 h-4 w-4" />
          <span>PNG Image (.png)</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDownloadJPG} className="cursor-pointer flex items-center">
          <FileImage className="mr-2 h-4 w-4" />
          <span>JPG Image (.jpg)</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDownloadDOCX} className="cursor-pointer flex items-center">
          <FileText className="mr-2 h-4 w-4" />
          <span>Word Document (.docx)</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadOptions;
