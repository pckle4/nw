
import React, { useState } from 'react';
import {
  FileText, Database, Paintbrush, Star, Component, Code, BookOpen,
  Layers, Settings, CircleArrowRight, FileCode, Puzzle, ImageIcon, Download, 
  CirclePlay, Check, Zap, Shield, Globe, Cpu, BrainCircuit, Lightbulb, 
  BarChart, GitBranch, Heart, Users, Info, HelpCircle, Workflow
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-blue-50/30 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-resume-purple via-blue-500 to-indigo-500 mb-4">
            How Nowhile Works
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A detailed technical explanation of how the resume builder collects data, 
            renders templates, and generates downloadable files.
          </p>
        </div>

        {/* Navigation tabs for small screens */}
        <div className="md:hidden mb-8">
          <Tabs defaultValue="overview" onValueChange={(value) => scrollToSection(value)}>
            <TabsList className="grid grid-cols-2 mb-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
            </TabsList>
            <TabsList className="grid grid-cols-3 mb-2">
              <TabsTrigger value="section-1">Data Collection</TabsTrigger>
              <TabsTrigger value="section-2">Components</TabsTrigger>
              <TabsTrigger value="section-3">Styling</TabsTrigger>
            </TabsList>
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="section-4">Templates</TabsTrigger>
              <TabsTrigger value="section-5">Animations</TabsTrigger>
              <TabsTrigger value="section-6">Export</TabsTrigger>
            </TabsList>
            <TabsList className="grid grid-cols-1 mt-2">
              <TabsTrigger value="section-7">Technology Choices</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Table of Contents - Desktop */}
        <div className="hidden md:block bg-white/80 rounded-xl shadow-md p-6 mb-10 animate-fade-in">
          <h2 className="text-xl font-bold text-resume-purple mb-4">Table of Contents</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { id: "section-1", icon: <Database className="h-5 w-5 text-blue-500" />, text: "Data Collection & Form Management" },
              { id: "section-2", icon: <Component className="h-5 w-5 text-green-500" />, text: "Component Architecture" },
              { id: "section-3", icon: <Paintbrush className="h-5 w-5 text-purple-500" />, text: "Styling & Responsive Design" },
              { id: "section-4", icon: <FileText className="h-5 w-5 text-orange-500" />, text: "Template Rendering System" },
              { id: "section-5", icon: <CirclePlay className="h-5 w-5 text-blue-600" />, text: "Animations & Transitions" },
              { id: "section-6", icon: <Download className="h-5 w-5 text-indigo-500" />, text: "Export & Download Process" },
              { id: "section-7", icon: <Lightbulb className="h-5 w-5 text-amber-500" />, text: "Technology Choices" }
            ].map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-2 p-3 w-full hover:bg-slate-100 rounded-md transition-colors",
                    activeSection === item.id ? "bg-slate-100 border-l-4 border-resume-purple" : ""
                  )}
                >
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Overview Section */}
        <section id="overview" className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Workflow className="h-8 w-8 text-resume-purple" />
            <h2 className="text-2xl font-bold text-gray-800">System Architecture Overview</h2>
          </div>

          <div className="bg-white/90 rounded-xl shadow-md p-6 space-y-6">
            <p className="text-gray-700">
              Nowhile is built with a modern React architecture focused on modularity, reusability, and performance. 
              The application follows these key architectural principles:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Component className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-blue-800">Component-Based Design</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  UI elements are broken down into reusable, independent components that can be composed to build complex interfaces.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Layers className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-purple-800">State Management</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Form data flows through React Hook Form with centralized validation using Zod schema.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-5 border border-green-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <GitBranch className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-green-800">Data Flow</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Unidirectional data flow from form inputs through the component hierarchy to the resume preview.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-5 border border-yellow-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-yellow-100 rounded-full">
                    <Cpu className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-yellow-800">Rendering Optimization</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Performance optimization with memoization, lazy loading, and conditional rendering.
                </p>
              </div>
            </div>

            {/* System Flow Diagram */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">System Flow Diagram</h3>
              <div className="relative bg-slate-50 p-8 rounded-xl border border-slate-200 overflow-hidden">
                {/* Data Flow Diagram */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                  {/* User Input */}
                  <div className="relative group">
                    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500 w-64 group-hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-blue-100 rounded-full">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-blue-700">User Input</h4>
                      </div>
                      <p className="text-sm text-gray-600">Form data collection with validation</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-xs rounded">Personal Info</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-xs rounded">Work Experience</span>
                        <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-xs rounded">Education</span>
                      </div>
                    </div>
                    <div className="absolute -right-16 top-1/2 hidden md:block w-8 h-8 animate-pulse">
                      <CircleArrowRight className="w-8 h-8 text-resume-purple" />
                    </div>
                  </div>

                  {/* Data Processing */}
                  <div className="relative group">
                    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500 w-64 group-hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-purple-100 rounded-full">
                          <BrainCircuit className="h-4 w-4 text-purple-600" />
                        </div>
                        <h4 className="font-bold text-purple-700">Data Processing</h4>
                      </div>
                      <p className="text-sm text-gray-600">State management & template selection</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-purple-50 text-purple-600 text-xs rounded">Schema Validation</span>
                        <span className="px-1.5 py-0.5 bg-purple-50 text-purple-600 text-xs rounded">Data Transformation</span>
                      </div>
                    </div>
                    <div className="absolute -right-16 top-1/2 hidden md:block w-8 h-8 animate-pulse">
                      <CircleArrowRight className="w-8 h-8 text-resume-purple" />
                    </div>
                  </div>

                  {/* Output Generation */}
                  <div className="group">
                    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500 w-64 group-hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-green-100 rounded-full">
                          <FileText className="h-4 w-4 text-green-600" />
                        </div>
                        <h4 className="font-bold text-green-700">Resume Output</h4>
                      </div>
                      <p className="text-sm text-gray-600">Template rendering & file export</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-green-50 text-green-600 text-xs rounded">PDF Export</span>
                        <span className="px-1.5 py-0.5 bg-green-50 text-green-600 text-xs rounded">PNG Export</span>
                        <span className="px-1.5 py-0.5 bg-green-50 text-green-600 text-xs rounded">Print-ready</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Flow Arrow */}
                <div className="md:hidden flex justify-center my-4">
                  <div className="rotate-90 w-8 h-8 animate-pulse">
                    <CircleArrowRight className="w-8 h-8 text-resume-purple" />
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
                  <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500"></div>
                  <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-500"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Data Collection */}
        <section id="section-1" className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Database className="h-8 w-8 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800">Data Collection & Form Management</h2>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">Form Structure</h3>
              <p className="text-gray-700">
                Nowhile uses React Hook Form with Zod validation to manage form state and validation. 
                The primary data structure is defined in <code>ResumeData</code> which contains:
              </p>
              
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-3 text-sm">
{`interface ResumeData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email?: string;
    phone?: string;
    location?: string;
    // And more personal fields...
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  skillCategories: SkillCategory[];
}`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">Form Components</h3>
              <p className="text-gray-700">
                Each section of the resume has its own form component that manages data collection:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <Card className="overflow-hidden border-blue-100 hover:shadow-md transition-shadow group">
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-blue-100 rounded-full transform group-hover:scale-110 transition-transform">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-blue-700">Personal Info Form</h4>
                    </div>
                    <p className="text-sm text-gray-600">Collects basic information like name, job title, and contact details.</p>
                    <div className="mt-2 text-xs text-blue-600">
                      <span className="flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> Real-time validation
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-indigo-100 hover:shadow-md transition-shadow group">
                  <div className="h-2 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-indigo-100 rounded-full transform group-hover:scale-110 transition-transform">
                        <Briefcase className="h-4 w-4 text-indigo-600" />
                      </div>
                      <h4 className="font-bold text-indigo-700">Experience Form</h4>
                    </div>
                    <p className="text-sm text-gray-600">Manages a list of work experiences with add/edit/delete capabilities.</p>
                    <div className="mt-2 text-xs text-indigo-600">
                      <span className="flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> Dynamic field arrays
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-purple-100 hover:shadow-md transition-shadow group">
                  <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-purple-100 rounded-full transform group-hover:scale-110 transition-transform">
                        <BookOpen className="h-4 w-4 text-purple-600" />
                      </div>
                      <h4 className="font-bold text-purple-700">Education Form</h4>
                    </div>
                    <p className="text-sm text-gray-600">Similar to experience, handles educational background with institution details.</p>
                    <div className="mt-2 text-xs text-purple-600">
                      <span className="flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> Date range validation
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-green-100 hover:shadow-md transition-shadow group">
                  <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-green-100 rounded-full transform group-hover:scale-110 transition-transform">
                        <BarChart className="h-4 w-4 text-green-600" />
                      </div>
                      <h4 className="font-bold text-green-700">Skills Form</h4>
                    </div>
                    <p className="text-sm text-gray-600">Manages skills with categorization and rating options for proficiency levels.</p>
                    <div className="mt-2 text-xs text-green-600">
                      <span className="flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> Drag and drop reordering
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-amber-100 hover:shadow-md transition-shadow group">
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-amber-100 rounded-full transform group-hover:scale-110 transition-transform">
                        <Puzzle className="h-4 w-4 text-amber-600" />
                      </div>
                      <h4 className="font-bold text-amber-700">Projects Form</h4>
                    </div>
                    <p className="text-sm text-gray-600">Handles project information with descriptions, technologies, and links.</p>
                    <div className="mt-2 text-xs text-amber-600">
                      <span className="flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> Rich text descriptions
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-red-100 hover:shadow-md transition-shadow group">
                  <div className="h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-red-100 rounded-full transform group-hover:scale-110 transition-transform">
                        <Info className="h-4 w-4 text-red-600" />
                      </div>
                      <h4 className="font-bold text-red-700">Additional Info Form</h4>
                    </div>
                    <p className="text-sm text-gray-600">Optional sections for certifications, languages, interests, and more.</p>
                    <div className="mt-2 text-xs text-red-600">
                      <span className="flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> Section toggling
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
                <h4 className="font-bold text-blue-700 mb-2">Technical Implementation</h4>
                <p className="text-gray-700 mb-3">Each form uses the following hooks and libraries:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-blue-600 text-sm mb-1">React Hook Form</h5>
                    <p className="text-xs text-gray-600">
                      Manages form state, validation, and submission with minimal re-renders and optimized performance.
                    </p>
                    <pre className="bg-gray-50 p-2 rounded mt-2 text-xs overflow-x-auto">
                      <code>{`const { control, watch } = useFormContext();`}</code>
                    </pre>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-blue-600 text-sm mb-1">Zod Schema Validation</h5>
                    <p className="text-xs text-gray-600">
                      Type-safe validation schemas that enforce data integrity and provide helpful error messages.
                    </p>
                    <pre className="bg-gray-50 p-2 rounded mt-2 text-xs overflow-x-auto">
                      <code>{`const schema = z.object({
  email: z.string().email().optional()
});`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">State Management</h3>
              <p className="text-gray-700">
                Form state is managed through a combination of local state (useState) and React Hook Form. 
                The data flow follows this pattern:
              </p>
              
              <div className="relative mt-6 overflow-hidden p-6 rounded-lg bg-gradient-to-r from-gray-100 to-blue-50">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                  <div className="bg-white p-4 rounded-md shadow-md border-l-4 border-blue-400 w-full md:w-64">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-blue-100 rounded-full">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <strong className="text-blue-700">User Input</strong>
                    </div>
                    <span className="text-sm text-gray-600">Form fields with validation</span>
                    <div className="mt-2 text-xs">
                      <code className="bg-blue-50 p-1 rounded text-blue-700">onChange → handleChange()</code>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-8 h-8 animate-pulse">
                    <CircleArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                  
                  <div className="bg-white p-4 rounded-md shadow-md border-l-4 border-green-400 w-full md:w-64">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-green-100 rounded-full">
                        <BrainCircuit className="h-4 w-4 text-green-600" />
                      </div>
                      <strong className="text-green-700">React Hook Form</strong>
                    </div>
                    <span className="text-sm text-gray-600">Form state & validation</span>
                    <div className="mt-2 text-xs">
                      <code className="bg-green-50 p-1 rounded text-green-700">useForm(), useFieldArray()</code>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-8 h-8 animate-pulse">
                    <CircleArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                  
                  <div className="bg-white p-4 rounded-md shadow-md border-l-4 border-purple-400 w-full md:w-64">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-purple-100 rounded-full">
                        <FileText className="h-4 w-4 text-purple-600" />
                      </div>
                      <strong className="text-purple-700">Resume Data</strong>
                    </div>
                    <span className="text-sm text-gray-600">Central state for preview & export</span>
                    <div className="mt-2 text-xs">
                      <code className="bg-purple-50 p-1 rounded text-purple-700">watch(), getValues()</code>
                    </div>
                  </div>
                </div>
                
                {/* Mobile flow arrows */}
                <div className="md:hidden flex flex-col items-center gap-4">
                  <div className="w-8 h-8 rotate-90 animate-pulse my-2">
                    <CircleArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="w-8 h-8 rotate-90 animate-pulse my-2">
                    <CircleArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                
                <div className="absolute -z-10 opacity-20 top-0 right-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 opacity-20 bottom-0 left-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl"></div>
              </div>

              <div className="mt-6 bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-md">
                <h4 className="font-bold text-indigo-700 mb-2">Performance Optimizations</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-indigo-600 text-sm flex items-center gap-1">
                      <Zap className="h-4 w-4" /> Memoization
                    </h5>
                    <p className="text-xs text-gray-600 mt-1">
                      React.memo and useMemo are used to prevent unnecessary re-renders of form components when unrelated 
                      sections change.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-indigo-600 text-sm flex items-center gap-1">
                      <Cpu className="h-4 w-4" /> Lazy Loading
                    </h5>
                    <p className="text-xs text-gray-600 mt-1">
                      Complex form sections are lazy-loaded to improve initial load performance and reduce bundle size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Component Architecture */}
        <section id="section-2" className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Component className="h-8 w-8 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-800">Component Architecture</h2>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg text-green-600 mb-2">Component Hierarchy</h3>
              <p className="text-gray-700">
                Nowhile uses a modular component architecture with clear separation of concerns:
              </p>
              
              <div className="mt-4 p-6 bg-gray-100 rounded-lg overflow-x-auto">
                <div className="min-w-[600px]">
                  <ul className="list-none space-y-2 font-mono text-sm">
                    <li className="flex items-center gap-2 text-blue-700 font-bold">
                      <Code className="h-4 w-4" /> App.tsx
                      <span className="text-gray-500 font-normal text-xs">(Root component with routing)</span>
                    </li>

                    <li className="pl-6 flex items-center gap-2 text-blue-700">
                      <Component className="h-4 w-4" /> Index.tsx
                      <span className="text-gray-500 text-xs">(Main page container)</span>
                    </li>

                    <li className="pl-12 flex items-center gap-2 text-blue-700">
                      <Component className="h-4 w-4" /> Header.tsx
                      <span className="text-gray-500 text-xs">(Navigation and branding)</span>
                    </li>

                    <li className="pl-12 flex items-center gap-2 text-green-600">
                      <Component className="h-4 w-4" /> ResumeForm.tsx 
                      <span className="text-gray-500 text-xs">(Form container with multi-step navigation)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-green-600">
                      <Component className="h-4 w-4" /> StepIndicator.tsx
                      <span className="text-gray-500 text-xs">(Progress tracking)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-green-600">
                      <Component className="h-4 w-4" /> PersonalInfoForm.tsx
                      <span className="text-gray-500 text-xs">(Step 1)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-green-600">
                      <Component className="h-4 w-4" /> ExperienceForm.tsx
                      <span className="text-gray-500 text-xs">(Step 2)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-green-600">
                      <Component className="h-4 w-4" /> EducationForm.tsx
                      <span className="text-gray-500 text-xs">(Step 3)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-green-600">
                      <Component className="h-4 w-4" /> SkillsForm.tsx
                      <span className="text-gray-500 text-xs">(Step 4)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-green-600">
                      <Component className="h-4 w-4" /> ProjectsForm.tsx
                      <span className="text-gray-500 text-xs">(Step 5)</span>
                    </li>

                    <li className="pl-12 flex items-center gap-2 text-purple-600">
                      <Component className="h-4 w-4" /> ResumePreview.tsx 
                      <span className="text-gray-500 text-xs">(Live preview display)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-purple-600">
                      <Component className="h-4 w-4" /> PreviewHeader.tsx
                      <span className="text-gray-500 text-xs">(Controls for preview)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-purple-600">
                      <Component className="h-4 w-4" /> ZoomControls.tsx
                      <span className="text-gray-500 text-xs">(Zoom in/out controls)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-purple-600">
                      <Component className="h-4 w-4" /> ResumeTemplateRenderer.tsx
                      <span className="text-gray-500 text-xs">(Template switcher component)</span>
                    </li>

                    <li className="pl-20 flex items-center gap-2 text-red-500">
                      <Component className="h-4 w-4" /> ModernTemplate.tsx
                      <span className="text-gray-500 text-xs">(Template variant)</span>
                    </li>

                    <li className="pl-20 flex items-center gap-2 text-red-500">
                      <Component className="h-4 w-4" /> MinimalTemplate.tsx
                      <span className="text-gray-500 text-xs">(Template variant)</span>
                    </li>

                    <li className="pl-20 flex items-center gap-2 text-red-500">
                      <Component className="h-4 w-4" /> ColorfulTemplate.tsx
                      <span className="text-gray-500 text-xs">(Template variant)</span>
                    </li>

                    <li className="pl-16 flex items-center gap-2 text-yellow-600">
                      <Component className="h-4 w-4" /> DownloadOptions.tsx
                      <span className="text-gray-500 text-xs">(Export controls)</span>
                    </li>

                    <li className="pl-12 flex items-center gap-2 text-orange-600">
                      <Component className="h-4 w-4" /> Footer.tsx
                      <span className="text-gray-500 text-xs">(Site footer)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-green-600 mb-2">Component Communication</h3>
              <p className="text-gray-700">
                Components communicate through several patterns to maintain a clean architecture:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-green-700 flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4" /> Props
                  </h4>
                  <p className="text-sm text-gray-700">
                    Direct parent-to-child data passing for component-specific information. This is the primary 
                    method for passing data down the component tree.
                  </p>
                  <pre className="bg-gray-50 p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>{`<ResumeTemplateRenderer 
  data={resumeData} 
  templateId={selectedTemplate} 
/>`}</code>
                  </pre>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-green-700 flex items-center gap-2 mb-2">
                    <Layers className="h-4 w-4" /> React Hook Form Context
                  </h4>
                  <p className="text-sm text-gray-700">
                    Provides form state and methods to all form components, allowing any component in the tree to access and modify form data.
                  </p>
                  <pre className="bg-gray-50 p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>{`const { control, watch } = useFormContext();
const skills = watch("skills");`}</code>
                  </pre>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-green-700 flex items-center gap-2 mb-2">
                    <Settings className="h-4 w-4" /> Custom Hooks
                  </h4>
                  <p className="text-sm text-gray-700">
                    Encapsulated logic shared between components. Hooks extract complex functionality into reusable units.
                  </p>
                  <pre className="bg-gray-50 p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>{`const { 
  isDownloading, 
  handleDownloadPDF 
} = useResumeDownload(resumeRef, data);`}</code>
                  </pre>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-green-700 flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4" /> Event Handlers
                  </h4>
                  <p className="text-sm text-gray-700">
                    Callbacks for user interactions, allowing child components to communicate back to parent components.
                  </p>
                  <pre className="bg-gray-50 p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>{`<TemplateSelector
  templates={templates}
  selectedId={templateId}
  onSelect={handleTemplateChange}
/>`}</code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
                <h4 className="font-bold text-green-700 mb-2">Key Components</h4>
                <p className="text-gray-700 mb-2">The core components include:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-green-600 text-sm">ResumeTemplateRenderer</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      The bridge between data and visual output that dynamically renders the selected template.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-green-600 text-sm">Template Components</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      Renders specific visual styles for the resume with different layouts and designs.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-green-600 text-sm">ZoomControls</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      Handles preview magnification for better viewing of resume details.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-green-600 text-sm">DownloadOptions</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      Manages export functionality with different file format options.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-green-600 text-sm">StepIndicator</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      Visualizes form progress and allows navigation between form sections.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-green-600 text-sm">AiTips</h5>
                    <p className="text-xs text-gray-600 mt-1">
                      Provides contextual suggestions to help users create better resumes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Styling & Responsive Design */}
        <section id="section-3" className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Paintbrush className="h-8 w-8 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-800">Styling & Responsive Design</h2>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg text-purple-600 mb-2">Styling Technologies</h3>
              <p className="text-gray-700">
                Nowhile uses a combination of modern CSS approaches:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5" /> Tailwind CSS
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Utility-first CSS framework that enables rapid UI development with responsive design. 
                    Used for layout, spacing, colors, and responsive adaptations.
                  </p>
                  <div className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <div className="flex gap-1 flex-wrap">
                      <span className="px-2 py-1 bg-purple-100 rounded text-purple-700">flex</span>
                      <span className="px-2 py-1 bg-purple-100 rounded text-purple-700">flex-col</span>
                      <span className="px-2 py-1 bg-purple-100 rounded text-purple-700">md:flex-row</span>
                      <span className="px-2 py-1 bg-purple-100 rounded text-purple-700">gap-4</span>
                      <span className="px-2 py-1 bg-purple-100 rounded text-purple-700">p-6</span>
                      <span className="px-2 py-1 bg-purple-100 rounded text-purple-700">rounded-lg</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <Component className="h-5 w-5" /> Shadcn UI
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Pre-built, accessible UI components built on Radix UI primitives.
                    Used for form controls, buttons, dialogs, and other interface elements.
                  </p>
                  <div className="bg-white p-2 rounded-md mt-2">
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs font-medium">Button</div>
                      <div className="px-3 py-1.5 bg-white border border-gray-300 rounded text-xs">Input</div>
                      <div className="h-4 w-4 rounded-sm border border-gray-300"></div>
                      <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <Layers className="h-5 w-5" /> CSS Variables
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Custom properties for theme colors and spacing values used across templates.
                    Enables consistent styling and theming capabilities.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>{`:root {
  --resume-primary: #8B5CF6;
  --resume-secondary: #EC4899;
  --resume-text: #1F2937;
  --resume-background: #FFFFFF;
}`}</code>
                  </pre>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg border border-amber-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-amber-700 mb-3 flex items-center gap-2">
                    <Settings className="h-5 w-5" /> Custom Classes
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Extension classes for specific resume template styling needs
                    like custom gradients and print-optimized layouts.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>{`.bg-resume-gradient {
  background: linear-gradient(
    102.3deg, 
    rgba(147,39,143,1) 5.9%, 
    rgba(234,172,232,1) 64%
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-purple-600 mb-2">Responsive Design Approach</h3>
              <p className="text-gray-700 mb-2">
                Nowhile implements a mobile-first responsive design strategy with multiple breakpoints:
              </p>
              
              <div className="overflow-hidden mt-4 rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="bg-purple-100 p-3">
                  <h4 className="font-bold text-purple-800">Responsive Breakpoints</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="border-b border-purple-200 p-3 text-left">Breakpoint</th>
                        <th className="border-b border-purple-200 p-3 text-left">CSS Class</th>
                        <th className="border-b border-purple-200 p-3 text-left">Width</th>
                        <th className="border-b border-purple-200 p-3 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-purple-50 transition-colors">
                        <td className="border-b border-purple-100 p-3">Default</td>
                        <td className="border-b border-purple-100 p-3 font-mono text-sm">-</td>
                        <td className="border-b border-purple-100 p-3">0px+</td>
                        <td className="border-b border-purple-100 p-3">Base mobile styles</td>
                      </tr>
                      <tr className="hover:bg-purple-50 transition-colors">
                        <td className="border-b border-purple-100 p-3">Small</td>
                        <td className="border-b border-purple-100 p-3 font-mono text-sm">sm:</td>
                        <td className="border-b border-purple-100 p-3">640px+</td>
                        <td className="border-b border-purple-100 p-3">Small devices, large phones</td>
                      </tr>
                      <tr className="hover:bg-purple-50 transition-colors">
                        <td className="border-b border-purple-100 p-3">Medium</td>
                        <td className="border-b border-purple-100 p-3 font-mono text-sm">md:</td>
                        <td className="border-b border-purple-100 p-3">768px+</td>
                        <td className="border-b border-purple-100 p-3">Tablets, smaller laptops</td>
                      </tr>
                      <tr className="hover:bg-purple-50 transition-colors">
                        <td className="border-b border-purple-100 p-3">Large</td>
                        <td className="border-b border-purple-100 p-3 font-mono text-sm">lg:</td>
                        <td className="border-b border-purple-100 p-3">1024px+</td>
                        <td className="border-b border-purple-100 p-3">Desktops, larger screens</td>
                      </tr>
                      <tr className="hover:bg-purple-50 transition-colors">
                        <td className="border-b border-purple-100 p-3">Extra Large</td>
                        <td className="border-b border-purple-100 p-3 font-mono text-sm">xl:</td>
                        <td className="border-b border-purple-100 p-3">1280px+</td>
                        <td className="border-b border-purple-100 p-3">Large desktop screens</td>
                      </tr>
                      <tr className="hover:bg-purple-50 transition-colors">
                        <td className="p-3">2X Large</td>
                        <td className="p-3 font-mono text-sm">2xl:</td>
                        <td className="p-3">1536px+</td>
                        <td className="p-3">Extra large screens, TVs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-700 mb-3">Responsive Application Layout</h4>
                <p className="text-gray-700 text-sm mb-4">
                  The application uses a responsive layout that adapts to different screen sizes:
                </p>
                
                <div className="space-y-6">
                  <div className="relative">
                    {/* Mobile Layout */}
                    <div className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100">
                        <div className="font-bold text-sm text-gray-700">Mobile View (< 768px)</div>
                        <div className="text-xs text-gray-500">Single column</div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-10 bg-gray-100 rounded w-full"></div>
                        <div className="h-40 bg-blue-100 rounded w-full"></div>
                        <div className="h-40 bg-purple-100 rounded w-full"></div>
                      </div>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="hidden md:flex justify-center my-3">
                      <div className="rotate-90 w-8 h-8">
                        <CircleArrowRight className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>
                    
                    {/* Desktop Layout */}
                    <div className="hidden md:block p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100">
                        <div className="font-bold text-sm text-gray-700">Desktop View (≥ 768px)</div>
                        <div className="text-xs text-gray-500">Two-column layout</div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-1/2 space-y-3">
                          <div className="h-10 bg-gray-100 rounded w-full"></div>
                          <div className="h-40 bg-blue-100 rounded w-full"></div>
                        </div>
                        <div className="w-1/2">
                          <div className="h-52 bg-purple-100 rounded w-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Labels with connecting lines */}
                    <div className="hidden md:block">
                      <div className="absolute top-4 left-[30%] transform -translate-x-1/2">
                        <div className="px-2 py-1 bg-gray-700 text-white text-xs rounded-sm">Header</div>
                        <div className="h-6 w-px bg-gray-400 mx-auto"></div>
                      </div>
                      <div className="absolute top-24 left-[30%] transform -translate-x-1/2">
                        <div className="px-2 py-1 bg-blue-600 text-white text-xs rounded-sm">Form Section</div>
                        <div className="h-6 w-px bg-blue-400 mx-auto"></div>
                      </div>
                      <div className="absolute top-16 left-[70%] transform -translate-x-1/2">
                        <div className="px-2 py-1 bg-purple-600 text-white text-xs rounded-sm">Preview Section</div>
                        <div className="h-6 w-px bg-purple-400 mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <h5 className="font-bold text-blue-600 mb-1">Mobile Layout</h5>
                      <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                        <li>Stacked form and preview sections</li>
                        <li>Simplified navigation with tabs</li>
                        <li>Touch-optimized input elements</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <h5 className="font-bold text-blue-600 mb-1">Tablet Layout</h5>
                      <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                        <li>Side-by-side form and preview</li>
                        <li>Collapsible sections</li>
                        <li>Optimized spacing and typography</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <h5 className="font-bold text-blue-600 mb-1">Desktop Layout</h5>
                      <ul className="list-disc pl-4 text-xs text-gray-600 space-y-1">
                        <li>Expanded form controls</li>
                        <li>Larger preview area</li>
                        <li>Side panel for additional tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-700 mb-2">Print Optimization</h4>
                <p className="text-gray-700 text-sm">
                  Special attention is given to print styles to ensure resumes look great when printed or exported to PDF:
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-green-600 text-sm mb-1">Print Style Techniques</h5>
                    <ul className="list-disc ml-4 text-xs text-gray-700 space-y-1">
                      <li>Custom media queries for print format</li>
                      <li>Page break controls to prevent awkward content splits</li>
                      <li>Special handling for backgrounds and colors</li>
                      <li>A4 size optimization (210 × 297 mm) for global compatibility</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-green-600 text-sm mb-1">Print-specific CSS</h5>
                    <pre className="bg-gray-50 p-2 rounded mt-1 text-xs overflow-x-auto">
                      <code>{`@media print {
  .resume-page {
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 0;
    page-break-after: always;
  }
  
  .no-print {
    display: none !important;
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Template Rendering System */}
        <section id="section-4" className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-8 w-8 text-orange-500" />
            <h2 className="text-2xl font-bold text-gray-800">Template Rendering System</h2>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg text-orange-600 mb-2">Template Architecture</h3>
              <p className="text-gray-700">
                The template system is built around a central renderer that dynamically loads the appropriate template component:
              </p>
              
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`// ResumeTemplateRenderer.tsx
const renderTemplate = () => {
  switch (templateId) {
    case 'modern':
      return <ModernTemplate data={data} showNowhileBranding={showNowhileBranding} />;
    case 'minimal':
      return <MinimalTemplate data={data} showNowhileBranding={showNowhileBranding} />;
    case 'colorful':
      return <ColorfulTemplate data={data} showNowhileBranding={showNowhileBranding} />;
    default:
      return <ModernTemplate data={data} showNowhileBranding={showNowhileBranding} />;
  }
};`}
                  </pre>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">Template Selection Process</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    The template renderer dynamically selects and renders the appropriate template component based on the user's choice:
                  </p>
                  <ol className="list-decimal ml-4 text-sm space-y-2 text-gray-700">
                    <li>User selects a template from the template selector</li>
                    <li>Selection is stored in application state</li>
                    <li>ResumeTemplateRenderer reads the template ID</li>
                    <li>Switch statement loads the appropriate component</li>
                    <li>Template is rendered with the current resume data</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-3">Template Component Structure</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Each template follows a consistent structure with sections that correspond to resume data sections:
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  <div className="bg-orange-50 p-3 rounded-md group hover:bg-orange-100 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2 group-hover:bg-orange-200 transition-colors">
                        <Users className="h-5 w-5 text-orange-600" />
                      </div>
                      <h5 className="font-bold text-orange-700 text-sm">Header</h5>
                      <p className="text-xs text-gray-600 mt-1">Personal info</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded-md group hover:bg-yellow-100 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-2 group-hover:bg-yellow-200 transition-colors">
                        <FileText className="h-5 w-5 text-yellow-600" />
                      </div>
                      <h5 className="font-bold text-yellow-700 text-sm">Summary</h5>
                      <p className="text-xs text-gray-600 mt-1">Professional overview</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-md group hover:bg-green-100 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2 group-hover:bg-green-200 transition-colors">
                        <Briefcase className="h-5 w-5 text-green-600" />
                      </div>
                      <h5 className="font-bold text-green-700 text-sm">Experience</h5>
                      <p className="text-xs text-gray-600 mt-1">Work history</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-md group hover:bg-blue-100 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <h5 className="font-bold text-blue-700 text-sm">Education</h5>
                      <p className="text-xs text-gray-600 mt-1">Academic background</p>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-3 rounded-md group hover:bg-indigo-100 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2 group-hover:bg-indigo-200 transition-colors">
                        <BarChart className="h-5 w-5 text-indigo-600" />
                      </div>
                      <h5 className="font-bold text-indigo-700 text-sm">Skills</h5>
                      <p className="text-xs text-gray-600 mt-1">Abilities & proficiencies</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded-md group hover:bg-purple-100 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors">
                        <Puzzle className="h-5 w-5 text-purple-600" />
                      </div>
                      <h5 className="font-bold text-purple-700 text-sm">Projects</h5>
                      <p className="text-xs text-gray-600 mt-1">Portfolio items</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-orange-600 mb-2">Multi-page Support</h3>
              <p className="text-gray-700">
                Nowhile implements intelligent pagination for resumes with extensive content:
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-md">
                  <h4 className="font-bold text-orange-700 mb-2">Overflow Detection</h4>
                  <p className="text-gray-700 mb-2 text-sm">The application uses DOM measurements to detect content overflow:</p>
                  <pre className="bg-white p-3 rounded-md text-xs overflow-x-auto">
{`useEffect(() => {
  const checkOverflow = () => {
    const resumeWrapper = document.querySelector('.resume-wrapper');
    if (!resumeWrapper) return;
    
    // Get the first page content height
    const firstPage = resumeWrapper.querySelector('.resume-page');
    if (!firstPage) return;
    
    const contentHeight = firstPage.scrollHeight;
    const containerHeight = firstPage.clientHeight;
    
    // If content exceeds the container, add another page
    if (contentHeight > containerHeight) {
      setIsOverflowing(true);
      setPages(Math.ceil(contentHeight / containerHeight));
    } else {
      setIsOverflowing(false);
      setPages(1);
    }
  };

  // Run the overflow check after content renders
  const timer = setTimeout(checkOverflow, 500);
  return () => clearTimeout(timer);
}, [data, templateId]);`}
                  </pre>
                </div>

                <div className="mt-0 bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-700 mb-2">Rendering Multiple Pages</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    When overflow is detected, the renderer creates additional pages:
                  </p>
                  <pre className="bg-white p-3 rounded-md text-xs overflow-x-auto">
{`return (
  <div className="resume-wrapper">
    {/* First page is always shown */}
    <div className="resume-page w-full h-full">
      {renderTemplate()}
    </div>
    
    {/* Show additional pages if needed */}
    {isOverflowing && pages > 1 && (
      <div className="resume-page w-full h-full bg-white mt-4 shadow-lg">
        <div className="p-6 text-center text-gray-500">
          <p className="font-medium">Content continuation from page 1</p>
          <p className="text-sm">(Additional content automatically flows to this page)</p>
        </div>
      </div>
    )}
  </div>
);`}
                  </pre>
                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-start gap-3 transform scale-75 origin-top-left sm:scale-100">
                      <div className="w-32 h-44 bg-white rounded-md shadow-md border border-gray-200 flex items-center justify-center p-2">
                        <div className="w-full h-full bg-gray-50 flex flex-col">
                          <div className="h-4 w-12 bg-orange-200 rounded-sm mb-1 mx-auto"></div>
                          <div className="h-2 w-20 bg-gray-200 rounded-sm mb-2 mx-auto"></div>
                          <div className="flex-1 px-1 space-y-1">
                            <div className="h-1.5 bg-gray-200 rounded-sm w-full"></div>
                            <div className="h-1.5 bg-gray-200 rounded-sm w-3/4"></div>
                            <div className="h-1.5 bg-gray-200 rounded-sm w-5/6"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center text-green-500 self-center">
                        <CircleArrowRight className="h-6 w-6" />
                      </div>
                      
                      <div className="w-32 h-44 bg-white rounded-md shadow-md border border-gray-200 flex items-center justify-center p-2">
                        <div className="w-full h-full bg-gray-50 flex flex-col">
                          <div className="h-3 w-16 bg-gray-300 rounded-sm mb-1 mx-auto"></div>
                          <div className="flex-1 px-1 space-y-1">
                            <div className="h-1.5 bg-gray-200 rounded-sm w-full"></div>
                            <div className="h-1.5 bg-gray-200 rounded-sm w-4/5"></div>
                            <div className="h-1.5 bg-gray-200 rounded-sm w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-700 mb-2">Template Customization Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-blue-600 text-sm mb-1 flex items-center gap-1">
                      <Paintbrush className="h-4 w-4" /> Color Schemes
                    </h5>
                    <p className="text-xs text-gray-600">
                      Each template offers multiple color variants that can be selected to match the user's preferences or industry.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-blue-600 text-sm mb-1 flex items-center gap-1">
                      <Layers className="h-4 w-4" /> Section Ordering
                    </h5>
                    <p className="text-xs text-gray-600">
                      Users can customize the order of resume sections based on their priorities and strengths.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <h5 className="font-bold text-blue-600 text-sm mb-1 flex items-center gap-1">
                      <Component className="h-4 w-4" /> Optional Sections
                    </h5>
                    <p className="text-xs text-gray-600">
                      Templates intelligently handle the display of optional sections like certifications or references.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Animations & Transitions */}
        <section id="section-5" className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <CirclePlay className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Animations & Transitions</h2>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">Animation Technologies</h3>
              <p className="text-gray-700">
                Nowhile uses several techniques to create smooth, performance-optimized animations:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-blue-700 mb-3 group-hover:translate-x-1 transition-transform duration-300">CSS Transitions</h4>
                  <p className="text-gray-700 text-sm">
                    Used for simple state changes like hover effects and color changes.
                    Performance-optimized for smooth interactions.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-3 text-xs overflow-x-auto border border-blue-100">
                    <code className="text-blue-800">transition-colors duration-300</code>
                  </pre>
                  <div className="mt-3 flex justify-center">
                    <div className="w-20 h-8 bg-blue-500 hover:bg-blue-600 rounded transition-colors duration-300 cursor-pointer"></div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-purple-700 mb-3 group-hover:translate-x-1 transition-transform duration-300">CSS Animations</h4>
                  <p className="text-gray-700 text-sm">
                    Keyframe animations for more complex effects like loading states and attention-grabbing elements.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-3 text-xs overflow-x-auto border border-purple-100">
                    <code className="text-purple-800">animate-fade-in animate-pulse</code>
                  </pre>
                  <div className="mt-3 flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-purple-500 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg border border-green-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-green-700 mb-3 group-hover:translate-x-1 transition-transform duration-300">React Transition States</h4>
                  <p className="text-gray-700 text-sm">
                    Component-based transitions using React state for coordinated animations and conditional rendering.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-3 text-xs overflow-x-auto border border-green-100">
                    <code className="text-green-800">const [isVisible, setIsVisible] = useState(false);</code>
                  </pre>
                  <div className="mt-3 flex justify-center">
                    <div className="animate-fade-in bg-gradient-to-r from-green-400 to-teal-400 text-white text-xs font-medium py-1 px-3 rounded">
                      Faded In Element
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-amber-700 mb-3 group-hover:translate-x-1 transition-transform duration-300">Tailwind Animation Classes</h4>
                  <p className="text-gray-700 text-sm">
                    Pre-configured animation utilities for common effects like fade, pulse, spin, and bounce.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-3 text-xs overflow-x-auto border border-amber-100">
                    <code className="text-amber-800">animate-bounce animate-spin</code>
                  </pre>
                  <div className="mt-3 flex justify-center gap-4">
                    <div className="w-8 h-8 bg-amber-500 rounded-full animate-bounce"></div>
                    <div className="w-8 h-8 flex items-center justify-center animate-spin text-orange-500">
                      <Settings className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">Key Animated Features</h3>
              <p className="text-gray-700">
                Animations are strategically used throughout the application for better user experience:
              </p>
              
              <div className="mt-4 space-y-4">
                <div className="group bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-300">
                  <div className="flex gap-5 flex-col sm:flex-row">
                    <div className="flex-shrink-0 flex items-start justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FileCode className="h-8 w-8 text-blue-500" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-blue-700 mb-2 group-hover:translate-x-1 transition-transform duration-300">Form Transitions</h4>
                      <p className="text-gray-700 text-sm">
                        Smooth animations between form sections improve navigation flow. When users move between form steps, 
                        a combination of fade and slide animations provides visual continuity. Field validations use subtle 
                        animations to indicate success or error states without disrupting the user.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white rounded text-xs text-blue-700 border border-blue-200">fade-in</span>
                        <span className="px-2 py-1 bg-white rounded text-xs text-blue-700 border border-blue-200">slide-transition</span>
                        <span className="px-2 py-1 bg-white rounded text-xs text-blue-700 border border-blue-200">scale-feedback</span>
                      </div>
                      
                      <div className="mt-4 flex justify-center">
                        <div className="rounded-lg overflow-hidden border border-gray-200 p-2 bg-white">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-gray-300 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-blue-300 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-gray-300 transition-colors"></div>
                          </div>
                          <div className="w-64 h-2 bg-blue-100 rounded-full mt-3 relative overflow-hidden">
                            <div className="absolute h-full bg-blue-500 rounded-full group-hover:w-[66%] w-[33%] transition-all duration-700"></div>
                          </div>
                          <div className="mt-3 h-24 bg-gray-50 rounded p-2 group-hover:animate-fade-in">
                            <div className="w-full h-6 bg-gray-100 rounded mb-2"></div>
                            <div className="w-3/4 h-6 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-r from-purple-50 to-blue-50 p-5 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300">
                  <div className="flex gap-5 flex-col sm:flex-row">
                    <div className="flex-shrink-0 flex items-start justify-center">
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ImageIcon className="h-8 w-8 text-purple-500" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-purple-700 mb-2 group-hover:translate-x-1 transition-transform duration-300">Template Switching</h4>
                      <p className="text-gray-700 text-sm">
                        When users change resume templates, a crossfade effect provides visual continuity. 
                        This helps users understand that their content is preserved while the design changes.
                        The animation uses opacity transitions with sequential timing to create a polished experience.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white rounded text-xs text-purple-700 border border-purple-200">cross-fade</span>
                        <span className="px-2 py-1 bg-white rounded text-xs text-purple-700 border border-purple-200">scale-transition</span>
                        <span className="px-2 py-1 bg-white rounded text-xs text-purple-700 border border-purple-200">staggered-animation</span>
                      </div>
                      
                      <div className="mt-4 flex justify-center">
                        <div className="relative w-64 h-40 rounded-md">
                          <div className="absolute inset-0 bg-blue-50 border border-blue-100 rounded-md p-2 flex flex-col justify-between group-hover:opacity-0 transition-opacity duration-1000">
                            <div className="w-1/4 h-4 bg-blue-200 rounded-sm"></div>
                            <div className="flex-1 flex flex-col justify-center space-y-1 p-2">
                              <div className="w-3/4 h-1.5 bg-blue-100 rounded-sm"></div>
                              <div className="w-1/2 h-1.5 bg-blue-100 rounded-sm"></div>
                              <div className="w-2/3 h-1.5 bg-blue-100 rounded-sm"></div>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-purple-50 border border-purple-100 rounded-md p-2 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                            <div className="flex">
                              <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                              <div className="flex-1 ml-2 space-y-1">
                                <div className="w-3/4 h-1.5 bg-purple-100 rounded-sm"></div>
                                <div className="w-1/2 h-1.5 bg-purple-100 rounded-sm"></div>
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-end space-y-1 p-2">
                              <div className="w-full h-1.5 bg-purple-100 rounded-sm"></div>
                              <div className="w-2/3 h-1.5 bg-purple-100 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-lg border border-green-100 hover:shadow-md transition-all duration-300">
                  <div className="flex gap-5 flex-col sm:flex-row">
                    <div className="flex-shrink-0 flex items-start justify-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Download className="h-8 w-8 text-green-500" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-green-700 mb-2 group-hover:translate-x-1 transition-transform duration-300">Export Progress</h4>
                      <p className="text-gray-700 text-sm">
                        Loading states and success/error notifications use animations to keep users informed about 
                        export status. Progress indicators and toast notifications feature subtle motion to draw
                        attention without being distracting.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white rounded text-xs text-green-700 border border-green-200">progress-animation</span>
                        <span className="px-2 py-1 bg-white rounded text-xs text-green-700 border border-green-200">toast-slide</span>
                        <span className="px-2 py-1 bg-white rounded text-xs text-green-700 border border-green-200">success-indicator</span>
                      </div>
                      
                      <div className="mt-4 flex justify-center">
                        <div className="relative w-64">
                          <div className="p-3 rounded-md bg-white border border-gray-200 shadow-sm">
                            <div className="mb-3">
                              <div className="w-32 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full w-0 group-hover:w-full transition-all duration-2000"></div>
                              </div>
                              <p className="text-xs text-gray-500 mt-1 ml-1">Exporting resume...</p>
                            </div>
                            <div className="invisible group-hover:visible animate-fade-in delay-1000 duration-500">
                              <div className="p-2 rounded bg-green-50 border border-green-100 flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                  <Check className="h-3 w-3 text-green-600" />
                                </div>
                                <p className="text-xs text-green-700">Download complete!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Export & Download Process */}
        <section id="section-6" className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Download className="h-8 w-8 text-indigo-500" />
            <h2 className="text-2xl font-bold text-gray-800">Export & Download Process</h2>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg text-indigo-600 mb-2">Export Technologies</h3>
              <p className="text-gray-700">
                Nowhile uses a combination of technologies to convert HTML/CSS resume templates into downloadable files:
              </p>
              
              <div className="mt-4">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg border border-indigo-100 overflow-hidden">
                  <div className="bg-indigo-100 p-3">
                    <h4 className="font-bold text-indigo-700">Export Pipeline</h4>
                  </div>
                  <div className="p-4 space-y-6">
                    <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">1</div>
                        </div>
                        <div className="flex-grow">
                          <h5 className="font-bold text-indigo-800 mb-2">DOM Capture</h5>
                          <p className="text-sm text-gray-700">
                            Uses html2canvas to capture the rendered resume DOM as a high-resolution canvas element. 
                            Special attention is paid to fonts, layout precision, and color accuracy.
                          </p>
                          <pre className="bg-gray-50 p-2 rounded-md mt-2 text-xs overflow-x-auto">
                            <code className="text-indigo-800">const canvas = await html2canvas(resumeRef.current, {"{scale: 4, useCORS: true, allowTaint: true}"});</code>
                          </pre>
                          <p className="text-xs text-gray-600 mt-2">
                            The scale factor of 4 generates high-resolution output suitable for professional printing.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">2</div>
                        </div>
                        <div className="flex-grow">
                          <h5 className="font-bold text-indigo-800 mb-2">Format Conversion</h5>
                          <p className="text-sm text-gray-700">
                            The canvas is then processed into the requested file format (PDF, PNG, or JPG)
                            using different approaches depending on format.
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                            <div className="bg-gray-50 p-3 rounded-md text-xs border border-gray-100">
                              <div className="flex items-center gap-2 mb-1.5">
                                <FileText className="h-4 w-4 text-indigo-700" />
                                <strong className="text-indigo-700">PDF:</strong>
                              </div>
                              <p className="text-gray-600">jsPDF library converts canvas to PDF document</p>
                              <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-3/4 rounded-full"></div>
                              </div>
                              <p className="text-[10px] text-right text-gray-500 mt-1">Most popular (75%)</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md text-xs border border-gray-100">
                              <div className="flex items-center gap-2 mb-1.5">
                                <ImageIcon className="h-4 w-4 text-indigo-700" />
                                <strong className="text-indigo-700">PNG:</strong>
                              </div>
                              <p className="text-gray-600">toDataURL('image/png') with transparency support</p>
                              <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-1/5 rounded-full"></div>
                              </div>
                              <p className="text-[10px] text-right text-gray-500 mt-1">Second choice (20%)</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md text-xs border border-gray-100">
                              <div className="flex items-center gap-2 mb-1.5">
                                <ImageIcon className="h-4 w-4 text-indigo-700" />
                                <strong className="text-indigo-700">JPG:</strong>
                              </div>
                              <p className="text-gray-600">toDataURL('image/jpeg') with quality settings</p>
                              <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[5%] rounded-full"></div>
                              </div>
                              <p className="text-[10px] text-right text-gray-500 mt-1">Less common (5%)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">3</div>
                        </div>
                        <div className="flex-grow">
                          <h5 className="font-bold text-indigo-800 mb-2">File Generation & Download</h5>
                          <p className="text-sm text-gray-700">
                            Creates the download file using appropriate methods for each format, 
                            then triggers browser download with the user's name in the filename.
                          </p>
                          <pre className="bg-gray-50 p-2 rounded-md mt-2 text-xs overflow-x-auto">
                            <code className="text-indigo-800">{`// Generate meaningful filename from user data
const filename = data.personalInfo.fullName 
  ? \`\${data.personalInfo.fullName.replace(/\\s+/g, '_')}_Resume.pdf\`
  : 'Resume.pdf';
  
// Save the file
pdf.save(filename);`}</code>
                          </pre>
                          <p className="text-xs text-gray-600 mt-2">
                            The FileSaver.js library ensures consistent download behavior across browsers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-indigo-600 mb-2">Multi-page Export</h3>
              <p className="text-gray-700">
                For resumes with content overflow, the export process handles multi-page generation:
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
                  <h4 className="font-bold text-blue-700 mb-2">PDF Page Management</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    The export process captures all resume pages and combines them into a single PDF document:
                  </p>
                  
                  <pre className="bg-white p-3 rounded-md text-xs overflow-x-auto">
{`// For multi-page resumes
if (pages > 1) {
  // Add first page
  const firstPageCanvas = await html2canvas(resumePageElements[0], {
    scale: 4,
    useCORS: true,
    allowTaint: true,
    logging: false,
    backgroundColor: "#FFFFFF"
  });
  
  const imgData1 = firstPageCanvas.toDataURL('image/png');
  
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });
  
  // A4 size: 210 x 297 mm
  pdf.addImage(imgData1, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
  
  // Add subsequent pages
  for (let i = 1; i < pages; i++) {
    const pageCanvas = await html2canvas(resumePageElements[i], {
      scale: 4,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: "#FFFFFF"
    });
    
    const imgData = pageCanvas.toDataURL('image/png');
    
    // Add new page to PDF
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
  }
  
  pdf.save(\`\${filename}.pdf\`);
}`}
                  </pre>
                </div>

                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-700 mb-3">Export Quality Optimization</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Several techniques are used to ensure high-quality exports:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-md shadow-sm flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-indigo-700 text-sm">High DPI Rendering</h5>
                        <p className="text-xs text-gray-600 mt-1">
                          The scale factor of 4 creates a high-DPI canvas with 4x the pixel density of the screen
                          resolution, resulting in crisp text and graphics.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md shadow-sm flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <ImageIcon className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-indigo-700 text-sm">Font Rendering</h5>
                        <p className="text-xs text-gray-600 mt-1">
                          Custom font handling ensures text is crisp and properly rendered in the exported files,
                          with fallback options for unusual fonts.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md shadow-sm flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Settings className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-indigo-700 text-sm">Compression Options</h5>
                        <p className="text-xs text-gray-600 mt-1">
                          PDF compression is optimized for text readability while maintaining reasonable file sizes.
                          Image formats offer quality settings for user preference.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md shadow-sm flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-indigo-700 text-sm">CORS Handling</h5>
                        <p className="text-xs text-gray-600 mt-1">
                          Cross-origin resource handling ensures that external images and assets are properly included
                          in the exported documents.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-indigo-600 mb-2">Download Hooks</h3>
              <p className="text-gray-700">
                The useResumeDownload hook encapsulates all download functionality:
              </p>
              
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-3 text-sm">
{`// Excerpt from useResumeDownload.tsx
export const useResumeDownload = (resumeRef: React.RefObject<HTMLDivElement>, data: ResumeData) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    toast({
      title: "Preparing your PDF...",
      description: "This might take a few seconds.",
    });

    try {
      const canvas = await captureCanvas(resumeRef);
      if (!canvas) throw new Error("Failed to capture resume");
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      // A4 size: 210 x 297 mm
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      
      // Use the person's name in the filename, or default to "resume"
      const filename = data.personalInfo.fullName 
        ? \`\${data.personalInfo.fullName.replace(/\\s+/g, '_')}_Resume.pdf\`
        : 'Resume.pdf';
        
      pdf.save(filename);
      
      toast({
        title: "Resume downloaded successfully!",
        description: \`Saved as \${filename}\`,
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "There was an error downloading your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  // Similar implementations for PNG, JPG formats...

  return {
    isDownloading,
    handleDownloadPDF,
    handleDownloadPNG,
    handleDownloadJPG,
    handleDownloadDOCX
  };
};`}
              </pre>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-700 mb-3">User Feedback During Export</h4>
                <p className="text-gray-700 text-sm mb-3">
                  The export process provides clear feedback to users:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-blue-100 rounded-full">
                        <CirclePlay className="h-4 w-4 text-blue-600" />
                      </div>
                      <h5 className="font-bold text-blue-700 text-sm">Start Notification</h5>
                    </div>
                    <p className="text-xs text-gray-600">
                      Toast notification informs users that export has begun.
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-amber-100 rounded-full">
                        <Cpu className="h-4 w-4 text-amber-600" />
                      </div>
                      <h5 className="font-bold text-amber-700 text-sm">Processing Indicator</h5>
                    </div>
                    <p className="text-xs text-gray-600">
                      Loading animation shows while the document is being prepared.
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-green-100 rounded-full">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <h5 className="font-bold text-green-700 text-sm">Completion Notice</h5>
                    </div>
                    <p className="text-xs text-gray-600">
                      Success toast confirms when export is complete with filename details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Technology Choices */}
        <section id="section-7" className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="h-8 w-8 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-800">Technology Choices</h2>
          </div>
          
          <div className="bg-white/90 rounded-xl shadow-md p-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg text-amber-600 mb-2">Why These Technologies?</h3>
              <p className="text-gray-700">
                Nowhile's technology stack was carefully chosen to balance developer productivity, user experience, and application performance:
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-800">React & TypeScript</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-blue-600 mb-1">What</h5>
                      <p className="text-sm text-gray-700">
                        React as the UI library and TypeScript for type-safe development.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-blue-600 mb-1">Why</h5>
                      <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                        <li>Component-based architecture for better code organization and reusability</li>
                        <li>React's virtual DOM for efficient UI updates as users build their resume</li>
                        <li>TypeScript adds type safety to reduce bugs and improve developer experience</li>
                        <li>Strong ecosystem with excellent library support</li>
                        <li>Scalable architecture for adding new features</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-blue-600 mb-1">Benefits Over Alternatives</h5>
                      <p className="text-sm text-gray-700">
                        Compared to Vue or Angular, React offers a lower learning curve with high flexibility. 
                        TypeScript provides compile-time checking that vanilla JavaScript lacks, catching errors 
                        before production.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Paintbrush className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-purple-800">Tailwind CSS & Shadcn UI</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-purple-600 mb-1">What</h5>
                      <p className="text-sm text-gray-700">
                        Tailwind CSS for styling with Shadcn UI for accessible component patterns.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-purple-600 mb-1">Why</h5>
                      <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                        <li>Tailwind's utility-first approach speeds up UI development</li>
                        <li>Reduced CSS bundle size with only the used utilities included</li>
                        <li>Consistent design system through Tailwind's constraint-based design</li>
                        <li>Shadcn UI provides unstyled, accessible components that integrate perfectly with Tailwind</li>
                        <li>Customization through simple Tailwind config without extra CSS files</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-purple-600 mb-1">Benefits Over Alternatives</h5>
                      <p className="text-sm text-gray-700">
                        Unlike CSS-in-JS libraries, Tailwind avoids runtime overhead. Compared to Material UI or Chakra UI, 
                        Shadcn UI offers more control over styling without opinionated design choices, allowing us to create
                        a unique brand identity.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-5 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Layers className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-bold text-green-800">React Hook Form & Zod</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-green-600 mb-1">What</h5>
                      <p className="text-sm text-gray-700">
                        React Hook Form for form state management with Zod for schema validation.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-green-600 mb-1">Why</h5>
                      <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                        <li>React Hook Form's uncontrolled components minimize re-renders</li>
                        <li>Built-in validation with intuitive API for complex forms</li>
                        <li>Zod provides type-safe schema validation that integrates with TypeScript</li>
                        <li>Excellent performance even with large, multi-part forms</li>
                        <li>Minimal bundle size impact compared to alternatives</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-green-600 mb-1">Benefits Over Alternatives</h5>
                      <p className="text-sm text-gray-700">
                        Compared to Formik, React Hook Form has better performance with fewer re-renders. 
                        Zod offers more powerful validation than Yup with better TypeScript integration,
                        creating a seamless pipeline from form data to validated objects.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-100 rounded-full">
                      <Download className="h-5 w-5 text-amber-600" />
                    </div>
                    <h4 className="font-bold text-amber-800">HTML2Canvas & jsPDF</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-amber-600 mb-1">What</h5>
                      <p className="text-sm text-gray-700">
                        HTML2Canvas for DOM-to-image conversion and jsPDF for PDF generation.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-amber-600 mb-1">Why</h5>
                      <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                        <li>Client-side solution that doesn't require server processing</li>
                        <li>Accurate capture of complex CSS layouts and designs</li>
                        <li>High-resolution export capabilities for professional printing</li>
                        <li>jsPDF provides comprehensive PDF creation features</li>
                        <li>Full control over export process with customizable parameters</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-amber-600 mb-1">Benefits Over Alternatives</h5>
                      <p className="text-sm text-gray-700">
                        Server-side rendering alternatives would require backend infrastructure and add 
                        network latency. Direct PDF rendering libraries lack HTML/CSS support, making
                        template design more difficult. This client-side approach provides instant feedback
                        and preview capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-lg text-amber-600 mb-2">Technology Decision Matrix</h3>
              <p className="text-gray-700 mb-4">
                Our technology decisions were evaluated against multiple criteria:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-amber-50">
                      <th className="border border-amber-200 p-2 text-left">Technology</th>
                      <th className="border border-amber-200 p-2 text-left">Developer Experience</th>
                      <th className="border border-amber-200 p-2 text-left">Performance</th>
                      <th className="border border-amber-200 p-2 text-left">Bundle Size</th>
                      <th className="border border-amber-200 p-2 text-left">Accessibility</th>
                      <th className="border border-amber-200 p-2 text-left">Community Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="border border-amber-100 p-2"><strong>React + TypeScript</strong></td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Excellent</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Very Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-amber-600 font-medium">Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Very Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Excellent</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="border border-amber-100 p-2"><strong>Tailwind CSS</strong></td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Very Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Excellent</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Excellent</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-amber-600 font-medium">Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Very Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="border border-amber-100 p-2"><strong>React Hook Form + Zod</strong></td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Very Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Excellent</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">Very Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-amber-600 font-medium">Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-amber-600 font-medium">Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="border border-amber-100 p-2"><strong>HTML2Canvas + jsPDF</strong></td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-amber-600 font-medium">Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-amber-600 font-medium">Fair</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-amber-600 font-medium">Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-amber-600 font-medium">Fair</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-amber-100 p-2">
                        <div className="flex items-center">
                          <span className="text-amber-600 font-medium">Good</span>
                          <div className="ml-2 flex">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <Star className="h-4 w-4 text-gray-300" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-100 rounded-full">
                    <HelpCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-700 mb-1">Why We Chose This Stack Over Others</h4>
                    <p className="text-sm text-gray-700">
                      We evaluated several alternative technologies before making our final decisions:
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-amber-600" />
                        </div>
                        <p className="text-sm text-gray-700">
                          <strong>React vs. Vue/Angular:</strong> React offered the best balance of flexibility, community support, 
                          and performance for our interactive UI needs.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-amber-600" />
                        </div>
                        <p className="text-sm text-gray-700">
                          <strong>Tailwind vs. CSS-in-JS/SCSS:</strong> Tailwind provided faster development cycles and better 
                          performance at runtime without the overhead of CSS-in-JS libraries.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-amber-600" />
                        </div>
                        <p className="text-sm text-gray-700">
                          <strong>HTML2Canvas vs. Server-side rendering:</strong> Client-side export provided better user experience 
                          with instant preview capabilities without server dependencies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-resume-purple/20 via-blue-100/30 to-violet-200/30 shadow-md animate-fade-in space-y-6">
          <h2 className="text-2xl font-bold text-center text-resume-purple mb-4">Libraries & Technologies Used</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/80 p-4 rounded-lg shadow group hover:shadow-md transition-shadow">
              <h3 className="font-bold text-resume-purple mb-2 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                <Code className="h-5 w-5" /> Core Framework
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span>React</span>
                </li>
                <li className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span>Vite</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 p-4 rounded-lg shadow group hover:shadow-md transition-shadow">
              <h3 className="font-bold text-resume-purple mb-2 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                <Puzzle className="h-5 w-5" /> Form & Validation
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-1 hover:text-green-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span>React Hook Form</span>
                </li>
                <li className="flex items-center gap-1 hover:text-green-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span>Zod</span>
                </li>
                <li className="flex items-center gap-1 hover:text-green-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span>@hookform/resolvers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 p-4 rounded-lg shadow group hover:shadow-md transition-shadow">
              <h3 className="font-bold text-resume-purple mb-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <Paintbrush className="h-5 w-5" /> UI Components
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-1 hover:text-orange-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-orange-500" />
                  <span>Shadcn UI</span>
                </li>
                <li className="flex items-center gap-1 hover:text-orange-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-orange-500" />
                  <span>Radix UI</span>
                </li>
                <li className="flex items-center gap-1 hover:text-orange-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-orange-500" />
                  <span>Lucide Icons</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 p-4 rounded-lg shadow group hover:shadow-md transition-shadow">
              <h3 className="font-bold text-resume-purple mb-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <Download className="h-5 w-5" /> Export Tools
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                  <span>html2canvas</span>
                </li>
                <li className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                  <span>jsPDF</span>
                </li>
                <li className="flex items-center gap-1 hover:text-purple-600 transition-colors">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                  <span>file-saver</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              This documentation page provides a high-level overview of Nowhile's technical architecture. 
              For specific implementation details, please refer to the source code and comments.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
