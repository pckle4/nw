
export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
  website?: string;
  portfolio?: string;
  github?: string;
  twitter?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
  highlights?: string[];
  technologies?: string;
  achievements?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors?: string;
  courses?: string[];
  activities?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  level?: number; // 1-5 skill proficiency level
  years?: number; // Years of experience with this skill
  certification?: string; // Related certification
}

export interface SkillCategory {
  id: string;
  name: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
  date: string;
  teamSize?: number;
  role?: string;
  achievements?: string;
  images?: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  bgClass: string;
}
