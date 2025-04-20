
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StepIndicator from './StepIndicator';
import PersonalInfoForm from './forms/PersonalInfoForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import { useToast } from '@/components/ui/use-toast';
import { ResumeData } from '@/types/resume';
import { Info, ArrowLeft, ArrowRight, Sparkles, Check } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ResumeFormProps {
  initialData: ResumeData;
  onUpdateData: (data: ResumeData) => void;
  onComplete: () => void;
  onBack: () => void;
}

const steps = [
  { id: 1, label: 'Personal', description: 'Enter your personal and contact information' },
  { id: 2, label: 'Experience', description: 'Add your work experience details' },
  { id: 3, label: 'Education', description: 'Include your educational background' },
  { id: 4, label: 'Skills', description: 'List your professional skills and competencies' },
  { id: 5, label: 'Projects', description: 'Showcase your notable projects and achievements' },
];

const ResumeForm: React.FC<ResumeFormProps> = ({ 
  initialData, 
  onUpdateData, 
  onComplete,
  onBack
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ResumeData>(initialData);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const { toast } = useToast();

  const handleNextStep = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
      
      // Show encouraging toast when moving between steps
      toast({
        title: `Great progress!`,
        description: `Step ${currentStep} completed. ${steps.length - currentStep} steps remaining.`,
        icon: <Check className="h-4 w-4 text-green-500" />
      });
    } else {
      onUpdateData(formData);
      onComplete();
      toast({
        title: "Resume created!",
        description: "Your professional resume has been successfully generated.",
        icon: <Sparkles className="h-4 w-4 text-yellow-500" />
      });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    } else {
      onBack();
    }
  };

  const updateFormData = (sectionData: Partial<ResumeData>) => {
    const newData = { ...formData, ...sectionData };
    setFormData(newData);
    onUpdateData(newData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm data={formData} updateData={updateFormData} />;
      case 2:
        return <ExperienceForm data={formData} updateData={updateFormData} />;
      case 3:
        return <EducationForm data={formData} updateData={updateFormData} />;
      case 4:
        return <SkillsForm data={formData} updateData={updateFormData} />;
      case 5:
        return <ProjectsForm data={formData} updateData={updateFormData} />;
      default:
        return null;
    }
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
              {steps[currentStep-1].label} Information
            </span>
          </h2>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="hover:bg-resume-light-purple/20">
                <Info className="h-4 w-4 text-resume-purple" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-white border border-gray-200 shadow-lg p-4 rounded-xl">
              <p className="text-sm text-gray-700">{steps[currentStep-1].description}</p>
              <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-500">
                <span>Step {currentStep} of {steps.length}</span>
                <span>{Math.round(progressPercentage)}% complete</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-100 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-resume-purple to-blue-500 transition-all duration-300 ease-in-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <StepIndicator currentStep={currentStep} steps={steps} completedSteps={completedSteps} />
      
      <div className="relative mt-8">
        <div className="absolute inset-0 bg-resume-soft-gray rounded-xl transform rotate-1 opacity-70"></div>
        <Card className="form-section relative bg-white shadow-sm border-gray-200 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-resume-purple to-blue-500"></div>
          <div className="p-6">
            {renderStepContent()}
          </div>
        </Card>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={handlePrevStep}
          className="flex items-center gap-2 text-sm hover:bg-gray-50 transition-all border-gray-300 shadow-sm"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4" />
          {currentStep === 1 ? 'Back to Templates' : 'Previous'}
        </Button>
        
        <Button 
          onClick={handleNextStep}
          className="flex items-center gap-2 text-sm bg-resume-purple hover:bg-resume-dark-purple transition-all shadow-sm group"
          size="sm"
        >
          {currentStep === steps.length ? 'Complete' : 'Next'}
          {currentStep !== steps.length && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
        </Button>
      </div>

      {/* Resume building tips */}
      {currentStep < steps.length && (
        <div className="mt-8 p-4 bg-resume-soft-blue/30 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-resume-purple" />
            Pro Tip for {steps[currentStep-1].label}
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            {currentStep === 1 && "Use a professional email address and include your LinkedIn profile to increase credibility."}
            {currentStep === 2 && "Focus on achievements rather than duties. Use numbers to quantify your impact whenever possible."}
            {currentStep === 3 && "List relevant coursework or academic achievements that align with your target job."}
            {currentStep === 4 && "Organize skills by categories (technical, soft, languages) and highlight those mentioned in job descriptions."}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;
