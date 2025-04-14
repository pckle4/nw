
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[];
}

const FormProgressBar: React.FC<FormProgressBarProps> = ({ 
  currentStep, 
  totalSteps,
  stepLabels = []
}) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  
  return (
    <div className="space-y-2 animate-fade-in">
      <Progress 
        value={progressPercentage} 
        className="h-2 bg-gray-100" 
      />
      
      <div className="flex justify-between mt-3">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div 
              key={index} 
              className={cn(
                "flex flex-col items-center transition-all duration-300",
                {
                  "text-gray-400": !isCompleted && !isCurrent,
                  "text-resume-purple font-medium": isCurrent,
                  "text-green-500": isCompleted
                }
              )}
            >
              {isCompleted ? (
                <CheckCircle2 className="h-5 w-5 mb-1 text-green-500 animate-scale-in" />
              ) : (
                <Circle 
                  className={cn(
                    "h-5 w-5 mb-1",
                    { "fill-resume-purple/20": isCurrent }
                  )} 
                />
              )}
              <span className="text-xs whitespace-nowrap">
                {stepLabels[index] || `Step ${stepNumber}`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormProgressBar;
