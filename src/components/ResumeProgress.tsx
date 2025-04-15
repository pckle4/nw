
import React, { useMemo } from 'react';
import { Progress } from '@/components/ui/progress';
import { ResumeData } from '@/types/resume';
import { CheckCircle2, Circle, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ResumeProgressProps {
  data: ResumeData;
}

const ResumeProgress: React.FC<ResumeProgressProps> = ({ data }) => {
  const progressSections = useMemo(() => [
    {
      id: 'personal',
      label: 'Personal',
      isComplete: Boolean(
        data.personalInfo.fullName && 
        data.personalInfo.email && 
        data.personalInfo.jobTitle && 
        data.personalInfo.phone && 
        data.personalInfo.summary
      ),
    },
    {
      id: 'experience',
      label: 'Experience',
      isComplete: data.experience.length > 0,
    },
    {
      id: 'education',
      label: 'Education',
      isComplete: data.education.length > 0,
    },
    {
      id: 'skills',
      label: 'Skills',
      isComplete: data.skills.length > 0,
    },
    {
      id: 'projects',
      label: 'Projects',
      isComplete: data.projects.length > 0,
    }
  ], [data]);

  const completedSections = progressSections.filter(section => section.isComplete).length;
  const progressPercentage = (completedSections / progressSections.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-900 flex items-center">
          Resume Completion
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="ml-1.5 text-gray-400 hover:text-gray-500">
                <Info className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Complete all sections to create a comprehensive resume. Each section contributes equally to the overall completion.</p>
            </TooltipContent>
          </Tooltip>
        </h3>
        <span className="text-sm font-medium text-resume-purple">{Math.round(progressPercentage)}%</span>
      </div>
      
      <Progress value={progressPercentage} className="h-2 bg-gray-100" />
      
      <div className="mt-4 grid grid-cols-5 gap-1">
        {progressSections.map((section) => (
          <div key={section.id} className="flex flex-col items-center">
            <div className="mb-1">
              {section.isComplete ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5 text-gray-300" />
              )}
            </div>
            <span className="text-xs text-gray-600 text-center">{section.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeProgress;
