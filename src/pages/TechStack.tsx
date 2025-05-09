import React from 'react';
import {
  BookOpen, Code2, Paintbrush, Star, Sparkles, Users, TrendingUp, Download, Shield, Globe, Heart, Cpu, Pen, Lightbulb, 
  ListCheck, SquareDashed, Move, WandSparkles, MousePointer, ListTodo, Wand, PenLine, Brain, Droplets, ClipboardList,
  FileText, Database, Server
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
    icon: <BookOpen className="h-10 w-10 text-indigo-400 animate-spin" />,
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
    icon: <WandSparkles className="h-10 w-10 text-vivid-purple animate-bounce" />,
    desc: "Nowhile infuses live AI guidance right in your workflow. From field-specific tips to AI analyzed suggestions for job titles, summaries, and skill matches—AI makes building a world-class CV intuitive and fun."
  },
  {
    name: "Mobile-First Responsive Design",
    color: "from-blue-100 via-pink-50 to-green-100",
    icon: <MousePointer className="h-10 w-10 text-green-400 animate-bounce" />,
    desc: "Built to look gorgeous and work flawlessly on every device—extra touch targets, responsive layouts, and adaptive component sizing are at the heart of our user experience."
  }
];

const highlights = [
  {
    icon: <Cpu className="h-8 w-8 text-vivid-purple animate-pulse" />,
    txt: "Lightning-fast instant preview as you build. Every form change triggers React’s virtual DOM to update the preview, showing your changes exactly as a hiring manager would."
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
    icon: <Pen className="h-8 w-8 text-resume-purple animate-spin" />,
    txt: "Editable templates with live AI suggestions. Instantly switch styles, colors, and layouts."
  },
  {
    icon: <ListTodo className="h-8 w-8 text-yellow-500 animate-bounce" />,
    txt: "One-click PDF exporting: Pixel-perfect results every time with print-optimized templates and advanced CSS-to-PDF tech."
  },
  {
    icon: <Wand className="h-8 w-8 text-vivid-purple animate-pulse" />,
    txt: "Smart error checking: Inline field validation and pro-level mistake proofing prompt you before you send."
  },
  {
    icon: <PenLine className="h-8 w-8 text-blue-400 animate-spin" />,
    txt: "Realtime preview: See both mobile and desktop versions live—never wonder what your recruiter will see."
  }
];

const reasons = [
  { icon: <Shield className="h-8 w-8 text-green-500 animate-bounce" />, txt: "Open-source, secure & fully free for individuals. All code is visible and extensible." },
  { icon: <Users className="h-8 w-8 text-resume-purple animate-pulse" />, txt: "Collaboration and feedback built in—share your CV safely and comment in real time." },
  { icon: <Lightbulb className="h-8 w-8 text-yellow-400 animate-bounce" />, txt: "Smart, context-aware resume builder. Every section is driven by best-practice logic." },
  { icon: <TrendingUp className="h-8 w-8 text-blue-400 animate-fade-in" />, txt: "Job-matching and career insights integrated. Get hiring-market data and tips right in the builder." },
  { icon: <Brain className="h-8 w-8 text-purple-400 animate-pulse" />, txt: "Modular code means Nowhile's UI, AI, and exports upgrade in days—not months." },
  { icon: <Droplets className="h-8 w-8 text-blue-200 animate-pulse" />, txt: "Beautiful gradients, crisp icons, and custom shadows give Nowhile its signature look and feel." }
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
          <b>Instant Feedback:</b> Every edit triggers React’s virtual DOM to update the preview, showing your changes exactly as a hiring manager would.
        </li>
        <li>
          <b>Adaptive Design:</b> Tailwind’s utilities, custom breakpoints, and best-in-class accessibility support optimize for all devices, from widescreen desktops to small phones.
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
    <h2 className="text-2xl font-bold text-center text-resume-purple mb-6">How Nowhile Generates Resumes</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-700">Resume Rendering Pipeline</h3>
        
        <div className="bg-white/80 p-4 rounded-xl shadow-sm">
          <div className="flex items-start gap-3 mb-2">
            <Database className="h-6 w-6 text-resume-purple flex-shrink-0 mt-1" />
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
      <h3 className="text-xl font-bold text-center text-resume-purple mb-3">Technical Challenges Solved</h3>
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

const TechStack = () => (
  <div className="flex flex-col min-h-screen bg-gradient-to-tr from-slate-100 via-[#e5e9f6] to-[#fcfbfa] relative">
    {backgrounds}
    <Header />
    <main className="flex-1 container mx-auto px-4 py-16 max-w-5xl relative">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-resume-purple via-yellow-400 to-blue-400 drop-shadow-lg">
        Technology Behind Nowhile
      </h1>
      
      {/* Add Resume Generation Process Section first */}
      {resumeGenerationProcess}
      
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in">
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
      
      {/* NEW: Community Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-100 to-white border-l-4 border-resume-purple rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-extrabold text-resume-purple mb-3">Open Source & Community</h2>
          <p className="text-gray-800 mb-2">
            Nowhile is built in public: every template, feature, and update is shaped by developers and users together. Our Github is open for contributions.
          </p>
          <p className="text-gray-900">
            <b>Join the community:</b> Request features, report bugs, or contribute code and designs—everyone’s input is valued.
          </p>
          <ul className="list-disc ml-8 mt-3 text-md text-blue-800">
            <li>100% open-source codebase</li>
            <li>Transparent roadmap & changelog</li>
            <li>Welcoming code of conduct</li>
            <li>Active Discord for support and networking</li>
          </ul>
        </div>
      </section> 
      
      {/* NEW: Performance and Security Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-yellow-100 via-resume-purple/20 to-blue-50 border-l-4 border-blue-400 rounded-2xl shadow-md p-8">
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
      
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in">
          <div className="bg-white/90 p-8 rounded-2xl shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-resume-purple">Core Highlights</h2>
            <ul className="space-y-5">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-4 text-base group hover:scale-105 transition-transform font-semibold">
                  {h.icon}<span>{h.txt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/90 p-8 rounded-2xl shadow-xl flex flex-col gap-5 items-center">
            <h2 className="text-2xl font-bold text-resume-purple mb-4">Why Nowhile?</h2>
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
      
      <section className="mb-16">
        <div className="bg-gradient-to-r from-resume-purple/10 via-blue-100/30 to-violet-200/30 p-8 rounded-3xl shadow-xl animate-fade-in">
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
