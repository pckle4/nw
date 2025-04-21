import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ResumeData } from '@/types/resume';
import FieldAiTip from "./FieldAiTip";

interface PersonalInfoFormProps {
  data: ResumeData;
  updateData: (data: Partial<ResumeData>) => void;
}

const aiTips = {
  fullName: "Use your full legal name as it appears on government or professional records.",
  jobTitle: "Summarize your main expertise or target job in 2-5 words. E.g., 'Frontend Developer.'",
  email: "Use a professional email address, avoid nicknames or unprofessional domains.",
  phone: "Double-check your phone number for consistency and accessibility.",
  location: "Format as 'City, State' for privacy and clarity.",
  linkedin: "Link a complete, up-to-date profile to boost credibility.",
  summary: "Write 2-4 lines highlighting your top strengths, specialties, or career focus.",
};

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, updateData }) => {
  const { personalInfo } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateData({
      personalInfo: {
        ...personalInfo,
        [name]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Personal Information</h2>
        <p className="text-gray-600">Let employers know who you are and how to contact you.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name
            <FieldAiTip tip={aiTips.fullName} />
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={personalInfo.fullName || ""}
            onChange={handleChange}
            placeholder="e.g., John Smith"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobTitle">Professional Title
            <FieldAiTip tip={aiTips.jobTitle} />
          </Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            value={personalInfo.jobTitle || ""}
            onChange={handleChange}
            placeholder="e.g., Senior Web Developer"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email
            <FieldAiTip tip={aiTips.email} />
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={personalInfo.email || ""}
            onChange={handleChange}
            placeholder="e.g., john.smith@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone
            <FieldAiTip tip={aiTips.phone} />
          </Label>
          <Input
            id="phone"
            name="phone"
            value={personalInfo.phone || ""}
            onChange={handleChange}
            placeholder="e.g., (123) 456-7890"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location
            <FieldAiTip tip={aiTips.location} />
          </Label>
          <Input
            id="location"
            name="location"
            value={personalInfo.location || ""}
            onChange={handleChange}
            placeholder="e.g., New York, NY"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn (optional)
            <FieldAiTip tip={aiTips.linkedin} />
          </Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={personalInfo.linkedin || ""}
            onChange={handleChange}
            placeholder="e.g., linkedin.com/in/johnsmith"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary
          <FieldAiTip tip={aiTips.summary} />
        </Label>
        <Textarea
          id="summary"
          name="summary"
          value={personalInfo.summary || ""}
          onChange={handleChange}
          placeholder="Write a short, compelling description of your professional background and skills."
          rows={4}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
