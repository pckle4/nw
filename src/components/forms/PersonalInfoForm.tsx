import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ResumeData } from '@/types/resume';
import FieldAiTip from "./FieldAiTip";
import { Mail, Phone, MapPin, Linkedin, Globe, Github, Twitter, User, Award, FileText } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

interface PersonalInfoFormProps {
  data: ResumeData;
  updateData: (data: Partial<ResumeData>) => void;
  onValidationComplete: (isValid: boolean) => void;
}

const aiTips = {
  fullName: "Use your full legal name as it appears on government or professional records.",
  jobTitle: "Summarize your main expertise or target job in 2-5 words. E.g., 'Frontend Developer.'",
  email: "Use a professional email address, avoid nicknames or unprofessional domains.",
  phone: "Double-check your phone number for consistency and accessibility.",
  location: "Format as 'City, State' for privacy and clarity.",
  linkedin: "Link a complete, up-to-date profile to boost credibility.",
  summary: "Write 2-4 lines highlighting your top strengths, specialties, or career focus.",
  portfolio: "Add your portfolio website to showcase your work.",
  github: "Include your GitHub profile to demonstrate your code contributions.",
  twitter: "Professional Twitter/X handle for networking (optional).",
  achievements: "List 2-3 key career achievements or certifications.",
  objective: "Write a focused career objective in 2-3 sentences."
};

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, updateData, onValidationComplete }) => {
  const { personalInfo } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newPersonalInfo = {
      ...personalInfo,
      [name]: value
    };
    
    updateData({
      personalInfo: newPersonalInfo
    });

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'location'];
    const isValid = requiredFields.every(field => newPersonalInfo[field]?.trim());
    onValidationComplete(isValid);

    if (!isValid) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
    }
  };

  const renderInput = (
    name: string,
    label: string,
    placeholder: string,
    Icon: React.ElementType,
    required: boolean = false,
    tip?: string
  ) => (
    <div className="space-y-2 group animate-fade-in">
      <Label htmlFor={name} className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-resume-purple group-hover:scale-110 transition-transform" />
        {label} {required && <span className="text-red-500">*</span>}
        {tip && <FieldAiTip tip={tip} />}
      </Label>
      <Input
        id={name}
        name={name}
        value={personalInfo[name] || ""}
        onChange={handleChange}
        placeholder={placeholder}
        className="border-gray-200 focus:border-resume-purple transition-colors"
        required={required}
      />
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Personal Information</h2>
        <p className="text-gray-600">Let employers know who you are and how to contact you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderInput('fullName', 'Full Name', 'e.g., John Smith', User, true, aiTips.fullName)}
        {renderInput('jobTitle', 'Professional Title', 'e.g., Senior Web Developer', Award, true, aiTips.jobTitle)}
        {renderInput('email', 'Email', 'e.g., john.smith@example.com', Mail, true, aiTips.email)}
        {renderInput('phone', 'Phone', 'e.g., (123) 456-7890', Phone, true, aiTips.phone)}
        {renderInput('location', 'Location', 'e.g., New York, NY', MapPin, true, aiTips.location)}
        {renderInput('linkedin', 'LinkedIn', 'e.g., linkedin.com/in/johnsmith', Linkedin, false, aiTips.linkedin)}
        {renderInput('portfolio', 'Portfolio Website', 'e.g., johnsmith.dev', Globe, false, aiTips.portfolio)}
        {renderInput('github', 'GitHub Profile', 'e.g., github.com/johnsmith', Github, false, aiTips.github)}
        {renderInput('twitter', 'Twitter/X Handle', 'e.g., @johnsmith', Twitter, false, aiTips.twitter)}
      </div>

      <div className="space-y-2">
        <Label htmlFor="achievements" className="flex items-center gap-2 group">
          <Award className="h-4 w-4 text-resume-purple group-hover:scale-110 transition-transform" />
          Key Achievements
          <FieldAiTip tip={aiTips.achievements} />
        </Label>
        <Textarea
          id="achievements"
          name="achievements"
          value={personalInfo.achievements || ""}
          onChange={handleChange}
          placeholder="List your notable achievements, certifications, or awards"
          className="min-h-[100px] border-gray-200 focus:border-resume-purple transition-colors"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="objective" className="flex items-center gap-2 group">
          <FileText className="h-4 w-4 text-resume-purple group-hover:scale-110 transition-transform" />
          Career Objective
          <FieldAiTip tip={aiTips.objective} />
        </Label>
        <Textarea
          id="objective"
          name="objective"
          value={personalInfo.objective || ""}
          onChange={handleChange}
          placeholder="Brief statement about your career goals and what you bring to the table"
          className="min-h-[100px] border-gray-200 focus:border-resume-purple transition-colors"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary" className="flex items-center gap-2 group">
          <FileText className="h-4 w-4 text-resume-purple group-hover:scale-110 transition-transform" />
          Professional Summary
          <FieldAiTip tip={aiTips.summary} />
        </Label>
        <Textarea
          id="summary"
          name="summary"
          value={personalInfo.summary || ""}
          onChange={handleChange}
          placeholder="Write a short, compelling description of your professional background and skills."
          className="min-h-[120px] border-gray-200 focus:border-resume-purple transition-colors"
          rows={4}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
