
import React from 'react';
import { ResumeData } from '@/types/resume';

interface ColorfulTemplateProps {
  data: ResumeData;
  showNowhileBranding?: boolean;
}

const ColorfulTemplate: React.FC<ColorfulTemplateProps> = ({ data, showNowhileBranding = true }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-gray-800 bg-white">
      {/* Header with gradient background */}
      <header className="bg-blue-gradient text-white p-5">
        <h1 className="text-2xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
        <p className="text-base mt-1 opacity-90">{personalInfo.jobTitle || "Professional Title"}</p>
        
        <div className="flex flex-wrap gap-3 mt-2 text-xs">
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
          {personalInfo.twitter && <span>{personalInfo.twitter}</span>}
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Sidebar */}
        <div className="md:col-span-4 bg-resume-soft-blue p-5 space-y-4">
          {/* Summary / Career Objective */}
          {(personalInfo.summary || personalInfo.objective) && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-gray-800 uppercase">
                {personalInfo.objective ? "Career Objective" : "About Me"}
              </h2>
              <p className="text-xs leading-snug">{personalInfo.objective || personalInfo.summary}</p>
            </section>
          )}
          
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-gray-800 uppercase">Education</h2>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.id} className="pb-2 border-b border-white/20 last:border-b-0">
                    <h3 className="font-bold text-xs">{edu.institution}</h3>
                    <p className="text-xs font-medium">{edu.degree} in {edu.field}</p>
                    <p className="text-[10px] text-gray-600">{edu.startDate} - {edu.endDate}</p>
                    <p className="text-[10px] text-gray-600">{edu.location}</p>
                    {edu.gpa && <p className="text-[10px] mt-0.5">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-gray-800 uppercase">Skills</h2>
              <div className="space-y-2">
                {[...new Set(skills.map(skill => skill.category))].map(category => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                    (category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 
                     category === 'languages' ? 'Languages' : category);
                  
                  return categorySkills.length > 0 ? (
                    <div key={category}>
                      <h3 className="font-bold text-xs">{categoryName}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {categorySkills.map((skill) => (
                          <span 
                            key={skill.id} 
                            className="inline-block px-1.5 py-0.5 text-[10px] bg-white/20 rounded-full"
                          >
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
        
        {/* Main Content */}
        <div className="md:col-span-8 p-5 space-y-4">
          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-blue-700 uppercase">Work Experience</h2>
              <div className="space-y-3">
                {experience.map((job) => (
                  <div key={job.id} className="pb-3 border-b border-gray-200 last:border-b-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h3 className="font-bold text-xs">{job.position}</h3>
                      <span className="text-[10px] text-gray-600">{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h4 className="font-medium text-xs text-blue-600">{job.company}</h4>
                      <span className="text-[10px] text-gray-600">{job.location}</span>
                    </div>
                    <p className="text-xs mt-1 leading-snug">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-blue-700 uppercase">Projects</h2>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id} className="pb-3 border-b border-gray-200 last:border-b-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h3 className="font-bold text-xs">{project.name}</h3>
                      <span className="text-[10px] text-gray-600">{project.date}</span>
                    </div>
                    <h4 className="font-medium text-xs text-blue-600">{project.technologies}</h4>
                    <p className="text-xs mt-1 leading-snug">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-1 inline-block">
                        {project.link}
                      </a>
                    )}
                  </div>
                ))}
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

export default ColorfulTemplate;
