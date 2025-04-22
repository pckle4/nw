
import React from 'react';
import { ResumeData } from '@/types/resume';
import { PhoneCall, Mail, MapPin, Linkedin, FileText, Twitter, Link } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white print:overflow-hidden">
      {/* Header */}
      <div className="bg-resume-purple text-white p-6 pb-7">
        <h1 className="text-3xl font-bold tracking-tight">{personalInfo.fullName || "Your Name"}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 text-white/90 text-sm">
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
          
          {personalInfo.personalWebsite && (
            <div className="flex items-center gap-2 truncate">
              <Link className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{personalInfo.personalWebsite}</span>
            </div>
          )}
          
          {personalInfo.twitter && (
            <div className="flex items-center gap-2 truncate">
              <Twitter className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{personalInfo.twitter}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row p-6 gap-6 print:gap-5">
        {/* Left Column */}
        <div className="w-full md:w-2/3 space-y-5">
          {(personalInfo.objective || personalInfo.summary) && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-1 text-resume-purple uppercase mb-2">
                {personalInfo.objective ? 'Career Objective' : 'Summary'}
              </h3>
              <p className="text-sm leading-relaxed">{personalInfo.objective || personalInfo.summary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-1 text-resume-purple uppercase mb-2">Experience</h3>
              <div className="space-y-3">
                {experience.map((job) => (
                  <div key={job.id} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-base font-bold">{job.position}</h4>
                      <span className="text-xs text-gray-600 whitespace-nowrap">{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <h5 className="text-sm text-gray-700">{job.company}</h5>
                      <span className="text-xs text-gray-600">{job.location}</span>
                    </div>
                    <p className="text-xs leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {projects.length > 0 && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-1 text-resume-purple uppercase mb-2">Projects</h3>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="text-base font-bold">{project.name}</h4>
                      <span className="text-xs text-gray-600 whitespace-nowrap">{project.date}</span>
                    </div>
                    <h5 className="text-sm text-gray-700">{project.technologies}</h5>
                    <p className="text-xs leading-relaxed">{project.description}</p>
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
        <div className="w-full md:w-1/3 space-y-5">
          {education.length > 0 && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-1 text-resume-purple uppercase mb-2">Education</h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <h4 className="text-base font-bold truncate">{edu.institution}</h4>
                    <p className="font-medium text-sm truncate">{edu.degree} in {edu.field}</p>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</span>
                      {edu.gpa && <span className="text-xs whitespace-nowrap">GPA: {edu.gpa}</span>}
                    </div>
                    <p className="text-xs text-gray-600">{edu.location}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {skills.length > 0 && (
            <section>
              <h3 className="text-lg font-bold border-b-2 border-resume-purple pb-1 text-resume-purple uppercase mb-2">Skills</h3>
              <div className="space-y-3">
                {[...new Set(skills.map(skill => skill.category))].map(category => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                    (category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 
                     category === 'languages' ? 'Languages' : category);
                  
                  return categorySkills.length > 0 ? (
                    <div key={category} className="space-y-1">
                      <h4 className="text-sm font-bold">{categoryName}</h4>
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
