
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

interface ResumeFormProps {
  initialData: ResumeData;
  onUpdateData: (data: ResumeData) => void;
  onComplete: () => void;
  onBack: () => void;
}

const steps = [
  { id: 1, label: 'Personal' },
  { id: 2, label: 'Experience' },
  { id: 3, label: 'Education' },
  { id: 4, label: 'Skills' },
  { id: 5, label: 'Projects' },
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
      <StepIndicator currentStep={currentStep} steps={steps} />
      
      <Card className="form-section">
        {renderStepContent()}
      </Card>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={handlePrevStep}
        >
          {currentStep === 1 ? 'Back to Templates' : 'Previous'}
        </Button>
        
        <Button 
          onClick={handleNextStep}
        >
          {currentStep === steps.length ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default ResumeForm;
