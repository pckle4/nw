
import React from 'react';
import { ResumeData } from '@/types/resume';
import { PhoneCall, Mail, MapPin, Linkedin, Calendar, Award, Code } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white">
      {/* Header */}
      <div className="bg-resume-purple text-white p-6">
        <h1 className="text-3xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
        <h2 className="text-lg mt-1 text-white/90">{personalInfo.jobTitle || "Professional Title"}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-white/90 text-sm">
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <PhoneCall className="h-3.5 w-3.5" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="h-3.5 w-3.5" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row p-6 gap-6">
        {/* Left Column */}
        <div className="w-full md:w-2/3 space-y-5">
          {personalInfo.summary && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase flex items-center gap-2">
                <Award className="h-4 w-4" />
                Professional Summary
              </h3>
              <p className="mt-2 text-sm leading-snug">{personalInfo.summary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Work Experience
              </h3>
              <div className="mt-3 space-y-4">
                {experience.map((job) => (
                  <div key={job.id} className="relative pl-4 border-l-2 border-resume-light-purple pb-4">
                    <div className="absolute w-3 h-3 bg-resume-purple rounded-full -left-[7px] top-0"></div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <h4 className="font-bold text-sm">{job.position}</h4>
                        <span className="text-xs text-gray-600">{job.startDate} - {job.endDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <h5 className="font-medium text-xs text-gray-700">{job.company}</h5>
                        <span className="text-xs text-gray-600">{job.location}</span>
                      </div>
                      <p className="text-xs mt-1 leading-snug">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {projects.length > 0 && (
            <section>
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase flex items-center gap-2">
                <Code className="h-4 w-4" />
                Projects
              </h3>
              <div className="mt-3 space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-1 relative pl-4 border-l-2 border-resume-light-purple pb-4">
                    <div className="absolute w-3 h-3 bg-resume-purple rounded-full -left-[7px] top-0"></div>
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm">{project.name}</h4>
                      <span className="text-xs text-gray-600">{project.date}</span>
                    </div>
                    <h5 className="font-medium text-xs text-gray-700">{project.technologies}</h5>
                    <p className="text-xs mt-1 leading-snug">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-resume-purple hover:underline">
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
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Education</h3>
              <div className="mt-3 space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-1 relative pl-4 border-l-2 border-resume-light-purple pb-4">
                    <div className="absolute w-3 h-3 bg-resume-purple rounded-full -left-[7px] top-0"></div>
                    <div className="flex justify-between">
                      <h4 className="font-bold text-sm">{edu.institution}</h4>
                      <span className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</span>
                    </div>
                    <p className="font-medium text-xs">{edu.degree} in {edu.field}</p>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">{edu.location}</span>
                      {edu.gpa && <span className="text-xs">GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {skills.length > 0 && (
            <section className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Skills</h3>
              <div className="mt-3 space-y-4">
                {[...new Set(skills.map(skill => skill.category))].map(category => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                    (category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 
                     category === 'languages' ? 'Languages' : category);
                  
                  return categorySkills.length > 0 ? (
                    <div key={category} className="space-y-2">
                      <h4 className="font-bold text-xs">{categoryName}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {categorySkills.map((skill) => (
                          <div key={skill.id} className="bg-white p-2 rounded border border-resume-light-purple/30">
                            <div className="text-[10px] font-medium">{skill.name}</div>
                            {skill.level && (
                              <div className="flex mt-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                  <span 
                                    key={index}
                                    className={`inline-block h-1 w-4 rounded-full mr-[2px] ${
                                      index < skill.level ? 'bg-resume-purple' : 'bg-gray-200'
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
          
          <section className="bg-resume-light-purple/20 p-4 rounded-lg">
            <h3 className="text-base font-bold border-b border-resume-purple pb-1 text-resume-purple uppercase">Key Qualifications</h3>
            <ul className="mt-2 space-y-1">
              {experience.length > 0 && (
                <li className="flex items-start text-xs">
                  <span className="inline-block h-2 w-2 rounded-full bg-resume-purple mt-1 mr-2 flex-shrink-0"></span>
                  <span>{experience.length} years of professional experience in {personalInfo.jobTitle}</span>
                </li>
              )}
              {education.length > 0 && education[0].degree && (
                <li className="flex items-start text-xs">
                  <span className="inline-block h-2 w-2 rounded-full bg-resume-purple mt-1 mr-2 flex-shrink-0"></span>
                  <span>{education[0].degree} in {education[0].field} from {education[0].institution}</span>
                </li>
              )}
              {skills.length > 0 && (
                <li className="flex items-start text-xs">
                  <span className="inline-block h-2 w-2 rounded-full bg-resume-purple mt-1 mr-2 flex-shrink-0"></span>
                  <span>Proficient in {skills.slice(0, 3).map(s => s.name).join(', ')} and more</span>
                </li>
              )}
              {projects.length > 0 && (
                <li className="flex items-start text-xs">
                  <span className="inline-block h-2 w-2 rounded-full bg-resume-purple mt-1 mr-2 flex-shrink-0"></span>
                  <span>Successfully completed {projects.length} projects including {projects[0].name}</span>
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
