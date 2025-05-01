
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Star, Users, TrendingUp, Sparkles, CheckCircle2, Pencil, Heart, 
  Globe, Shield, Lightbulb, Activity, X, Download, FileText, CheckCheck, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import TipBox from '@/components/TipBox';

// Essential resume sections
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
    desc: "Showcase public, open-source, work, or personal projects. Share links, GitHub repos, or case studies that highlight your skills and impact. If possible, add a 2-3 line summary for each, describe your unique contribution, and align the project with the job/field you're targeting.",
    icon: <Pencil className="h-8 w-8 text-purple-500 animate-spin" />,
  },
  {
    title: "Volunteer & Leadership",
    desc: "Include impactful leadership and volunteer roles, such as mentoring, conference speaking, or nonprofit contributions. Be specific about what you achieved and how it helped others.",
    icon: <Heart className="h-8 w-8 text-red-400 animate-pulse" />,
  },
];

// Advanced resume sections
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
  {
    title: "Certifications & Awards",
    desc: "Add any relevant certifications, awards, scholarships, hackathon wins, and honors to boost the credibility of your resume.",
    icon: <Globe className="h-8 w-8 text-blue-700 animate-pulse" />,
  },
  {
    title: "Additional Sections",
    desc: "Consider adding sections for Publications, Conferences, Languages, or Interests. These enrich your profile, especially for academic, research, or global positions.",
    icon: <Sparkles className="h-8 w-8 text-blue-400 animate-bounce" />,
  },
];

// General resume tips
const tips = [
  { icon: <Lightbulb className="h-6 w-6 text-yellow-400 animate-bounce" />, text: "Start each bullet point with a strong action verb (e.g., 'Led', 'Created', 'Optimized', 'Designed')." },
  { icon: <Shield className="h-6 w-6 text-green-700 animate-pulse" />, text: "Quantify your results (e.g., 'Reduced processing time by 40%' or 'Onboarded 15 new team members')." },
  { icon: <Activity className="h-6 w-6 text-blue-400 animate-pulse" />, text: "Tailor your resume for every job. Scan the job posting for required skills and echo their keywords." },
  { icon: <Sparkles className="h-6 w-6 text-purple-400 animate-bounce" />, text: "Keep formatting clear and consistent throughout: same font, alignment, section spacing, and heading styles." },
  { icon: <CheckCircle2 className="h-6 w-6 text-pink-500 animate-bounce" />, text: "Limit your resume to 1-2 pages for most industries, unless you are in academia/medicine." },
  { icon: <Users className="h-6 w-6 text-orange-400 animate-bounce" />, text: "Peer review: ask mentors, colleagues, or career coaches to give feedback and catch typos/errors." },
  { icon: <Star className="h-6 w-6 text-yellow-500 animate-spin" />, text: "Highlight awards, certifications, and leadership experience, not just duties." },
];

// Format tips
const formatTips = [
  "Use a clean, professional font like Arial, Helvetica, or Calibri in 10-12pt size",
  "Maintain consistent spacing and alignment throughout the document",
  "Use bullet points for better readability rather than paragraphs",
  "Include white space to make your resume easy to scan",
  "Consider using subtle color for headings or section dividers",
  "Save your resume as a PDF to maintain formatting across devices",
  "Name your file professionally (e.g., FirstName_LastName_Resume.pdf)"
];

// ATS optimization tips
const atsTips = [
  "Use standard section headings (Experience, Education, Skills)",
  "Incorporate keywords directly from the job description",
  "Avoid using tables, graphics, or text boxes that ATS might not parse correctly",
  "Don't include your photo unless specifically requested",
  "Use a simple, clean layout rather than complex designs",
  "Spell out acronyms at least once before using them repeatedly",
  "Submit both a tailored resume and a comprehensive LinkedIn profile"
];

// Industry-specific tips
const industryTips = [
  {
    industry: "Technology",
    tips: [
      "Highlight technical skills and programming languages with proficiency levels",
      "Include GitHub repositories or coding project links",
      "Show problem-solving abilities and technical achievements",
      "List relevant certifications and continuous learning",
      "Demonstrate both technical and soft skills (communication, teamwork)"
    ]
  },
  {
    industry: "Creative Fields",
    tips: [
      "Include a link to your portfolio or work samples",
      "Showcase creative problem-solving and innovation",
      "Highlight specific design tools and software proficiency",
      "Include metrics of success (engagement, views, conversions)",
      "Consider a more visually unique resume design"
    ]
  },
  {
    industry: "Business/Finance",
    tips: [
      "Emphasize quantifiable achievements and financial metrics",
      "Highlight analytical abilities and attention to detail",
      "Include relevant certifications (CPA, CFA, MBA)",
      "Show knowledge of industry-specific software and tools",
      "Demonstrate leadership and strategic planning skills"
    ]
  }
];

// Common mistakes section content
const commonMistakes = [
  {
    mistake: "Using generic statements",
    example: "'Responsible for sales' vs. 'Generated $120K in sales by implementing a new CRM strategy'",
    icon: <X className="h-6 w-6 text-red-500" />
  },
  {
    mistake: "Including irrelevant experience",
    example: "Listing every job you've had instead of focusing on relevant ones",
    icon: <X className="h-6 w-6 text-red-500" />
  },
  {
    mistake: "Using an unprofessional email",
    example: "coolDude123@email.com vs. firstname.lastname@email.com",
    icon: <X className="h-6 w-6 text-red-500" />
  },
  {
    mistake: "Typos and grammatical errors",
    example: "Not proofreading or having others review your resume",
    icon: <X className="h-6 w-6 text-red-500" />
  },
  {
    mistake: "Including personal information",
    example: "Adding age, marital status, or photo (unless customary in your region)",
    icon: <X className="h-6 w-6 text-red-500" />
  }
];

// Action verbs for resume bullet points
const actionVerbs = [
  "Achieved", "Analyzed", "Built", "Collaborated", "Designed", 
  "Established", "Facilitated", "Generated", "Implemented", "Led", 
  "Managed", "Negotiated", "Optimized", "Provided", "Reduced", 
  "Streamlined", "Transformed", "Upgraded", "Validated", "Won"
];

// Backgrounds for visual design
const backgrounds = (
  <svg className="absolute -z-10 left-0 top-0 w-full h-[800px] pointer-events-none" viewBox="0 0 1440 800" fill="none">
    <defs>
      <radialGradient id="g2" cx="80%" cy="25%" r="90%">
        <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.13" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <ellipse cx="750" cy="110" rx="880" ry="270" fill="url(#g2)" />
    <ellipse cx="200" cy="450" rx="320" ry="120" fill="#a6c1ee" fillOpacity="0.13" />
    <ellipse cx="1200" cy="360" rx="350" ry="130" fill="#fbc2eb" fillOpacity="0.15" />
    <ellipse cx="700" cy="770" rx="480" ry="60" fill="#e7e6f6" fillOpacity="0.09" />
  </svg>
);

// Resume creation process section
const creationProcess = [
  {
    step: "Research & Planning",
    details: "Analyze the job description and company values before starting your resume.",
    icon: <Lightbulb className="h-7 w-7 text-yellow-500" />
  },
  {
    step: "Content Creation",
    details: "Draft clear, impactful descriptions of your experience and achievements.",
    icon: <Pencil className="h-7 w-7 text-blue-500" />
  },
  {
    step: "Design & Formatting",
    details: "Choose an appropriate template and ensure consistent, clean formatting.",
    icon: <FileText className="h-7 w-7 text-resume-purple" />
  },
  {
    step: "Review & Optimization",
    details: "Edit for clarity, check for ATS compatibility, and tailor for specific jobs.",
    icon: <CheckCheck className="h-7 w-7 text-green-500" />
  },
  {
    step: "Distribution",
    details: "Save in appropriate formats and know when to use each version of your resume.",
    icon: <Download className="h-7 w-7 text-indigo-500" />
  }
];

// Main component
const Guide = () => (
  <div className="relative bg-gradient-to-br from-slate-100 via-white to-blue-50 min-h-screen overflow-x-hidden flex flex-col">
    {backgrounds}
    <Header />
    <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in flex-1">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-resume-purple via-blue-500 to-resume-purple drop-shadow-lg">
        The Ultimate Resume Guide
      </h1>
      
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700">
          Your resume is often the first impression you make on potential employers. 
          Learn how to create a resume that stands out and effectively showcases your skills and experience.
        </p>
      </div>
      
      <TipBox 
        title="Key Resume Tips"
        tips={[
          "Customize your resume for each job application to match the specific requirements.",
          "Use quantifiable achievements rather than listing job responsibilities.",
          "Keep design clean and professional with consistent formatting throughout.",
          "Ensure your resume passes ATS (Applicant Tracking System) scans by using standard formats.",
          "Have others review your resume before submitting to catch errors you might miss.",
          "Include keywords from the job description to improve your chances of getting past automated screening.",
          "Focus on your most recent and relevant experience rather than listing everything."
        ]}
      />

      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 bg-white shadow-xl rounded-3xl p-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 text-resume-purple flex items-center gap-2">
              <BookOpen className="h-6 w-6" /> Essential Resume Sections
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {sections.map((section, i) => (
                <div key={i} className="flex items-start gap-5 animate-fade-in">
                  <div className="shrink-0 rounded-full p-2 bg-gradient-to-br from-blue-100 to-resume-light-purple shadow-inner">{section.icon}</div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-blue-900">{section.title}</h3>
                    <p className="text-gray-900">{section.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-white shadow-xl rounded-3xl p-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 text-blue-500 flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              Best Practices
            </h2>
            <ol className="space-y-4">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-900 group hover:scale-105 transition-transform animate-fade-in">
                  <span className="rounded-full shadow-lg border-2 border-resume-purple bg-yellow-50 w-10 h-10 flex items-center justify-center">{tip.icon}</span>
                  <span className="font-medium">{tip.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      
      {/* Resume Creation Process */}
      <div className="mb-16 bg-white p-8 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-resume-purple">The Resume Creation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {creationProcess.map((step, index) => (
            <div 
              key={index}
              className="relative p-5 rounded-xl border border-resume-purple/20 bg-gradient-to-br from-white to-slate-50"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full bg-white p-2 shadow-md border border-resume-purple/30">
                {step.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-center text-resume-purple">{step.step}</h3>
              <p className="mt-2 text-center text-sm text-gray-700">{step.details}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Formatting Tips */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-resume-purple flex items-center gap-2">
            <FileText className="h-6 w-6" /> Format & Design Tips
          </h2>
          <TipBox tips={formatTips} title="" />
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-500 flex items-center gap-2">
            <Shield className="h-6 w-6" /> ATS Optimization Tips
          </h2>
          <TipBox tips={atsTips} title="" />
        </div>
      </div>
      
      {/* Industry-Specific Tips */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-resume-purple">Industry-Specific Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industryTips.map((industry, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-resume-purple">{industry.industry}</h3>
              <ul className="space-y-2">
                {industry.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-resume-purple font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Advanced Resume Elements */}
      <div className="mb-16 bg-gradient-to-r from-resume-purple/5 to-blue-100/20 rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-resume-purple">Advanced Resume Elements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedSections.map((section, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="shrink-0 rounded-full p-2 bg-gradient-to-br from-blue-100 to-resume-light-purple/30">{section.icon}</div>
                <h3 className="font-semibold text-lg text-resume-purple">{section.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{section.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Common Mistakes and Actions Verbs */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-red-500 flex items-center gap-2">
            <X className="h-6 w-6" /> Common Resume Mistakes
          </h2>
          <ul className="space-y-4">
            {commonMistakes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-gray-900">{item.mistake}</h4>
                  <p className="text-sm text-gray-700">{item.example}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-green-600 flex items-center gap-2">
            <Zap className="h-6 w-6" /> Powerful Action Verbs
          </h2>
          <div className="flex flex-wrap gap-2">
            {actionVerbs.map((verb, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-100 transition-colors cursor-default"
              >
                {verb}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Start your bullet points with these action verbs to create more impactful descriptions of your achievements.
          </p>
        </div>
      </div>
      
      {/* Good vs Bad Examples */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-resume-purple">Examples: Before & After</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-l-4 border-red-400 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2 text-red-500 flex items-center gap-2"><X className="h-5 w-5" /> Before</h3>
            <ul className="list-disc ml-7 space-y-3 text-red-800">
              <li>"Responsible for managing social media."</li>
              <li>"Helped with customer service and handled complaints."</li>
              <li>"Did daily reports and data entry for the team."</li>
            </ul>
          </div>
          <div className="bg-white border-l-4 border-green-400 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2 text-green-600 flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> After</h3>
            <ul className="list-disc ml-7 space-y-3 text-green-800">
              <li>"Grew Instagram following by 45% in 6 months through strategic content calendar and engagement tactics."</li>
              <li>"Resolved 98% of customer complaints within 24 hours, earning a 4.9/5 customer satisfaction rating."</li>
              <li>"Generated daily performance reports that identified a 12% inventory discrepancy, saving the company $45K annually."</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center pb-10">
        <h2 className="text-3xl font-bold mb-4 text-resume-purple">Ready to Build Your Perfect Resume?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Put these tips into practice with our intuitive resume builder. 
          Create a professional, ATS-friendly resume in minutes.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-5 rounded-full shadow-lg bg-gradient-to-r from-resume-purple to-blue-500 animate-bounce text-white font-semibold text-lg cursor-pointer hover:scale-105 transition-all"
        >
          Try the Nowhile Resume Builder &rarr;
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default Guide;
