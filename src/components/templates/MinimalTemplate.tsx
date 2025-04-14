
import React from 'react';
import { ResumeData } from '@/types/resume';

interface MinimalTemplateProps {
  data: ResumeData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white p-6">
      {/* Header */}
      <header className="text-center mb-6 pb-3 border-b">
        <h1 className="text-2xl font-bold mb-1">{personalInfo.fullName || "Your Name"}</h1>
        <p className="text-base text-gray-600 mb-2">{personalInfo.jobTitle || "Professional Title"}</p>
        
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
          {personalInfo.phone && <span className="font-medium">{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.email && <span>•</span>}
          {personalInfo.email && <span className="font-medium">{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.location && <span>•</span>}
          {personalInfo.location && <span className="font-medium">{personalInfo.location}</span>}
          {personalInfo.location && personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span className="font-medium">{personalInfo.linkedin}</span>}
        </div>
      </header>
      
      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-1 border-b border-gray-200 pb-1">Professional Summary</h2>
          <p className="text-xs leading-snug">{personalInfo.summary}</p>
        </section>
      )}
      
      {/* Two-column layout for the body content */}
      <div className="flex flex-row space-x-4">
        {/* Left column */}
        <div className="w-2/3 space-y-4">
          {/* Experience */}
          {experience.length > 0 && (
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1">Professional Experience</h2>
              <div className="space-y-3">
                {experience.map((job) => (
                  <div key={job.id} className="mb-3">
                    <div className="flex justify-between mb-0.5">
                      <h3 className="font-bold text-xs">{job.position}</h3>
                      <span className="text-xs text-gray-600 font-medium">{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <h4 className="text-xs text-gray-700 font-semibold">{job.company}</h4>
                      <span className="text-xs text-gray-600">{job.location}</span>
                    </div>
                    <p className="text-xs leading-snug">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1">Featured Projects</h2>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id} className="mb-2">
                    <div className="flex justify-between mb-0.5">
                      <h3 className="font-bold text-xs">{project.name}</h3>
                      <span className="text-xs text-gray-600 font-medium">{project.date}</span>
                    </div>
                    <p className="text-xs font-medium mb-0.5 text-gray-700">{project.technologies}</p>
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
        
        {/* Right column */}
        <div className="w-1/3 space-y-4">
          {/* Education */}
          {education.length > 0 && (
            <section className="mb-4">
              <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1">Education</h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="mb-2">
                    <div className="flex flex-col mb-0.5">
                      <h3 className="font-bold text-xs">{edu.institution}</h3>
                      <span className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</span>
                    </div>
                    <div>
                      <p className="text-xs font-medium">{edu.degree} in {edu.field}</p>
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
                    <div key={category} className="mb-2">
                      <h3 className="font-semibold text-xs mb-1">{categoryName}</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {categorySkills.map((skill) => (
                          <div key={skill.id} className="flex justify-between items-center">
                            <span className="text-xs font-medium">{skill.name}</span>
                            {skill.level && (
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, index) => (
                                  <span 
                                    key={index}
                                    className={`inline-block h-1.5 w-1.5 rounded-full mx-0.5 ${
                                      index < skill.level ? 'bg-gray-700' : 'bg-gray-200'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </section>
          )}
          
          {/* Additional Qualifications Section */}
          <section className="mb-4 p-2 bg-gray-50 rounded">
            <h2 className="text-sm font-bold uppercase mb-2 border-b border-gray-200 pb-1">Key Qualifications</h2>
            <ul className="text-xs space-y-1 list-disc pl-4">
              <li>Experienced {personalInfo.jobTitle}</li>
              <li>{skills.length} technical competencies</li>
              <li>{projects.length} completed projects</li>
              {education.length > 0 && (
                <li>{education[0].degree} educated professional</li>
              )}
              <li>Strong communication skills</li>
              <li>Problem-solving expertise</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MinimalTemplate;
