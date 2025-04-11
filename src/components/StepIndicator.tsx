
import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  steps: { id: number; label: string }[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full py-4 px-2 mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div 
                className={`step-indicator ${
                  currentStep === step.id 
                    ? 'active' 
                    : currentStep > step.id 
                    ? 'completed' 
                    : ''
                }`}
              >
                {currentStep > step.id ? (
                  <Check className="h-4 w-4" />
                ) : (
                  step.id
                )}
              </div>
              <div className="text-xs mt-2 text-center">{step.label}</div>
            </div>
            
            {/* Connecting line between steps */}
            {index < steps.length - 1 && (
              <div 
                className={`h-0.5 w-full max-w-24 ${
                  currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
