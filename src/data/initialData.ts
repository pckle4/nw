
import { ResumeData } from '@/types/resume';

export const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    summary: ''
  },
  experience: [],
  education: [],
  skills: [],
  skillCategories: [],
  projects: []
};
