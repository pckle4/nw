
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, FileText, Folder, Hash, ExternalLink, Copy, Check, Search, Menu, X } from 'lucide-react';
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
      description: 'Quick start guide to using the Resume Builder',
    },
    {
      id: 'components',
      name: 'Components',
      type: 'folder',
      children: [
        {
          id: 'resume-form',
          name: 'ResumeForm',
          type: 'file',
          description: 'Main form component for resume data input',
          props: [
            { name: 'data', type: 'ResumeData', description: 'Current resume data object', required: true },
            { name: 'onChange', type: '(data: ResumeData) => void', description: 'Callback when data changes', required: true },
            { name: 'currentStep', type: 'number', description: 'Current form step (0-4)', required: false },
          ],
          usage: 'The main form component that handles all resume data input across multiple steps.',
          examples: [
            {
              title: 'Basic Usage',
              code: `import { ResumeForm } from '@/components/ResumeForm';

const App = () => {
  const [resumeData, setResumeData] = useState(initialData);
  
  return (
    <ResumeForm 
      data={resumeData}
      onChange={setResumeData}
      currentStep={0}
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
          description: 'Live preview component showing the formatted resume',
          props: [
            { name: 'data', type: 'ResumeData', description: 'Resume data to preview', required: true },
            { name: 'template', type: 'string', description: 'Template name to use', required: true },
            { name: 'zoom', type: 'number', description: 'Zoom level (0.5-2.0)', required: false },
          ],
          usage: 'Displays a live preview of the resume with the selected template and data.',
          examples: [
            {
              title: 'Preview with Modern Template',
              code: `import { ResumePreview } from '@/components/ResumePreview';

<ResumePreview 
  data={resumeData}
  template="modern"
  zoom={1.0}
/>`
            }
          ]
        },
        {
          id: 'template-selector',
          name: 'TemplateSelector',
          type: 'file',
          description: 'Component for selecting resume templates',
          props: [
            { name: 'selectedTemplate', type: 'string', description: 'Currently selected template', required: true },
            { name: 'onTemplateChange', type: '(template: string) => void', description: 'Template change callback', required: true },
          ],
        },
      ]
    },
    {
      id: 'forms',
      name: 'Form Components',
      type: 'folder',
      children: [
        {
          id: 'personal-info-form',
          name: 'PersonalInfoForm',
          type: 'file',
          description: 'Form for personal information input',
        },
        {
          id: 'experience-form',
          name: 'ExperienceForm',
          type: 'file',
          description: 'Form for work experience entries',
        },
        {
          id: 'education-form',
          name: 'EducationForm',
          type: 'file',
          description: 'Form for education background',
        },
        {
          id: 'skills-form',
          name: 'SkillsForm',
          type: 'file',
          description: 'Form for skills and competencies',
        },
      ]
    },
    {
      id: 'templates',
      name: 'Templates',
      type: 'folder',
      children: [
        {
          id: 'modern-template',
          name: 'ModernTemplate',
          type: 'file',
          description: 'Clean, modern resume layout for tech professionals',
        },
        {
          id: 'minimal-template',
          name: 'MinimalTemplate',
          type: 'file',
          description: 'Simple, elegant design for conservative industries',
        },
        {
          id: 'colorful-template',
          name: 'ColorfulTemplate',
          type: 'file',
          description: 'Creative, colorful layout for design and marketing roles',
        },
      ]
    },
    {
      id: 'hooks',
      name: 'Hooks',
      type: 'folder',
      children: [
        {
          id: 'use-resume-download',
          name: 'useResumeDownload',
          type: 'file',
          description: 'Hook for downloading resumes in various formats',
        },
        {
          id: 'use-zoom',
          name: 'useZoom',
          type: 'file',
          description: 'Hook for managing preview zoom functionality',
        },
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
          description: 'Core TypeScript interfaces and types',
        },
      ]
    },
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
              Welcome to the Resume Builder documentation. This guide will help you understand how to use and integrate our components.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="h-5 w-5" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">1. Install Dependencies</h4>
                  <div className="bg-slate-900 text-slate-100 rounded-md p-3 relative">
                    <code className="text-sm">npm install @resume-builder/components</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-2 top-2 h-6 w-6 p-0 text-slate-400 hover:text-slate-100"
                      onClick={() => copyToClipboard('npm install @resume-builder/components', 'install')}
                    >
                      {copiedCode === 'install' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">2. Import Components</h4>
                  <div className="bg-slate-900 text-slate-100 rounded-md p-3 relative">
                    <pre className="text-sm"><code>{`import { ResumeForm, ResumePreview } from '@resume-builder/components';`}</code></pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-2 top-2 h-6 w-6 p-0 text-slate-400 hover:text-slate-100"
                      onClick={() => copyToClipboard("import { ResumeForm, ResumePreview } from '@resume-builder/components';", 'import')}
                    >
                      {copiedCode === 'import' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">3. Basic Implementation</h4>
                  <div className="bg-slate-900 text-slate-100 rounded-md p-3 relative">
                    <pre className="text-sm"><code>{`const App = () => {
  const [resumeData, setResumeData] = useState(initialData);
  
  return (
    <div className="flex gap-8">
      <ResumeForm data={resumeData} onChange={setResumeData} />
      <ResumePreview data={resumeData} template="modern" />
    </div>
  );
};`}</code></pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-2 top-2 h-6 w-6 p-0 text-slate-400 hover:text-slate-100"
                      onClick={() => copyToClipboard(`const App = () => {
  const [resumeData, setResumeData] = useState(initialData);
  
  return (
    <div className="flex gap-8">
      <ResumeForm data={resumeData} onChange={setResumeData} />
      <ResumePreview data={resumeData} template="modern" />
    </div>
  );
};`, 'basic')}
                    >
                      {copiedCode === 'basic' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Component Architecture</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Form components handle data input</li>
                    <li>• Preview components render the resume</li>
                    <li>• Template components define layouts</li>
                    <li>• Hooks manage state and side effects</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Data Flow</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• ResumeData is the central state</li>
                    <li>• Forms update data via onChange</li>
                    <li>• Preview reacts to data changes</li>
                    <li>• Export hooks generate downloads</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{activeItem.name}</h1>
          <p className="text-xl text-slate-600 mb-6">{activeItem.description}</p>
          
          {activeItem.type === 'file' && (
            <div className="flex gap-2 mb-6">
              <Badge variant="outline">Component</Badge>
              <Badge variant="secondary">TypeScript</Badge>
            </div>
          )}
        </div>

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
                      <tr key={index} className="border-b border-slate-100">
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

        {activeItem.usage && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="h-5 w-5" />
                Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{activeItem.usage}</p>
            </CardContent>
          </Card>
        )}

        {activeItem.examples && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="h-5 w-5" />
                Examples
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {activeItem.examples.map((example, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-3">{example.title}</h4>
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

        {/* Default content for items without specific props/examples */}
        {!activeItem.props && !activeItem.examples && !activeItem.usage && activeItem.id !== 'getting-started' && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8 text-slate-500">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Documentation for this component is being updated.</p>
                <p className="text-sm mt-2">Check back soon for detailed props, usage examples, and API reference.</p>
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
    <div className="min-h-screen bg-slate-50">
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
        } w-80 flex flex-col`}>
          {/* Sidebar Header */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900">Documentation</h2>
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
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-50 border-slate-200"
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
          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ExternalLink className="h-4 w-4" />
              <a href="#" className="hover:text-slate-700 transition-colors">
                View on GitHub
              </a>
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
            >
              <Menu className="h-4 w-4 mr-2" />
              Documentation
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
