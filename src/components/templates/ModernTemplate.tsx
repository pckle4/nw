
import React from 'react';
import { ResumeData } from '@/types/resume';
import { PhoneCall, Mail, MapPin, Linkedin } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { personalInfo, experience, education, skills, projects } = data;

  return (
    <div className="w-full h-full flex flex-col text-slate-800 bg-white">
      {/* Header */}
      <div className="bg-resume-purple text-white p-8">
        <h1 className="text-4xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
        <h2 className="text-xl mt-2 text-white/80">{personalInfo.jobTitle || "Professional Title"}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-white/90">
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row p-8 gap-8">
        {/* Left Column */}
        <div className="w-full md:w-2/3 space-y-6">
          {personalInfo.summary && (
            <section>
              <h3 className="text-xl font-bold border-b-2 border-resume-purple pb-1 text-resume-purple">SUMMARY</h3>
              <p className="mt-3 text-sm">{personalInfo.summary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section>
              <h3 className="text-xl font-bold border-b-2 border-resume-purple pb-1 text-resume-purple">WORK EXPERIENCE</h3>
              <div className="mt-3 space-y-4">
                {experience.map((job) => (
                  <div key={job.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold">{job.position}</h4>
                      <span className="text-sm text-gray-600">{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <h5 className="font-medium text-gray-700">{job.company}</h5>
                      <span className="text-sm text-gray-600">{job.location}</span>
                    </div>
                    <p className="text-sm mt-1">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {projects.length > 0 && (
            <section>
              <h3 className="text-xl font-bold border-b-2 border-resume-purple pb-1 text-resume-purple">PROJECTS</h3>
              <div className="mt-3 space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold">{project.name}</h4>
                      <span className="text-sm text-gray-600">{project.date}</span>
                    </div>
                    <h5 className="font-medium text-gray-700">{project.technologies}</h5>
                    <p className="text-sm mt-1">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-resume-purple hover:underline">
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
              <h3 className="text-xl font-bold border-b-2 border-resume-purple pb-1 text-resume-purple">EDUCATION</h3>
              <div className="mt-3 space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold">{edu.institution}</h4>
                      <span className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</span>
                    </div>
                    <p className="font-medium">{edu.degree} in {edu.field}</p>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">{edu.location}</span>
                      {edu.gpa && <span className="text-sm">GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {skills.length > 0 && (
            <section>
              <h3 className="text-xl font-bold border-b-2 border-resume-purple pb-1 text-resume-purple">SKILLS</h3>
              <div className="mt-3 space-y-3">
                {[...new Set(skills.map(skill => skill.category))].map(category => {
                  const categorySkills = skills.filter(skill => skill.category === category);
                  const categoryName = data.skillCategories.find(cat => cat.id === category)?.name || 
                    (category === 'technical' ? 'Technical Skills' : 
                     category === 'soft' ? 'Soft Skills' : 
                     category === 'languages' ? 'Languages' : category);
                  
                  return categorySkills.length > 0 ? (
                    <div key={category} className="space-y-1">
                      <h4 className="font-bold">{categoryName}</h4>
                      <div className="flex flex-wrap gap-1">
                        {categorySkills.map((skill) => (
                          <span key={skill.id} className="inline-block px-2 py-1 text-xs bg-resume-light-purple/50 rounded-md">
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
