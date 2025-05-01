
import React from 'react';
import { Lightbulb, X } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface TipBoxProps {
  tips: string[];
  title?: string;
  onClose?: () => void;
}

const TipBox: React.FC<TipBoxProps> = ({ 
  tips, 
  title = "Resume Tips", 
  onClose 
}) => {
  return (
    <Card className="border-resume-purple shadow-md animate-fade-in mb-6">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500 animate-pulse" />
          <h3 className="text-base font-medium text-resume-purple">{title}</h3>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close tips"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </CardHeader>
      <CardContent className="pt-2">
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-resume-purple font-semibold text-sm leading-6">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TipBox;
