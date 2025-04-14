
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ResumeData } from '@/types/resume';
import { AtSign, Phone, MapPin, Briefcase, User, Linkedin } from 'lucide-react';

interface PersonalInfoFormProps {
  data: ResumeData;
  updateData: (data: Partial<ResumeData>) => void;
}

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
          <Label htmlFor="fullName" className="flex items-center gap-2">
            <User className="h-4 w-4 text-resume-purple" />
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={personalInfo.fullName || ''}
            onChange={handleChange}
            placeholder="e.g., John Smith"
            className="placeholder:text-blue-300 border-gray-300 focus:border-resume-purple"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-resume-purple" />
            Professional Title <span className="text-red-500">*</span>
          </Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            value={personalInfo.jobTitle || ''}
            onChange={handleChange}
            placeholder="e.g., Senior Web Developer"
            className="placeholder:text-green-300 border-gray-300 focus:border-resume-purple"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <AtSign className="h-4 w-4 text-resume-purple" />
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={personalInfo.email || ''}
            onChange={handleChange}
            placeholder="e.g., john.smith@example.com"
            className="placeholder:text-purple-300 border-gray-300 focus:border-resume-purple"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-resume-purple" />
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            value={personalInfo.phone || ''}
            onChange={handleChange}
            placeholder="e.g., (123) 456-7890"
            className="placeholder:text-yellow-300 border-gray-300 focus:border-resume-purple"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-resume-purple" />
            Location <span className="text-red-500">*</span>
          </Label>
          <Input
            id="location"
            name="location"
            value={personalInfo.location || ''}
            onChange={handleChange}
            placeholder="e.g., New York, NY"
            className="placeholder:text-pink-300 border-gray-300 focus:border-resume-purple"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin" className="flex items-center gap-2">
            <Linkedin className="h-4 w-4 text-resume-purple" />
            LinkedIn Profile
          </Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={personalInfo.linkedin || ''}
            onChange={handleChange}
            placeholder="e.g., linkedin.com/in/johnsmith"
            className="placeholder:text-orange-300 border-gray-300 focus:border-resume-purple"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary" className="flex items-center gap-2">
          Professional Summary <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="summary"
          name="summary"
          value={personalInfo.summary || ''}
          onChange={handleChange}
          placeholder="Write a short, compelling description of your professional background and skills. A good summary helps you stand out to recruiters and hiring managers."
          rows={5}
          className="placeholder:text-blue-300 border-gray-300 focus:border-resume-purple"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Aim for 3-5 sentences that highlight your career achievements, skills, and value proposition to potential employers.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
