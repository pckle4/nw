
import React, { useState } from 'react';
import { 
  Blocks, Download, FileCode, Github, Server, 
  Database, Palette, Laptop, Sparkles, Layers, 
  Braces, Workflow, Code2, Paintbrush, Code, 
  Search, Anchor, GitBranch, GitPullRequest
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

const TechStack = () => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  // Frontend technologies used in the project
  const frontendTechs = [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces with component-based architecture.",
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      color: "blue",
      url: "https://reactjs.org/",
      code: `// Example React component
import React from 'react';

const ResumePreview = ({ data }) => {
  return (
    <div className="preview">
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
};

export default ResumePreview;`
    },
    {
      name: "TypeScript",
      description: "A strongly typed programming language that builds on JavaScript, giving better tooling at any scale.",
      icon: <Braces className="h-6 w-6 text-blue-700" />,
      color: "blue",
      url: "https://www.typescriptlang.org/",
      code: `// TypeScript interface for resume data
interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone?: string;
    location: string;
  };
  experience: Array<{
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    description: string;
  }>;
}`
    },
    {
      name: "Tailwind CSS",
      description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center that can be composed to build any design.",
      icon: <Paintbrush className="h-6 w-6 text-sky-500" />,
      color: "sky",
      url: "https://tailwindcss.com/",
      code: `<!-- Tailwind CSS example -->
<div class="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg shadow-md">
  <div class="w-full md:w-1/3">
    <h2 class="text-xl font-bold text-gray-800">Profile</h2>
  </div>
  <div class="w-full md:w-2/3">
    <p class="text-gray-600 leading-relaxed">
      Experienced software developer with a passion for clean code.
    </p>
  </div>
</div>`
    },
    {
      name: "Shadcn UI",
      description: "Beautiful, accessible UI components built with Radix UI and Tailwind CSS.",
      icon: <Palette className="h-6 w-6 text-gray-800" />,
      color: "gray",
      url: "https://ui.shadcn.com/",
      code: `// Shadcn UI Button component usage
import { Button } from "@/components/ui/button";

export function DownloadButton() {
  return (
    <Button variant="default">
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  );
}`
    },
    {
      name: "Lucide Icons",
      description: "Beautiful & consistent icon toolkit made by the community.",
      icon: <Sparkles className="h-6 w-6 text-purple-500" />,
      color: "purple",
      url: "https://lucide.dev/",
      code: `// Using Lucide icons
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => (
  <div className="contact-info">
    <div className="flex items-center">
      <Mail className="h-4 w-4 mr-2" />
      <span>email@example.com</span>
    </div>
    <div className="flex items-center">
      <Phone className="h-4 w-4 mr-2" />
      <span>(123) 456-7890</span>
    </div>
  </div>
);`
    }
  ];

  // Build tools used in the project
  const buildTools = [
    {
      name: "Vite",
      description: "Next Generation Frontend Tooling that provides fast development and optimized builds.",
      icon: <Laptop className="h-6 w-6 text-purple-600" />,
      color: "purple",
      url: "https://vitejs.dev/",
      code: `// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});`
    },
    {
      name: "React Router",
      description: "Declarative routing for React web applications.",
      icon: <Workflow className="h-6 w-6 text-red-500" />,
      color: "red",
      url: "https://reactrouter.com/",
      code: `// App.tsx with React Router setup
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);`
    },
    {
      name: "Tanstack Query",
      description: "Powerful asynchronous state management for fetching, caching, and updating server state.",
      icon: <Server className="h-6 w-6 text-pink-500" />,
      color: "pink",
      url: "https://tanstack.com/query/latest",
      code: `// React Query example
import { useQuery } from '@tanstack/react-query';

// Fetch user data
function useUserData(userId) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const response = await fetch(\`/api/users/\${userId}\`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
}`
    },
    {
      name: "Git Workflow",
      description: "Version control system for tracking changes and collaborating on code development.",
      icon: <GitBranch className="h-6 w-6 text-orange-500" />,
      color: "orange",
      url: "https://git-scm.com/",
      code: `# Common Git commands used in development
git init                 # Initialize a repository
git clone <url>          # Clone a repository
git add .                # Stage all changes
git commit -m "Message"  # Commit staged changes
git push origin main     # Push commits to remote
git pull                 # Pull latest changes
git branch feature/name  # Create a new branch
git checkout -b feature  # Create and switch to branch`
    }
  ];

  // Libraries used in the project
  const libraries = [
    {
      name: "html2canvas",
      description: "Screenshots with JavaScript, used for capturing resume previews.",
      icon: <FileCode className="h-6 w-6 text-yellow-500" />,
      color: "yellow",
      url: "https://html2canvas.hertzen.com/",
      code: `// Using html2canvas to capture a resume preview
import html2canvas from 'html2canvas';

const captureResume = async () => {
  const resumeElement = document.getElementById('resume-preview');
  
  try {
    const canvas = await html2canvas(resumeElement, {
      scale: 2, // Higher resolution
      useCORS: true, // Enable CORS for images
      logging: false,
      backgroundColor: '#ffffff'
    });
    
    // Convert to image
    const image = canvas.toDataURL('image/png');
    return image;
  } catch (error) {
    console.error('Error capturing resume:', error);
    throw error;
  }
};`
    },
    {
      name: "jsPDF",
      description: "Client-side JavaScript PDF generation, used for downloading resumes as PDF.",
      icon: <FileCode className="h-6 w-6 text-green-500" />,
      color: "green",
      url: "https://parall.ax/products/jspdf",
      code: `// Using jsPDF to generate a PDF from an image
import { jsPDF } from 'jspdf';

const generatePDF = (imageData, fileName) => {
  // Initialize jsPDF
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Calculate dimensions
  const imgProps = pdf.getImageProperties(imageData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  // Add image to PDF
  pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
  // Save the PDF
  pdf.save(\`\${fileName}.pdf\`);
};`
    },
    {
      name: "date-fns",
      description: "Modern JavaScript date utility library, used for date manipulation.",
      icon: <FileCode className="h-6 w-6 text-indigo-500" />,
      color: "indigo",
      url: "https://date-fns.org/",
      code: `// Using date-fns for date manipulation
import { format, parseISO, differenceInMonths } from 'date-fns';

// Format a date
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = parseISO(dateString);
  return format(date, 'MMM yyyy');
};

// Calculate experience duration
const calculateDuration = (startDate, endDate) => {
  const start = parseISO(startDate);
  const end = endDate ? parseISO(endDate) : new Date();
  const months = differenceInMonths(end, start);
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  return \`\${years > 0 ? \`\${years} yr\${years > 1 ? 's' : ''} \` : ''}\${
    remainingMonths > 0 ? \`\${remainingMonths} mo\${remainingMonths > 1 ? 's' : ''}\` : ''
  }\`;
};`
    },
    {
      name: "Recharts",
      description: "A composable charting library built on React components.",
      icon: <Blocks className="h-6 w-6 text-blue-400" />,
      color: "blue",
      url: "https://recharts.org/",
      code: `// Recharts example for displaying skills
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer
} from 'recharts';

const SkillsChart = ({ skills }) => {
  const data = skills.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 10,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart outerRadius={90} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Skills"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};`
    }
  ];

  // Code architecture explanation
  const architectureDetails = [
    {
      title: "Component Architecture",
      icon: <Blocks className="h-8 w-8 text-resume-purple" />,
      description: "Our application is built using a modular component architecture. Each functional area is broken down into smaller, reusable components.",
      code: `src/
├── components/         # Reusable UI components
│   ├── ui/             # Base UI components from Shadcn
│   ├── forms/          # Form components
│   └── resume-preview/ # Resume preview components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── data/               # Data models and initial state
├── lib/                # Utility functions
└── types/              # TypeScript type definitions`
    },
    {
      title: "State Management",
      icon: <GitPullRequest className="h-8 w-8 text-resume-purple" />,
      description: "We use React's built-in state management with useState, useReducer, and context API for most state. For server state and async operations, we utilize Tanstack Query.",
      code: `// Example of state management using React Context
// ResumeContext.tsx
import React, { createContext, useContext, useReducer } from 'react';
import { ResumeData, initialResumeData } from '@/data/initialData';

type Action = 
  | { type: 'UPDATE_PERSONAL_INFO'; payload: Partial<ResumeData['personalInfo']> }
  | { type: 'ADD_EXPERIENCE'; payload: ResumeData['experience'][0] }
  | { type: 'RESET'; };

const ResumeContext = createContext<{
  state: ResumeData;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const resumeReducer = (state: ResumeData, action: Action): ResumeData => {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          ...action.payload
        }
      };
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, action.payload]
      };
    case 'RESET':
      return initialResumeData;
    default:
      return state;
  }
};

export const ResumeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, initialResumeData);
  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};`
    },
    {
      title: "Routing System",
      icon: <Anchor className="h-8 w-8 text-resume-purple" />,
      description: "Navigation is handled with React Router, enabling seamless transitions between pages without full page reloads.",
      code: `// App.tsx - Routing Configuration
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Guide from "./pages/Guide";
import TechStack from "./pages/TechStack";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/tech-stack" element={<TechStack />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);`
    },
    {
      title: "Build Process",
      icon: <Code className="h-8 w-8 text-resume-purple" />,
      description: "Our build process leverages Vite for fast development and optimized production builds. TypeScript provides static type checking during development.",
      code: `// TypeScript configuration (tsconfig.json)
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`
    }
  ];

  const handleDownloadCode = async () => {
    try {
      setIsDownloading(true);
      toast({
        title: "Preparing download",
        description: "Getting your code ready. This might take a moment...",
      });

      // Create a new JSZip instance
      const zip = new JSZip();
      
      // In a real implementation, this would fetch all the code files
      // For now, we're just simulating with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Add files to the zip
      zip.file("README.md", "# Resume Builder Project\n\nThis is a resume builder application.");
      
      // Create directories and add files
      const srcFolder = zip.folder("src");
      srcFolder.file("index.tsx", "// Source code would be here");
      srcFolder.file("App.tsx", "// App component code");
      
      const componentsFolder = srcFolder.folder("components");
      componentsFolder.file("ResumeForm.tsx", "// ResumeForm component code");
      componentsFolder.file("ResumePreview.tsx", "// ResumePreview component code");
      
      // Generate the zip file
      const content = await zip.generateAsync({ type: "blob" });
      
      // Save the zip file
      FileSaver.saveAs(content, "resume-builder-source.zip");
      
      toast({
        title: "Download complete!",
        description: "Your code has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Download failed:", error);
      toast({
        title: "Download failed",
        description: "There was an error preparing your download. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const TechCard = ({ tech }) => (
    <a href={tech.url} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-resume-purple">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">{tech.name}</CardTitle>
          <div className="p-2 rounded-full bg-gray-100">
            {tech.icon}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm">{tech.description}</CardDescription>
          {tech.code && (
            <div className="mt-4 p-3 bg-gray-900 text-gray-200 rounded-md overflow-x-auto text-xs">
              <pre className="whitespace-pre-wrap"><code>{tech.code}</code></pre>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Badge variant="outline" className={`bg-${tech.color}-50 text-${tech.color}-600 border-${tech.color}-200`}>
            {tech.name}
          </Badge>
        </CardFooter>
      </Card>
    </a>
  );

  const ArchitectureCard = ({ detail }) => (
    <div className="flex flex-col md:flex-row gap-4 items-start mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="bg-gray-50 p-4 rounded-full shadow-sm">
        {detail.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
        <p className="text-gray-600 mb-4">{detail.description}</p>
        <div className="p-3 bg-gray-900 text-gray-200 rounded-md overflow-x-auto text-xs">
          <pre className="whitespace-pre-wrap"><code>{detail.code}</code></pre>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
            Our Technology Stack
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the powerful technologies that make our resume builder fast, responsive, and feature-rich.
            Our carefully selected tech stack ensures a smooth user experience and professional results.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <Button 
            onClick={handleDownloadCode} 
            disabled={isDownloading}
            className="bg-resume-purple hover:bg-resume-dark-purple flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            {isDownloading ? "Preparing..." : "Download Source Code"}
          </Button>
        </div>

        <div className="mb-12">
          <Tabs defaultValue="frontend">
            <div className="flex justify-center mb-6">
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger value="frontend" className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  <span>Frontend</span>
                </TabsTrigger>
                <TabsTrigger value="buildtools" className="flex items-center gap-2">
                  <Laptop className="h-4 w-4" />
                  <span>Build Tools</span>
                </TabsTrigger>
                <TabsTrigger value="libraries" className="flex items-center gap-2">
                  <FileCode className="h-4 w-4" />
                  <span>Libraries</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="frontend" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frontendTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="buildtools" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {buildTools.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="libraries" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {libraries.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-resume-purple text-center">Application Architecture & Code Organization</h2>
          <div className="space-y-8">
            {architectureDetails.map((detail, index) => (
              <ArchitectureCard key={index} detail={detail} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-resume-purple">How This Site Works</h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Blocks className="h-8 w-8 text-resume-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Component-Based Architecture</h3>
                <p className="text-gray-600">
                  Our resume builder is built using React's component-based architecture, allowing for modular, reusable UI elements that create a consistent user experience. Each part of your resume is a separate component that can be updated independently.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Sparkles className="h-8 w-8 text-resume-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Preview</h3>
                <p className="text-gray-600">
                  As you make changes to your resume content, our application renders a real-time preview using React's state management. This live feedback ensures you can see exactly how your resume will look while you're editing.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Download className="h-8 w-8 text-resume-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Export Functionality</h3>
                <p className="text-gray-600">
                  When you're ready to download your resume, we use HTML2Canvas to capture your design as an image. For PDF generation, we use jsPDF to create a professional document that preserves your formatting and design elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechStack;
