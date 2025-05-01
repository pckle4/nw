
import React from 'react';
import {
  FileText, Code2, Database, Paintbrush, Star, Component, Function, Play, BookOpen,
  Layers, Settings, CircleArrowRight, Search, FileCode, Hook, ImageIcon, Download, 
  CirclePlay
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-blue-50/30 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-resume-purple via-blue-500 to-indigo-500 mb-4">
            How Nowhile Works
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A detailed technical explanation of how the resume builder collects data, 
            renders templates, and generates downloadable files.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white/80 rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-xl font-bold text-resume-purple mb-4">Table of Contents</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: <Database className="h-5 w-5 text-blue-500" />, text: "Data Collection & Form Management" },
              { icon: <Component className="h-5 w-5 text-green-500" />, text: "Component Architecture" },
              { icon: <Paintbrush className="h-5 w-5 text-purple-500" />, text: "Styling & Responsive Design" },
              { icon: <FileText className="h-5 w-5 text-orange-500" />, text: "Template Rendering System" },
              { icon: <CirclePlay className="h-5 w-5 text-blue-600" />, text: "Animations & Transitions" },
              { icon: <Download className="h-5 w-5 text-indigo-500" />, text: "Export & Download Process" }
            ].map((item, index) => (
              <li key={index}>
                <a 
                  href={`#section-${index + 1}`} 
                  className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-md transition-colors"
                >
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 1: Data Collection */}
        <section id="section-1" className="mb-16">
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
              
              <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
                <li><strong>PersonalInfoForm</strong>: Collects basic information like name, job title, and contact details.</li>
                <li><strong>ExperienceForm</strong>: Manages a list of work experiences with add/edit/delete capabilities.</li>
                <li><strong>EducationForm</strong>: Similar to experience, handles educational background.</li>
                <li><strong>SkillsForm</strong>: Manages skills with categorization and rating options.</li>
                <li><strong>ProjectsForm</strong>: Handles project information with descriptions and links.</li>
              </ul>

              <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
                <h4 className="font-bold text-blue-700 mb-2">Technical Implementation</h4>
                <p className="text-gray-700 mb-2">Each form uses the following hooks and libraries:</p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li><code>useFormContext</code> from React Hook Form to access the global form state</li>
                  <li>Shadcn UI form components for consistent styling and accessibility</li>
                  <li>Zod schemas for type validation and ensuring data integrity</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">State Management</h3>
              <p className="text-gray-700">
                Form state is managed through a combination of local state (useState) and React Hook Form. 
                The data flow follows this pattern:
              </p>
              
              <div className="relative mt-4 overflow-hidden p-6 rounded-lg bg-gradient-to-r from-gray-100 to-blue-50">
                <div className="flex flex-col gap-4">
                  <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-blue-400">
                    <strong className="block text-blue-700">User Input</strong>
                    <span className="text-sm text-gray-600">Data entered in form fields</span>
                  </div>
                  <div className="flex justify-center">
                    <CircleArrowRight className="h-6 w-6 text-blue-500 animate-pulse" />
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-green-400">
                    <strong className="block text-green-700">React Hook Form</strong>
                    <span className="text-sm text-gray-600">Manages form state & validation</span>
                  </div>
                  <div className="flex justify-center">
                    <CircleArrowRight className="h-6 w-6 text-blue-500 animate-pulse" />
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-purple-400">
                    <strong className="block text-purple-700">ResumeData State</strong>
                    <span className="text-sm text-gray-600">Central state used for preview & export</span>
                  </div>
                </div>
                
                <div className="absolute -z-10 opacity-30 top-0 right-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Component Architecture */}
        <section id="section-2" className="mb-16">
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
              
              <div className="mt-4 p-4 bg-gray-100 rounded-lg overflow-x-auto">
                <ul className="list-none space-y-1 font-mono text-sm">
                  <li className="text-blue-700">App.tsx</li>
                  <li className="pl-6 text-blue-700">├─ Index.tsx <span className="text-gray-500">// Main page</span></li>
                  <li className="pl-12 text-blue-700">├─ ResumeForm.tsx <span className="text-gray-500">// Form container</span></li>
                  <li className="pl-16 text-green-600">├─ PersonalInfoForm.tsx</li>
                  <li className="pl-16 text-green-600">├─ ExperienceForm.tsx</li>
                  <li className="pl-16 text-green-600">├─ EducationForm.tsx</li>
                  <li className="pl-16 text-green-600">├─ SkillsForm.tsx</li>
                  <li className="pl-16 text-green-600">└─ ProjectsForm.tsx</li>
                  <li className="pl-12 text-blue-700">└─ ResumePreview.tsx <span className="text-gray-500">// Preview container</span></li>
                  <li className="pl-16 text-purple-600">├─ ResumeTemplateRenderer.tsx <span className="text-gray-500">// Template switcher</span></li>
                  <li className="pl-20 text-red-500">├─ ModernTemplate.tsx</li>
                  <li className="pl-20 text-red-500">├─ MinimalTemplate.tsx</li>
                  <li className="pl-20 text-red-500">└─ ColorfulTemplate.tsx</li>
                  <li className="pl-16 text-purple-600">└─ DownloadOptions.tsx <span className="text-gray-500">// Export controls</span></li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-green-600 mb-2">Component Communication</h3>
              <p className="text-gray-700">
                Components communicate primarily through:
              </p>
              
              <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
                <li><strong>Props</strong>: Direct parent-to-child data passing</li>
                <li><strong>React Hook Form Context</strong>: Form state management across components</li>
                <li><strong>Custom Hooks</strong>: Encapsulated logic shared between components</li>
                <li><strong>Event Handlers</strong>: Callbacks for user interactions</li>
              </ul>

              <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
                <h4 className="font-bold text-green-700 mb-2">Key Components</h4>
                <p className="text-gray-700 mb-2">The core components include:</p>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li><strong>ResumeTemplateRenderer</strong>: The bridge between data and visual output</li>
                  <li><strong>Template Components</strong>: Renders specific visual styles for the resume</li>
                  <li><strong>ZoomControls</strong>: Handles preview magnification</li>
                  <li><strong>DownloadOptions</strong>: Manages export functionality</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Styling & Responsive Design */}
        <section id="section-3" className="mb-16">
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
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                    <Star className="h-5 w-5" /> Tailwind CSS
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Utility-first CSS framework that enables rapid UI development with responsive design. 
                    Used for layout, spacing, colors, and responsive adaptations.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>className="flex flex-col md:flex-row gap-4"</code>
                  </pre>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                    <Component className="h-5 w-5" /> Shadcn UI
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Pre-built, accessible UI components built on Radix UI primitives.
                    Used for form controls, buttons, dialogs, and other interface elements.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>{`<Button variant="default">Download</Button>`}</code>
                  </pre>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                    <Layers className="h-5 w-5" /> CSS Variables
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Custom properties for theme colors and spacing values used across templates.
                    Enables consistent styling and theming capabilities.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>:root { --resume-primary: #8B5CF6; }</code>
                  </pre>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                    <Settings className="h-5 w-5" /> Custom Classes
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Extension classes for specific resume template styling needs
                    like custom gradients and print-optimized layouts.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>.bg-resume-gradient { ... }</code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-purple-600 mb-2">Responsive Design Approach</h3>
              <p className="text-gray-700 mb-2">
                Nowhile implements a mobile-first responsive design strategy with multiple breakpoints:
              </p>
              
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="border border-purple-200 p-2 text-left">Breakpoint</th>
                      <th className="border border-purple-200 p-2 text-left">CSS Class</th>
                      <th className="border border-purple-200 p-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-purple-200 p-2">Default</td>
                      <td className="border border-purple-200 p-2 font-mono text-sm">-</td>
                      <td className="border border-purple-200 p-2">Mobile styles (0px+)</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-2">Small</td>
                      <td className="border border-purple-200 p-2 font-mono text-sm">sm:</td>
                      <td className="border border-purple-200 p-2">Small devices (640px+)</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-2">Medium</td>
                      <td className="border border-purple-200 p-2 font-mono text-sm">md:</td>
                      <td className="border border-purple-200 p-2">Tablets (768px+)</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-2">Large</td>
                      <td className="border border-purple-200 p-2 font-mono text-sm">lg:</td>
                      <td className="border border-purple-200 p-2">Desktops (1024px+)</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-2">Extra Large</td>
                      <td className="border border-purple-200 p-2 font-mono text-sm">xl:</td>
                      <td className="border border-purple-200 p-2">Large screens (1280px+)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-700 mb-2">Print Optimization</h4>
                <p className="text-gray-700 text-sm">
                  Special attention is given to print styles to ensure resumes look great when printed or exported to PDF:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700">
                  <li>Custom media queries for print format</li>
                  <li>Page break controls to prevent awkward content splits</li>
                  <li>Special handling for backgrounds and colors in print context</li>
                  <li>A4 size optimization (210 × 297 mm) for global compatibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Template Rendering System */}
        <section id="section-4" className="mb-16">
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
              
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-3 text-sm">
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
              
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-700 mb-2">Template Component Structure</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Each template follows a consistent structure with sections that correspond to resume data sections:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-orange-50 p-3 rounded-md">
                    <h5 className="font-bold text-orange-700 text-sm">Header Section</h5>
                    <p className="text-xs text-gray-600">Personal info & contact details</p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded-md">
                    <h5 className="font-bold text-orange-700 text-sm">Summary Section</h5>
                    <p className="text-xs text-gray-600">Professional summary/objective</p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded-md">
                    <h5 className="font-bold text-orange-700 text-sm">Experience Section</h5>
                    <p className="text-xs text-gray-600">Work history items</p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded-md">
                    <h5 className="font-bold text-orange-700 text-sm">Education Section</h5>
                    <p className="text-xs text-gray-600">Academic background</p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded-md">
                    <h5 className="font-bold text-orange-700 text-sm">Skills Section</h5>
                    <p className="text-xs text-gray-600">Categorized skills list</p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded-md">
                    <h5 className="font-bold text-orange-700 text-sm">Projects Section</h5>
                    <p className="text-xs text-gray-600">Portfolio projects display</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-orange-600 mb-2">Multi-page Support</h3>
              <p className="text-gray-700">
                Nowhile implements intelligent pagination for resumes with extensive content:
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-md mt-4">
                <h4 className="font-bold text-orange-700 mb-2">Overflow Detection</h4>
                <p className="text-gray-700 mb-2">The application uses DOM measurements to detect content overflow:</p>
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

              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-700 mb-2">Rendering Multiple Pages</h4>
                <p className="text-gray-700 text-sm">
                  When overflow is detected, the renderer creates additional pages to accommodate the content:
                </p>
                <pre className="bg-white p-3 rounded-md text-xs overflow-x-auto mt-2">
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
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Animations & Transitions */}
        <section id="section-5" className="mb-16">
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
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-700 mb-2">CSS Transitions</h4>
                  <p className="text-gray-700 text-sm">
                    Used for simple state changes like hover effects and color changes.
                    Performance-optimized for smooth interactions.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>transition-colors duration-300</code>
                  </pre>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-700 mb-2">CSS Animations</h4>
                  <p className="text-gray-700 text-sm">
                    Keyframe animations for more complex effects like loading states and attention-grabbing elements.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>animate-fade-in animate-pulse</code>
                  </pre>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-700 mb-2">React Transition States</h4>
                  <p className="text-gray-700 text-sm">
                    Component-based transitions using React state for coordinated animations and conditional rendering.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>{`const [isVisible, setIsVisible] = useState(false);`}</code>
                  </pre>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-700 mb-2">Tailwind Animation Classes</h4>
                  <p className="text-gray-700 text-sm">
                    Pre-configured animation utilities for common effects like fade, pulse, spin, and bounce.
                  </p>
                  <pre className="bg-white p-2 rounded-md mt-2 text-xs overflow-x-auto">
                    <code>animate-bounce animate-spin</code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-2">Key Animated Features</h3>
              <p className="text-gray-700">
                Animations are strategically used throughout the application for better user experience:
              </p>
              
              <div className="mt-4 space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100 flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <FileCode className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-700 mb-1">Form Transitions</h4>
                    <p className="text-gray-700 text-sm">
                      Smooth animations between form sections improve navigation flow. Field validations use subtle 
                      animations to indicate success or error states without disrupting the user.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <div className="px-2 py-1 bg-white rounded text-xs text-blue-700 border border-blue-200">fade-in</div>
                      <div className="px-2 py-1 bg-white rounded text-xs text-blue-700 border border-blue-200">slide-transition</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-100 flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-purple-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-700 mb-1">Template Switching</h4>
                    <p className="text-gray-700 text-sm">
                      When users change resume templates, a crossfade effect provides visual continuity. 
                      This helps users understand that their content is preserved while the design changes.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <div className="px-2 py-1 bg-white rounded text-xs text-purple-700 border border-purple-200">cross-fade</div>
                      <div className="px-2 py-1 bg-white rounded text-xs text-purple-700 border border-purple-200">scale-transition</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100 flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Download className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700 mb-1">Export Progress</h4>
                    <p className="text-gray-700 text-sm">
                      Loading states and success/error notifications use animations to keep users informed about 
                      export status. Progress indicators and toast notifications feature subtle motion.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <div className="px-2 py-1 bg-white rounded text-xs text-green-700 border border-green-200">progress-animation</div>
                      <div className="px-2 py-1 bg-white rounded text-xs text-green-700 border border-green-200">toast-slide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Export & Download Process */}
        <section id="section-6" className="mb-16">
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
                <div className="bg-indigo-50 rounded-lg border border-indigo-100 overflow-hidden">
                  <div className="bg-indigo-100 p-3">
                    <h4 className="font-bold text-indigo-700">Export Pipeline</h4>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">1</div>
                        <h5 className="font-bold text-indigo-800">DOM Capture</h5>
                      </div>
                      <p className="text-sm text-gray-700">
                        Uses html2canvas to capture the rendered resume DOM as a high-resolution canvas element. 
                        Special attention is paid to fonts, layout precision, and color accuracy.
                      </p>
                      <pre className="bg-gray-50 p-2 rounded-md mt-2 text-xs overflow-x-auto">
                        <code>const canvas = await html2canvas(resumeRef.current, {scale: 4});</code>
                      </pre>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">2</div>
                        <h5 className="font-bold text-indigo-800">Format Conversion</h5>
                      </div>
                      <p className="text-sm text-gray-700">
                        The canvas is then processed into the requested file format (PDF, PNG, or JPG)
                        using different approaches depending on format.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                        <div className="bg-gray-50 p-2 rounded-md text-xs">
                          <strong className="text-indigo-700">PDF:</strong> jsPDF library
                        </div>
                        <div className="bg-gray-50 p-2 rounded-md text-xs">
                          <strong className="text-indigo-700">PNG:</strong> toDataURL('image/png')
                        </div>
                        <div className="bg-gray-50 p-2 rounded-md text-xs">
                          <strong className="text-indigo-700">JPG:</strong> toDataURL('image/jpeg')
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">3</div>
                        <h5 className="font-bold text-indigo-800">File Generation & Download</h5>
                      </div>
                      <p className="text-sm text-gray-700">
                        Creates the download file using appropriate methods for each format, 
                        then triggers browser download with the user's name in the filename.
                      </p>
                      <pre className="bg-gray-50 p-2 rounded-md mt-2 text-xs overflow-x-auto">
                        <code>{`pdf.save(\`\${data.personalInfo.fullName.replace(/\\s+/g, '_')}_Resume.pdf\`);`}</code>
                      </pre>
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
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md mt-4">
                <h4 className="font-bold text-blue-700 mb-2">PDF Page Management</h4>
                <p className="text-gray-700 text-sm mb-3">
                  The export process captures all resume pages and combines them into a single PDF document:
                </p>
                
                <pre className="bg-white p-3 rounded-md text-xs overflow-x-auto">
{`// For multi-page resumes
if (pages > 1) {
  // Add first page
  const firstPageCanvas = await html2canvas(resumePageElements[0]);
  const imgData1 = firstPageCanvas.toDataURL('image/png');
  
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });
  
  pdf.addImage(imgData1, 'PNG', 0, 0, 210, 297);
  
  // Add subsequent pages
  for (let i = 1; i < pages; i++) {
    const pageCanvas = await html2canvas(resumePageElements[i]);
    const imgData = pageCanvas.toDataURL('image/png');
    
    // Add new page to PDF
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
  }
  
  pdf.save(\`\${filename}.pdf\`);
}`}
                </pre>
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
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-resume-purple/20 via-blue-100/30 to-violet-200/30 shadow-md animate-fade-in space-y-6">
          <h2 className="text-2xl font-bold text-center text-resume-purple mb-4">Libraries & Technologies Used</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h3 className="font-bold text-resume-purple mb-2 flex items-center gap-2">
                <Function className="h-5 w-5" /> Core Framework
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span>React</span>
                </li>
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span>Vite</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h3 className="font-bold text-resume-purple mb-2 flex items-center gap-2">
                <Hook className="h-5 w-5" /> Form & Validation
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span>React Hook Form</span>
                </li>
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span>Zod</span>
                </li>
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span>@hookform/resolvers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h3 className="font-bold text-resume-purple mb-2 flex items-center gap-1">
                <Paintbrush className="h-5 w-5" /> UI Components
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-orange-500" />
                  <span>Shadcn UI</span>
                </li>
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-orange-500" />
                  <span>Radix UI</span>
                </li>
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-orange-500" />
                  <span>Lucide Icons</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h3 className="font-bold text-resume-purple mb-2 flex items-center gap-1">
                <Download className="h-5 w-5" /> Export Tools
              </h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                  <span>html2canvas</span>
                </li>
                <li className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                  <span>jsPDF</span>
                </li>
                <li className="flex items-center gap-1">
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
