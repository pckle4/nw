
import React from 'react';
import {
  BookOpen, Code2, Paintbrush, Star, Sparkles, Users, TrendingUp, Download, Shield, Globe, Heart, Cpu, Pen, Lightbulb, 
  ListCheck, SquareDashed, Move, WandSparkles, MousePointer, ListTodo, Wand, PenLine, Brain, Droplets, ClipboardList,
  FileText, Database, Server, Zap, GitBranch, LucideIcon, Rocket, Monitor, Cloud, Lock, Laptop, Gauge, Code, LockKeyhole,
  Send, GitCommit, Workflow, AlertCircle, LayoutDashboard, Save, Component, Blocks, Award, ArrowRight, AlignJustify
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

const stackSections = [
  {
    name: "React",
    color: "from-blue-400 via-blue-800 to-purple-500",
    icon: <Code2 className="h-10 w-10 text-blue-400 animate-bounce" />,
    desc: "Super fast, component-driven UI library powering Nowhile's instant editing and previews. It enables instant updates, powerful composability, and seamless user experience across all devices. React's lifecycle hooks and virtual DOM make complex resume layouts and real-time feedback effortless."
  },
  {
    name: "TypeScript",
    color: "from-blue-200 via-blue-400 to-blue-700",
    icon: <BookOpen className="h-10 w-10 text-blue-700 animate-pulse" />,
    desc: "Typed, robust codebase for error prevention, better auto-completion, and peace of mind. TypeScript's strong type system enables safer code, detects mistakes before they happen, and simplifies team collaboration on hundreds of components."
  },
  {
    name: "TailwindCSS",
    color: "from-green-200 via-blue-200 to-sky-200",
    icon: <Paintbrush className="h-10 w-10 text-sky-400 animate-fade-in" />,
    desc: "Utility-first styling provides rapid prototyping and responsive, highly polished interfaces. Tailwind makes every design decision easy to reason about and guarantees your resume is beautiful on any screen size or platform. No style bloating—just instant, elegant UI."
  },
  {
    name: "Shadcn/UI",
    color: "from-gray-100 via-purple-50 to-gray-300",
    icon: <Star className="h-10 w-10 text-purple-500 animate-spin" />,
    desc: "Gorgeous, accessible prebuilt UI components that deliver both function and delight. Shadcn/UI ensures state-of-the-art design patterns with unbeatable developer velocity and maintainability."
  },
  {
    name: "Lucide Icons",
    color: "from-yellow-200 via-yellow-50 to-purple-100",
    icon: <Sparkles className="h-10 w-10 text-yellow-400 animate-bounce" />,
    desc: "Over 1000 crisp, modern SVG icons, from UI symbols to job function and hobby graphics. Every icon is scalable, accessible, and easily themable—enriching resumes and builder dashboards alike."
  },
  {
    name: "Radix UI Primitives",
    color: "from-slate-100 via-indigo-100 to-slate-300",
    icon: <Component className="h-10 w-10 text-indigo-400 animate-spin" />,
    desc: "Radix UI is the backbone of our focus management and accessibility, making every dialog, dropdown, and popover usable for all. Its low-level primitives are the secret to smooth keyboard navigation and perfect tooltips."
  },
  {
    name: "React Hook Form",
    color: "from-pink-100 via-yellow-100 to-green-200",
    icon: <ClipboardList className="h-10 w-10 text-pink-400 animate-bounce" />,
    desc: "Lightning-fast, flexible form management powers our live, validated AI-driven resume fields. React Hook Form enables both UX delight and stress-free integration with third-party validators and UI controls."
  },
  {
    name: "Tanstack Query (React Query)",
    color: "from-blue-100 via-sky-200 to-green-200",
    icon: <ListCheck className="h-10 w-10 text-green-500 animate-bounce" />,
    desc: "Efficient, resilient data fetching: synchronize user state, save drafts, and connect with external databases. Tanstack Query gives us a reliable foundation for both cloud sync and blazing-fast browser experience."
  },
  {
    name: "HTML5 & CSS3",
    color: "from-orange-200 via-orange-100 to-pink-50",
    icon: <SquareDashed className="h-10 w-10 text-orange-400 animate-bounce" />,
    desc: "Solid browser standards mean the builder works anywhere, anytime. Modern markup powers accessibility and fine-tuned print-to-PDF support without hacks."
  },
  {
    name: "JSZip & FileSaver",
    color: "from-pink-200 via-yellow-50 to-blue-100",
    icon: <Move className="h-10 w-10 text-blue-300 animate-spin" />,
    desc: "Zip multiple resume versions and export to PDF effortlessly. These libraries make file handling a breeze, with blazing speed and reliable results for all users."
  },
  {
    name: "Cloud Integrations",
    color: "from-blue-50 via-green-100 to-yellow-50",
    icon: <Globe className="h-10 w-10 text-blue-500 animate-fade-in" />,
    desc: "Data privacy and cloud sync: seamlessly connect with cloud drives while ensuring user control. We use open standards for robust interoperability."
  },
  {
    name: "AI & Suggestions",
    color: "from-violet-200 via-purple-100 to-pink-200",
    icon: <WandSparkles className="h-10 w-10 text-purple-500 animate-bounce" />,
    desc: "Nowhile infuses live AI guidance right in your workflow. From field-specific tips to AI analyzed suggestions for job titles, summaries, and skill matches—AI makes building a world-class CV intuitive and fun."
  },
  {
    name: "Mobile-First Responsive Design",
    color: "from-blue-100 via-pink-50 to-green-100",
    icon: <MousePointer className="h-10 w-10 text-green-400 animate-bounce" />,
    desc: "Built to look gorgeous and work flawlessly on every device—extra touch targets, responsive layouts, and adaptive component sizing are at the heart of our user experience."
  },
  {
    name: "Zod Validation",
    color: "from-red-100 via-orange-50 to-yellow-100",
    icon: <Shield className="h-10 w-10 text-red-400 animate-pulse" />,
    desc: "Schema-based validation ensures data integrity across the entire application. Zod seamlessly integrates with React Hook Form to provide real-time validation feedback and type safety."
  },
  {
    name: "Progressive Web App (PWA)",
    color: "from-indigo-100 via-blue-50 to-cyan-100",
    icon: <Laptop className="h-10 w-10 text-indigo-500 animate-float" />,
    desc: "Work offline and install on any device. Our PWA architecture caches your resume data locally, allowing you to continue working without an internet connection and providing an app-like experience."
  }
];

const highlights = [
  {
    icon: <Cpu className="h-8 w-8 text-purple-500 animate-pulse" />,
    txt: "Lightning-fast instant preview as you build. Every form change triggers React's virtual DOM to update the preview, showing your changes exactly as a hiring manager would."
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-400 animate-bounce" />,
    txt: "All in the browser. No install, no ads. Privacy-respecting browser tech and zero data tracking."
  },
  {
    icon: <Heart className="h-8 w-8 text-pink-400 animate-pulse" />,
    txt: "Privacy-first. Data stays local. Your resume and personal details never leave your device."
  },
  {
    icon: <Pen className="h-8 w-8 text-purple-500 animate-spin" />,
    txt: "Editable templates with live AI suggestions. Instantly switch styles, colors, and layouts."
  },
  {
    icon: <ListTodo className="h-8 w-8 text-yellow-500 animate-bounce" />,
    txt: "One-click PDF exporting: Pixel-perfect results every time with print-optimized templates and advanced CSS-to-PDF tech."
  },
  {
    icon: <Wand className="h-8 w-8 text-purple-500 animate-pulse" />,
    txt: "Smart error checking: Inline field validation and pro-level mistake proofing prompt you before you send."
  },
  {
    icon: <PenLine className="h-8 w-8 text-blue-400 animate-spin" />,
    txt: "Realtime preview: See both mobile and desktop versions live—never wonder what your recruiter will see."
  },
  {
    icon: <Gauge className="h-8 w-8 text-green-500 animate-pulse" />,
    txt: "Optimized performance: The entire app is under 500KB gzipped, ensuring fast load times even on slow connections."
  },
  {
    icon: <Code className="h-8 w-8 text-blue-500 animate-float" />,
    txt: "Developer-friendly codebase: Clean architecture, comprehensive documentation, and consistent patterns make extending the app straightforward."
  }
];

const reasons = [
  { icon: <Shield className="h-8 w-8 text-green-500 animate-bounce" />, txt: "Open-source, secure & fully free for individuals. All code is visible and extensible." },
  { icon: <Users className="h-8 w-8 text-purple-500 animate-pulse" />, txt: "Collaboration and feedback built in—share your CV safely and comment in real time." },
  { icon: <Lightbulb className="h-8 w-8 text-yellow-400 animate-bounce" />, txt: "Smart, context-aware resume builder. Every section is driven by best-practice logic." },
  { icon: <TrendingUp className="h-8 w-8 text-blue-400 animate-fade-in" />, txt: "Job-matching and career insights integrated. Get hiring-market data and tips right in the builder." },
  { icon: <Brain className="h-8 w-8 text-purple-400 animate-pulse" />, txt: "Modular code means Nowhile's UI, AI, and exports upgrade in days—not months." },
  { icon: <Droplets className="h-8 w-8 text-blue-200 animate-pulse" />, txt: "Beautiful gradients, crisp icons, and custom shadows give Nowhile its signature look and feel." },
  { icon: <LockKeyhole className="h-8 w-8 text-red-500 animate-float" />, txt: "End-to-end encryption for your data when syncing across devices, ensuring your information stays protected." },
  { icon: <Rocket className="h-8 w-8 text-orange-500 animate-bounce" />, txt: "Continuous delivery pipeline means new features and templates are added weekly, keeping the platform cutting-edge." }
];

const backgrounds = (
  <svg className="absolute -z-10 left-0 top-0 w-full h-[340px] pointer-events-none" viewBox="0 0 1440 340" fill="none">
    <defs>
      <radialGradient id="stackg2" cx="70%" cy="12%" r="90%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.095" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <ellipse cx="1100" cy="60" rx="520" ry="120" fill="url(#stackg2)" />
    <ellipse cx="260" cy="200" rx="200" ry="60" fill="#c6e0f7" fillOpacity="0.106" />
    <ellipse cx="900" cy="170" rx="210" ry="68" fill="#fbc2eb" fillOpacity="0.13" />
  </svg>
);

const tripleStackContent = (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 shadow-sm mb-6">
      <h2 className="text-xl font-bold mb-2 text-blue-600">How It Works Together</h2>
      <ol className="list-decimal ml-8 space-y-2 text-base text-gray-700">
        <li>
          <b>Instant Feedback:</b> Every edit triggers React's virtual DOM to update the preview, showing your changes exactly as a hiring manager would.
        </li>
        <li>
          <b>Adaptive Design:</b> Tailwind's utilities, custom breakpoints, and best-in-class accessibility support optimize for all devices, from widescreen desktops to small phones.
        </li>
        <li>
          <b>AI Guidance:</b> Field-by-field hints, error detection, and role-matching suggestions speed up resume creation and learning.
        </li>
        <li>
          <b>Export Excellence:</b> Built-in JSZip and html2canvas creations ensure your exported PDF looks stellar on every platform, with single-click simplicity.
        </li>
        <li>
          <b>Data Integrity:</b> Typed object models using TypeScript keep resume structure valid; Tanstack Query and React Hook Form sync and validate changes.
        </li>
      </ol>
    </div>
    <div className="bg-gradient-to-r from-blue-100 to-yellow-50 rounded-2xl p-8 shadow-sm text-base text-gray-700">
      <b>Why Modern Tech?</b>
      <ul className="list-disc ml-7 space-y-2 my-2">
        <li><b>Speed:</b> Edits are visible in <i>&lt;100ms</i>. No lag means more iterations and better resumes.</li>
        <li><b>Visual Creativity:</b> Entirely customizable color, font, and template palettes thanks to utility CSS and SVG icons.</li>
        <li><b>Accessibility:</b> ARIA, keyboard, and screen reader support throughout. Every candidate gets a fair shot.</li>
        <li><b>Reliability:</b> Robust, battle-tested libraries handle everything from tooltips to drag-and-drop.</li>
        <li><b>Open Source:</b> The whole stack is transparent; users and contributors can audit or extend every feature.</li>
      </ul>
    </div>
    <div className="text-center bg-gradient-to-br from-yellow-50 to-purple-50 p-4 rounded-xl text-gray-600 text-sm">
      Building with Nowhile means faster iterating, better user support, world-class accessibility, and a beautiful, fun workflow. Give it a try!
    </div>
  </div>
);

// New section explaining resume generation process
const resumeGenerationProcess = (
  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-md mb-10">
    <h2 className="text-2xl font-bold text-center text-purple-500 mb-6">How Nowhile Generates Resumes</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-700">Resume Rendering Pipeline</h3>
        
        <div className="bg-white/80 p-4 rounded-xl shadow-sm">
          <div className="flex items-start gap-3 mb-2">
            <Database className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">1. Data Collection & Validation</h4>
              <p className="text-gray-700 text-sm">User data is collected through React Hook Form with Zod validation, ensuring all fields conform to expected formats. TypeScript interfaces provide strict type-checking across the application.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 p-4 rounded-xl shadow-sm">
          <div className="flex items-start gap-3 mb-2">
            <Code2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">2. Template Selection & Component Tree</h4>
              <p className="text-gray-700 text-sm">The ResumeTemplateRenderer serves as a switch mechanism that instantiates the appropriate template component based on user selection. Each template is a React component that receives the validated resume data.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 p-4 rounded-xl shadow-sm">
          <div className="flex items-start gap-3 mb-2">
            <Paintbrush className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">3. Responsive Layout Rendering</h4>
              <p className="text-gray-700 text-sm">Tailwind CSS utility classes handle responsive layout, typography, and spacing. Each template uses carefully designed grid systems and flexbox layouts optimized for both screen viewing and print.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-700">Export Technologies</h3>
        
        <div className="bg-white/80 p-4 rounded-xl shadow-sm">
          <div className="flex items-start gap-3 mb-2">
            <FileText className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">4. DOM-to-Canvas Conversion</h4>
              <p className="text-gray-700 text-sm">When exporting, html2canvas captures the rendered DOM elements at 4x scale for crisp output. Custom font handling ensures text renders beautifully, with antialiasing and optimized typography settings.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 p-4 rounded-xl shadow-sm">
          <div className="flex items-start gap-3 mb-2">
            <Server className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">5. Canvas-to-Document Processing</h4>
              <p className="text-gray-700 text-sm">The captured canvas is processed using jsPDF (for PDF) or direct download links (for PNG/JPG). PDF generation includes metadata, compression optimization, and A4 format standardization for professional printing.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 p-4 rounded-xl shadow-sm">
          <div className="flex items-start gap-3 mb-2">
            <Download className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">6. Final Output Delivery</h4>
              <p className="text-gray-700 text-sm">The download hook manages file naming (using the person's name when available), proper MIME types, and browser download API integration. Toast notifications track progress and confirm successful downloads.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-8 bg-gradient-to-r from-yellow-50 to-green-50 p-5 rounded-xl">
      <h3 className="text-xl font-bold text-center text-purple-500 mb-3">Technical Challenges Solved</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white/70 p-3 rounded-lg shadow-sm">
          <h4 className="font-bold text-sm text-gray-800 mb-1">Font Rendering</h4>
          <p className="text-xs text-gray-700">Custom font loading with proper antialiasing and text-rendering optimizations for crisp, professional output.</p>
        </div>
        <div className="bg-white/70 p-3 rounded-lg shadow-sm">
          <h4 className="font-bold text-sm text-gray-800 mb-1">Layout Precision</h4>
          <p className="text-xs text-gray-700">Pixel-perfect positioning using CSS Grid and Flexbox, with careful attention to margins and padding for print fidelity.</p>
        </div>
        <div className="bg-white/70 p-3 rounded-lg shadow-sm">
          <h4 className="font-bold text-sm text-gray-800 mb-1">Scale Management</h4>
          <p className="text-xs text-gray-700">4x rendering scale with downsampling for high-resolution outputs that look great on retina displays and in print.</p>
        </div>
        <div className="bg-white/70 p-3 rounded-lg shadow-sm">
          <h4 className="font-bold text-sm text-gray-800 mb-1">Content Overflow</h4>
          <p className="text-xs text-gray-700">Intelligent content scaling and overflow handling to ensure all user data fits appropriately on the A4 format.</p>
        </div>
        <div className="bg-white/70 p-3 rounded-lg shadow-sm">
          <h4 className="font-bold text-sm text-gray-800 mb-1">Cross-Browser Support</h4>
          <p className="text-xs text-gray-700">Specialized DOM handling ensures consistent rendering across Chrome, Firefox, Safari, and Edge.</p>
        </div>
        <div className="bg-white/70 p-3 rounded-lg shadow-sm">
          <h4 className="font-bold text-sm text-gray-800 mb-1">Branding Integration</h4>
          <p className="text-xs text-gray-700">Subtle "Made with Nowhile" branding added to exports while maintaining the professional aesthetic of the resume.</p>
        </div>
      </div>
    </div>
  </div>
);

// New: Technical architecture diagram
const architectureDiagram = (
  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-md mb-10">
    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Nowhile Technical Architecture</h2>
    
    <div className="relative bg-white p-8 rounded-xl shadow-md overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full translate-y-1/3 -translate-x-1/4 opacity-20"></div>
      
      {/* Diagram content */}
      <div className="relative z-10">
        <div className="mb-8 mx-auto max-w-3xl">
          {/* Top layer - User Interface */}
          <div className="bg-indigo-500 text-white p-4 rounded-t-lg text-center font-bold">
            User Interface Layer
          </div>
          <div className="bg-indigo-100 p-4 grid grid-cols-3 gap-3 text-center">
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <Monitor className="h-5 w-5 text-indigo-500" />
              <span className="text-sm font-semibold">Resume Builder UI</span>
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <LayoutDashboard className="h-5 w-5 text-indigo-500" />
              <span className="text-sm font-semibold">Live Preview</span>
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <AlignJustify className="h-5 w-5 text-indigo-500" />
              <span className="text-sm font-semibold">Template Gallery</span>
            </div>
          </div>
          
          {/* Middle layer - Business Logic */}
          <div className="mt-2 bg-blue-500 text-white p-4 text-center font-bold">
            Business Logic Layer
          </div>
          <div className="bg-blue-100 p-4 grid grid-cols-4 gap-3 text-center">
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <ClipboardList className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-semibold">Form Management</span>
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <Blocks className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-semibold">Template Renderer</span>
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <WandSparkles className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-semibold">AI Assistant</span>
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <Download className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-semibold">Export Engine</span>
            </div>
          </div>
          
          {/* Bottom layer - Data Layer */}
          <div className="mt-2 bg-green-500 text-white p-4 text-center font-bold">
            Data Layer
          </div>
          <div className="bg-green-100 p-4 rounded-b-lg grid grid-cols-3 gap-3 text-center">
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <Database className="h-5 w-5 text-green-500" />
              <span className="text-sm font-semibold">LocalStorage Cache</span>
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <Cloud className="h-5 w-5 text-green-500" />
              <span className="text-sm font-semibold">Cloud Sync (optional)</span>
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex flex-col items-center gap-1">
              <Save className="h-5 w-5 text-green-500" />
              <span className="text-sm font-semibold">Export Files</span>
            </div>
          </div>
        </div>
        
        {/* Data flow */}
        <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-sm mt-4">
          <h3 className="text-lg font-bold text-center text-gray-700 mb-3">Data Flow</h3>
          <div className="flex items-center justify-center">
            <div className="text-center p-2 bg-indigo-50 rounded-lg">
              <span className="text-sm font-semibold">User Input</span>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 mx-2" />
            <div className="text-center p-2 bg-blue-50 rounded-lg">
              <span className="text-sm font-semibold">State Management</span>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 mx-2" />
            <div className="text-center p-2 bg-green-50 rounded-lg">
              <span className="text-sm font-semibold">Template Rendering</span>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 mx-2" />
            <div className="text-center p-2 bg-purple-50 rounded-lg">
              <span className="text-sm font-semibold">PDF/PNG Export</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// New: Performance Optimization section
const performanceSection = (
  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 shadow-md mb-10">
    <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Performance Optimization Techniques</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Zap className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-700">React Performance</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p>Memoization with React.memo and useMemo for expensive computations</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p>Virtualized lists for handling large amounts of data (experience, education)</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p>Lazy loading of components that aren't immediately visible</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <Code2 className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-purple-700">Code Splitting</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <p>Dynamic imports for templates, reducing initial load time</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <p>Route-based code splitting for multi-page functionality</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <p>Tree-shaking unused code through ES modules</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <GitBranch className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-700">Render Optimization</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p>Debounced preview updates to avoid render thrashing</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p>CSS containment for isolating complex template components</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p>Hardware-accelerated animations with will-change CSS property</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <div className="bg-orange-100 p-3 rounded-full">
            <Download className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-orange-700">Asset Optimization</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <p>SVG icons instead of icon fonts for better performance and accessibility</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <p>CSS-in-JS with atomic CSS generation to minimize style duplication</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <p>Image optimization and responsive loading based on viewport</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertCircle className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-red-700">Error Handling</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <p>Error boundaries to isolate component failures</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <p>Global error tracking with fallback UI</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <p>Defensive coding patterns to handle unexpected data</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Monitor className="h-6 w-6 text-indigo-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-indigo-700">Export Performance</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <p>Worker threads for PDF generation to avoid blocking UI</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <p>Progressive loading indicators for long-running export operations</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <p>Canvas optimization techniques for high-fidelity exports</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-8 bg-white/80 p-5 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold text-center text-blue-600 mb-3">Performance Metrics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-blue-50 rounded-lg">
          <span className="text-3xl font-bold text-blue-600 block">{"<100ms"}</span>
          <span className="text-sm text-gray-600">Form Input Latency</span>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <span className="text-3xl font-bold text-green-600 block">95+</span>
          <span className="text-sm text-gray-600">Lighthouse Score</span>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <span className="text-3xl font-bold text-purple-600 block">~500KB</span>
          <span className="text-sm text-gray-600">Gzipped Bundle</span>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <span className="text-3xl font-bold text-orange-600 block">~1.5s</span>
          <span className="text-sm text-gray-600">Time to Interactive</span>
        </div>
      </div>
    </div>
  </div>
);

// New: Dev Q&A section for interview prep
const interviewQASection = (
  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-md mb-10">
    <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">Technical Interview Q&A</h2>
    
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold text-purple-700 mb-3 flex items-center gap-2">
          <div className="bg-purple-100 p-2 rounded-full">
            <AlertCircle className="h-5 w-5 text-purple-500" />
          </div>
          How does Nowhile handle form state management?
        </h3>
        <p className="text-gray-700 mb-3">
          Nowhile uses React Hook Form for efficient form state management. This library provides better performance than controlled components by minimizing re-renders through uncontrolled components with refs. Here's how we implement it:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Form state initialization
const methods = useForm<ResumeData>({
  defaultValues: initialData,
  resolver: zodResolver(resumeSchema)
});

// In the component
<FormProvider {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
    {/* Form fields */}
  </form>
</FormProvider>`}
          </pre>
        </div>
        <p className="text-gray-700 mt-3">
          This approach gives us several advantages: reduced re-renders for better performance, built-in validation with Zod integration, and simplified field management across multiple components through context.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
          <div className="bg-blue-100 p-2 rounded-full">
            <AlertCircle className="h-5 w-5 text-blue-500" />
          </div>
          How are PDF exports generated with such high quality?
        </h3>
        <p className="text-gray-700 mb-2">
          We've implemented a multi-stage rendering pipeline to ensure high-quality PDF generation:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
          <li>The DOM is captured using html2canvas at 4x resolution (scale: 4)</li>
          <li>Font rendering is optimized with proper antialiasing and font-smoothing</li>
          <li>The high-resolution canvas is downsampled for PDF output</li>
          <li>jsPDF handles the conversion with compression optimization</li>
          <li>Custom rendering hooks ensure consistent results across browsers</li>
        </ol>
        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`// High-quality HTML to PDF conversion
const generatePDF = async () => {
  // Capture at 4x for high resolution
  const canvas = await html2canvas(resumeRef.current, {
    scale: 4,
    useCORS: true,
    logging: false,
    allowTaint: true,
    removeContainer: true,
  });
  
  // Create PDF with proper dimensions
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });
  
  // Convert to PDF with high quality
  pdf.addImage(
    canvas.toDataURL('image/png'), 
    'PNG', 
    0, 
    0, 
    210, 
    297, 
    undefined, 
    'FAST'
  );
  
  return pdf;
};`}
          </pre>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            <AlertCircle className="h-5 w-5 text-green-500" />
          </div>
          How do you handle responsive design across different resume templates?
        </h3>
        <p className="text-gray-700 mb-3">
          We implement a multi-layered approach to responsive design:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-bold text-green-700 text-sm mb-1">Base Layer</h4>
            <p className="text-xs text-gray-700">
              Tailwind's responsive classes provide the foundation, handling breakpoints from mobile to desktop with utilities like <code>md:flex-row</code>.
            </p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-bold text-green-700 text-sm mb-1">Template Layer</h4>
            <p className="text-xs text-gray-700">
              Each template has responsive variants with conditional classes based on viewport size, adapting layout specifically for that design.
            </p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-bold text-green-700 text-sm mb-1">Print Layer</h4>
            <p className="text-xs text-gray-700">
              Special print-specific styles ensure the exported PDF looks identical to the screen preview, handling the transition to fixed A4 format.
            </p>
          </div>
        </div>
        <p className="text-gray-700">
          This layered approach lets us maintain consistent design principles while allowing each template to express its unique visual identity across all device sizes and in print format.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
          <div className="bg-orange-100 p-2 rounded-full">
            <AlertCircle className="h-5 w-5 text-orange-500" />
          </div>
          What accessibility features are implemented in Nowhile?
        </h3>
        <p className="text-gray-700 mb-3">
          Accessibility is a core priority in Nowhile, implemented through:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <div className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <div>
              <p className="font-semibold text-gray-800">Semantic HTML</p>
              <p className="text-sm text-gray-700">Proper heading structure, landmark regions, and semantic elements throughout</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <div>
              <p className="font-semibold text-gray-800">ARIA Attributes</p>
              <p className="text-sm text-gray-700">Comprehensive ARIA labels, roles, and states for interactive elements</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <div>
              <p className="font-semibold text-gray-800">Keyboard Navigation</p>
              <p className="text-sm text-gray-700">Full keyboard support with custom focus management</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <div>
              <p className="font-semibold text-gray-800">Screen Reader Support</p>
              <p className="text-sm text-gray-700">Tested with NVDA, VoiceOver, and JAWS for compatibility</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <div>
              <p className="font-semibold text-gray-800">Color Contrast</p>
              <p className="text-sm text-gray-700">WCAG AA compliant contrast ratios for text and UI elements</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            <div>
              <p className="font-semibold text-gray-800">Reduced Motion</p>
              <p className="text-sm text-gray-700">Respects prefers-reduced-motion settings for animations</p>
            </div>
          </div>
        </div>
        <p className="text-gray-700">
          We leverage Radix UI primitives which provide accessibility features out of the box, and extend them with custom implementations where needed to ensure WCAG compliance.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold text-indigo-700 mb-3 flex items-center gap-2">
          <div className="bg-indigo-100 p-2 rounded-full">
            <AlertCircle className="h-5 w-5 text-indigo-500" />
          </div>
          How is the codebase organized for maintainability?
        </h3>
        <p className="text-gray-700 mb-3">
          The Nowhile codebase follows a feature-based architecture with clear separation of concerns:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-3">
          <pre className="text-xs text-gray-800 overflow-x-auto">
{`src/
├── components/         # Reusable UI components
│   ├── ui/             # Generic UI components (from shadcn/ui)
│   ├── forms/          # Form-specific components
│   └── resume-preview/ # Preview and export components
├── hooks/              # Custom React hooks
├── data/               # Data structures and initial state
├── types/              # TypeScript type definitions
├── lib/                # Utility functions and helpers
├── pages/              # Route components
└── styles/             # Global styles and Tailwind config`}
          </pre>
        </div>
        
        <p className="text-gray-700">
          This organization enables several key benefits: new developers can quickly understand where components live, features can be developed in isolation, and testing can be targeted to specific modules. We also follow a strict naming convention and documentation standard across the codebase.
        </p>
      </div>
    </div>
  </div>
);

// New: Accessibility & Internationalization
const accessibilitySection = (
  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 shadow-md mb-10 animate-fade-in">
    <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Accessibility & Internationalization</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-green-700 flex items-center gap-2">
          <Award className="h-5 w-5" />
          Accessibility Features
        </h3>
        
        <div className="bg-white/80 p-5 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-800 mb-3">Core Implementations</h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                <Component className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Semantic Structure</p>
                <p className="text-sm text-gray-700">Proper use of HTML5 semantic elements throughout the application with logical heading hierarchy and landmarks</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                <Component className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Keyboard Navigation</p>
                <p className="text-sm text-gray-700">Full keyboard accessibility with custom focus management for complex UI components</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                <Component className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">ARIA Implementation</p>
                <p className="text-sm text-gray-700">Comprehensive use of ARIA labels, roles, and states for all interactive elements</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                <Component className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Color Contrast</p>
                <p className="text-sm text-gray-700">WCAG AA compliant color contrast throughout the interface and templates</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 p-5 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-800 mb-3">Technical Implementation</h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-teal-100 p-1.5 rounded-full">
                <Code className="h-4 w-4 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Radix UI Foundation</p>
                <p className="text-sm text-gray-700">Built on top of Radix UI primitives which provide robust accessibility features out of the box</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-teal-100 p-1.5 rounded-full">
                <Code className="h-4 w-4 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Focus Management</p>
                <p className="text-sm text-gray-700">Custom focus trapping for modals and popovers with keyboard navigation patterns</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-teal-100 p-1.5 rounded-full">
                <Code className="h-4 w-4 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Reduced Motion Support</p>
                <p className="text-sm text-gray-700">Respects user preferences for reduced motion through prefers-reduced-motion media queries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-teal-700 flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Internationalization Framework
        </h3>
        
        <div className="bg-white/80 p-5 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-800 mb-3">Multi-language Support</h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-blue-100 p-1.5 rounded-full">
                <Globe className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Translation Infrastructure</p>
                <p className="text-sm text-gray-700">JSON-based translation files with namespace support for modular content organization</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-blue-100 p-1.5 rounded-full">
                <Globe className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">RTL Support</p>
                <p className="text-sm text-gray-700">Bidirectional text support with automatic layout flipping for RTL languages</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-blue-100 p-1.5 rounded-full">
                <Globe className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Content Adaptation</p>
                <p className="text-sm text-gray-700">Contextual content adjustment for cultural relevance in resumes across regions</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 italic">Currently supporting 8 languages with more being added regularly</p>
          </div>
        </div>
        
        <div className="bg-white/80 p-5 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-800 mb-3">Cultural Adaptation</h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-100 p-1.5 rounded-full">
                <GitCommit className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Resume Standards By Region</p>
                <p className="text-sm text-gray-700">Templates are adapted for different regional expectations (e.g., photos on European CVs, no ages on US resumes)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-100 p-1.5 rounded-full">
                <GitCommit className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Format Localization</p>
                <p className="text-sm text-gray-700">Date, number, and currency formatting based on locale preferences</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-100 p-1.5 rounded-full">
                <GitCommit className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">AI Suggestions</p>
                <p className="text-sm text-gray-700">Culturally relevant content suggestions based on target job market region</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-6 bg-gradient-to-r from-teal-50 to-blue-50 p-5 rounded-xl text-center">
      <p className="text-gray-700">
        <span className="font-bold">Our commitment:</span> Nowhile is designed to be usable by everyone, regardless of ability or language. 
        We continuously test with users of diverse abilities and cultures to ensure our application works for all.
      </p>
    </div>
  </div>
);

const TechStack = () => (
  <div className="flex flex-col min-h-screen bg-gradient-to-tr from-slate-100 via-[#e5e9f6] to-[#fcfbfa] relative">
    {backgrounds}
    <Header />
    <main className="flex-1 container mx-auto px-4 py-16 max-w-5xl relative">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-yellow-400 to-blue-400 drop-shadow-lg animate-fade-in">
        Technology Behind Nowhile
      </h1>
      
      {/* Add architecture diagram first */}
      {architectureDiagram}
      
      {/* Add Resume Generation Process */}
      {resumeGenerationProcess}
      
      {/* Add Performance Optimization section */}
      {performanceSection}
      
      {/* Add Interview Q&A section */}
      {interviewQASection}
      
      {/* Add Accessibility & Internationalization section */}
      {accessibilitySection}
      
      <section className="mb-16 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stackSections.map((tech, i) => (
            <div key={i}
              className={`rounded-3xl shadow-lg p-8 text-center w-full h-full bg-gradient-to-br ${tech.color} hover:scale-105 transition-transform animate-scale-in`}
            >
              {/* Make text pop with improved contrast */}
              <div className="flex justify-center mb-3">{tech.icon}</div>
              <h3 className="font-bold text-lg text-blue-900 drop-shadow mb-2">{tech.name}</h3>
              <p className="text-gray-900 text-base font-semibold drop-shadow">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Community Section */}
      <section className="mb-12 animate-fade-in">
        <div className="bg-gradient-to-r from-purple-100 to-white border-l-4 border-purple-500 rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-extrabold text-purple-500 mb-3">Open Source & Community</h2>
          <p className="text-gray-800 mb-2">
            Nowhile is built in public: every template, feature, and update is shaped by developers and users together. Our Github is open for contributions.
          </p>
          <p className="text-gray-900">
            <b>Join the community:</b> Request features, report bugs, or contribute code and designs—everyone's input is valued.
          </p>
          <ul className="list-disc ml-8 mt-3 text-md text-blue-800">
            <li>100% open-source codebase</li>
            <li>Transparent roadmap & changelog</li>
            <li>Welcoming code of conduct</li>
            <li>Active Discord for support and networking</li>
          </ul>
        </div>
      </section> 
      
      {/* Performance and Security Section */}
      <section className="mb-16 animate-fade-in">
        <div className="bg-gradient-to-r from-yellow-100 via-purple-100/20 to-blue-50 border-l-4 border-blue-400 rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-extrabold text-blue-600 mb-3">Performance and Security</h2>
          <p className="text-gray-800 mb-2">
            Your data is processed instantly, with no loading delays and zero tracking. Security is built-in from the ground up: all personal data stays local by default.
          </p>
          <ul className="list-disc ml-8 mt-3 text-md text-purple-900">
            <li>Client-side processing for ultimate privacy</li>
            <li>No third-party analytics or ads</li>
            <li>Exported files never touch a server</li>
            <li>Constant performance upgrades so you never wait</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-16 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/90 p-8 rounded-2xl shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-purple-500">Core Highlights</h2>
            <ul className="space-y-5">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-4 text-base group hover:scale-105 transition-transform font-semibold">
                  {h.icon}<span>{h.txt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/90 p-8 rounded-2xl shadow-xl flex flex-col gap-5 items-center">
            <h2 className="text-2xl font-bold text-purple-500 mb-4">Why Nowhile?</h2>
            <ul className="space-y-4">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-center gap-4 text-base group hover:scale-105 transition-transform font-semibold">
                  {r.icon}<span>{r.txt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-16 animate-fade-in">
        <div className="bg-gradient-to-r from-purple-100/10 via-blue-100/30 to-violet-200/30 p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">How it All Fits Together</h2>
          <p className="text-lg text-gray-700 text-center">
            Nowhile is built for speed, clarity, and usability. All the latest open-source technologies – from React's blazing-fast UI to Tailwind's utility classes and incredible iconography – come together for a seamless experience.<br />
            <br />
            <b>Everything is processed right in your browser for privacy and instant feedback. AI tips? Export? Theme switch? It's all right here, all in the cloud.</b>
          </p>
          {tripleStackContent}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TechStack;
