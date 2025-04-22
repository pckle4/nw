import React from 'react';
import { ResumeData } from '@/types/resume';
import { PhoneCall, Mail, MapPin, Linkedin } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white print:overflow-hidden">
      {/* Header */}
      <div className="bg-resume-purple text-white p-8">
        <h1 className="text-4xl font-bold tracking-tight">{personalInfo.fullName || "Your Name"}</h1>
        <h2 className="text-xl mt-2 text-white/90">{personalInfo.jobTitle || "Professional Title"}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-white/90 text-sm">
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
      <div className="flex flex-1 flex-col md:flex-row p-8 gap-8 print:gap-6">
        {/* Left Column */}
        <div className="w-full md:w-2/3 space-y-6">
          {personalInfo.summary && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-2 text-resume-purple uppercase mb-3">Summary</h3>
              <p className="text-base leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-2 text-resume-purple uppercase mb-3">Experience</h3>
              <div className="space-y-4">
                {experience.map((job) => (
                  <div key={job.id} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-base font-bold">{job.position}</h4>
                      <span className="text-sm text-gray-600 whitespace-nowrap">{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <h5 className="text-base text-gray-700">{job.company}</h5>
                      <span className="text-sm text-gray-600">{job.location}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {projects.length > 0 && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-2 text-resume-purple uppercase mb-3">Projects</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex justify-between">
                      <h4 className="text-base font-bold">{project.name}</h4>
                      <span className="text-sm text-gray-600 whitespace-nowrap">{project.date}</span>
                    </div>
                    <h5 className="text-base text-gray-700">{project.technologies}</h5>
                    <p className="text-sm leading-relaxed">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-resume-purple hover:underline truncate block">
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
        <div className="w-full md:w-1/3 space-y-6">
          {education.length > 0 && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-2 text-resume-purple uppercase mb-3">Education</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-2">
                    <div className="flex justify-between">
                      <h4 className="text-base font-bold">{edu.institution}</h4>
                      <span className="text-sm text-gray-600 whitespace-nowrap">{edu.startDate} - {edu.endDate}</span>
                    </div>
                    <p className="font-medium text-base truncate">{edu.degree} in {edu.field}</p>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 truncate">{edu.location}</span>
                      {edu.gpa && <span className="text-sm whitespace-nowrap">GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {skills.length > 0 && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-2 text-resume-purple uppercase mb-3">Skills</h3>
              <div className="space-y-4">
                {[...new Set(skills.map(skill => skill.category))].map(category => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                    (category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 
                     category === 'languages' ? 'Languages' : category);
                  
                  return categorySkills.length > 0 ? (
                    <div key={category} className="space-y-2">
                      <h4 className="text-base font-bold">{categoryName}</h4>
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

export default ModernTemplate;
