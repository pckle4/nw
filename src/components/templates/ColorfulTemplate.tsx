import React from 'react';
import { ResumeData } from '@/types/resume';

interface ColorfulTemplateProps {
  data: ResumeData;
}

const ColorfulTemplate: React.FC<ColorfulTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-gray-800 bg-white print:overflow-hidden">
      {/* Header with gradient background */}
      <header className="bg-blue-gradient text-white p-8">
        <h1 className="text-4xl font-bold tracking-tight">{personalInfo.fullName || "Your Name"}</h1>
        <p className="text-xl mt-2 opacity-90">{personalInfo.jobTitle || "Professional Title"}</p>
        
        <div className="flex flex-wrap gap-3 mt-2 text-xs">
          {personalInfo.phone && <span className="truncate">{personalInfo.phone}</span>}
          {personalInfo.email && <span className="truncate">{personalInfo.email}</span>}
          {personalInfo.location && <span className="truncate">{personalInfo.location}</span>}
          {personalInfo.linkedin && <span className="truncate">{personalInfo.linkedin}</span>}
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 flex-1">
        {/* Sidebar */}
        <div className="md:col-span-4 bg-resume-soft-blue p-8 space-y-6">
          {/* Summary */}
          {personalInfo.summary && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-gray-800 uppercase sticky top-0 bg-resume-soft-blue z-10">About Me</h2>
              <p className="text-xs leading-snug line-clamp-5">{personalInfo.summary}</p>
            </section>
          )}
          
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-gray-800 uppercase sticky top-0 bg-resume-soft-blue z-10">Education</h2>
              <div className="space-y-2 max-h-[30vh] overflow-y-auto">
                {education.map((edu) => (
                  <div key={edu.id} className="pb-2 border-b border-white/20 last:border-b-0">
                    <h3 className="font-bold text-xs truncate">{edu.institution}</h3>
                    <p className="text-xs font-medium truncate">{edu.degree} in {edu.field}</p>
                    <p className="text-[10px] text-gray-600 whitespace-nowrap">{edu.startDate} - {edu.endDate}</p>
                    <p className="text-[10px] text-gray-600 truncate">{edu.location}</p>
                    {edu.gpa && <p className="text-[10px] mt-0.5 truncate">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-gray-800 uppercase sticky top-0 bg-resume-soft-blue z-10">Skills</h2>
              <div className="space-y-2 max-h-[30vh] overflow-y-auto">
                {[...new Set(skills.map(skill => skill.category))].map(category => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                    (category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 
                     category === 'languages' ? 'Languages' : category);
                  
                  return categorySkills.length > 0 ? (
                    <div key={category}>
                      <h3 className="font-bold text-xs truncate">{categoryName}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {categorySkills.map((skill) => (
                          <span 
                            key={skill.id} 
                            className="inline-block px-1.5 py-0.5 text-[10px] bg-white/20 rounded-full truncate"
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
        <div className="md:col-span-8 p-8 space-y-6">
          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-blue-700 uppercase sticky top-0 bg-white z-10">Work Experience</h2>
              <div className="space-y-3 max-h-[35vh] overflow-y-auto">
                {experience.map((job) => (
                  <div key={job.id} className="pb-3 border-b border-gray-200 last:border-b-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h3 className="font-bold text-xs truncate max-w-full md:max-w-[60%]">{job.position}</h3>
                      <span className="text-[10px] text-gray-600 whitespace-nowrap">{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h4 className="font-medium text-xs text-blue-600 truncate max-w-full md:max-w-[60%]">{job.company}</h4>
                      <span className="text-[10px] text-gray-600 truncate">{job.location}</span>
                    </div>
                    <p className="text-xs mt-1 leading-snug line-clamp-4">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-sm font-bold mb-2 text-blue-700 uppercase sticky top-0 bg-white z-10">Projects</h2>
              <div className="space-y-3 max-h-[35vh] overflow-y-auto">
                {projects.map((project) => (
                  <div key={project.id} className="pb-3 border-b border-gray-200 last:border-b-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h3 className="font-bold text-xs truncate max-w-full md:max-w-[60%]">{project.name}</h3>
                      <span className="text-[10px] text-gray-600 truncate">{project.date}</span>
                    </div>
                    <h4 className="font-medium text-xs text-blue-600 truncate">{project.technologies}</h4>
                    <p className="text-xs mt-1 leading-snug line-clamp-3">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-1 inline-block truncate">
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

export default ColorfulTemplate;
