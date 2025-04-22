import React from 'react';
import {
  BookOpen, Code2, Paintbrush, Star, Sparkles, Users, TrendingUp, Download, Shield, Globe, Heart, Cpu, Pen, Lightbulb, 
  ListCheck, SquareDashed, Move, WandSparkles, MousePointer, ListTodo, Wand, PenLine, Brain, Droplets, ClipboardList,
  FileText, FileCheck, Printer, Image, File, Camera, Lock
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

const resumeGenerationSection = (
  <section className="mb-16" id="resume-generation">
    <div className="bg-gradient-to-r from-resume-purple/10 via-blue-100/30 to-violet-200/30 p-8 rounded-3xl shadow-xl animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">How Resumes Are Generated & Downloaded</h2>
      
      <div className="space-y-8">
        <div className="bg-white/80 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-resume-purple mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-resume-purple animate-pulse" />
            Resume Generation Process
          </h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="text-lg font-medium text-blue-700">1. Data Collection & Validation</h4>
              <p className="text-gray-700 mt-1">
                Your resume data is collected through our intuitive form interface with React Hook Form, which provides real-time validation and error checking. All field entries are stored in a structured TypeScript model that ensures data integrity and type safety.
              </p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="text-lg font-medium text-green-700">2. Template Rendering</h4>
              <p className="text-gray-700 mt-1">
                We use React's component architecture to transform your data into visually appealing resume templates. Each template is a React component that receives your resume data and renders it according to the specific design rules.
              </p>
              <p className="text-gray-700 mt-1">
                The templates handle text overflow elegantly using CSS techniques like <code className="bg-gray-100 px-1 rounded">truncate</code>, <code className="bg-gray-100 px-1 rounded">line-clamp</code>, and scrollable containers to ensure all content fits properly within the A4 format.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-400 pl-4">
              <h4 className="text-lg font-medium text-purple-700">3. Real-time Preview</h4>
              <p className="text-gray-700 mt-1">
                As you type, React's state management and data flow update the preview in real-time. We use a virtualized A4 paper format with the correct aspect ratio (210:297) to give you an accurate representation of how your resume will look when printed or shared digitally.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-resume-purple mb-4 flex items-center gap-2">
            <Download className="h-6 w-6 text-resume-purple animate-bounce" />
            Download Technology
          </h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="text-lg font-medium text-yellow-700">1. HTML Canvas Capture</h4>
              <p className="text-gray-700 mt-1">
                When you download your resume, we use <code className="bg-gray-100 px-1 rounded">html2canvas</code> to capture the rendered DOM elements as a high-resolution image. This technology converts your resume into a pixel-perfect representation at 4x the display resolution for sharp output.
              </p>
            </div>
            
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="text-lg font-medium text-red-700">2. Multi-format Conversion</h4>
              <p className="text-gray-700 mt-1">
                We offer multiple export formats to meet your needs:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>PDF:</strong> Using jsPDF, we convert the canvas image to a professional PDF document that maintains the A4 proportions and high resolution. This is ideal for job applications and formal submissions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>PNG:</strong> For high-quality images with transparency support, ideal for portfolio sites or thumbnails.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Camera className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>JPG:</strong> Optimized for smaller file sizes while maintaining quality, perfect for email attachments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <File className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span><strong>DOCX:</strong> Coming soon - for editable documents that hiring managers can annotate.</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="text-lg font-medium text-blue-700">3. Client-side Processing</h4>
              <p className="text-gray-700 mt-1">
                All processing happens directly in your browser for maximum privacy. Your resume data never leaves your device during the generation and download process. This ensures complete confidentiality of your personal information.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-resume-purple mb-4 flex items-center gap-2">
            <Shield className="h-6 w-6 text-resume-purple animate-pulse" />
            Privacy & Security
          </h3>
          
          <p className="text-gray-700">
            Your privacy is our priority. Nowhile's resume builder is designed with privacy-first principles:
          </p>
          
          <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <Lock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Local Processing:</strong> All data processing happens locally in your browser - we never send your resume data to our servers.</span>
            </li>
            <li className="flex items-start gap-2">
              <FileCheck className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span><strong>No Data Storage:</strong> Your resume data is stored only in your browser's local storage. We don't save copies on our servers.</span>
            </li>
            <li className="flex items-start gap-2">
              <Printer className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span><strong>Direct Downloads:</strong> Files are generated and downloaded directly to your device without intermediary storage.</span>
            </li>
          </ul>
          
          <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-700 font-medium">
              We provide export functionality without compromising your data security or privacy. Review our Privacy Policy for more details on how Nowhile protects your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TechStack = () => (
  <div className="flex flex-col min-h-screen bg-gradient-to-tr from-slate-100 via-[#e5e9f6] to-[#fcfbfa] relative">
    {backgrounds}
    <Header />
    <main className="flex-1 container mx-auto px-4 py-16 max-w-5xl relative">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-resume-purple via-yellow-400 to-blue-400 drop-shadow-lg">
        Technology Behind Nowhile
      </h1>
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in">
          {stackSections.map((tech, i) => (
            <div key={i}
              className={`rounded-3xl shadow-lg p-8 text-center w-full h-full bg-gradient-to-br ${tech.color} hover:scale-105 transition-transform animate-scale-in`}
            >
              <div className="flex justify-center mb-3">{tech.icon}</div>
              <h3 className="font-bold text-lg text-blue-900 drop-shadow mb-2">{tech.name}</h3>
              <p className="text-gray-900 text-base font-semibold drop-shadow">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {resumeGenerationSection}
      
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-100 to-white border-l-4 border-resume-purple rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-extrabold text-resume-purple mb-3">Open Source & Community</h2>
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
