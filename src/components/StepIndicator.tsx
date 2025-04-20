
import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  steps: Array<{ id: number; label: string; description: string }>;
  completedSteps?: number[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ 
  currentStep, 
  steps,
  completedSteps = []
}) => {
  return (
    <div className="flex justify-between items-center w-full py-2">
      {steps.map((step) => {
        const isActive = step.id === currentStep;
        const isCompleted = completedSteps.includes(step.id) || step.id < currentStep;
        
        return (
          <div key={step.id} className="flex flex-col items-center relative group">
            {/* Connector line */}
            {step.id < steps.length && (
              <div className="absolute top-4 w-full h-[2px] left-1/2 bg-gray-200 -z-10">
                <div 
                  className="h-full bg-resume-purple transition-all duration-500 ease-in-out"
                  style={{ width: isCompleted ? '100%' : '0%' }}
                ></div>
              </div>
            )}
            
            {/* Circle indicator */}
            <div
              className={`
                flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300
                ${isActive 
                  ? 'bg-resume-purple text-white border-resume-purple scale-110 shadow-md' 
                  : isCompleted 
                    ? 'bg-resume-purple text-white border-resume-purple'
                    : 'bg-white text-gray-400 border-gray-200'
                }
              `}
            >
              {isCompleted ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className="text-xs font-medium">{step.id}</span>
              )}
            </div>
            
            {/* Step label */}
            <span 
              className={`
                text-xs mt-2 font-medium transition-all duration-300
                ${isActive ? 'text-resume-purple' : isCompleted ? 'text-gray-800' : 'text-gray-400'}
              `}
            >
              {step.label}
            </span>
            
            {/* Tooltip on hover - only visible on larger screens */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 hidden group-hover:block pointer-events-none mb-1 z-10 transition-opacity duration-200 opacity-0 group-hover:opacity-100 w-32 md:w-40 lg:w-48">
              <div className="bg-white shadow-lg rounded-lg p-2 text-xs text-center">
                {step.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
