import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StepIndicator from './StepIndicator';
import FormProgressBar from './FormProgressBar';
import PersonalInfoForm from './forms/PersonalInfoForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import ResumeProgress from './ResumeProgress';
import { useToast } from '@/components/ui/use-toast';
import { ResumeData } from '@/types/resume';
import { Info, ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
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
  { 
    id: 1, 
    label: 'Personal', 
    description: 'Enter your personal and contact information', 
    requiredFields: ['fullName', 'email', 'jobTitle', 'phone', 'location', 'summary'] 
  },
  { 
    id: 2, 
    label: 'Experience', 
    description: 'Add your work experience details', 
    requiredFields: ['experience'] 
  },
  { 
    id: 3, 
    label: 'Education', 
    description: 'Include your educational background', 
    requiredFields: ['education'] 
  },
  { 
    id: 4, 
    label: 'Skills', 
    description: 'List your professional skills and competencies', 
    requiredFields: ['skills'] 
  },
  { 
    id: 5, 
    label: 'Projects', 
    description: 'Showcase your notable projects and achievements', 
    requiredFields: ['projects'] 
  },
];

const ResumeForm: React.FC<ResumeFormProps> = ({ 
  initialData, 
  onUpdateData, 
  onComplete,
  onBack
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ResumeData>(initialData);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const { toast } = useToast();

  const [animateOut, setAnimateOut] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);

  const validateCurrentStep = () => {
    const currentStepData = steps[currentStep - 1];
    const errors: string[] = [];
    
    if (currentStep === 1) {
      if (!formData.personalInfo.fullName.trim()) {
        errors.push('Full Name is required');
      }
      if (!formData.personalInfo.email.trim()) {
        errors.push('Email is required');
      } else if (!/^\S+@\S+\.\S+$/.test(formData.personalInfo.email)) {
        errors.push('Email format is invalid');
      }
      if (!formData.personalInfo.jobTitle.trim()) {
        errors.push('Professional Title is required');
      }
      if (!formData.personalInfo.phone.trim()) {
        errors.push('Phone Number is required');
      }
      if (!formData.personalInfo.location.trim()) {
        errors.push('Location is required');
      }
      if (!formData.personalInfo.summary.trim()) {
        errors.push('Professional Summary is required');
      }
    }
    
    if (currentStep === 2 && formData.experience.length === 0) {
      errors.push('Add at least one work experience');
    }
    
    if (currentStep === 3 && formData.education.length === 0) {
      errors.push('Add at least one education entry');
    }
    
    if (currentStep === 4 && formData.skills.length === 0) {
      errors.push('Add at least one skill');
    }
    
    if (currentStep === 5 && formData.projects.length === 0) {
      errors.push('Add at least one project');
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleNextStep = () => {
    if (!validateCurrentStep()) {
      toast({
        title: "Missing required information",
        description: "Please fill in all required fields to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep < steps.length) {
      setAnimateOut(true);
      
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setAnimateOut(false);
        setAnimateIn(true);
        window.scrollTo(0, 0);
      }, 300);
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
      setAnimateOut(true);
      
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setAnimateOut(false);
        setAnimateIn(true);
        window.scrollTo(0, 0);
      }, 300);
    } else {
      onBack();
    }
  };

  const updateFormData = (sectionData: Partial<ResumeData>) => {
    const newData = { ...formData, ...sectionData };
    setFormData(newData);
    onUpdateData(newData);
    
    setValidationErrors([]);
  };

  useEffect(() => {
    if (animateIn) {
      const timer = setTimeout(() => {
        setAnimateIn(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animateIn]);

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
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="mb-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">
            {steps[currentStep-1].label} Information
          </h2>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">{steps[currentStep-1].description}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Step {currentStep} of {steps.length}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {steps[currentStep-1].description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
        <div className="col-span-3">
          <FormProgressBar 
            currentStep={currentStep} 
            totalSteps={steps.length} 
            stepLabels={steps.map(step => step.label)}
          />
        </div>
        <div className="col-span-1">
          <ResumeProgress data={formData} />
        </div>
      </div>
      
      {validationErrors.length > 0 && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
          <div className="flex gap-2 items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-red-800 text-sm">Please fix the following issues:</h4>
              <ul className="mt-1 list-disc list-inside text-xs text-red-700">
                {validationErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      
      <Card className={`form-section mt-5 bg-white shadow-sm overflow-hidden transition-all duration-300 ${
        animateOut ? 'opacity-0 transform translate-y-10' : 
        animateIn ? 'animate-fade-in' : ''
      }`}>
        {renderStepContent()}
      </Card>
      
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={handlePrevStep}
          className="flex items-center gap-2 text-sm hover:border-resume-purple hover:text-resume-purple"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4" />
          {currentStep === 1 ? 'Back to Templates' : 'Previous'}
        </Button>
        
        <Button 
          onClick={handleNextStep}
          className="flex items-center gap-2 text-sm bg-resume-purple hover:bg-resume-dark-purple"
          size="sm"
        >
          {currentStep === steps.length ? 'Complete' : 'Next'}
          {currentStep !== steps.length && <ArrowRight className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default ResumeForm;
