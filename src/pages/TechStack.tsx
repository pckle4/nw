
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Code, 
  Database, 
  Layout, 
  Palette, 
  FileCode, 
  PackageOpen, 
  TerminalSquare, 
  Zap, 
  GitBranch,
  ServerCog
} from 'lucide-react';

const TechStack = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 mb-8 text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
              Our Technology Stack
            </h1>
            <div className="w-24 h-1 bg-resume-purple mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4">
              A comprehensive breakdown of the technologies and tools that power Nowhile Resume Builder
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <TechCard 
              icon={<Layout />}
              title="Frontend Framework"
              color="bg-blue-500"
              tech="React"
              description="A JavaScript library for building user interfaces with component-based architecture"
            />
            
            <TechCard 
              icon={<Palette />}
              title="Styling Solution"
              color="bg-cyan-500"
              tech="Tailwind CSS"
              description="A utility-first CSS framework for rapid UI development"
            />
            
            <TechCard 
              icon={<FileCode />}
              title="Type Safety"
              color="bg-blue-700"
              tech="TypeScript"
              description="A strongly typed programming language that builds on JavaScript"
            />
            
            <TechCard 
              icon={<Zap />}
              title="Build Tool"
              color="bg-purple-500"
              tech="Vite"
              description="Next generation frontend tooling for lightning-fast development"
            />
            
            <TechCard 
              icon={<PackageOpen />}
              title="UI Components"
              color="bg-slate-800"
              tech="shadcn/ui"
              description="Beautifully designed components built with Radix UI and Tailwind CSS"
            />
            
            <TechCard 
              icon={<Database />}
              title="State Management"
              color="bg-red-500"
              tech="Tanstack Query"
              description="Powerful asynchronous state management for data fetching"
            />
          </div>
          
          <Separator className="my-10" />
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="mr-2 text-resume-purple" />
              Code Architecture Explained
            </h2>
            
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <ScrollArea className="h-[400px] rounded-md p-6">
                <div className="space-y-6">
                  <CodeExplanation 
                    title="Component Structure"
                    description="The application follows a component-based architecture where UI elements are broken down into reusable components."
                    code={`
// Example of a component structure
├── components/
│   ├── Header.tsx           # Main navigation header
│   ├── Footer.tsx           # Site footer
│   ├── ResumeForm.tsx       # Form for collecting resume data
│   ├── ResumePreview.tsx    # Live preview of the resume
│   ├── TemplateSelector.tsx # UI for selecting resume templates
│   └── ui/                  # shadcn/ui components
                    `}
                  />
                  
                  <CodeExplanation 
                    title="State Management"
                    description="Resume data is managed using React's useState and passed down through props. TanStack Query is used for data fetching and complex state management."
                    code={`
// Example state management in ResumeForm
const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);

// Passing state to child components
<PersonalInfoForm 
  data={resumeData.personalInfo}
  onUpdate={(data) => {
    setResumeData({
      ...resumeData,
      personalInfo: data
    });
  }}
/>
                    `}
                  />
                  
                  <CodeExplanation 
                    title="Routing System"
                    description="React Router is used to handle navigation between different pages of the application."
                    code={`
// App.tsx routing configuration
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/guide" element={<Guide />} />
    <Route path="/tech" element={<TechStack />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
                    `}
                  />
                  
                  <CodeExplanation 
                    title="Resume Data Structure"
                    description="TypeScript interfaces define the structure of resume data, ensuring type safety throughout the application."
                    code={`
// Example from types/resume.ts
export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
  website?: string;
  portfolio?: string;
  github?: string;
  twitter?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
}
                    `}
                  />
                  
                  <CodeExplanation 
                    title="Form Validation"
                    description="Form validation ensures all required fields are filled before proceeding to the next step."
                    code={`
// Example validation logic
const handleNext = () => {
  if (!data.fullName || !data.email) {
    toast({
      title: "Missing information",
      description: "Please fill in all required fields",
      variant: "destructive"
    });
    return;
  }
  
  onNext();
};
                    `}
                  />
                  
                  <CodeExplanation 
                    title="PDF Generation"
                    description="The resume is converted to PDF using a combination of HTML canvas capture and the jsPDF library."
                    code={`
// PDF generation process
1. Capture resume template as canvas using html2canvas
2. Convert canvas to image
3. Create new jsPDF document
4. Add image to PDF document
5. Save PDF file to user's device
                    `}
                  />
                </div>
              </ScrollArea>
            </div>
          </section>
          
          <Separator className="my-10" />
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <ServerCog className="mr-2 text-resume-purple" />
              Development & Deployment
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DevCard 
                icon={<TerminalSquare />}
                title="Development Environment"
                items={[
                  "Vite for fast hot module replacement",
                  "ESLint for code quality",
                  "TypeScript for type checking",
                  "npm for package management"
                ]}
              />
              
              <DevCard 
                icon={<GitBranch />}
                title="Version Control & Deployment"
                items={[
                  "Git for version control",
                  "CI/CD pipeline for automated testing",
                  "Static site hosting with CDN",
                  "Environment variables for configuration"
                ]}
              />
            </div>
          </section>
          
          <Separator className="my-10" />
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Performance Optimizations</h2>
            
            <div className="space-y-4">
              <PerformanceItem 
                title="Code Splitting"
                description="Routes are lazily loaded to reduce initial bundle size and improve load times."
              />
              
              <PerformanceItem 
                title="Memoization"
                description="React.memo and useMemo are used to prevent unnecessary re-renders of components."
              />
              
              <PerformanceItem 
                title="Asset Optimization"
                description="Images are optimized and loaded with proper dimensions to reduce bandwidth usage."
              />
              
              <PerformanceItem 
                title="CSS Optimization"
                description="Tailwind CSS's purge feature removes unused CSS in production builds."
              />
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper component for tech cards
interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  tech: string;
  description: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, color, tech, description }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5">
      <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="text-xl font-bold mb-2">{tech}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Helper component for code explanations
interface CodeExplanationProps {
  title: string;
  description: string;
  code: string;
}

const CodeExplanation: React.FC<CodeExplanationProps> = ({ title, description, code }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <pre className="bg-gray-900 text-gray-200 p-4 rounded-md text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// Helper component for development cards
interface DevCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const DevCard: React.FC<DevCardProps> = ({ icon, title, items }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="w-5 h-5 bg-resume-purple/10 rounded-full flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-resume-purple rounded-full"></div>
            </div>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Helper component for performance items
interface PerformanceItemProps {
  title: string;
  description: string;
}

const PerformanceItem: React.FC<PerformanceItemProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center">
          <Zap className="h-3 w-3 text-green-500" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 pl-9 text-sm">{description}</p>
    </div>
  );
};

export default TechStack;
