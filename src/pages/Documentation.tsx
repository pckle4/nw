
import React, { useState } from 'react';
import { SearchIcon, BookOpen, Code, Server, Accessibility, Globe, Cpu, FileText, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    { id: 'getting-started', name: 'Getting Started', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'components', name: 'Components', icon: <Code className="h-5 w-5" /> },
    { id: 'api', name: 'API Reference', icon: <Server className="h-5 w-5" /> },
    { id: 'tech-choices', name: 'Technology Choices', icon: <Cpu className="h-5 w-5" /> },
    { id: 'best-practices', name: 'Best Practices', icon: <CheckCircle className="h-5 w-5" /> },
    { id: 'accessibility', name: 'Accessibility', icon: <Accessibility className="h-5 w-5" /> },
    { id: 'i18n', name: 'Internationalization', icon: <Globe className="h-5 w-5" /> },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-resume-purple to-blue-600 py-16 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Documentation
            </h1>
            <p className="text-white/90 text-xl max-w-3xl">
              Everything you need to know about using Nowhile Resume Builder for creating professional resumes.
            </p>
            
            <div className="mt-8 relative max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full py-3 pl-12 pr-4 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-all"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-white/70" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="sticky top-20 p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
                <h3 className="text-lg font-semibold mb-4 text-resume-purple">Documentation</h3>
                <nav>
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                            activeSection === section.id
                              ? "bg-resume-purple text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {section.icon}
                          <span>{section.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* New Documentation Resources Box */}
                <div className="mt-8 p-4 bg-resume-purple/10 rounded-lg border border-resume-purple/20">
                  <h4 className="font-medium text-resume-purple mb-2">Documentation Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-resume-purple">
                        <FileText className="h-4 w-4" />
                        <span>Download PDF Guide</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-resume-purple">
                        <Code className="h-4 w-4" />
                        <span>Example Code Repository</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-resume-purple">
                        <Globe className="h-4 w-4" />
                        <span>Community Forum</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Getting Started Section */}
              <section id="getting-started" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                    Getting Started
                  </span>
                  <div className="h-1 w-0 group-hover:w-[100px] bg-resume-purple mt-1 transition-all duration-300"></div>
                </h2>

                <div className="space-y-6">
                  <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Installation</h3>
                    <p className="mb-4 text-gray-600">
                      Get started with installing our resume builder on your local environment:
                    </p>
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>npm install @nowhile/resume-builder</pre>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Start Guide</h3>
                    <ol className="list-decimal ml-6 space-y-3 text-gray-600">
                      <li>Create a new project using our starter template</li>
                      <li>Set up your personal information and preferences</li>
                      <li>Choose one of our pre-designed templates</li>
                      <li>Fill in your resume sections with relevant information</li>
                      <li>Preview, edit, and export your resume in various formats</li>
                    </ol>
                  </div>

                  {/* Interactive Demo Card */}
                  <div className="p-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 border border-resume-purple/20 hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Interactive Demo</h3>
                        <p className="mb-4 text-gray-600">
                          Try our interactive demo to see how easy it is to create a professional resume with Nowhile:
                        </p>
                        <Button className="bg-resume-purple hover:bg-resume-dark-purple text-white">
                          Launch Demo
                        </Button>
                      </div>
                      <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <div className="aspect-ratio-16/9 overflow-hidden rounded bg-gray-100 flex items-center justify-center h-[150px]">
                          <div className="text-gray-400 text-sm">Interactive Demo Preview</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Components Section */}
              <section id="components" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                    Components
                  </span>
                  <div className="h-1 w-0 group-hover:w-[100px] bg-resume-purple mt-1 transition-all duration-300"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {['ResumeForm', 'TemplateSelector', 'ResumePreview', 'DownloadOptions'].map((component) => (
                    <div key={component} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">{component}</h3>
                      <p className="text-gray-600 mb-3">
                        {component === 'ResumeForm' && 'Collect and validate user input for resume sections.'}
                        {component === 'TemplateSelector' && 'Browse and select from various resume templates.'}
                        {component === 'ResumePreview' && 'See a live preview of your resume as you build it.'}
                        {component === 'DownloadOptions' && 'Export your resume in multiple file formats.'}
                      </p>
                      <a 
                        href={`#${component.toLowerCase()}`} 
                        className="text-resume-purple hover:underline text-sm font-medium inline-flex items-center"
                      >
                        View documentation
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Component Example */}
                <div className="mb-8 p-6 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Component Example: TemplateSelector</h3>
                  <div className="mb-4">
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>{`import React from 'react';
import { TemplateCard } from './TemplateCard';

const TemplateSelector = ({ templates, selectedId, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          isSelected={template.id === selectedId}
          onSelect={() => onSelect(template.id)}
        />
      ))}
    </div>
  );
};

export default TemplateSelector;`}</pre>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    This component displays a grid of available templates and allows the user to select one.
                  </p>
                </div>
              </section>

              {/* API Reference Section */}
              <section id="api" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                    API Reference
                  </span>
                  <div className="h-1 w-0 group-hover:w-[100px] bg-resume-purple mt-1 transition-all duration-300"></div>
                </h2>

                <div className="space-y-8">
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Resume Data Structure</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto mb-4">
                      <pre>{`interface Resume {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    title: string;
    summary: string;
  };
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa?: string;
  }>;
  skills: Array<{
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
}`}</pre>
                    </div>
                    <p className="text-gray-600">
                      This is the core data structure used across the application for storing and manipulating resume information.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Template Configuration</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto mb-4">
                      <pre>{`interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  sections: {
    order: ('personalInfo' | 'experience' | 'education' | 'skills' | 'projects')[];
    layout: 'single-column' | 'two-column';
  };
}`}</pre>
                    </div>
                    <p className="text-gray-600">
                      Templates can be customized with different colors, fonts, and section layouts.
                    </p>
                  </div>

                  {/* API Methods Table */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">API Methods</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameters</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-resume-purple">createResume(data)</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">ResumeData</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Resume</td>
                            <td className="px-6 py-4 text-sm text-gray-600">Creates a new resume from provided data</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-resume-purple">updateResume(id, data)</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">string, Partial<ResumeData></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Resume</td>
                            <td className="px-6 py-4 text-sm text-gray-600">Updates an existing resume with new data</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-resume-purple">generatePDF(resumeId)</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">string</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Blob</td>
                            <td className="px-6 py-4 text-sm text-gray-600">Generates a PDF version of the resume</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* New Real-time Validation Feature Card */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">NEW</span>
                      Real-time Validation API
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Our new validation API provides real-time feedback on resume content, helping users create more effective resumes.
                    </p>
                    <div className="bg-white p-4 rounded-md border border-gray-200">
                      <code className="text-sm font-mono text-gray-800 block">{`// Example usage
import { validateResumeSection } from '@nowhile/resume-builder';

const result = validateResumeSection('experience', {
  company: 'Acme Inc.',
  position: 'Software Engineer',
  startDate: '2020-01-01',
  endDate: '2022-01-01',
  description: 'Very short.',
  highlights: []
});

// result: { valid: false, errors: [{ field: 'description', message: 'Description is too short' }] }`}</code>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technology Choices Section */}
              <section id="tech-choices" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                    Technology Choices
                  </span>
                  <div className="h-1 w-0 group-hover:w-[100px] bg-resume-purple mt-1 transition-all duration-300"></div>
                </h2>

                <div className="space-y-8">
                  {/* React */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" className="h-10 w-10">
                          <path fill="#61DAFB" d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
                          <circle cx="420.9" cy="296.5" r="45.7" fill="#61DAFB" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">React</h3>
                        <p className="text-gray-600">A JavaScript library for building user interfaces</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Why We Chose React:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Component-based architecture enables reusable UI elements</li>
                        <li>Virtual DOM improves performance for our dynamic resume builder</li>
                        <li>Rich ecosystem with libraries for form handling, animations, and more</li>
                        <li>Strong community support and extensive documentation</li>
                        <li>Seamless integration with other libraries in our tech stack</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Alternatives Considered:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Vue.js</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Angular</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Svelte</span>
                      </div>
                    </div>
                  </div>

                  {/* Tailwind CSS */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="bg-cyan-100 p-4 rounded-full inline-flex items-center justify-center">
                        <svg viewBox="0 0 248 31" className="h-6 w-24">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#06B6D4"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="#000"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Tailwind CSS</h3>
                        <p className="text-gray-600">A utility-first CSS framework</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Why We Chose Tailwind CSS:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Utility-first approach enables rapid UI development</li>
                        <li>Highly customizable design system that adapts to our brand</li>
                        <li>Built-in responsive design system</li>
                        <li>Optimized production builds with minimal CSS</li>
                        <li>Easy theming for different resume templates</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Alternatives Considered:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Bootstrap</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Material UI</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Styled Components</span>
                      </div>
                    </div>
                  </div>

                  {/* TypeScript */}
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="h-10 w-10">
                          <path fill="#007acc" d="M0 200V0h400v400H0" />
                          <path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">TypeScript</h3>
                        <p className="text-gray-600">JavaScript with syntax for types</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Why We Chose TypeScript:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Static typing reduces runtime errors and improves code quality</li>
                        <li>Better developer experience with intelligent code completion</li>
                        <li>Type definitions provide self-documenting code</li>
                        <li>Enables easier refactoring and maintenance</li>
                        <li>Strong support in the React ecosystem</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Alternatives Considered:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">JavaScript with JSDoc</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Flow</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">ReasonML</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Practices Section */}
              <section id="best-practices" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                    Best Practices
                  </span>
                  <div className="h-1 w-0 group-hover:w-[100px] bg-resume-purple mt-1 transition-all duration-300"></div>
                </h2>

                <div className="space-y-6">
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Code Organization</h3>
                    <p className="text-gray-600 mb-4">
                      Follow these guidelines for organizing your components and code structure:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Group related components in the same directory</li>
                      <li>Keep component files small and focused on a single responsibility</li>
                      <li>Use the feature-based folder structure for larger applications</li>
                      <li>Extract reusable logic into custom hooks</li>
                      <li>Separate UI components from container components</li>
                    </ul>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Performance Optimization</h3>
                    <p className="text-gray-600 mb-4">
                      Optimize your application for the best user experience:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Use React.memo for components that render often with the same props</li>
                      <li>Implement virtualization for long lists with react-window</li>
                      <li>Optimize images with next-gen formats and proper sizing</li>
                      <li>Use code splitting with React.lazy and Suspense</li>
                      <li>Memoize expensive calculations with useMemo</li>
                      <li>Debounce user input events that trigger expensive operations</li>
                    </ul>
                  </div>

                  {/* Interactive Card with Tabs */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800">State Management Patterns</h3>
                    </div>
                    <div className="p-6">
                      <div className="mb-4 border-b border-gray-200">
                        <div className="flex flex-wrap -mb-px">
                          <button className="inline-block p-4 text-resume-purple border-b-2 border-resume-purple active">
                            Context API
                          </button>
                          <button className="inline-block p-4 text-gray-500 hover:text-gray-700 border-b-2 border-transparent">
                            Redux
                          </button>
                          <button className="inline-block p-4 text-gray-500 hover:text-gray-700 border-b-2 border-transparent">
                            React Query
                          </button>
                        </div>
                      </div>
                      <div className="py-4">
                        <h4 className="font-medium text-gray-800 mb-2">Context API Pattern</h4>
                        <p className="text-gray-600 mb-4">
                          Use the Context API for sharing state between components without prop drilling.
                          This approach works well for our resume builder, which needs to share resume data
                          across multiple components.
                        </p>
                        <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto">
                          <pre>{`// ResumeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { ResumeData } from '../types';
import { initialResumeData } from '../data/initialData';

const ResumeContext = createContext<{
  resumeData: ResumeData;
  updateResume: (data: Partial<ResumeData>) => void;
}>({
  resumeData: initialResumeData,
  updateResume: () => {},
});

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  
  const updateResume = (data: Partial<ResumeData>) => {
    setResumeData(prev => ({ ...prev, ...data }));
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Accessibility Section */}
              <section id="accessibility" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                    Accessibility
                  </span>
                  <div className="h-1 w-0 group-hover:w-[100px] bg-resume-purple mt-1 transition-all duration-300"></div>
                </h2>

                <div className="p-6 border border-gray-200 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Accessibility Guidelines</h3>
                  <p className="text-gray-600 mb-4">
                    Our resume builder follows these accessibility best practices:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                    <li>Semantic HTML structure for screen reader compatibility</li>
                    <li>ARIA attributes for interactive components</li>
                    <li>Keyboard navigation support for all features</li>
                    <li>Color contrast that meets WCAG 2.1 AA standards</li>
                    <li>Focus indicators for interactive elements</li>
                    <li>Text alternatives for non-text content</li>
                  </ul>

                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-md">
                    <h4 className="flex items-center text-amber-800 font-medium mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Important Note
                    </h4>
                    <p className="text-amber-800 text-sm">
                      Always run accessibility audits before deploying updates to ensure compliance with WCAG standards.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Keyboard Navigation</h3>
                    <p className="text-gray-600 mb-4">
                      Ensure all interactive elements are accessible via keyboard:
                    </p>
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>{`// Example of focusable components
<Button onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleButtonClick();
  }
}}>
  Click Me
</Button>

// Using focus management hooks
useEffect(() => {
  if (isOpen) {
    titleInputRef.current?.focus();
  }
}, [isOpen]);`}</pre>
                    </div>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Screen Reader Support</h3>
                    <p className="text-gray-600 mb-4">
                      Implement proper ARIA attributes for screen reader compatibility:
                    </p>
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>{`// Example of accessible form field
<div>
  <label id="nameLabel">Full Name</label>
  <input
    aria-labelledby="nameLabel"
    aria-required="true"
    aria-invalid={!!errors.name}
  />
  {errors.name && (
    <p role="alert" className="error">
      {errors.name.message}
    </p>
  )}
</div>`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Internationalization Section */}
              <section id="i18n" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                    Internationalization
                  </span>
                  <div className="h-1 w-0 group-hover:w-[100px] bg-resume-purple mt-1 transition-all duration-300"></div>
                </h2>

                <div className="p-6 border border-gray-200 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Multi-language Support</h3>
                  <p className="text-gray-600 mb-4">
                    Our resume builder supports multiple languages using the i18next library:
                  </p>
                  <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto mb-6">
                    <pre>{`// i18n configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'personal.name': 'Full Name',
          'personal.email': 'Email Address',
          'experience.title': 'Work Experience',
          // ...more translations
        }
      },
      es: {
        translation: {
          'personal.name': 'Nombre Completo',
          'personal.email': 'Correo Electrónico',
          'experience.title': 'Experiencia Laboral',
          // ...more translations
        }
      },
      // ...more languages
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;`}</pre>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Using Translations in Components:</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>{`import { useTranslation } from 'react-i18next';

function PersonalInfoForm() {
  const { t } = useTranslation();
  
  return (
    <form>
      <label>{t('personal.name')}</label>
      <input type="text" />
      <label>{t('personal.email')}</label>
      <input type="email" />
    </form>
  );
}`}</pre>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Locale-specific Formatting</h3>
                  <p className="text-gray-600 mb-4">
                    Format dates, numbers, and other locale-specific content appropriately:
                  </p>
                  <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm overflow-x-auto">
                    <pre>{`import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';

// Format dates according to the user's locale
const formatDate = (date, userLocale) => {
  const localeMap = {
    en: enUS,
    es: es,
    // Add more locales as needed
  };
  
  const locale = localeMap[userLocale] || enUS;
  
  return format(new Date(date), 'MMM yyyy', { locale });
};

// Example usage
const startDate = '2020-01-15';
console.log(formatDate(startDate, 'en')); // Jan 2020
console.log(formatDate(startDate, 'es')); // ene 2020`}</pre>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                    Frequently Asked Questions
                  </span>
                  <div className="h-1 w-0 group-hover:w-[100px] bg-resume-purple mt-1 transition-all duration-300"></div>
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      question: "How do I add custom sections to my resume?",
                      answer: "You can add custom sections by using the 'Add Section' button in the resume editor. This allows you to create specialized sections like 'Certifications' or 'Publications'."
                    },
                    {
                      question: "Can I use my own fonts in the resume templates?",
                      answer: "Yes, you can customize the fonts used in your resume. Navigate to the 'Styling' tab in the editor and select from our library of fonts or upload your own."
                    },
                    {
                      question: "How do I share my resume with potential employers?",
                      answer: "After creating your resume, you can download it as a PDF or generate a unique sharable link that allows employers to view your resume online."
                    },
                    {
                      question: "Is there a limit to how many resumes I can create?",
                      answer: "With our free plan, you can create up to 3 different resumes. Premium subscribers can create unlimited resumes and store them in the cloud."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* New Changelog Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
                    Changelog
                  </span>
                  <div className="h-1 w-0 group-hover:w-[100px] bg-resume-purple mt-1 transition-all duration-300"></div>
                </h2>

                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    
                    {[
                      {
                        version: "v2.3.0",
                        date: "May 10, 2025",
                        type: "Feature",
                        title: "AI Resume Analyzer",
                        description: "Added new AI-powered resume analysis tool that provides personalized feedback and improvement suggestions."
                      },
                      {
                        version: "v2.2.1",
                        date: "April 22, 2025",
                        type: "Fix",
                        title: "PDF Export Improvements",
                        description: "Fixed issues with PDF exports on certain browsers and improved rendering quality."
                      },
                      {
                        version: "v2.2.0",
                        date: "April 5, 2025",
                        type: "Feature",
                        title: "New Templates",
                        description: "Added 5 new professional templates focused on creative industries."
                      },
                      {
                        version: "v2.1.0",
                        date: "March 18, 2025",
                        type: "Enhancement",
                        title: "Improved Accessibility",
                        description: "Comprehensive accessibility updates to meet WCAG 2.1 AA standards."
                      }
                    ].map((release, index) => (
                      <div key={index} className="relative pl-8 pb-8">
                        <div className="absolute left-0 transform -translate-x-1/2">
                          <div className={`h-5 w-5 rounded-full border-4 ${
                            release.type === 'Feature' ? 'border-green-500 bg-white' : 
                            release.type === 'Fix' ? 'border-red-500 bg-white' : 
                            'border-blue-500 bg-white'
                          }`}></div>
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">{release.version}</h3>
                            <span className="text-sm text-gray-500">{release.date}</span>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              release.type === 'Feature' ? 'bg-green-100 text-green-800' : 
                              release.type === 'Fix' ? 'bg-red-100 text-red-800' : 
                              'bg-blue-100 text-blue-800'
                            }`}>{release.type}</span>
                          </div>
                          <h4 className="font-medium mb-1 text-gray-700">{release.title}</h4>
                          <p className="text-gray-600">{release.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Newsletter Signup */}
              <section className="mb-8">
                <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-resume-purple">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-2/3">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Documentation Changes</h2>
                      <p className="text-white/80 mb-4">
                        Subscribe to our developer newsletter to receive updates on new features, API changes, and best practices.
                      </p>
                    </div>
                    <div className="md:w-1/3 w-full">
                      <div className="bg-white p-2 rounded-lg flex">
                        <input 
                          type="email"
                          placeholder="Enter your email"
                          className="flex-grow px-4 py-2 focus:outline-none"
                        />
                        <button className="bg-resume-purple hover:bg-resume-dark-purple text-white px-4 py-2 rounded-md transition-colors">
                          Subscribe
                        </button>
                      </div>
                      <p className="text-white/70 text-sm mt-2">
                        We'll never share your email with anyone else.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
