import React from 'react';
import { ResumeData } from '@/types/resume';
import { PhoneCall, Mail, MapPin, Linkedin } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
  showNowhileBranding?: boolean;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data, showNowhileBranding = true }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white">
      {/* Header */}
      <div className="bg-resume-purple text-white p-6">
        <h1 className="text-3xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
        <h2 className="text-lg mt-1 text-white/90">{personalInfo.jobTitle || "Professional Title"}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-white/90 text-sm">
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <PhoneCall className="h-3.5 w-3.5" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="h-3.5 w-3.5" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row p-6 gap-6">
        {/* Left Column */}
        <div className="w-full md:w-2/3 space-y-5">
          {personalInfo.summary && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Summary</h3>
              <p className="mt-2 text-sm leading-snug">{personalInfo.summary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Work Experience</h3>
              <div className="mt-2 space-y-3">
                {experience.map((job) => (
                  <div key={job.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm">{job.position}</h4>
                      <span className="text-xs text-gray-600">{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <h5 className="font-medium text-xs text-gray-700">{job.company}</h5>
                      <span className="text-xs text-gray-600">{job.location}</span>
                    </div>
                    <p className="text-xs mt-1 leading-snug">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {projects.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Projects</h3>
              <div className="mt-2 space-y-3">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm">{project.name}</h4>
                      <span className="text-xs text-gray-600">{project.date}</span>
                    </div>
                    <h5 className="font-medium text-xs text-gray-700">{project.technologies}</h5>
                    <p className="text-xs mt-1 leading-snug">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-resume-purple hover:underline">
                        {project.link}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        
        {/* Right Column */}
        <div className="w-full md:w-1/3 space-y-5">
          {education.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Education</h3>
              <div className="mt-2 space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm">{edu.institution}</h4>
                      <span className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</span>
                    </div>
                    <p className="font-medium text-xs">{edu.degree} in {edu.field}</p>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">{edu.location}</span>
                      {edu.gpa && <span className="text-xs">GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {skills.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Skills</h3>
              <div className="mt-2 space-y-3">
                {[...new Set(skills.map(skill => skill.category))].map(category => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                    (category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 
                     category === 'languages' ? 'Languages' : category);
                  
                  return categorySkills.length > 0 ? (
                    <div key={category} className="space-y-1">
                      <h4 className="font-bold text-xs">{categoryName}</h4>
                      <div className="flex flex-wrap gap-1">
                        {categorySkills.map((skill) => (
                          <span key={skill.id} className="inline-block px-1.5 py-0.5 text-[10px] bg-resume-light-purple/40 rounded">
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </section>
          )}
        </div>
      </div>
      
      {/* Nowhile Branding Footer */}
      {showNowhileBranding && (
        <div className="w-full py-2 px-4 mt-auto flex items-center justify-end">
          <div className="text-[10px] text-gray-500 flex items-center">
            <span>Made with</span>
            <svg className="h-3 w-3 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
            </svg>
            <span>Nowhile</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
