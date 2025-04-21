
import React from 'react';
import { BookOpen, Star, Users, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const resumeSections = [
  { title: "Contact Information", description: "Name, phone, email, location, and online profiles", icon: <Users className="h-7 w-7 text-resume-purple" /> },
  { title: "Professional Summary", description: "2-3 sentence overview highlighting your strengths", icon: <Star className="h-7 w-7 text-yellow-400" /> },
  { title: "Work Experience", description: "Relevant jobs with quantifiable achievements", icon: <TrendingUp className="h-7 w-7 text-blue-400" /> },
  { title: "Education", description: "Degrees, certifications, relevant coursework", icon: <CheckCircle2 className="h-7 w-7 text-green-400" /> },
  { title: "Skills", description: "Technical, soft, and domain-specific abilities", icon: <Sparkles className="h-7 w-7 text-pink-400" /> }
];

const resumeTips = [
  "Use action verbs to start bullet points (e.g., Led, Developed, Managed)",
  "Quantify achievements when possible (e.g., Increased sales by 25%)",
  "Tailor your resume for each job application to match keywords",
  "Keep formatting consistent throughout the document",
  "Limit your resume to 1-2 pages for most industries",
  "Have someone else proofread for typos and clarity"
];

const Guide = () => (
  <div className="container mx-auto px-4 py-12 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="g1" cx="75%" cy="25%" r="80%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.11" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)"/>
      </svg>
    </div>
    <div className="max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-resume-purple via-yellow-400 to-blue-400">Resume Guide</h1>
      <div className="mb-14 bg-white shadow-lg rounded-3xl p-8 animate-fade-in">
        <h2 className="text-2xl font-bold mb-8 text-resume-purple flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Step-by-step Overview
        </h2>
        <div className="space-y-5 divide-y">
          {resumeSections.map((section, i) => (
            <div key={i} className="flex items-center gap-5 py-5 animate-fade-in">
              <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-full w-14 h-14 flex items-center justify-center shadow-inner">{section.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-14 bg-white shadow-lg rounded-3xl p-8 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-resume-purple flex items-center gap-2">
          <Star className="h-5 w-5" />
          Best Practices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resumeTips.map((tip, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-yellow-50 transition transform hover:scale-105 animate-fade-in">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-100 to-yellow-100 font-bold text-resume-purple">{i + 1}</span>
              <span className="text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center pb-10">
        <div className="inline-block px-7 py-5 bg-gradient-to-r from-resume-purple to-blue-400 rounded-full shadow-lg animate-bounce text-white font-semibold text-lg cursor-pointer hover:scale-105 transition-all">Try Resume Builder &rarr;</div>
      </div>
    </div>
  </div>
);

export default Guide;
