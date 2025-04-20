
import React from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { FileText, ArrowRight, Check, ChevronRight, HelpCircle, BookOpen, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Guide = () => {
  const { toast } = useToast();

  const resumeSections = [
    { title: "Contact Information", description: "Name, phone, email, location, and online profiles" },
    { title: "Professional Summary", description: "2-3 sentence overview of your background and strengths" },
    { title: "Work Experience", description: "Relevant jobs with measurable achievements" },
    { title: "Education", description: "Degrees, certifications, and relevant coursework" },
    { title: "Skills", description: "Technical, soft, and industry-specific abilities" },
    { title: "Projects", description: "Noteworthy accomplishments that showcase your abilities" }
  ];

  const resumeTips = [
    "Use action verbs to start bullet points (e.g., Led, Developed, Managed)",
    "Quantify achievements when possible (e.g., Increased sales by 25%)",
    "Tailor your resume for each job application to match keywords",
    "Keep formatting consistent throughout the document",
    "Limit your resume to 1-2 pages for most industries",
    "Have someone else proofread for typos and clarity"
  ];

  const showTip = (index: number) => {
    toast({
      title: "Resume Tip",
      description: resumeTips[index],
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
            Resume Guide
          </span>
        </h1>
        
        <div className="relative mb-12 p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-resume-soft-green to-resume-soft-blue rounded-xl blur-md opacity-70"></div>
          <div className="relative bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-resume-purple flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Getting Started
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Follow our step-by-step guide to create a professional resume that stands out from the competition and increases your chances of landing interviews.
            </p>
            
            <div className="space-y-4">
              {resumeSections.map((section, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                >
                  <div className="bg-resume-light-purple/30 h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-resume-purple font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{section.title}</h3>
                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-resume-purple flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Best Practices
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {resumeTips.map((tip, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                onClick={() => showTip(index)}
              >
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors text-sm">{tip}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold mb-4 text-gray-800">Resume Effectiveness Rating</h3>
            <p className="text-sm text-gray-600 mb-4">Drag the slider to see how different elements affect your resume's success:</p>
            <Slider
              defaultValue={[70]}
              max={100}
              step={1}
              className="py-6"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Basic</span>
              <span>Standard</span>
              <span>Professional</span>
              <span>Expert</span>
            </div>
            <p className="mt-6 text-sm bg-resume-light-purple/20 p-4 rounded-lg text-gray-700">
              <strong>Tip:</strong> A professionally designed resume with quantifiable achievements and tailored content can increase your interview chances by up to 65%.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-resume-soft-yellow transform rotate-45 translate-x-8 -translate-y-8 opacity-50"></div>
          
          <h2 className="text-2xl font-bold mb-4 text-resume-purple flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Need More Help?
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
            Our experts can provide personalized feedback on your resume. Schedule a 15-minute consultation with our career advisors.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="flex items-center gap-2 group"
              variant="outline"
            >
              View Sample Resumes
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              className="flex items-center gap-2 bg-resume-purple hover:bg-resume-dark-purple group"
            >
              Get Expert Feedback
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
