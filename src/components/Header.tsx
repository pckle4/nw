
import React from 'react';
import { FileText, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <FileText className="h-6 w-6 text-resume-purple" />
            <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1" />
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-purple-gradient">
            ColorBurst Resume Builder
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
