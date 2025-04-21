import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Star, Users, TrendingUp, Sparkles, CheckCircle2, Pencil, Heart, Globe, Shield, Lightbulb, Activity, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const advancedSections = [
  {
    title: "Personal Website",
    desc: "Showcase your own domain or personal project portfolio. Including a website shows tech-savvy, professionalism, and helps recruiters see your broader work.",
    icon: <Globe className="h-8 w-8 text-blue-700 animate-pulse" />
  },
  {
    title: "Hobbies & Interests",
    desc: "Mention a few relevant interests (tech, volunteering, writing, etc). This helps recruiters see your personality and possible team fit.",
    icon: <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
  },
  {
    title: "Tech Stack",
    desc: "List your primary programming languages/tools. This can be a tag list or icon grid—tailor it to each job for best results.",
    icon: <Sparkles className="h-8 w-8 text-resume-purple animate-spin" />
  },
  {
    title: "Online Publications",
    desc: "Got articles, blogs, or tutorials? Add links to relevant publications and explain your impact or audience.",
    icon: <BookOpen className="h-8 w-8 text-blue-900 animate-pulse" />,
  },
  {
    title: "Video Resume",
    desc: "Include a QR code or URL linking to a short, professional video introduction. These are increasingly common for creative and tech roles.",
    icon: <Sparkles className="h-8 w-8 text-yellow-400 animate-bounce" />,
  },
];

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
    desc: "Showcase public, open-source, work, or personal projects. Share links, GitHub repos, or case studies that highlight your skills and impact. If possible, add a 2-3 line summary for each, describe your unique contribution, and align the project with the job/field you’re targeting. Consider grouping projects by type: professional, academic, personal. Add links to live demos or documentation whenever possible.",
    icon: <Pencil className="h-8 w-8 text-purple-500 animate-spin" />,
  },
  {
    title: "Volunteer & Leadership",
    desc: "Include impactful leadership and volunteer roles, such as mentoring, conference speaking, or nonprofit contributions. Be specific about what you achieved and how it helped others. Try to mention teamwork, mentoring, or contributions to the community, and give stories/examples where you took initiative.",
    icon: <Heart className="h-8 w-8 text-red-400 animate-pulse" />,
  },
  {
    title: "Certifications & Awards",
    desc: "Add any relevant certifications, awards, scholarships, hackathon wins, and honors to boost the credibility of your resume. Mention situations when these credentials directly benefited your work, and quantify their impact if you can.",
    icon: <Globe className="h-8 w-8 text-blue-700 animate-pulse" />,
  },
  {
    title: "Additional Sections",
    desc: "Consider adding sections for Publications, Conferences, Languages, or Interests. These enrich your profile, especially for academic, research, or global positions.",
    icon: <Sparkles className="h-8 w-8 text-blue-400 animate-bounce" />,
  },
  {
    title: "References",
    desc: "References available upon request, or add a short section at the bottom for trusted recommendations if space allows. Ask for recommendations on LinkedIn for additional credibility.",
    icon: <CheckCircle2 className="h-8 w-8 text-vivid-purple animate-pulse" />,
  },
  {
    title: "ATS Optimization",
    desc: "Ensure your resume uses relevant industry keywords and is formatted simply for ATS (Applicant Tracking System) readability. Avoid graphics or tables for the core content.",
    icon: <Shield className="h-8 w-8 text-green-600 animate-bounce" />,
  },
  {
    title: "Personal Branding",
    desc: "Customize the summary, language, and even design elements to reflect your personality. Consider using color or subtle graphics, especially in creative industries.",
    icon: <Sparkles className="h-8 w-8 text-magenta-400 animate-spin" />,
  },
  {
    title: "Globalization",
    desc: "Adapting your resume for international roles? Focus on clarity, avoid idioms/jargon, and specify your language skills/visa status where appropriate.",
    icon: <Globe className="h-8 w-8 text-blue-400 animate-pulse" />,
  }
];

const tips = [
  { icon: <Lightbulb className="h-6 w-6 text-yellow-400 animate-bounce" />, text: "Start each bullet point with a strong action verb (e.g., 'Led', 'Created', 'Optimized', 'Designed')." },
  { icon: <Shield className="h-6 w-6 text-green-700 animate-pulse" />, text: "Quantify your results (e.g., 'Reduced processing time by 40%' or 'Onboarded 15 new team members')." },
  { icon: <Activity className="h-6 w-6 text-blue-400 animate-pulse" />, text: "Tailor your resume for every job. Scan the job posting for required skills and echo their keywords." },
  { icon: <Sparkles className="h-6 w-6 text-purple-400 animate-bounce" />, text: "Keep formatting clear and consistent throughout: same font, alignment, section spacing, and heading styles." },
  { icon: <CheckCircle2 className="h-6 w-6 text-pink-500 animate-bounce" />, text: "Limit your resume to 1-2 pages for most industries, unless you are in academia/medicine." },
  { icon: <Users className="h-6 w-6 text-orange-400 animate-bounce" />, text: "Peer review: ask mentors, colleagues, or career coaches to give feedback and catch typos/errors." },
  { icon: <Star className="h-6 w-6 text-yellow-500 animate-spin" />, text: "Highlight awards, certifications, and leadership experience, not just duties." },
  { icon: <TrendingUp className="h-6 w-6 text-green-500 animate-pulse" />, text: "Focus on your biggest achievements, not just duties. Use specific numbers or results." },
  { icon: <BookOpen className="h-6 w-6 text-blue-400 animate-bounce" />, text: "List only the most relevant/recent education or experience first. Prioritize clarity." },
  { icon: <Heart className="h-6 w-6 text-pink-400 animate-pulse" />, text: "Soft skills (collaboration, empathy, etc) gain extra value when paired with examples." },
  { icon: <Pencil className="h-6 w-6 text-purple-600 animate-bounce" />, text: "Write in first-person implied (no 'I'). E.g., use: 'Developed a new workflow' instead of 'I developed...'" },
  { icon: <Globe className="h-6 w-6 text-blue-800 animate-bounce" />, text: "For global applications: include degrees in original form (e.g. 'BSc'), then translate (e.g. 'Bachelor of Science')." },
  { icon: <CheckCircle2 className="h-6 w-6 text-vivid-purple animate-pulse" />, text: "Update your resume every few months, even when not looking for work—capture growth consistently." }
];

const backgrounds = (
  <svg className="absolute -z-10 left-0 top-0 w-full h-[800px] pointer-events-none" viewBox="0 0 1440 800" fill="none">
    <defs>
      <radialGradient id="g2" cx="80%" cy="25%" r="90%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.13" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <ellipse cx="750" cy="110" rx="880" ry="270" fill="url(#g2)" />
    <ellipse cx="200" cy="450" rx="320" ry="120" fill="#a6c1ee" fillOpacity="0.13" />
    <ellipse cx="1200" cy="360" rx="350" ry="130" fill="#fbc2eb" fillOpacity="0.15" />
    <ellipse cx="700" cy="770" rx="480" ry="60" fill="#e7e6f6" fillOpacity="0.09" />
  </svg>
);

const extraContent = (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-gradient-to-r from-sky-50 to-pink-50 p-8 rounded-2xl shadow-sm">
      <h2 className="text-2xl text-resume-purple font-bold mb-3">What Makes a Resume Truly Outstanding?</h2>
      <ul className="list-disc ml-8 text-gray-700 text-base space-y-2">
        <li>Combines clarity, brevity, and specific proof of value—don't just describe, *demonstrate*.</li>
        <li>Summary, skills, and experience all support a single, consistent overall 'story' or career theme.</li>
        <li>Includes targeted keywords found in the employer's posting, matched naturally in your actual accomplishments.</li>
        <li>Design is readable on laptop and mobile, and saves cleanly to PDF without breaks.</li>
        <li>Genuine: custom-written for each opportunity, not a copied template for every role.</li>
        <li>Uses confident, active language everywhere—no filler, no clichés, and no repetitions.</li>
      </ul>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border-l-4 border-blue-300 p-6 rounded-2xl shadow text-sm md:text-base">
        <h3 className="font-bold mb-2 text-blue-500 flex items-center gap-2"><Sparkles className="h-5 w-5" /> Good Example</h3>
        <ul className="list-disc ml-7 space-y-1 text-green-700">
          <li>Launched cloud app used by 5,000+ businesses worldwide, increasing revenue by 38% in 1 year.</li>
          <li>Reduced onboarding time from 10 days to 4 by designing a new documentation portal.</li>
          <li>Mentored 4 new engineers, resulting in 100% retention for first 12 months and a 9.6/10 team feedback score.</li>
        </ul>
      </div>
      <div className="bg-white border-l-4 border-red-300 p-6 rounded-2xl shadow text-sm md:text-base">
        <h3 className="font-bold mb-2 text-red-500 flex items-center gap-2"><X className="h-5 w-5" /> Bad Example</h3>
        <ul className="list-disc ml-7 space-y-1 text-red-700">
          <li>Responsible for sales and onboarding new clients.</li>
          <li>Helped with team training.</li>
          <li>Did daily documentation and app maintenance.</li>
        </ul>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mt-2 shadow-sm">
      <h2 className="text-xl font-bold mb-2 text-resume-purple">Tips for Each Section—Beyond the Basics</h2>
      <ul className="list-decimal ml-8 text-base text-gray-700 space-y-2">
        <li>
          <b>Personal Info:</b> Optimize your LinkedIn for keywords and add a professional profile photo.
        </li>
        <li>
          <b>Summary:</b> Use at least 1-2 “power adjectives”—innovative, passionate, results-oriented.
        </li>
        <li>
          <b>Skills:</b> Mix technical and business-oriented skills. Show breadth and depth.
        </li>
        <li>
          <b>Experience:</b> Describe the result, then the task, then your action.
        </li>
        <li>
          <b>Projects:</b> Add logos or multimedia links if offering a digital version.
        </li>
        <li>
          <b>Education:</b> Join academic societies? List them! They signal engagement.
        </li>
        <li>
          <b>Certifications:</b> Validate each with a link or reference number.
        </li>
        <li>
          <b>Languages:</b> Mention only languages where you can hold a professional conversation.
        </li>
      </ul>
    </div>
    <div className="bg-gradient-to-br from-purple-50 via-blue-100 to-yellow-50 mt-8 py-4 px-5 rounded-2xl text-center">
      <p className="text-sm text-gray-500">
        Resume built? <b>Try our AI tips!</b> Each field guides you with context-aware advice, and you can drag and drop skills instantly into your profile.
      </p>
    </div>
  </div>
);

const Guide = () => (
  <div className="relative bg-gradient-to-br from-slate-100 via-white to-blue-50 min-h-screen overflow-x-hidden flex flex-col">
    {backgrounds}
    <Header />
    <div className="max-w-3xl mx-auto px-4 py-12 animate-fade-in flex-1">
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
              {sections.concat(advancedSections).map((section, i) => (
                <div key={i} className="flex items-start gap-5 animate-fade-in">
                  <div className="shrink-0 rounded-full p-2 bg-gradient-to-br from-blue-100 to-yellow-100 shadow-inner">{section.icon}</div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-blue-900">{section.title}</h3>
                    <p className="text-gray-900">{section.desc}</p>
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
                <li key={i} className="flex items-center gap-4 text-gray-900 group hover:scale-105 transition-transform animate-fade-in">
                  <span className="rounded-full shadow-lg border-2 border-resume-purple bg-yellow-50 w-10 h-10 flex items-center justify-center">{tip.icon}</span>
                  <span className="font-semibold">{tip.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-16">{extraContent}</div>
      </div>
      <div className="mb-16 animate-fade-in">
        <div className="bg-gradient-to-r from-resume-purple/10 via-blue-100/30 to-violet-200/30 rounded-3xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center text-vivid-purple">Frequently Asked Questions</h2>
          <ul className="space-y-5 text-gray-900">
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
    <Footer />
  </div>
);

export default Guide;
