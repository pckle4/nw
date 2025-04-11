
import React from 'react';
import { ResumeData } from '@/types/resume';

interface MinimalTemplateProps {
  data: ResumeData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white p-10">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{personalInfo.fullName || "Your Name"}</h1>
        <p className="text-xl text-gray-600 mb-4">{personalInfo.jobTitle || "Professional Title"}</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
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
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-2 border-b border-gray-200 pb-1">Summary</h2>
          <p className="text-sm">{personalInfo.summary}</p>
        </section>
      )}
      
      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-200 pb-1">Experience</h2>
          <div className="space-y-4">
            {experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">{job.position}</h3>
                  <span className="text-sm text-gray-600">{job.startDate} - {job.endDate}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <h4 className="text-gray-700">{job.company}</h4>
                  <span className="text-sm text-gray-600">{job.location}</span>
                </div>
                <p className="text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-200 pb-1">Education</h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">{edu.institution}</h3>
                  <span className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</span>
                </div>
                <div>
                  <p>{edu.degree} in {edu.field}</p>
                  <div className="flex justify-between text-sm text-gray-600">
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
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-200 pb-1">Skills</h2>
          <div className="space-y-3">
            {[...new Set(skills.map(skill => skill.category))].map(category => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                (category === 'technical' ? 'Technical Skills' : 
                 category === 'soft' ? 'Soft Skills' : 
                 category === 'languages' ? 'Languages' : category);
              
              return categorySkills.length > 0 ? (
                <div key={category}>
                  <h3 className="font-semibold mb-1">{categoryName}</h3>
                  <p className="text-sm">
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
          <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-200 pb-1">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">{project.name}</h3>
                  <span className="text-sm text-gray-600">{project.date}</span>
                </div>
                <p className="text-sm mb-1">{project.technologies}</p>
                <p className="text-sm">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
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
