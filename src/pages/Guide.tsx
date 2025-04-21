import React from 'react';
import { BookOpen, Star, Users, TrendingUp, Sparkles, CheckCircle2, Pencil, Heart, Globe, Shield, Lightbulb, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: "Contact Information",
    desc: "Include your name, phone, professional email, location, and key social/professional links like LinkedIn or GitHub. Make sure your contact details are up to date and easy to read.",
    icon: <Users className="h-8 w-8 text-blue-500 animate-pulse" />
  },
  {
    title: "Professional Summary",
    desc: "A concise, targeted summary (2–4 sentences) that highlights your top achievements, career focus, and unique value you bring to employers.",
    icon: <Star className="h-8 w-8 text-yellow-500 animate-bounce" />
  },
  {
    title: "Work Experience",
    desc: "List your most relevant roles with quantifiable accomplishments. Start with your latest job. Use action verbs and statistics to show your impact.",
    icon: <TrendingUp className="h-8 w-8 text-green-500 animate-fade-in" />
  },
  {
    title: "Education",
    desc: "Mention your degrees, certifications, coursework, and other academic credentials. Include honors, GPA (if strong), dates, and institutions.",
    icon: <CheckCircle2 className="h-8 w-8 text-orange-500 animate-fade-in" />
  },
  {
    title: "Skills",
    desc: "Group your key tech, language, leadership, or soft skills. Focus on high-demand and job-relevant strengths. Be honest and concise.",
    icon: <Sparkles className="h-8 w-8 text-pink-400 animate-pulse" />
  },
  {
    title: "Projects & Contributions",
    desc: "Showcase public, open-source, work, or personal projects. Share links, GitHub repos, or case studies that highlight your skills and impact.",
    icon: <Pencil className="h-8 w-8 text-purple-500 animate-spin" />,
  },
  {
    title: "Volunteer & Leadership",
    desc: "Include impactful leadership and volunteer roles. Highlight teamwork, mentoring, or contributions to the community.",
    icon: <Heart className="h-8 w-8 text-red-400 animate-pulse" />,
  },
  {
    title: "Certifications & Awards",
    desc: "Add relevant certifications, awards, scholarships, and honors to boost the credibility of your resume.",
    icon: <Globe className="h-8 w-8 text-blue-700 animate-pulse" />,
  },
];

const tips = [
  { icon: <Lightbulb className="h-6 w-6 text-yellow-400 animate-bounce" />, text: "Start each bullet point with a strong action verb." },
  { icon: <Shield className="h-6 w-6 text-green-700 animate-pulse" />, text: "Quantify your results (e.g., 'Reduced processing time by 40%')." },
  { icon: <Activity className="h-6 w-6 text-blue-400 animate-pulse" />, text: "Tailor your resume for every job you apply for." },
  { icon: <Sparkles className="h-6 w-6 text-purple-400 animate-bounce" />, text: "Keep formatting clear and consistent throughout." },
  { icon: <CheckCircle2 className="h-6 w-6 text-pink-500 animate-bounce" />, text: "Limit your resume to 1-2 pages for most industries." },
  { icon: <Users className="h-6 w-6 text-orange-400 animate-bounce" />, text: "Ask others to review your resume for feedback or errors." },
  { icon: <Star className="h-6 w-6 text-yellow-500 animate-spin" />, text: "Highlight awards, certifications, and leadership experience." },
  { icon: <TrendingUp className="h-6 w-6 text-green-500 animate-pulse" />, text: "Focus on your biggest achievements, not just duties." },
];

const backgrounds = (
  <svg className="absolute -z-10 left-0 top-0 w-full h-[480px] pointer-events-none" viewBox="0 0 1440 480" fill="none">
    <defs>
      <radialGradient id="g2" cx="80%" cy="25%" r="90%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.13" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <ellipse cx="750" cy="70" rx="680" ry="170" fill="url(#g2)" />
    <ellipse cx="200" cy="350" rx="220" ry="80" fill="#a6c1ee" fillOpacity="0.13" />
    <ellipse cx="1200" cy="260" rx="220" ry="88" fill="#fbc2eb" fillOpacity="0.15" />
  </svg>
);

const Guide = () => (
  <div className="relative bg-gradient-to-br from-slate-100 via-white to-blue-50 min-h-screen overflow-x-hidden">
    {backgrounds}
    <div className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-resume-purple via-yellow-400 to-blue-400 drop-shadow-lg">
        The Ultimate Resume Guide
      </h1>
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 bg-white shadow-xl rounded-3xl p-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 text-resume-purple flex items-center gap-2">
              <BookOpen className="h-6 w-6" /> Section-by-Section Walkthrough
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {sections.map((section, i) => (
                <div key={i} className="flex items-start gap-5 animate-fade-in">
                  <div className="shrink-0 rounded-full p-2 bg-gradient-to-br from-blue-100 to-yellow-100 shadow-inner">{section.icon}</div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-resume-purple">{section.title}</h3>
                    <p className="text-gray-700">{section.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-white shadow-xl rounded-3xl p-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Expert Resume Tips
            </h2>
            <ol className="space-y-4">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 group hover:scale-105 transition-transform animate-fade-in">
                  <span className="rounded-full shadow-lg border-2 border-resume-purple bg-yellow-50 w-10 h-10 flex items-center justify-center">{tip.icon}</span>
                  <span className="font-semibold">{tip.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="mb-16 animate-fade-in">
        <div className="bg-gradient-to-r from-resume-purple/10 via-blue-100/30 to-violet-200/30 rounded-3xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center text-vivid-purple">Frequently Asked Questions</h2>
          <ul className="space-y-5">
            <li>
              <b>How long should my resume be?</b><br />
              For most candidates, 1 page is ideal. (2 pages maximum for experienced professionals)
            </li>
            <li>
              <b>Should I include a photo on my resume?</b><br />
              Generally, it’s not recommended unless applying to jobs that specifically request it.
            </li>
            <li>
              <b>How do I tailor my resume for each role?</b><br />
              Analyze the job description, use important keywords, and highlight matching experience and achievements.
            </li>
            <li>
              <b>What file formats should I use?</b><br />
              PDF is best for preserving formatting, but also keep a DOCX or web version handy.
            </li>
            <li>
              <b>How do I stand out?</b><br />
              Use quantifiable results, clear design, and strong language. Showcase unique skills or projects.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pb-10">
        <Link
          to="/"
          className="inline-block px-8 py-5 rounded-full shadow-lg bg-gradient-to-r from-resume-purple to-blue-400 animate-bounce text-white font-semibold text-lg cursor-pointer hover:scale-105 transition-all"
        >
          Try the Nowhile Resume Builder &rarr;
        </Link>
      </div>
    </div>
  </div>
);

export default Guide;
