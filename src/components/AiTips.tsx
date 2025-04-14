
import React, { useState, useEffect } from 'react';
import { Lightbulb, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResumeData } from '@/types/resume';

interface AiTipProps {
  data: ResumeData;
  templateId: string;
}

// Tips database
const tipsByCategory = {
  general: [
    "Keep your resume to one page unless you have 10+ years of experience.",
    "Use bullet points to make your resume more scannable and easier to read.",
    "Quantify your achievements with numbers when possible (e.g., 'Increased sales by 25%').",
    "Save your resume as a PDF to maintain formatting across different systems.",
    "Tailor your resume for each job application by matching keywords from the job description."
  ],
  personalInfo: [
    "Make sure your email address sounds professional.",
    "Include a LinkedIn profile that's up-to-date with your resume.",
    "Consider including a personal website or portfolio if relevant to your field.",
    "Only include your location (city, state) rather than full address for privacy.",
    "Make sure your name stands out as the most prominent element on your resume."
  ],
  experience: [
    "Focus on achievements rather than just listing job duties.",
    "Use action verbs at the beginning of bullet points to create impact.",
    "Include keywords relevant to your industry to pass Applicant Tracking Systems.",
    "List experience in reverse-chronological order (most recent first).",
    "For each role, include 3-5 bullet points highlighting your most impressive accomplishments."
  ],
  education: [
    "Only include GPA if it's above 3.5 and you're a recent graduate.",
    "List relevant coursework if it directly relates to the job you're applying for.",
    "Include honors, scholarships, and academic achievements that showcase your abilities.",
    "For experienced professionals, keep education brief to focus more on work experience.",
    "If you have multiple degrees, list the highest degree first."
  ],
  skills: [
    "Separate your skills into categories (e.g., technical skills, soft skills) for better organization.",
    "Only list skills you're comfortable discussing in an interview.",
    "Include both hard skills (technical abilities) and soft skills (interpersonal traits).",
    "Emphasize skills mentioned in the job description you're applying for.",
    "Consider using skill levels (e.g., proficient, intermediate) for technical skills."
  ],
  projects: [
    "Include projects that demonstrate skills relevant to the job you're applying for.",
    "Briefly explain what the project accomplished and your specific role.",
    "Include links to live projects or repositories if applicable.",
    "Highlight the technologies or methodologies you used.",
    "Quantify the impact or results of your projects whenever possible."
  ]
};

// Template-specific tips
const templateTips = {
  modern: "The Modern template works well for creative fields and startups. It has a clean, contemporary look that balances professionalism with personality.",
  minimal: "The Minimal template is excellent for traditional industries like finance, law, or healthcare. Its clean, straightforward design emphasizes content over style.",
  colorful: "The Colorful template helps you stand out in creative industries like design, marketing, or entertainment. The subtle color accents add personality while maintaining professionalism."
};

export const AiTips: React.FC<AiTipProps> = ({ data, templateId }) => {
  const [visible, setVisible] = useState(true);
  const [currentTip, setCurrentTip] = useState('');
  const [tipCategory, setTipCategory] = useState('');

  useEffect(() => {
    // Generate a relevant tip based on the resume data and template
    generateTip(data, templateId);
    
    // Rotate tips every 30 seconds
    const interval = setInterval(() => {
      generateTip(data, templateId);
    }, 30000);
    
    return () => clearInterval(interval);
  }, [data, templateId]);

  const generateTip = (data: ResumeData, templateId: string) => {
    // First determine which section might need improvement
    let categories = ['general'];
    
    // Check personal info
    if (!data.personalInfo.linkedin || !data.personalInfo.email) {
      categories.push('personalInfo');
    }
    
    // Check experience (if brief or missing)
    if (data.experience.length === 0 || 
        data.experience.some(exp => !exp.description || exp.description.length < 50)) {
      categories.push('experience');
    }
    
    // Check education
    if (data.education.length === 0) {
      categories.push('education');
    }
    
    // Check skills
    if (data.skills.length < 5) {
      categories.push('skills');
    }
    
    // Check projects
    if (data.projects.length === 0) {
      categories.push('projects');
    }
    
    // Randomly select a category to give a tip about
    let selectedCategory;
    if (Math.random() > 0.7) {
      // 30% chance to give a template-specific tip
      selectedCategory = 'template';
    } else {
      // 70% chance to give a section-specific tip
      selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    }
    
    // Get a tip from that category
    let newTip = '';
    if (selectedCategory === 'template') {
      newTip = templateTips[templateId as keyof typeof templateTips] || templateTips.modern;
      setTipCategory('Template Tip');
    } else {
      const tipsForCategory = tipsByCategory[selectedCategory as keyof typeof tipsByCategory];
      newTip = tipsForCategory[Math.floor(Math.random() * tipsForCategory.length)];
      setTipCategory(
        selectedCategory === 'general' ? 'General Tip' :
        selectedCategory === 'personalInfo' ? 'Personal Info Tip' :
        selectedCategory === 'experience' ? 'Experience Tip' :
        selectedCategory === 'education' ? 'Education Tip' :
        selectedCategory === 'skills' ? 'Skills Tip' :
        'Project Tip'
      );
    }
    
    setCurrentTip(newTip);
  };

  if (!visible) return null;

  return (
    <Card className="border-resume-purple shadow-md animate-fade-in mb-6">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          <CardTitle className="text-base font-medium">{tipCategory}</CardTitle>
        </div>
        <button 
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">{currentTip}</p>
      </CardContent>
    </Card>
  );
};

export default AiTips;
