
import React from 'react';
import { ResumeData } from '@/types/resume';

interface ColorfulTemplateProps {
  data: ResumeData;
}

const ColorfulTemplate: React.FC<ColorfulTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-gray-800 bg-white">
      {/* Header with gradient background */}
      <header className="bg-blue-gradient text-white p-8">
        <h1 className="text-4xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
        <p className="text-xl mt-2 opacity-90">{personalInfo.jobTitle || "Professional Title"}</p>
        
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Sidebar */}
        <div className="md:col-span-4 bg-resume-soft-blue p-6 space-y-6">
          {/* Summary */}
          {personalInfo.summary && (
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">ABOUT ME</h2>
              <p className="text-sm">{personalInfo.summary}</p>
            </section>
          )}
          
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">EDUCATION</h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="pb-3 border-b border-white/20 last:border-b-0">
                    <h3 className="font-bold">{edu.institution}</h3>
                    <p className="text-sm font-medium">{edu.degree} in {edu.field}</p>
                    <p className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</p>
                    <p className="text-xs text-gray-600">{edu.location}</p>
                    {edu.gpa && <p className="text-xs mt-1">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">SKILLS</h2>
              <div className="space-y-3">
                {[...new Set(skills.map(skill => skill.category))].map(category => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                    (category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 
                     category === 'languages' ? 'Languages' : category);
                  
                  return categorySkills.length > 0 ? (
                    <div key={category}>
                      <h3 className="font-bold text-sm">{categoryName}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {categorySkills.map((skill) => (
                          <span 
                            key={skill.id} 
                            className="inline-block px-2 py-1 text-xs bg-white/20 rounded-full"
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
        <div className="md:col-span-8 p-6 space-y-6">
          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-blue-700">WORK EXPERIENCE</h2>
              <div className="space-y-5">
                {experience.map((job) => (
                  <div key={job.id} className="pb-4 border-b border-gray-200 last:border-b-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h3 className="font-bold text-lg">{job.position}</h3>
                      <span className="text-sm text-gray-600">{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h4 className="font-medium text-blue-600">{job.company}</h4>
                      <span className="text-sm text-gray-600">{job.location}</span>
                    </div>
                    <p className="text-sm mt-2">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-blue-700">PROJECTS</h2>
              <div className="space-y-5">
                {projects.map((project) => (
                  <div key={project.id} className="pb-4 border-b border-gray-200 last:border-b-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h3 className="font-bold">{project.name}</h3>
                      <span className="text-sm text-gray-600">{project.date}</span>
                    </div>
                    <h4 className="font-medium text-blue-600">{project.technologies}</h4>
                    <p className="text-sm mt-1">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
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
    </div>
  );
};

export default ColorfulTemplate;
