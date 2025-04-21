
import React from 'react';
import {
  BookOpen, Code2, Paintbrush, Star, Sparkles, Users, TrendingUp, Download, Shield, Globe, Heart, Cpu, Pen, Lightbulb
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const stackSections = [
  {
    name: "React",
    color: "from-blue-400 via-blue-800 to-purple-500",
    icon: <Code2 className="h-10 w-10 text-blue-400 animate-bounce" />,
    desc: "Super fast, component-driven UI library powering Nowhile's instant editing and previews."
  },
  {
    name: "TypeScript",
    color: "from-blue-200 via-blue-400 to-blue-700",
    icon: <BookOpen className="h-10 w-10 text-blue-700 animate-pulse" />,
    desc: "Typed, robust codebase for error prevention, better auto-completion, and peace of mind."
  },
  {
    name: "TailwindCSS",
    color: "from-green-200 via-blue-200 to-sky-200",
    icon: <Paintbrush className="h-10 w-10 text-sky-400 animate-fade-in" />,
    desc: "Utility-first styling for rapid, beautiful, and highly responsive layouts."
  },
  {
    name: "Shadcn/UI",
    color: "from-gray-100 via-purple-50 to-gray-300",
    icon: <Star className="h-10 w-10 text-purple-500 animate-spin" />,
    desc: "Gorgeous, ready-made components with accessibility and elegance."
  },
  {
    name: "Lucide Icons",
    color: "from-yellow-200 via-yellow-50 to-purple-100",
    icon: <Sparkles className="h-10 w-10 text-yellow-400 animate-bounce" />,
    desc: "Over 1000 modern, colorful icons for UI, career, and creative visuals."
  },
];

const highlights = [
  {
    icon: <Cpu className="h-8 w-8 text-vivid-purple animate-pulse" />,
    txt: "Lightning-fast instant preview as you build",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-400 animate-bounce" />,
    txt: "All in the browser. No install, no ads.",
  },
  {
    icon: <Heart className="h-8 w-8 text-pink-400 animate-pulse" />,
    txt: "Privacy-first. Data stays local.",
  },
  {
    icon: <Pen className="h-8 w-8 text-resume-purple animate-spin" />,
    txt: "Editable templates with live AI suggestions.",
  }
];

const reasons = [
  { icon: <Shield className="h-8 w-8 text-green-500 animate-bounce" />, txt: "Open-source, secure & fully free for individuals." },
  { icon: <Users className="h-8 w-8 text-resume-purple animate-pulse" />, txt: "Collaboration and feedback built in." },
  { icon: <Lightbulb className="h-8 w-8 text-yellow-400 animate-bounce" />, txt: "Smart, context-aware resume builder." },
  { icon: <TrendingUp className="h-8 w-8 text-blue-400 animate-fade-in" />, txt: "Job-matching and career insights integrated." },
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
              <h3 className="font-bold text-lg text-white drop-shadow mb-2">{tech.name}</h3>
              <p className="text-gray-100 text-base font-semibold">{tech.desc}</p>
            </div>
          ))}
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
            <b>Everything is processed right in your browser for privacy and instant feedback. AI tips? Export? Theme switch? It’s all right here, all in the cloud.</b>
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TechStack;
