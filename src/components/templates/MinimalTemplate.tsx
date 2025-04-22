
import React from 'react';
import { ResumeData } from '@/types/resume';

interface MinimalTemplateProps {
  data: ResumeData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white p-8 print:overflow-hidden">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2">{personalInfo.fullName || "Your Name"}</h1>
        
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          {personalInfo.phone && <span className="truncate">{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.email && <span>•</span>}
          {personalInfo.email && <span className="truncate">{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.location && <span>•</span>}
          {personalInfo.location && <span className="truncate">{personalInfo.location}</span>}
          {personalInfo.location && personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span className="truncate">{personalInfo.linkedin}</span>}
          {personalInfo.linkedin && personalInfo.personalWebsite && <span>•</span>}
          {personalInfo.personalWebsite && <span className="truncate">{personalInfo.personalWebsite}</span>}
          {personalInfo.personalWebsite && personalInfo.twitter && <span>•</span>}
          {personalInfo.twitter && <span className="truncate">{personalInfo.twitter}</span>}
        </div>
      </header>
      
      {/* Objective/Summary */}
      {(personalInfo.objective || personalInfo.summary) && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-2 border-b border-gray-200 pb-1">
            {personalInfo.objective ? 'Career Objective' : 'Summary'}
          </h2>
          <p className="text-base leading-relaxed">{personalInfo.objective || personalInfo.summary}</p>
        </section>
      )}
      
      <div className="flex-1 overflow-auto">
        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1 sticky top-0 bg-white z-10">Experience</h2>
            <div className="space-y-3">
              {experience.map((job) => (
                <div key={job.id}>
                  <div className="flex justify-between mb-0.5">
                    <h3 className="font-bold text-xs truncate max-w-[60%]">{job.position}</h3>
                    <span className="text-xs text-gray-600 whitespace-nowrap">{job.startDate} - {job.endDate}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <h4 className="text-xs text-gray-700 truncate max-w-[60%]">{job.company}</h4>
                    <span className="text-xs text-gray-600 truncate">{job.location}</span>
                  </div>
                  <p className="text-xs leading-snug line-clamp-3">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Education */}
        {education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1 sticky top-0 bg-white z-10">Education</h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between mb-0.5">
                    <h3 className="font-bold text-xs truncate max-w-[60%]">{edu.institution}</h3>
                    <span className="text-xs text-gray-600 whitespace-nowrap">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div>
                    <p className="text-xs truncate">{edu.degree} in {edu.field}</p>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span className="truncate max-w-[60%]">{edu.location}</span>
                      {edu.gpa && <span className="whitespace-nowrap">GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1 sticky top-0 bg-white z-10">Skills</h2>
            <div className="space-y-2">
              {[...new Set(skills.map(skill => skill.category))].map(category => {
                const categorySkills = skills.filter(skill => skill.category === category);
                const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                  (category === 'technical' ? 'Technical Skills' : 
                   category === 'soft' ? 'Soft Skills' : 
                   category === 'languages' ? 'Languages' : category);
                
                return categorySkills.length > 0 ? (
                  <div key={category}>
                    <h3 className="font-semibold text-xs mb-0.5 truncate">{categoryName}</h3>
                    <p className="text-xs line-clamp-3">
                      {categorySkills.map((skill, index) => (
                        <span key={skill.id}>
                          {skill.name}
                          {index < categorySkills.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  </div>
                ) : null;
              })}
            </div>
          </section>
        )}
        
        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1 sticky top-0 bg-white z-10">Projects</h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between mb-0.5">
                    <h3 className="font-bold text-xs truncate max-w-[60%]">{project.name}</h3>
                    <span className="text-xs text-gray-600 truncate">{project.date}</span>
                  </div>
                  <p className="text-xs mb-0.5 truncate">{project.technologies}</p>
                  <p className="text-xs leading-snug line-clamp-3">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline truncate block">
                      {project.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      
      {/* Nowhile Branding */}
      <div className="print:fixed print:bottom-4 print:right-4 p-4 text-right text-gray-400 text-xs flex items-center justify-end gap-2">
        <span>Made with</span>
        <svg
          className="h-4 w-4 inline-block"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>by Nowhile</span>
      </div>
    </div>
  );
};

export default MinimalTemplate;
