
import React, { useState } from 'react';
import { Lightbulb, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface TipBoxProps {
  tips: string[];
  title?: string;
  onClose?: () => void;
  collapsed?: boolean;
}

const TipBox: React.FC<TipBoxProps> = ({ 
  tips, 
  title = "Resume Tips", 
  onClose,
  collapsed = false
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const [activeTipIndex, setActiveTipIndex] = useState(0);

  // Rotate through tips every 8 seconds if not collapsed
  React.useEffect(() => {
    if (isCollapsed) return;
    
    const interval = setInterval(() => {
      setActiveTipIndex((prev) => (prev + 1) % tips.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [tips.length, isCollapsed]);

  return (
    <Card className="border-resume-purple shadow-md animate-fade-in mb-6 overflow-hidden">
      <CardHeader className="pb-2 flex flex-row items-center justify-between bg-gradient-to-r from-resume-purple/10 to-blue-500/10">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500 animate-pulse" />
          <h3 className="text-base font-medium text-resume-purple">{title}</h3>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setIsCollapsed(prev => !prev)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label={isCollapsed ? "Expand tips" : "Collapse tips"}
          >
            {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </button>
          {onClose && (
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label="Close tips"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </CardHeader>
      
      {!isCollapsed && (
        <CardContent className="pt-3 pb-3 px-4">
          <div className="relative min-h-[80px]">
            {tips.map((tip, index) => (
              <div 
                key={index} 
                className={`transition-all duration-500 absolute w-full ${
                  index === activeTipIndex 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-resume-purple font-semibold text-sm leading-6 mt-0.5">•</span>
                  <span>{tip}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 gap-1">
            {tips.map((_, index) => (
              <button 
                key={index} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === activeTipIndex ? 'bg-resume-purple' : 'bg-gray-300'
                }`}
                onClick={() => setActiveTipIndex(index)}
                aria-label={`View tip ${index + 1}`}
              />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default TipBox;
