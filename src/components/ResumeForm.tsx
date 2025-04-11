
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
import { Info, ArrowLeft, ArrowRight } from 'lucide-react';
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
  const { toast } = useToast();

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      onUpdateData(formData);
      onComplete();
      toast({
        title: "Resume created!",
        description: "Your resume has been successfully created.",
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {steps[currentStep-1].label} Information
          </h2>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>{steps[currentStep-1].description}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Step {currentStep} of {steps.length}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-gray-600 mt-1">
          {steps[currentStep-1].description}
        </p>
      </div>

      <StepIndicator currentStep={currentStep} steps={steps} />
      
      <Card className="form-section mt-6">
        {renderStepContent()}
      </Card>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={handlePrevStep}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {currentStep === 1 ? 'Back to Templates' : 'Previous'}
        </Button>
        
        <Button 
          onClick={handleNextStep}
          className="flex items-center gap-2"
        >
          {currentStep === steps.length ? 'Complete' : 'Next'}
          {currentStep !== steps.length && <ArrowRight className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default ResumeForm;
