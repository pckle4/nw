
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, FileText, Folder, Hash, ExternalLink, Copy, Check, Search, Menu, X, Code, Database, Zap, Brain, Download, Eye, Edit3, Users, Settings, FileDown, Palette, Target, Layers, GitBranch, Shield, Globe, Cpu, Monitor, Cloud, Lock, Rocket, Gauge, Component } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FileTreeItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: FileTreeItem[];
  description?: string;
  props?: Array<{ name: string; type: string; description: string; required?: boolean }>;
  usage?: string;
  examples?: Array<{ title: string; code: string }>;
  dataFlow?: string;
  stateManagement?: string;
  dependencies?: string[];
  returnValues?: Array<{ name: string; type: string; description: string }>;
}

const Documentation = () => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['components', 'forms', 'templates']));
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const fileTree: FileTreeItem[] = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      type: 'file',
      description: 'Complete guide to building resumes with our component library',
    },
    {
      id: 'components',
      name: 'Core Components',
      type: 'folder',
      children: [
        {
          id: 'resume-form',
          name: 'ResumeForm',
          type: 'file',
          description: 'Main orchestrator component that manages the multi-step resume building process',
          props: [
            { name: 'data', type: 'ResumeData', description: 'Complete resume data object containing all user information', required: true },
            { name: 'onChange', type: '(data: ResumeData) => void', description: 'Callback function triggered when any form data changes', required: true },
            { name: 'currentStep', type: 'number', description: 'Active step in the form wizard (0-4)', required: false },
            { name: 'onStepChange', type: '(step: number) => void', description: 'Callback when user navigates between steps', required: false },
            { name: 'showPreview', type: 'boolean', description: 'Controls visibility of live preview panel', required: false },
          ],
          usage: 'The ResumeForm is the central component that orchestrates the entire resume building experience. It manages form state, validation, step navigation, and integrates with AI suggestions.',
          dataFlow: 'Receives resume data from parent component, passes data down to individual form components, collects changes through callbacks, and propagates updates back to parent.',
          stateManagement: 'Uses React Hook Form for form state management with Zod validation schemas. Maintains current step state and handles form submission.',
          dependencies: ['react-hook-form', '@hookform/resolvers', 'zod'],
          examples: [
            {
              title: 'Basic Implementation',
              code: `import { ResumeForm } from '@/components/ResumeForm';
import { useState } from 'react';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState(initialData);
  const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <ResumeForm 
      data={resumeData}
      onChange={setResumeData}
      currentStep={currentStep}
      onStepChange={setCurrentStep}
      showPreview={true}
    />
  );
};`
            },
            {
              title: 'With Custom Validation',
              code: `const CustomResumeForm = () => {
  const [data, setData] = useState(initialData);
  
  const handleDataChange = (newData) => {
    // Custom validation logic
    if (validateResumeData(newData)) {
      setData(newData);
      saveToLocalStorage(newData);
    }
  };
  
  return (
    <ResumeForm 
      data={data}
      onChange={handleDataChange}
    />
  );
};`
            }
          ]
        },
        {
          id: 'resume-preview',
          name: 'ResumePreview',
          type: 'file',
          description: 'Real-time preview component that renders the resume using selected templates',
          props: [
            { name: 'data', type: 'ResumeData', description: 'Resume data to render in the preview', required: true },
            { name: 'template', type: 'TemplateType', description: 'Selected template for styling ("modern" | "minimal" | "colorful")', required: true },
            { name: 'zoom', type: 'number', description: 'Zoom level for preview scaling (0.5-2.0)', required: false },
            { name: 'showControls', type: 'boolean', description: 'Show zoom and download controls', required: false },
            { name: 'onTemplateChange', type: '(template: TemplateType) => void', description: 'Callback when template is changed', required: false },
          ],
          usage: 'Provides live preview of the resume as users input data. Automatically updates when data changes and supports different templates and zoom levels.',
          dataFlow: 'Receives resume data and template selection, renders using template components, provides download functionality through hooks.',
          stateManagement: 'Uses useZoom hook for zoom controls, useResumeDownload for export functionality. Manages preview state and template rendering.',
          dependencies: ['html2canvas', 'jspdf', 'react'],
          examples: [
            {
              title: 'Basic Preview',
              code: `import { ResumePreview } from '@/components/ResumePreview';

const PreviewPanel = ({ resumeData, selectedTemplate }) => {
  return (
    <div className="preview-container">
      <ResumePreview 
        data={resumeData}
        template={selectedTemplate}
        zoom={1.0}
        showControls={true}
      />
    </div>
  );
};`
            },
            {
              title: 'With Template Switching',
              code: `const InteractivePreview = () => {
  const [template, setTemplate] = useState('modern');
  const [zoom, setZoom] = useState(1);
  
  return (
    <ResumePreview 
      data={resumeData}
      template={template}
      zoom={zoom}
      onTemplateChange={setTemplate}
      showControls={true}
    />
  );
};`
            }
          ]
        },
        {
          id: 'template-selector',
          name: 'TemplateSelector',
          type: 'file',
          description: 'Interactive template selection component with live previews',
          props: [
            { name: 'selectedTemplate', type: 'TemplateType', description: 'Currently active template', required: true },
            { name: 'onTemplateChange', type: '(template: TemplateType) => void', description: 'Callback when user selects a template', required: true },
            { name: 'resumeData', type: 'ResumeData', description: 'Sample data for template previews', required: false },
            { name: 'showPreviews', type: 'boolean', description: 'Enable mini previews for each template', required: false },
          ],
          usage: 'Allows users to browse and select from available resume templates. Shows visual previews and template descriptions.',
          dataFlow: 'Receives current template selection, displays available templates with previews, returns selected template through callback.',
          stateManagement: 'Manages template selection state, preview generation, and user interactions.',
          examples: [
            {
              title: 'Template Gallery',
              code: `import { TemplateSelector } from '@/components/TemplateSelector';

const TemplateGallery = () => {
  const [template, setTemplate] = useState('modern');
  
  return (
    <TemplateSelector 
      selectedTemplate={template}
      onTemplateChange={setTemplate}
      resumeData={sampleData}
      showPreviews={true}
    />
  );
};`
            }
          ]
        }
      ]
    },
    {
      id: 'form-components',
      name: 'Form Components',
      type: 'folder',
      children: [
        {
          id: 'personal-info-form',
          name: 'PersonalInfoForm',
          type: 'file',
          description: 'Collects basic personal information including contact details and professional summary',
          props: [
            { name: 'data', type: 'PersonalInfo', description: 'Personal information data object', required: true },
            { name: 'onChange', type: '(data: PersonalInfo) => void', description: 'Callback for data updates', required: true },
            { name: 'showAiTips', type: 'boolean', description: 'Enable AI-powered suggestions', required: false },
          ],
          usage: 'First step in resume building process. Collects name, contact info, location, and professional summary with AI assistance.',
          dataFlow: 'Receives personal info object, validates input fields, provides AI suggestions for summary, returns updated data.',
          stateManagement: 'Uses controlled components with real-time validation. Integrates with AI service for professional summary suggestions.',
          examples: [
            {
              title: 'Personal Info Step',
              code: `const PersonalInfoStep = ({ data, onChange }) => {
  return (
    <PersonalInfoForm 
      data={data.personalInfo}
      onChange={(personalInfo) => 
        onChange({ ...data, personalInfo })
      }
      showAiTips={true}
    />
  );
};`
            }
          ]
        },
        {
          id: 'experience-form',
          name: 'ExperienceForm',
          type: 'file',
          description: 'Dynamic form for managing work experience entries with drag-and-drop reordering',
          props: [
            { name: 'experiences', type: 'Experience[]', description: 'Array of work experience objects', required: true },
            { name: 'onChange', type: '(experiences: Experience[]) => void', description: 'Callback for experience updates', required: true },
            { name: 'enableReordering', type: 'boolean', description: 'Allow drag-and-drop reordering', required: false },
          ],
          usage: 'Manages multiple work experience entries. Supports adding, editing, deleting, and reordering experiences with AI-powered achievement suggestions.',
          dataFlow: 'Receives experience array, manages CRUD operations, provides AI suggestions for achievements, returns updated experience list.',
          stateManagement: 'Manages dynamic list of experiences, form validation for each entry, drag-and-drop state.',
          examples: [
            {
              title: 'Experience Management',
              code: `const ExperienceStep = ({ data, onChange }) => {
  const updateExperiences = (experiences) => {
    onChange({ ...data, experiences });
  };
  
  return (
    <ExperienceForm 
      experiences={data.experiences}
      onChange={updateExperiences}
      enableReordering={true}
    />
  );
};`
            }
          ]
        },
        {
          id: 'education-form',
          name: 'EducationForm',
          type: 'file',
          description: 'Education background form with degree validation and institution lookup',
          props: [
            { name: 'education', type: 'Education[]', description: 'Array of education entries', required: true },
            { name: 'onChange', type: '(education: Education[]) => void', description: 'Callback for education updates', required: true },
          ],
          usage: 'Collects educational background including degrees, institutions, dates, and relevant coursework.',
          dataFlow: 'Manages education entries with institution validation and degree verification.',
        },
        {
          id: 'skills-form',
          name: 'SkillsForm',
          type: 'file',
          description: 'Skills input with categorization and proficiency levels',
          props: [
            { name: 'skills', type: 'SkillCategory[]', description: 'Categorized skills array', required: true },
            { name: 'onChange', type: '(skills: SkillCategory[]) => void', description: 'Callback for skills updates', required: true },
          ],
          usage: 'Organizes skills by category with proficiency ratings and AI-powered skill suggestions based on job market trends.',
        }
      ]
    },
    {
      id: 'templates',
      name: 'Resume Templates',
      type: 'folder',
      children: [
        {
          id: 'modern-template',
          name: 'ModernTemplate',
          type: 'file',
          description: 'Contemporary template with clean typography and subtle color accents',
          props: [
            { name: 'data', type: 'ResumeData', description: 'Complete resume data for rendering', required: true },
            { name: 'scale', type: 'number', description: 'Rendering scale for PDF export', required: false },
          ],
          usage: 'Professional template suitable for tech, finance, and corporate roles. Features clean typography and organized sections.',
          examples: [
            {
              title: 'Modern Template Usage',
              code: `import { ModernTemplate } from '@/components/templates/ModernTemplate';

const ResumeRenderer = ({ data }) => {
  return (
    <div className="resume-container">
      <ModernTemplate 
        data={data}
        scale={1.0}
      />
    </div>
  );
};`
            }
          ]
        },
        {
          id: 'minimal-template',
          name: 'MinimalTemplate',
          type: 'file',
          description: 'Ultra-clean template focusing on content with minimal design elements',
          usage: 'Perfect for conservative industries, academic positions, and senior executive roles.',
        },
        {
          id: 'colorful-template',
          name: 'ColorfulTemplate',
          type: 'file',
          description: 'Creative template with bold colors and modern design elements',
          usage: 'Ideal for creative roles, marketing positions, and startup environments.',
        }
      ]
    },
    {
      id: 'hooks',
      name: 'Custom Hooks',
      type: 'folder',
      children: [
        {
          id: 'use-resume-download',
          name: 'useResumeDownload',
          type: 'file',
          description: 'Hook for generating and downloading resumes in various formats (PDF, PNG)',
          returnValues: [
            { name: 'downloadPDF', type: '() => Promise<void>', description: 'Generate and download PDF version' },
            { name: 'downloadPNG', type: '() => Promise<void>', description: 'Generate and download PNG image' },
            { name: 'isGenerating', type: 'boolean', description: 'Loading state during generation' },
            { name: 'error', type: 'string | null', description: 'Error message if generation fails' },
          ],
          usage: 'Handles the complex process of converting DOM elements to downloadable files using html2canvas and jsPDF.',
          stateManagement: 'Manages download state, error handling, and progress tracking for file generation.',
          dataFlow: 'Captures resume DOM element, converts to canvas, generates file blob, triggers browser download.',
          dependencies: ['html2canvas', 'jspdf', 'file-saver'],
          examples: [
            {
              title: 'Download Integration',
              code: `import { useResumeDownload } from '@/hooks/useResumeDownload';

const DownloadButton = ({ resumeRef }) => {
  const { downloadPDF, isGenerating, error } = useResumeDownload(resumeRef);
  
  return (
    <Button 
      onClick={downloadPDF}
      disabled={isGenerating}
    >
      {isGenerating ? 'Generating...' : 'Download PDF'}
    </Button>
  );
};`
            },
            {
              title: 'Multiple Format Downloads',
              code: `const ExportOptions = ({ resumeRef }) => {
  const { downloadPDF, downloadPNG, isGenerating } = useResumeDownload(resumeRef);
  
  return (
    <div className="export-options">
      <Button onClick={downloadPDF} disabled={isGenerating}>
        Download PDF
      </Button>
      <Button onClick={downloadPNG} disabled={isGenerating}>
        Download PNG
      </Button>
    </div>
  );
};`
            }
          ]
        },
        {
          id: 'use-zoom',
          name: 'useZoom',
          type: 'file',
          description: 'Hook for managing preview zoom functionality with smooth transitions',
          returnValues: [
            { name: 'scale', type: 'number', description: 'Current zoom scale (0.5-2.0)' },
            { name: 'handleZoomIn', type: '() => void', description: 'Increase zoom level by 0.1' },
            { name: 'handleZoomOut', type: '() => void', description: 'Decrease zoom level by 0.1' },
            { name: 'handleResetZoom', type: '() => void', description: 'Reset zoom to 1.0' },
            { name: 'canZoomIn', type: 'boolean', description: 'Whether further zoom in is possible' },
            { name: 'canZoomOut', type: 'boolean', description: 'Whether further zoom out is possible' },
          ],
          usage: 'Provides zoom controls for resume preview with constrained scaling and smooth animations.',
          stateManagement: 'Manages zoom level state with min/max constraints and provides helper functions for zoom operations.',
          examples: [
            {
              title: 'Zoom Controls',
              code: `import { useZoom } from '@/hooks/useZoom';

const ZoomControls = () => {
  const { 
    scale, 
    handleZoomIn, 
    handleZoomOut, 
    handleResetZoom,
    canZoomIn,
    canZoomOut 
  } = useZoom(1.0);
  
  return (
    <div className="zoom-controls">
      <Button onClick={handleZoomOut} disabled={!canZoomOut}>
        Zoom Out
      </Button>
      <span>{Math.round(scale * 100)}%</span>
      <Button onClick={handleZoomIn} disabled={!canZoomIn}>
        Zoom In
      </Button>
      <Button onClick={handleResetZoom}>
        Reset
      </Button>
    </div>
  );
};`
            }
          ]
        }
      ]
    },
    {
      id: 'types',
      name: 'TypeScript Types',
      type: 'folder',
      children: [
        {
          id: 'resume-types',
          name: 'resume.ts',
          type: 'file',
          description: 'Core TypeScript interfaces defining the resume data structure',
          usage: 'Defines the complete type system for resume data, ensuring type safety across the application.',
          examples: [
            {
              title: 'Core Resume Interface',
              code: `export interface ResumeData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: SkillCategory[];
  projects?: Project[];
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
  summary: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  achievements: string[];
}`
            }
          ]
        }
      ]
    },
    {
      id: 'ai-integration',
      name: 'AI Features',
      type: 'folder',
      children: [
        {
          id: 'ai-tips',
          name: 'AiTips',
          type: 'file',
          description: 'Context-aware AI suggestions for improving resume content',
          props: [
            { name: 'field', type: 'string', description: 'Form field being edited', required: true },
            { name: 'content', type: 'string', description: 'Current field content', required: true },
            { name: 'onApplySuggestion', type: '(suggestion: string) => void', description: 'Apply AI suggestion callback', required: true },
          ],
          usage: 'Provides intelligent suggestions for resume content based on field context and industry best practices.',
        }
      ]
    }
  ];

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredTree = (items: FileTreeItem[]): FileTreeItem[] => {
    if (!searchQuery) return items;
    
    return items.filter(item => {
      if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
      }
      if (item.children) {
        const filteredChildren = filteredTree(item.children);
        return filteredChildren.length > 0;
      }
      return false;
    }).map(item => ({
      ...item,
      children: item.children ? filteredTree(item.children) : undefined
    }));
  };

  const renderFileTree = (items: FileTreeItem[], depth = 0) => {
    return filteredTree(items).map((item) => (
      <div key={item.id} className="select-none">
        <div
          className={`flex items-center gap-2 py-1.5 px-2 rounded-md cursor-pointer transition-colors hover:bg-slate-100 ${
            activeSection === item.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' : 'text-slate-700'
          }`}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          onClick={() => {
            if (item.type === 'file') {
              setActiveSection(item.id);
              setSidebarOpen(false);
            } else {
              toggleFolder(item.id);
            }
          }}
        >
          {item.type === 'folder' && (
            expandedFolders.has(item.id) ? 
              <ChevronDown className="h-4 w-4 text-slate-500" /> : 
              <ChevronRight className="h-4 w-4 text-slate-500" />
          )}
          {item.type === 'folder' ? 
            <Folder className="h-4 w-4 text-blue-600" /> : 
            <FileText className="h-4 w-4 text-slate-600" />
          }
          <span className="text-sm font-medium">{item.name}</span>
        </div>
        {item.type === 'folder' && expandedFolders.has(item.id) && item.children && (
          <div className="mt-1">
            {renderFileTree(item.children, depth + 1)}
          </div>
        )}
      </div>
    ));
  };

  const findItemById = (items: FileTreeItem[], id: string): FileTreeItem | null => {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findItemById(item.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const activeItem = findItemById(fileTree, activeSection);

  const renderContent = () => {
    if (!activeItem) return null;

    if (activeSection === 'getting-started') {
      return (
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Getting Started</h1>
            <p className="text-xl text-slate-600 mb-8">
              Build professional resumes with our comprehensive component library. This documentation covers every component, hook, and utility you need.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-blue-600" />
                Quick Start Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Code className="h-5 w-5 text-green-600" />
                    1. Installation
                  </h4>
                  <div className="bg-slate-900 text-slate-100 rounded-md p-3 relative">
                    <code className="text-sm">npm install @nowhile/resume-builder</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-2 top-2 h-6 w-6 p-0 text-slate-400 hover:text-slate-100"
                      onClick={() => copyToClipboard('npm install @nowhile/resume-builder', 'install')}
                    >
                      {copiedCode === 'install' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Component className="h-5 w-5 text-purple-600" />
                    2. Import Components
                  </h4>
                  <div className="bg-slate-900 text-slate-100 rounded-md p-3 relative">
                    <pre className="text-sm"><code>{`import { 
  ResumeForm, 
  ResumePreview,
  TemplateSelector 
} from '@nowhile/resume-builder';`}</code></pre>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  3. Basic Implementation
                </h4>
                <div className="bg-slate-900 text-slate-100 rounded-md p-4 relative">
                  <pre className="text-sm overflow-x-auto"><code>{`import { useState } from 'react';
import { ResumeForm, ResumePreview } from '@nowhile/resume-builder';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState(initialData);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ResumeForm 
        data={resumeData}
        onChange={setResumeData}
        showAiTips={true}
      />
      <ResumePreview 
        data={resumeData}
        template={selectedTemplate}
        showControls={true}
      />
    </div>
  );
};`}</code></pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-3 top-3 h-6 w-6 p-0 text-slate-400 hover:text-slate-100"
                    onClick={() => copyToClipboard(`import { useState } from 'react';
import { ResumeForm, ResumePreview } from '@nowhile/resume-builder';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState(initialData);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ResumeForm 
        data={resumeData}
        onChange={setResumeData}
        showAiTips={true}
      />
      <ResumePreview 
        data={resumeData}
        template={selectedTemplate}
        showControls={true}
      />
    </div>
  );
};`, 'basic')}
                  >
                    {copiedCode === 'basic' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Database className="h-5 w-5" />
                  Data Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-600 mb-3">Centralized resume data model with TypeScript support</p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• Personal Information</li>
                  <li>• Work Experience</li>
                  <li>• Education Background</li>
                  <li>• Skills & Competencies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Brain className="h-5 w-5" />
                  AI Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-600 mb-3">Smart suggestions and content optimization</p>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• Professional summaries</li>
                  <li>• Achievement descriptions</li>
                  <li>• Skill recommendations</li>
                  <li>• Industry insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Download className="h-5 w-5" />
                  Export Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-purple-600 mb-3">High-quality resume generation</p>
                <ul className="text-xs text-purple-600 space-y-1">
                  <li>• PDF export (print-ready)</li>
                  <li>• PNG images</li>
                  <li>• ATS-optimized formats</li>
                  <li>• Multiple templates</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{activeItem.name}</h1>
          <p className="text-xl text-slate-600 mb-6">{activeItem.description}</p>
          
          {activeItem.type === 'file' && (
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {activeItem.returnValues ? 'Hook' : 'Component'}
              </Badge>
              <Badge variant="secondary">TypeScript</Badge>
              {activeItem.dependencies && (
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  {activeItem.dependencies.length} Dependencies
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Data Flow Section */}
        {activeItem.dataFlow && (
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-700">
                <GitBranch className="h-5 w-5" />
                Data Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-emerald-700">{activeItem.dataFlow}</p>
            </CardContent>
          </Card>
        )}

        {/* State Management Section */}
        {activeItem.stateManagement && (
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <Settings className="h-5 w-5" />
                State Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700">{activeItem.stateManagement}</p>
            </CardContent>
          </Card>
        )}

        {/* Props Table */}
        {activeItem.props && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="h-5 w-5" />
                Props
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Required</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeItem.props.map((prop, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4">
                          <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-800">
                            {prop.name}
                          </code>
                        </td>
                        <td className="py-3 px-4">
                          <code className="text-sm font-mono text-blue-600">{prop.type}</code>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant={prop.required ? "destructive" : "secondary"}>
                            {prop.required ? "Required" : "Optional"}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-600">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Return Values for Hooks */}
        {activeItem.returnValues && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Return Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeItem.returnValues.map((returnValue, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4">
                          <code className="bg-emerald-100 px-2 py-1 rounded text-sm font-mono text-emerald-800">
                            {returnValue.name}
                          </code>
                        </td>
                        <td className="py-3 px-4">
                          <code className="text-sm font-mono text-purple-600">{returnValue.type}</code>
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-600">{returnValue.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Dependencies */}
        {activeItem.dependencies && (
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-700">
                <Component className="h-5 w-5" />
                Dependencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {activeItem.dependencies.map((dep, index) => (
                  <Badge key={index} variant="outline" className="bg-white text-indigo-700 border-indigo-300">
                    {dep}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Usage Section */}
        {activeItem.usage && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">{activeItem.usage}</p>
            </CardContent>
          </Card>
        )}

        {/* Examples */}
        {activeItem.examples && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Examples
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {activeItem.examples.map((example, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-3 text-slate-800">{example.title}</h4>
                  <div className="bg-slate-900 text-slate-100 rounded-lg p-4 relative">
                    <pre className="text-sm overflow-x-auto"><code>{example.code}</code></pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-3 top-3 h-6 w-6 p-0 text-slate-400 hover:text-slate-100"
                      onClick={() => copyToClipboard(example.code, `example-${index}`)}
                    >
                      {copiedCode === `example-${index}` ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Default content for items without specific content */}
        {!activeItem.props && !activeItem.examples && !activeItem.usage && !activeItem.returnValues && activeItem.id !== 'getting-started' && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8 text-slate-500">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">Documentation Coming Soon</p>
                <p className="text-sm">Detailed documentation for this component is being prepared.</p>
                <p className="text-sm mt-2">Check back soon for comprehensive props, usage examples, and implementation guides.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="flex">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-slate-200 transition-transform duration-300 z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } w-80 flex flex-col shadow-lg`}>
          {/* Sidebar Header */}
          <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Documentation
              </h2>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-slate-200 focus:border-blue-400"
              />
            </div>
          </div>

          {/* File Tree */}
          <div className="flex-1 overflow-auto p-4">
            <nav className="space-y-1">
              {renderFileTree(fileTree)}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ExternalLink className="h-4 w-4" />
                <a href="#" className="hover:text-slate-800 transition-colors">
                  GitHub Repository
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Globe className="h-4 w-4" />
                <a href="#" className="hover:text-slate-800 transition-colors">
                  API Reference
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Mobile Header */}
          <div className="lg:hidden bg-white border-b border-slate-200 p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2"
            >
              <Menu className="h-4 w-4" />
              Documentation Menu
            </Button>
          </div>

          {/* Content Area */}
          <main className="max-w-4xl mx-auto p-6 lg:p-8">
            {renderContent()}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
