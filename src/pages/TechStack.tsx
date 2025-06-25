
import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen, Code2, Paintbrush, Star, Sparkles, Users, TrendingUp, Download, Shield, Globe, Heart, Cpu, Pen, Lightbulb, 
  ListCheck, SquareDashed, Move, WandSparkles, MousePointer, ListTodo, Wand, PenLine, Brain, Droplets, ClipboardList,
  FileText, Database, Server, Zap, GitBranch, LucideIcon, Rocket, Monitor, Cloud, Lock, Laptop, Gauge, Code, LockKeyhole,
  Send, GitCommit, Workflow, AlertCircle, LayoutDashboard, Save, Component, Blocks, Award, ArrowRight, AlignJustify,
  Play, Pause, RotateCcw, CheckCircle, Eye, Edit3, Palette, FileDown, Settings, ArrowDown, ChevronRight, Layers,
  Target, Zap as ZapIcon, Circle, Square, Triangle, Hexagon, Diamond, ChevronDown, Folder, Link, CornerDownRight,
  ArrowRightLeft, RefreshCw, Package, Wrench, Briefcase, GraduationCap, Layout, Minimize2, ZoomIn
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

// Animated headline component
const AnimatedHeadline = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      "transition-all duration-1000 transform",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      className
    )}>
      {children}
    </div>
  );
};

// Interactive workflow step component
const WorkflowStep = ({ step, title, description, icon, isActive, onClick }: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={cn(
        "relative cursor-pointer transition-all duration-500 transform hover:scale-105",
        isActive ? "scale-110" : "scale-100"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "p-6 rounded-2xl border-2 transition-all duration-300",
        isActive 
          ? "bg-gradient-to-r from-purple-500 to-blue-500 border-purple-300 text-white shadow-2xl" 
          : "bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg"
      )}>
        <div className="flex items-center gap-4 mb-3">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
            isActive ? "bg-white/20" : "bg-purple-100"
          )}>
            <span className={cn("text-xl", isActive ? "text-white" : "text-purple-600")}>
              {icon}
            </span>
          </div>
          <div>
            <span className={cn(
              "text-sm font-medium",
              isActive ? "text-purple-200" : "text-gray-500"
            )}>
              Step {step}
            </span>
            <h3 className={cn(
              "text-lg font-bold",
              isActive ? "text-white" : "text-gray-800"
            )}>
              {title}
            </h3>
          </div>
        </div>
        <p className={cn(
          "text-sm leading-relaxed",
          isActive ? "text-purple-100" : "text-gray-600"
        )}>
          {description}
        </p>
      </div>
      
      {/* Animated connection line */}
      <div className={cn(
        "absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-0.5 transition-all duration-300",
        isActive ? "bg-purple-400" : "bg-gray-300"
      )}>
        <div className={cn(
          "absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300",
          isActive ? "bg-purple-400 animate-pulse" : "bg-gray-300"
        )} />
      </div>
    </div>
  );
};

// Animated counter component
const AnimatedCounter = ({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center p-6 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-3xl font-bold text-purple-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

// Interactive tech showcase
const TechShowcase = () => {
  const [selectedTech, setSelectedTech] = useState(0);
  
  const techStack = [
    {
      name: "React & TypeScript",
      icon: <Code2 className="h-8 w-8" />,
      color: "from-blue-400 to-blue-600",
      description: "Lightning-fast UI with type safety",
      details: "React's virtual DOM ensures instant updates while TypeScript catches errors before they happen. Perfect for building complex resume interfaces with confidence.",
      features: ["Virtual DOM", "Type Safety", "Component Reusability", "Developer Experience"]
    },
    {
      name: "Tailwind CSS",
      icon: <Paintbrush className="h-8 w-8" />,
      color: "from-cyan-400 to-cyan-600",
      description: "Utility-first styling for rapid development",
      details: "Tailwind's utility classes enable rapid prototyping and consistent design. Every resume template is responsive and beautiful across all devices.",
      features: ["Utility Classes", "Responsive Design", "Custom Themes", "Consistent Styling"]
    },
    {
      name: "Advanced Export Engine",
      icon: <Download className="h-8 w-8" />,
      color: "from-green-400 to-green-600",
      description: "High-quality PDF generation",
      details: "Our export engine uses html2canvas and jsPDF to create pixel-perfect PDFs. 4x resolution rendering ensures crisp text and graphics.",
      features: ["High Resolution", "Font Optimization", "Cross-browser Support", "Instant Download"]
    },
    {
      name: "AI Integration",
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-400 to-purple-600",
      description: "Smart content suggestions",
      details: "AI-powered suggestions help users craft compelling resumes. From skill recommendations to content optimization, AI makes resume building intuitive.",
      features: ["Content Suggestions", "Skill Matching", "Grammar Checking", "Industry Insights"]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Interactive Technology Showcase
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tech selector */}
        <div className="space-y-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={cn(
                "p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105",
                selectedTech === index 
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg` 
                  : "bg-white hover:shadow-md"
              )}
              onClick={() => setSelectedTech(index)}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "p-2 rounded-lg",
                  selectedTech === index ? "bg-white/20" : "bg-gray-100"
                )}>
                  <span className={cn(
                    selectedTech === index ? "text-white" : "text-gray-600"
                  )}>
                    {tech.icon}
                  </span>
                </div>
                <div>
                  <h3 className={cn(
                    "font-bold text-lg",
                    selectedTech === index ? "text-white" : "text-gray-800"
                  )}>
                    {tech.name}
                  </h3>
                  <p className={cn(
                    "text-sm",
                    selectedTech === index ? "text-white/80" : "text-gray-600"
                  )}>
                    {tech.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech details */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 bg-gradient-to-r",
            techStack[selectedTech].color,
            "text-white"
          )}>
            {techStack[selectedTech].icon}
            {techStack[selectedTech].name}
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {techStack[selectedTech].details}
          </p>
          
          <div className="space-y-3">
            <h4 className="font-bold text-gray-800">Key Features:</h4>
            {techStack[selectedTech].features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Resume generation workflow
const ResumeWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      title: "Data Input",
      description: "User enters personal information, experience, education, and skills through our intuitive form interface",
      icon: <Edit3 className="h-6 w-6" />,
      details: "React Hook Form manages state efficiently while Zod validation ensures data integrity. Real-time validation provides instant feedback."
    },
    {
      title: "Template Selection",
      description: "Choose from professionally designed templates, each optimized for different industries and career levels",
      icon: <Palette className="h-6 w-6" />,
      details: "Templates are built with responsive design principles. Each template adapts to content length and maintains visual hierarchy."
    },
    {
      title: "Live Preview",
      description: "See changes instantly as you type. Our real-time preview shows exactly how your resume will look",
      icon: <Eye className="h-6 w-6" />,
      details: "React's virtual DOM ensures smooth updates. Preview scales for different devices and print formats automatically."
    },
    {
      title: "AI Enhancement",
      description: "AI analyzes content and provides suggestions for improvement, skill matching, and content optimization",
      icon: <Brain className="h-6 w-6" />,
      details: "Machine learning algorithms analyze job market trends and provide personalized recommendations for better results."
    },
    {
      title: "Export & Download",
      description: "Generate high-quality PDF with a single click. Optimized for ATS systems and print quality",
      icon: <FileDown className="h-6 w-6" />,
      details: "html2canvas captures DOM at 4x resolution. jsPDF creates optimized files with proper metadata and compression."
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <AnimatedHeadline>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            How Nowhile Creates Perfect Resumes
          </h2>
        </AnimatedHeadline>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Follow the journey from raw information to a polished, professional resume ready to impress employers
        </p>
        
        {/* Playback controls */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            {isPlaying ? 'Pause Demo' : 'Start Demo'}
          </button>
          <button
            onClick={() => setActiveStep(0)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300"
          >
            <RotateCcw className="h-5 w-5" />
            Reset
          </button>
        </div>
      </div>

      {/* Workflow steps */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            step={index + 1}
            title={step.title}
            description={step.description}
            icon={step.icon}
            isActive={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>

      {/* Active step details */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white">
            {steps[activeStep].icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{steps[activeStep].title}</h3>
            <p className="text-gray-600">{steps[activeStep].description}</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6">
          <h4 className="font-bold text-gray-800 mb-2">Technical Implementation:</h4>
          <p className="text-gray-700 leading-relaxed">{steps[activeStep].details}</p>
        </div>
      </div>
    </div>
  );
};

// Floating shapes animation
const FloatingShapes = () => {
  const shapes = [
    { Component: Circle, color: "text-purple-300", size: "h-8 w-8", delay: 0 },
    { Component: Square, color: "text-blue-300", size: "h-6 w-6", delay: 1 },
    { Component: Triangle, color: "text-pink-300", size: "h-10 w-10", delay: 2 },
    { Component: Hexagon, color: "text-indigo-300", size: "h-7 w-7", delay: 0.5 },
    { Component: Diamond, color: "text-cyan-300", size: "h-9 w-9", delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={cn(
            "absolute animate-float opacity-20",
            shape.color,
            shape.size
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <shape.Component />
        </div>
      ))}
    </div>
  );
};

// File tree structure for the resume generator
const FileTreeHierarchy = () => {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['src', 'components', 'hooks', 'types']));
  const [activeDataFlow, setActiveDataFlow] = useState<string | null>(null);
  
  const fileStructure = [
    {
      id: 'src',
      name: 'src/',
      type: 'folder',
      icon: <Folder className="h-4 w-4" />,
      children: [
        {
          id: 'app',
          name: 'App.tsx',
          type: 'file',
          icon: <Code className="h-4 w-4" />,
          description: 'Main application entry point',
          dataRole: 'orchestrator'
        },
        {
          id: 'components',
          name: 'components/',
          type: 'folder',
          icon: <Folder className="h-4 w-4" />,
          children: [
            {
              id: 'resume-form',
              name: 'ResumeForm.tsx',
              type: 'file',
              icon: <Edit3 className="h-4 w-4" />,
              description: 'Main form orchestrator',
              dataRole: 'collector',
              dataFlow: ['personal-info', 'experience-form', 'education-form', 'skills-form']
            },
            {
              id: 'resume-preview',
              name: 'ResumePreview.tsx',
              type: 'file',
              icon: <Eye className="h-4 w-4" />,
              description: 'Live preview renderer',
              dataRole: 'renderer'
            },
            {
              id: 'template-selector',
              name: 'TemplateSelector.tsx',
              type: 'file',
              icon: <Palette className="h-4 w-4" />,
              description: 'Template selection UI',
              dataRole: 'selector'
            },
            {
              id: 'forms-folder',
              name: 'forms/',
              type: 'folder',
              icon: <Folder className="h-4 w-4" />,
              children: [
                {
                  id: 'personal-info',
                  name: 'PersonalInfoForm.tsx',
                  type: 'file',
                  icon: <Users className="h-4 w-4" />,
                  description: 'Personal details input',
                  dataRole: 'input'
                },
                {
                  id: 'experience-form',
                  name: 'ExperienceForm.tsx',
                  type: 'file',
                  icon: <Briefcase className="h-4 w-4" />,
                  description: 'Work experience input',
                  dataRole: 'input'
                },
                {
                  id: 'education-form',
                  name: 'EducationForm.tsx',
                  type: 'file',
                  icon: <GraduationCap className="h-4 w-4" />,
                  description: 'Education background',
                  dataRole: 'input'
                },
                {
                  id: 'skills-form',
                  name: 'SkillsForm.tsx',
                  type: 'file',
                  icon: <Target className="h-4 w-4" />,
                  description: 'Skills and competencies',
                  dataRole: 'input'
                }
              ]
            },
            {
              id: 'templates-folder',
              name: 'templates/',
              type: 'folder',
              icon: <Folder className="h-4 w-4" />,
              children: [
                {
                  id: 'modern-template',
                  name: 'ModernTemplate.tsx',
                  type: 'file',
                  icon: <Layout className="h-4 w-4" />,
                  description: 'Modern design template',
                  dataRole: 'template'
                },
                {
                  id: 'minimal-template',
                  name: 'MinimalTemplate.tsx',
                  type: 'file',
                  icon: <Minimize2 className="h-4 w-4" />,
                  description: 'Minimal design template',
                  dataRole: 'template'
                },
                {
                  id: 'colorful-template',
                  name: 'ColorfulTemplate.tsx',
                  type: 'file',
                  icon: <Palette className="h-4 w-4" />,
                  description: 'Creative colorful template',
                  dataRole: 'template'
                }
              ]
            }
          ]
        },
        {
          id: 'hooks',
          name: 'hooks/',
          type: 'folder',
          icon: <Folder className="h-4 w-4" />,
          children: [
            {
              id: 'use-resume-download',
              name: 'useResumeDownload.tsx',
              type: 'file',
              icon: <Download className="h-4 w-4" />,
              description: 'PDF/PNG export functionality',
              dataRole: 'exporter'
            },
            {
              id: 'use-zoom',
              name: 'useZoom.tsx',
              type: 'file',
              icon: <ZoomIn className="h-4 w-4" />,
              description: 'Preview zoom controls',
              dataRole: 'utility'
            }
          ]
        },
        {
          id: 'types',
          name: 'types/',
          type: 'folder',
          icon: <Folder className="h-4 w-4" />,
          children: [
            {
              id: 'resume-types',
              name: 'resume.ts',
              type: 'file',
              icon: <FileText className="h-4 w-4" />,
              description: 'TypeScript type definitions',
              dataRole: 'schema'
            }
          ]
        }
      ]
    }
  ];

  const dataFlowConnections = {
    'personal-info': { targets: ['resume-form'], color: 'blue' },
    'experience-form': { targets: ['resume-form'], color: 'green' },
    'education-form': { targets: ['resume-form'], color: 'purple' },
    'skills-form': { targets: ['resume-form'], color: 'orange' },
    'resume-form': { targets: ['resume-preview'], color: 'red' },
    'template-selector': { targets: ['resume-preview'], color: 'pink' },
    'resume-preview': { targets: ['use-resume-download'], color: 'indigo' }
  };

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const showDataFlow = (nodeId: string) => {
    setActiveDataFlow(nodeId);
    setTimeout(() => setActiveDataFlow(null), 3000);
  };

  const renderFileTree = (nodes: any[], depth = 0) => {
    return nodes.map((node) => (
      <div key={node.id} className="relative">
        <div
          className={cn(
            "flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer transition-all duration-300",
            "hover:bg-gray-700/50 group",
            activeDataFlow === node.id && "bg-blue-500/20 scale-105 shadow-md"
          )}
          style={{ paddingLeft: `${depth * 16 + 12}px` }}
          onClick={() => {
            if (node.type === 'folder') {
              toggleNode(node.id);
            } else {
              showDataFlow(node.id);
            }
          }}
        >
          {node.type === 'folder' && (
            expandedNodes.has(node.id) ? 
              <ChevronDown className="h-4 w-4 text-gray-300" /> : 
              <ChevronRight className="h-4 w-4 text-gray-300" />
          )}
          
          <span className={cn(
            "transition-colors duration-300",
            node.dataRole === 'input' && "text-blue-400",
            node.dataRole === 'collector' && "text-green-400",
            node.dataRole === 'renderer' && "text-purple-400",
            node.dataRole === 'exporter' && "text-red-400",
            node.dataRole === 'template' && "text-orange-400",
            !node.dataRole && "text-gray-400"
          )}>
            {node.icon}
          </span>
          
          <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
            {node.name}
          </span>
          
          {node.description && (
            <span className="text-xs text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {node.description}
            </span>
          )}
          
          {node.dataRole && (
            <div className={cn(
              "w-2 h-2 rounded-full ml-auto transition-all duration-300",
              node.dataRole === 'input' && "bg-blue-400",
              node.dataRole === 'collector' && "bg-green-400",
              node.dataRole === 'renderer' && "bg-purple-400",
              node.dataRole === 'exporter' && "bg-red-400",
              node.dataRole === 'template' && "bg-orange-400",
              activeDataFlow === node.id && "animate-pulse scale-150"
            )} />
          )}
        </div>
        
        {node.type === 'folder' && expandedNodes.has(node.id) && node.children && (
          <div className="mt-1">
            {renderFileTree(node.children, depth + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <GitBranch className="h-6 w-6 text-blue-600" />
          Resume Generator Architecture
        </h3>
        <p className="text-slate-600">Interactive file structure showing data flow between components</p>
        <div className="flex items-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full" />
            <span className="text-slate-600">Data Input</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-slate-600">Data Collection</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full" />
            <span className="text-slate-600">Data Rendering</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <span className="text-slate-600">Data Export</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm max-h-96 overflow-auto border border-gray-700">
        {renderFileTree(fileStructure)}
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
          <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
            <ArrowRightLeft className="h-4 w-4" />
            Data Flow Pattern
          </h4>
          <p className="text-sm text-slate-600">
            Form components collect user input → ResumeForm aggregates data → ResumePreview renders output → Export hooks generate files
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
          <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Real-time Updates
          </h4>
          <p className="text-sm text-slate-600">
            Changes in form inputs instantly propagate through the component tree using React's state management
          </p>
        </div>
      </div>
    </div>
  );
};

// Data Flow Visualization Component
const DataFlowVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const dataFlowSteps = [
    {
      id: 'user-input',
      title: 'User Input',
      icon: <Edit3 className="h-6 w-6" />,
      description: 'User enters personal information, experience, education, and skills',
      component: 'Form Components',
      data: 'Raw input data',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'validation',
      title: 'Data Validation',
      icon: <CheckCircle className="h-6 w-6" />,
      description: 'TypeScript types and Zod schemas ensure data integrity',
      component: 'React Hook Form + Zod',
      data: 'Validated ResumeData object',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'state-management',
      title: 'State Management',
      icon: <Database className="h-6 w-6" />,
      description: 'Central state stores and manages all resume data',
      component: 'React State + Context',
      data: 'Centralized ResumeData',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'ai-enhancement',
      title: 'AI Enhancement',
      icon: <Brain className="h-6 w-6" />,
      description: 'AI analyzes content and provides intelligent suggestions',
      component: 'AI Service',
      data: 'Enhanced content suggestions',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 'template-rendering',
      title: 'Template Rendering',
      icon: <Palette className="h-6 w-6" />,
      description: 'Data is rendered using selected template components',
      component: 'Template Components',
      data: 'Styled resume DOM',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'export-generation',
      title: 'Export Generation',
      icon: <FileDown className="h-6 w-6" />,
      description: 'DOM is captured and converted to PDF/PNG files',
      component: 'html2canvas + jsPDF',
      data: 'Final resume file',
      color: 'from-red-400 to-red-600'
    }
  ];

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % dataFlowSteps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAnimating, dataFlowSteps.length]);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Resume Generation Data Flow
        </h3>
        <p className="text-slate-600 mb-6">
          Follow how user input transforms into a professional resume through our processing pipeline
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            {isAnimating ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            {isAnimating ? 'Pause Flow' : 'Start Flow'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {dataFlowSteps.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              "relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 transform",
              activeStep === index 
                ? `bg-gradient-to-r ${step.color} text-white scale-105 shadow-2xl` 
                : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg"
            )}
            onClick={() => setActiveStep(index)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                activeStep === index ? "bg-white/20" : "bg-blue-100"
              )}>
                <span className={cn(
                  activeStep === index ? "text-white" : "text-blue-600"
                )}>
                  {step.icon}
                </span>
              </div>
              <div>
                <span className={cn(
                  "text-sm font-medium",
                  activeStep === index ? "text-white/80" : "text-gray-500"
                )}>
                  Step {index + 1}
                </span>
                <h4 className={cn(
                  "font-bold text-lg",
                  activeStep === index ? "text-white" : "text-gray-800"
                )}>
                  {step.title}
                </h4>
              </div>
            </div>
            
            <p className={cn(
              "text-sm mb-4",
              activeStep === index ? "text-white/90" : "text-gray-600"
            )}>
              {step.description}
            </p>
            
            <div className={cn(
              "text-xs rounded-lg p-2",
              activeStep === index ? "bg-white/10" : "bg-gray-50"
            )}>
              <span className={cn(
                "font-medium",
                activeStep === index ? "text-white/80" : "text-gray-500"
              )}>
                Component: 
              </span>
              <span className={cn(
                "ml-1",
                activeStep === index ? "text-white" : "text-gray-700"
              )}>
                {step.component}
              </span>
            </div>

            {/* Flow arrow */}
            {index < dataFlowSteps.length - 1 && (
              <div className={cn(
                "absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 z-10 transition-all duration-300",
                activeStep === index ? "text-blue-500 animate-pulse" : "text-gray-300"
              )}>
                <ArrowRight className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active step details */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r",
            dataFlowSteps[activeStep].color
          )}>
            {dataFlowSteps[activeStep].icon}
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-800">
              {dataFlowSteps[activeStep].title}
            </h4>
            <p className="text-gray-600">
              {dataFlowSteps[activeStep].description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h5 className="font-semibold text-blue-800 mb-2">Data Format</h5>
            <p className="text-blue-700 text-sm">{dataFlowSteps[activeStep].data}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h5 className="font-semibold text-purple-800 mb-2">Processing Component</h5>
            <p className="text-purple-700 text-sm">{dataFlowSteps[activeStep].component}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      <FloatingShapes />
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 max-w-7xl relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <AnimatedHeadline className="mb-8">
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Technology That Powers
              <br />
              <span className="text-5xl md:text-6xl">Perfect Resumes</span>
            </h1>
          </AnimatedHeadline>
          
          <AnimatedHeadline delay={300} className="mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the cutting-edge technologies and innovative processes that make Nowhile 
              the world's most advanced resume builder. From AI-powered suggestions to instant PDF generation.
            </p>
          </AnimatedHeadline>

          {/* Stats */}
          <AnimatedHeadline delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <AnimatedCounter target={100} label="Milliseconds Response" suffix="ms" />
              <AnimatedCounter target={95} label="Lighthouse Score" suffix="+" />
              <AnimatedCounter target={500} label="Bundle Size" suffix="KB" />
              <AnimatedCounter target={99} label="Uptime" suffix="%" />
            </div>
          </AnimatedHeadline>
        </section>

        {/* File Tree Hierarchy Section */}
        <section className="mb-20">
          <FileTreeHierarchy />
        </section>

        {/* Data Flow Visualization Section */}
        <section className="mb-20">
          <DataFlowVisualization />
        </section>

        {/* Resume Generation Workflow */}
        <section className="mb-20">
          <ResumeWorkflow />
        </section>

        {/* Interactive Tech Showcase */}
        <section className="mb-20">
          <TechShowcase />
        </section>

        {/* Feature Highlights */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <AnimatedHeadline>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Why Developers Love Nowhile
              </h2>
            </AnimatedHeadline>
            <p className="text-gray-600 text-lg">Built with modern web technologies for optimal performance and user experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Lightning Fast",
                description: "Sub-100ms response times with optimized React rendering and efficient state management",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Privacy First",
                description: "All data processing happens locally in your browser. No tracking, no data collection",
                color: "from-green-400 to-emerald-500"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Universal Access",
                description: "Works on any device, any browser. Progressive Web App with offline capabilities",
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "AI Enhanced",
                description: "Smart suggestions powered by machine learning to help you create compelling content",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "ATS Optimized",
                description: "Templates designed to pass Applicant Tracking Systems with proper formatting",
                color: "from-red-400 to-rose-500"
              },
              {
                icon: <Layers className="h-8 w-8" />,
                title: "Modular Design",
                description: "Clean, maintainable codebase with reusable components and clear separation of concerns",
                color: "from-indigo-400 to-purple-500"
              }
            ].map((feature, index) => (
              <AnimatedHeadline key={index} delay={index * 100}>
                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-r flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300",
                    feature.color
                  )}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedHeadline>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
          <AnimatedHeadline>
            <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of professionals who trust Nowhile for their career success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Building Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                View Templates
              </button>
            </div>
          </AnimatedHeadline>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TechStack;
