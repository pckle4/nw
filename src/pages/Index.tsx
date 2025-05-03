
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TemplateSelector from '@/components/TemplateSelector';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import AboutSection from '@/components/AboutSection';
import FaqSection from '@/components/FaqSection';
import PreloadingScreen from '@/components/PreloadingScreen';
import AiTips from '@/components/AiTips';
import { initialResumeData } from '@/data/initialData';
import { ResumeData } from '@/types/resume';
import { TooltipProvider } from '@/components/ui/tooltip';
import { 
  FileText, Sparkles, CheckCircle2, Cpu, Download, Home, Info, 
  Star, TrendingUp, Users, Zap, Palette, BookOpen, Award, 
  Clock, FileSearch, GraduationCap, BarChart3, Pencil
} from 'lucide-react';

const Index = () => {
  const [step, setStep] = useState<'templates' | 'form' | 'preview'>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [isLoading, setIsLoading] = useState(true);
  const [animateIcons, setAnimateIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Trigger decorative icons animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setAnimateIcons(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
  };
  const handleStartForm = () => {
    setStep('form');
    window.scrollTo(0, 0);
  };
  const handleBackToTemplates = () => {
    setStep('templates');
    window.scrollTo(0, 0);
  };
  const handleFormComplete = () => {
    setStep('preview');
    window.scrollTo(0, 0);
  };
  const updateResumeData = (data: ResumeData) => {
    setResumeData(data);
  };

  const features = [
    {
      title: "Pro Templates",
      description: "Choose professionally designed, modern templates for instant impact.",
      icon: <Star className="h-7 w-7 text-yellow-400 group-hover:animate-bounce transition-transform" />,
    },
    {
      title: "Smart AI Help",
      description: "Get real-time AI-powered tips to boost your resume content and design.",
      icon: <Sparkles className="h-7 w-7 text-purple-400 group-hover:rotate-12 transition-transform" />,
    },
    {
      title: "1-Click Export",
      description: "Download your resume in PDF with a single animated click.",
      icon: <Download className="h-7 w-7 text-blue-400 group-hover:scale-125 transition-transform" />,
    },
    {
      title: "Career Tips",
      description: "Built-in advice to tailor your CV for every opportunity.",
      icon: <TrendingUp className="h-7 w-7 text-green-400 group-hover:animate-spin-slow transition-transform" />,
    },
    {
      title: "Collaboration",
      description: "Share, get feedback, and collaborate on resumes instantly.",
      icon: <Users className="h-7 w-7 text-fuchsia-400 group-hover:scale-110 transition-transform" />,
    },
    {
      title: "Total Privacy",
      description: "Your resume. Your rules. Your data is encrypted and safe.",
      icon: <Home className="h-7 w-7 text-gray-300 group-hover:animate-pulse transition-transform" />,
    }
  ];

  // Decorative floating icons with different animations
  const decorativeIcons = [
    { icon: <FileText />, color: "text-blue-400", size: "w-10 h-10", position: "top-20 left-[12%]", animation: "animate-float-slow" },
    { icon: <Palette />, color: "text-purple-400", size: "w-8 h-8", position: "top-40 right-[15%]", animation: "animate-bounce-slow" },
    { icon: <BookOpen />, color: "text-green-400", size: "w-6 h-6", position: "top-60 left-[20%]", animation: "animate-pulse-slow" },
    { icon: <Award />, color: "text-yellow-400", size: "w-12 h-12", position: "top-80 right-[8%]", animation: "animate-spin-slow" },
    { icon: <Clock />, color: "text-pink-400", size: "w-7 h-7", position: "top-96 left-[10%]", animation: "animate-ping-slow" },
    { icon: <FileSearch />, color: "text-teal-400", size: "w-9 h-9", position: "top-[30rem] right-[18%]", animation: "animate-float-reverse" },
    { icon: <GraduationCap />, color: "text-indigo-400", size: "w-10 h-10", position: "top-[35rem] left-[15%]", animation: "animate-bounce-slow" },
    { icon: <BarChart3 />, color: "text-orange-400", size: "w-8 h-8", position: "top-[40rem] right-[12%]", animation: "animate-pulse-slow" },
    { icon: <Pencil />, color: "text-cyan-400", size: "w-6 h-6", position: "top-[45rem] left-[22%]", animation: "animate-spin-slow" },
    { icon: <Zap />, color: "text-amber-400", size: "w-10 h-10", position: "top-[50rem] right-[20%]", animation: "animate-ping-slow" },
  ];

  return (
    <TooltipProvider>
      {isLoading && <PreloadingScreen />}
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <svg width="100vw" height="100vh" className="absolute top-0 left-0" style={{ width: '100vw', height: '100vh' }}>
            <defs>
              <radialGradient id="homebg1" cx="30%" cy="15%" r="80%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.22" />
                <stop offset="90%" stopColor="transparent" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="homebg2" cx="70%" cy="90%" r="80%">
                <stop offset="0%" stopColor="#1EAEDB" stopOpacity="0.18" />
                <stop offset="90%" stopColor="transparent" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#homebg1)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#homebg2)" />
            <circle cx="90%" cy="12%" r="140" fill="#facc15" opacity="0.12" />
            <circle cx="25%" cy="85%" r="90" fill="#f9fafb" opacity="0.12" />
            <circle cx="15%" cy="35%" r="60" fill="#8B5CF6" opacity="0.08" />
            <circle cx="85%" cy="60%" r="120" fill="#1EAEDB" opacity="0.08" />
          </svg>
        </div>
        
        {/* Decorative floating icons */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
          {decorativeIcons.map((item, index) => (
            <div 
              key={index}
              className={`absolute ${item.position} ${item.color} ${item.size} opacity-0 transition-opacity duration-1000 ${animateIcons ? 'opacity-30' : ''} ${item.animation}`}
            >
              {item.icon}
            </div>
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none -z-5"></div>

        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {step === 'templates' && (
            <>
              <div className="py-14 md:py-24 px-4 max-w-6xl mx-auto relative animate-fade-in">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-48 blur-3xl opacity-50 pointer-events-none" style={{ background: 'linear-gradient(90deg,#8B5CF655,#1EAEDB33 80%)' }} />
                <div className="text-center space-y-6 relative z-10">
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-resume-purple via-yellow-400 to-blue-400 animate-pulse-gentle">
                    Modern Resumes for Your Dream Job
                  </h1>
                  <p className="text-2xl text-gray-700 max-w-2xl mx-auto animate-fade-in">
                    Instantly create stunning, ATS-optimized resumes with AI-powered guidance, vibrant templates, and live preview.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <button
                      onClick={() => window.scrollTo({ top: document.getElementById('templates')?.offsetTop! - 80, behavior: 'smooth' })}
                      className="px-10 py-4 rounded-full shadow-lg bg-gradient-to-r from-resume-purple to-blue-500 text-white text-lg font-semibold flex items-center gap-3 transform hover:scale-105 transition-all animate-pulse-gentle"
                    >
                      Get Started
                      <Zap className="h-6 w-6 animate-pulse" />
                    </button>
                    <button
                      onClick={() => window.scrollTo({ top: document.getElementById('about')?.offsetTop! - 80, behavior: 'smooth' })}
                      className="px-10 py-4 rounded-full border border-gray-300 hover:bg-gray-50 text-lg font-semibold transition-all flex items-center gap-3"
                    >
                      Learn More
                      <Info className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/80 p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group
                          flex flex-col items-center text-center animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-center mb-6 bg-gradient-to-tr from-blue-100 to-yellow-100 rounded-full w-16 h-16 shadow-inner group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-extrabold mb-2 group-hover:text-resume-purple transition-colors">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div id="templates" className="pt-10">
                <TemplateSelector
                  selectedTemplate={selectedTemplate}
                  onSelectTemplate={handleSelectTemplate}
                  onNext={handleStartForm}
                />
              </div>
              <AboutSection />
              <FaqSection />
              <section className="my-16 animate-fade-in">
                <div className="bg-gradient-to-r from-white via-slate-100 to-purple-50 border border-slate-200 rounded-3xl shadow-lg p-10 md:p-14">
                  <h2 className="text-3xl font-extrabold mb-6 text-resume-purple text-center">
                    How Nowhile Works
                  </h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="hover:bg-white/50 p-6 rounded-xl transition-all hover:-translate-y-1 duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                          <FileText className="h-5 w-5 text-blue-600 animate-pulse-gentle" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-700">Pick a Template</h3>
                      </div>
                      <p className="text-gray-800 leading-relaxed">
                        Select from our range of modern, professional templates designed to impress. Every template is fully customizable and optimized for both print and screen.
                      </p>
                    </div>
                    <div className="hover:bg-white/50 p-6 rounded-xl transition-all hover:-translate-y-1 duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                          <Sparkles className="h-5 w-5 text-green-600 animate-float" />
                        </div>
                        <h3 className="text-xl font-bold text-green-700">Build With Guidance</h3>
                      </div>
                      <p className="text-gray-800 leading-relaxed">
                        Our AI-powered system and inline tips help you craft outstanding content and avoid common mistakes. Live preview ensures you see every change instantly.
                      </p>
                    </div>
                    <div className="hover:bg-white/50 p-6 rounded-xl transition-all hover:-translate-y-1 duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
                          <Users className="h-5 w-5 text-purple-600 animate-pulse-gentle" />
                        </div>
                        <h3 className="text-xl font-bold text-purple-700">Collaborate & Get Feedback</h3>
                      </div>
                      <p className="text-gray-800 leading-relaxed">
                        Easily share your resume for reviewing and feedback—perfect for mentors, coaches, or peers. Built-in privacy means only those you invite can view and comment.
                      </p>
                    </div>
                    <div className="hover:bg-white/50 p-6 rounded-xl transition-all hover:-translate-y-1 duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-100">
                          <Download className="h-5 w-5 text-yellow-600 animate-bounce-slow" />
                        </div>
                        <h3 className="text-xl font-bold text-yellow-700">1-Click Export</h3>
                      </div>
                      <p className="text-gray-800 leading-relaxed">
                        Download your resume in high-quality PDF format with a single click. Your data stays secure and private—always in your hands.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {step === 'form' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ResumeForm
                initialData={resumeData}
                onUpdateData={updateResumeData}
                onComplete={handleFormComplete}
                onBack={handleBackToTemplates}
              />
              <div className="hidden lg:block sticky top-24 h-[calc(100vh-6rem)]">
                <ResumePreview
                  data={resumeData}
                  templateId={selectedTemplate}
                />
              </div>
            </div>
          )}

          {step === 'preview' && (
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto mb-8 text-center space-y-4">
                <h1 className="text-4xl font-bold">Your Resume is Ready!</h1>
                <p className="text-lg text-gray-600">
                  Your professional resume has been created. Download it now or go back to make changes.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setStep('form')}
                    className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Edit Resume
                  </button>
                  <button
                    onClick={() => {
                      const previewElem = document.querySelector('[data-preview-download]');
                      if (previewElem) {
                        (previewElem as HTMLElement).click();
                      }
                    }}
                    className="px-6 py-2 rounded-lg bg-resume-purple text-white hover:bg-resume-dark-purple transition-colors"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
              <div className="max-w-4xl mx-auto">
                <AiTips data={resumeData} templateId={selectedTemplate} />
                <ResumePreview
                  data={resumeData}
                  templateId={selectedTemplate}
                />
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
