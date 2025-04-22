
import React from 'react';
import { ResumeData } from '@/types/resume';
import { PhoneCall, Mail, MapPin, Linkedin } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-resume-purple text-white p-6">
        <h1 className="text-3xl font-bold truncate">{personalInfo.fullName || "Your Name"}</h1>
        <h2 className="text-lg mt-1 text-white/90 truncate">{personalInfo.jobTitle || "Professional Title"}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-white/90 text-sm">
          {personalInfo.phone && (
            <div className="flex items-center gap-2 truncate">
              <PhoneCall className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{personalInfo.phone}</span>
            </div>
          )}
          
          {personalInfo.email && (
            <div className="flex items-center gap-2 truncate">
              <Mail className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{personalInfo.email}</span>
            </div>
          )}
          
          {personalInfo.location && (
            <div className="flex items-center gap-2 truncate">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{personalInfo.location}</span>
            </div>
          )}
          
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2 truncate">
              <Linkedin className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row p-6 gap-6 overflow-auto">
        {/* Left Column */}
        <div className="w-full md:w-2/3 space-y-5 overflow-auto">
          {personalInfo.summary && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Summary</h3>
              <p className="mt-2 text-sm leading-snug line-clamp-6">{personalInfo.summary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Work Experience</h3>
              <div className="mt-2 space-y-3 max-h-[calc(100%-4rem)] overflow-y-auto">
                {experience.map((job) => (
                  <div key={job.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm truncate max-w-[60%]">{job.position}</h4>
                      <span className="text-xs text-gray-600 whitespace-nowrap">{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <h5 className="font-medium text-xs text-gray-700 truncate max-w-[60%]">{job.company}</h5>
                      <span className="text-xs text-gray-600 truncate">{job.location}</span>
                    </div>
                    <p className="text-xs mt-1 leading-snug line-clamp-4">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {projects.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Projects</h3>
              <div className="mt-2 space-y-3 max-h-[calc(100%-4rem)] overflow-y-auto">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm truncate max-w-[60%]">{project.name}</h4>
                      <span className="text-xs text-gray-600 truncate">{project.date}</span>
                    </div>
                    <h5 className="font-medium text-xs text-gray-700 truncate">{project.technologies}</h5>
                    <p className="text-xs mt-1 leading-snug line-clamp-3">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-resume-purple hover:underline truncate block">
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
        <div className="w-full md:w-1/3 space-y-5 overflow-auto">
          {education.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Education</h3>
              <div className="mt-2 space-y-3 max-h-[calc(100%-4rem)] overflow-y-auto">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm truncate max-w-[60%]">{edu.institution}</h4>
                      <span className="text-xs text-gray-600 whitespace-nowrap">{edu.startDate} - {edu.endDate}</span>
                    </div>
                    <p className="font-medium text-xs truncate">{edu.degree} in {edu.field}</p>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600 truncate">{edu.location}</span>
                      {edu.gpa && <span className="text-xs whitespace-nowrap">GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {skills.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Skills</h3>
              <div className="mt-2 space-y-3 max-h-[calc(100%-4rem)] overflow-y-auto">
                {[...new Set(skills.map(skill => skill.category))].map(category => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                    (category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 
                     category === 'languages' ? 'Languages' : category);
                  
                  return categorySkills.length > 0 ? (
                    <div key={category} className="space-y-1">
                      <h4 className="font-bold text-xs truncate">{categoryName}</h4>
                      <div className="flex flex-wrap gap-1">
                        {categorySkills.map((skill) => (
                          <span key={skill.id} className="inline-block px-1.5 py-0.5 text-[10px] bg-resume-light-purple/40 rounded truncate">
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
    </div>
  );
};

export default ModernTemplate;
