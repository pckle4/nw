
import React from 'react';
import { ResumeData } from '@/types/resume';

interface MinimalTemplateProps {
  data: ResumeData;
  showNowhileBranding?: boolean;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data, showNowhileBranding = true }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white p-6">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 className="text-2xl font-bold mb-1">{personalInfo.fullName || "Your Name"}</h1>
        <p className="text-base text-gray-600 mb-2">{personalInfo.jobTitle || "Professional Title"}</p>
        
        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-600">
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.email && <span>•</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.location && personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>
      
      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-1 border-b border-gray-200 pb-1">Summary</h2>
          <p className="text-xs leading-snug">{personalInfo.summary}</p>
        </section>
      )}
      
      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1">Experience</h2>
          <div className="space-y-3">
            {experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between mb-0.5">
                  <h3 className="font-bold text-xs">{job.position}</h3>
                  <span className="text-xs text-gray-600">{job.startDate} - {job.endDate}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <h4 className="text-xs text-gray-700">{job.company}</h4>
                  <span className="text-xs text-gray-600">{job.location}</span>
                </div>
                <p className="text-xs leading-snug">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Education */}
      {education.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between mb-0.5">
                  <h3 className="font-bold text-xs">{edu.institution}</h3>
                  <span className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</span>
                </div>
                <div>
                  <p className="text-xs">{edu.degree} in {edu.field}</p>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{edu.location}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1">Skills</h2>
          <div className="space-y-2">
            {[...new Set(skills.map(skill => skill.category))].map(category => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                (category === 'technical' ? 'Technical Skills' : 
                 category === 'soft' ? 'Soft Skills' : 
                 category === 'languages' ? 'Languages' : category);
              
              return categorySkills.length > 0 ? (
                <div key={category}>
                  <h3 className="font-semibold text-xs mb-0.5">{categoryName}</h3>
                  <p className="text-xs">
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
          <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1">Projects</h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between mb-0.5">
                  <h3 className="font-bold text-xs">{project.name}</h3>
                  <span className="text-xs text-gray-600">{project.date}</span>
                </div>
                <p className="text-xs mb-0.5">{project.technologies}</p>
                <p className="text-xs leading-snug">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                    {project.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
