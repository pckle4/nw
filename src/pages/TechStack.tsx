
import React from 'react';
import { BookOpen, Code2, Paintbrush, Star, Sparkles, Users, TrendingUp, Download } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const techStack = [
  { name: "React", color: "from-blue-400 via-blue-800 to-purple-500", icon: <Code2 className="h-8 w-8 text-blue-500" />, desc: "Component-based UI, real-time preview, fast rendering." },
  { name: "TypeScript", color: "from-blue-200 via-blue-400 to-blue-700", icon: <BookOpen className="h-8 w-8 text-blue-600" />, desc: "Strict types, safe code, smart auto-completion." },
  { name: "TailwindCSS", color: "from-green-100 via-teal-200 to-blue-200", icon: <Paintbrush className="h-8 w-8 text-sky-400" />, desc: "Utility-first, rapid styling, fully responsive." },
  { name: "Shadcn UI", color: "from-gray-100 via-purple-50 to-gray-300", icon: <Star className="h-8 w-8 text-purple-500" />, desc: "Crisp accessible UI components out of the box." }
];

const highlights = [
  { icon: <Sparkles className="h-7 w-7 text-yellow-400" />, txt: "AI-powered resume tips" },
  { icon: <Users className="h-7 w-7 text-resume-purple" />, txt: "Collaboration & feedback" },
  { icon: <TrendingUp className="h-7 w-7 text-green-400" />, txt: "Career insights, job-matching" },
  { icon: <Download className="h-7 w-7 text-blue-400" />, txt: "1-click PDF/PNG export" },
];

const TechStack = () => (
  <div className="flex flex-col min-h-screen bg-gradient-to-tr from-slate-100 via-[#e5e9f6] to-[#fcfbfa]">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-16 max-w-5xl relative">
      <div className="absolute -z-10 left-0 top-0 w-full h-80 pointer-events-none">
        <svg viewBox="0 0 1200 220" className="w-full h-full">
          <defs>
            <radialGradient id="stackg" cx="85%" cy="10%" r="85%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12"/>
              <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="1200" height="300" fill="url(#stackg)" />
        </svg>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-resume-purple via-yellow-400 to-blue-400">
        Nowhile Tech Stack
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in">
        {techStack.map((tech, i) => (
          <div key={i}
            className={`rounded-3xl shadow-lg p-8 w-72 text-center
                bg-gradient-to-br ${tech.color} hover:scale-105 transition-transform animate-fade-in`}
          >
            <div className="flex justify-center mb-4">{tech.icon}</div>
            <h3 className="font-bold text-lg text-white drop-shadow">{tech.name}</h3>
            <p className="text-gray-100">{tech.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
        <div className="bg-white/90 p-8 rounded-2xl shadow-lg animate-fade-in flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-resume-purple">Highlights</h2>
          <ul className="space-y-5">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-4 text-base group hover:scale-105 transition-transform">{h.icon}<span className="font-semibold">{h.txt}</span></li>
            ))}
          </ul>
        </div>
        <div className="bg-white/90 p-8 rounded-2xl shadow-xl animate-fade-in flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-resume-purple mb-4">Why Nowhile?</h2>
          <p>🦄 Modern, beautiful, always free for individuals.</p>
          <p>🌈 Export as PDF, PNG, or shareable link—no watermarks.</p>
          <p>🚀 Open, fast, and backed by open-source tech and the latest tools in web UI.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TechStack;
