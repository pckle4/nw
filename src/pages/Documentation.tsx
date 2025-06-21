
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, BookOpen, Search, Layout, Layers, Book, FileText, HelpCircle, Star, CheckSquare, Settings, Calendar, Link, Zap, Users, Lightbulb, Download, Globe, Smartphone, Palette, Shield, Clock, TrendingUp, Award, Target } from "lucide-react";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Built with Vite for instant hot reload and optimized builds" },
    { icon: Users, title: "User Friendly", description: "Intuitive interface designed for both beginners and professionals" },
    { icon: Palette, title: "Beautiful Templates", description: "Professional designs that make your resume stand out" },
    { icon: Shield, title: "Privacy First", description: "Your data stays local - no server uploads required" },
    { icon: Smartphone, title: "Mobile Ready", description: "Fully responsive design works on all devices" },
    { icon: Globe, title: "Export Options", description: "Multiple formats including PDF, DOCX, and more" }
  ];

  const stats = [
    { label: "Templates Available", value: "15+", icon: Layout },
    { label: "Export Formats", value: "5", icon: Download },
    { label: "Active Users", value: "10K+", icon: Users },
    { label: "Success Rate", value: "98%", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10"></div>
          <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume Builder Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your complete guide to creating professional, ATS-friendly resumes with our powerful builder
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Resume Builder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
            />
          </div>
        </div>

        {/* Documentation Navigation */}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="bg-white/60 backdrop-blur-sm p-2 rounded-xl border border-white/20 shadow-lg">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full h-auto bg-transparent">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:shadow-md py-3 flex flex-col md:flex-row gap-2 items-center rounded-lg">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-white data-[state=active]:shadow-md py-3 flex flex-col md:flex-row gap-2 items-center rounded-lg">
                <Book className="h-4 w-4" />
                <span className="text-sm">Guides</span>
              </TabsTrigger>
              <TabsTrigger value="templates" className="data-[state=active]:bg-white data-[state=active]:shadow-md py-3 flex flex-col md:flex-row gap-2 items-center rounded-lg">
                <Layout className="h-4 w-4" />
                <span className="text-sm">Templates</span>
              </TabsTrigger>
              <TabsTrigger value="api" className="data-[state=active]:bg-white data-[state=active]:shadow-md py-3 flex flex-col md:flex-row gap-2 items-center rounded-lg">
                <Code className="h-4 w-4" />
                <span className="text-sm">API</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-white data-[state=active]:shadow-md py-3 flex flex-col md:flex-row gap-2 items-center rounded-lg">
                <HelpCircle className="h-4 w-4" />
                <span className="text-sm">FAQ</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Section */}
          <TabsContent value="overview" className="space-y-8 animate-fade-in">
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Platform Overview</CardTitle>
                    <CardDescription>Everything you need to know about our resume builder</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Progress Indicator */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Resume Building Process
                  </h3>
                  <div className="space-y-3">
                    {[
                      { step: "Personal Information", progress: 100, color: "bg-green-500" },
                      { step: "Professional Experience", progress: 85, color: "bg-blue-500" },
                      { step: "Education & Skills", progress: 70, color: "bg-yellow-500" },
                      { step: "Template Selection", progress: 60, color: "bg-purple-500" },
                      { step: "Final Review", progress: 45, color: "bg-red-500" }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.step}</span>
                          <span className="text-muted-foreground">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${item.color} transition-all duration-500`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Core Features
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Real-time preview updates",
                        "Multiple export formats",
                        "ATS-optimized templates",
                        "AI-powered suggestions",
                        "Mobile-responsive design"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckSquare className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-lg p-6 border border-primary/20">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Success Metrics
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: "Interview Rate Increase", value: "3x", icon: TrendingUp },
                        { label: "Time Saved", value: "75%", icon: Clock },
                        { label: "User Satisfaction", value: "4.9/5", icon: Star }
                      ].map((metric, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <metric.icon className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">{metric.label}</span>
                          </div>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {metric.value}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quick Start Guides */}
          <TabsContent value="guides" className="space-y-8 animate-fade-in">
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Step-by-Step Guides</CardTitle>
                    <CardDescription>Detailed instructions to help you create the perfect resume</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="getting-started" className="border border-white/20 rounded-lg mb-4 bg-white/30 backdrop-blur-sm">
                    <AccordionTrigger className="hover:bg-white/50 px-6 py-4 rounded-t-lg font-medium">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Lightbulb className="h-4 w-4 text-green-600" />
                        </div>
                        Getting Started - Your First Resume
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-lg">Step 1: Personal Information</h4>
                          <ul className="space-y-2 ml-4 list-disc text-sm">
                            <li>Enter your full name and professional title</li>
                            <li>Add contact information (email, phone, location)</li>
                            <li>Write a compelling 2-3 sentence summary</li>
                            <li>Include relevant social profiles (LinkedIn, portfolio)</li>
                          </ul>
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-sm text-blue-800">
                              💡 <strong>Pro Tip:</strong> Use keywords from your target job description in your summary
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border">
                          <h5 className="font-medium mb-2">Example Summary:</h5>
                          <p className="text-sm italic text-gray-700">
                            "Results-driven Software Developer with 5+ years of experience in full-stack development. 
                            Specialized in React, Node.js, and cloud technologies with a track record of delivering 
                            scalable solutions that improve user experience by 40%."
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="experience" className="border border-white/20 rounded-lg mb-4 bg-white/30 backdrop-blur-sm">
                    <AccordionTrigger className="hover:bg-white/50 px-6 py-4 rounded-t-lg font-medium">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Settings className="h-4 w-4 text-blue-600" />
                        </div>
                        Adding Professional Experience
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg">How to Structure Your Experience</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <h5 className="font-medium text-green-800 mb-2">✅ Do This</h5>
                              <ul className="space-y-1 text-sm text-green-700">
                                <li>• Use action verbs (Led, Developed, Increased)</li>
                                <li>• Include specific metrics and numbers</li>
                                <li>• Focus on achievements, not just duties</li>
                                <li>• Use reverse chronological order</li>
                              </ul>
                            </div>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                              <h5 className="font-medium text-red-800 mb-2">❌ Avoid This</h5>
                              <ul className="space-y-1 text-sm text-red-700">
                                <li>• Generic job descriptions</li>
                                <li>• Using passive voice</li>
                                <li>• Listing irrelevant experiences</li>
                                <li>• Including salary information</li>
                              </ul>
                            </div>
                          </div>
                          <div className="bg-white border rounded-lg p-4">
                            <h5 className="font-medium mb-3">Example Experience Entry:</h5>
                            <div className="space-y-2 text-sm">
                              <div className="font-medium">Senior Frontend Developer</div>
                              <div className="text-gray-600">TechCorp Inc. | Jan 2021 - Present</div>
                              <ul className="space-y-1 ml-4 list-disc text-gray-700">
                                <li>Led development of React-based dashboard, improving user engagement by 45%</li>
                                <li>Mentored 3 junior developers, reducing code review time by 30%</li>
                                <li>Implemented automated testing suite, achieving 95% code coverage</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="templates" className="border border-white/20 rounded-lg mb-4 bg-white/30 backdrop-blur-sm">
                    <AccordionTrigger className="hover:bg-white/50 px-6 py-4 rounded-t-lg font-medium">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Palette className="h-4 w-4 text-purple-600" />
                        </div>
                        Choosing the Right Template
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { name: "Modern", industry: "Tech & Startups", color: "from-blue-500 to-cyan-500" },
                          { name: "Minimal", industry: "Finance & Law", color: "from-gray-600 to-gray-800" },
                          { name: "Colorful", industry: "Creative & Marketing", color: "from-pink-500 to-purple-500" }
                        ].map((template, index) => (
                          <div key={index} className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
                            <div className={`h-24 rounded-lg bg-gradient-to-br ${template.color} mb-3`}></div>
                            <h5 className="font-medium">{template.name}</h5>
                            <p className="text-sm text-gray-600">{template.industry}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Templates Section */}
          <TabsContent value="templates" className="space-y-8 animate-fade-in">
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Layout className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Resume Templates</CardTitle>
                    <CardDescription>Professional designs for every industry and career level</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      name: "Modern Professional", 
                      category: "Tech & Engineering",
                      features: ["Clean layout", "Skills visualization", "Project showcase"],
                      color: "from-blue-400 to-blue-600",
                      popular: true
                    },
                    { 
                      name: "Executive Minimal", 
                      category: "Leadership & Management",
                      features: ["Conservative design", "Achievement focus", "Professional typography"],
                      color: "from-gray-500 to-gray-700",
                      popular: false
                    },
                    { 
                      name: "Creative Colorful", 
                      category: "Design & Marketing",
                      features: ["Bold colors", "Creative sections", "Portfolio integration"],
                      color: "from-purple-400 to-pink-600",
                      popular: false
                    },
                    { 
                      name: "Academic Scholar", 
                      category: "Education & Research",
                      features: ["Publication list", "Research focus", "Conference sections"],
                      color: "from-green-400 to-emerald-600",
                      popular: false
                    },
                    { 
                      name: "Sales Professional", 
                      category: "Sales & Business",
                      features: ["Metrics highlight", "Achievement focus", "Client testimonials"],
                      color: "from-orange-400 to-red-500",
                      popular: true
                    },
                    { 
                      name: "Healthcare Specialist", 
                      category: "Medical & Healthcare",
                      features: ["Certification focus", "Clinical experience", "Professional references"],
                      color: "from-teal-400 to-cyan-500",
                      popular: false
                    }
                  ].map((template, index) => (
                    <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-white/80 backdrop-blur-sm border-white/30">
                      {template.popular && (
                        <div className="absolute top-3 right-3 z-10">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        </div>
                      )}
                      <div className={`h-32 bg-gradient-to-br ${template.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                        <div className="absolute bottom-2 left-2">
                          <div className="w-8 h-1 bg-white/60 rounded mb-1"></div>
                          <div className="w-12 h-1 bg-white/40 rounded mb-1"></div>
                          <div className="w-6 h-1 bg-white/40 rounded"></div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-1">{template.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{template.category}</p>
                        <div className="space-y-2">
                          {template.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckSquare className="h-3 w-3 text-green-500" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full mt-4 bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg transition-all duration-300" size="sm">
                          Preview Template
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Documentation */}
          <TabsContent value="api" className="space-y-8 animate-fade-in">
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">API Reference</CardTitle>
                    <CardDescription>Technical documentation for developers and advanced users</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Core Components</h3>
                    <div className="space-y-3">
                      {[
                        { name: "ResumeForm", description: "Main form container for data input", props: "data, onChange, onSubmit" },
                        { name: "TemplateRenderer", description: "Renders resume with selected template", props: "template, data, preview" },
                        { name: "ExportManager", description: "Handles PDF and DOCX exports", props: "format, data, filename" }
                      ].map((component, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 border">
                          <div className="flex items-center gap-2 mb-2">
                            <Code className="h-4 w-4 text-primary" />
                            <span className="font-mono text-sm font-medium">{component.name}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{component.description}</p>
                          <div className="text-xs text-gray-500">
                            <span className="font-medium">Props:</span> {component.props}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Data Schema</h3>
                    <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm">
{`interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    graduationDate: string;
  }>;
  skills: string[];
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Section */}
          <TabsContent value="faq" className="space-y-8 animate-fade-in">
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                    <CardDescription>Find answers to common questions about our resume builder</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "Is my data secure and private?",
                      answer: "Yes, absolutely. All your resume data is processed locally in your browser. We don't store or transmit your personal information to our servers. Your privacy is our top priority."
                    },
                    {
                      question: "Can I export my resume in different formats?",
                      answer: "Yes, you can export your resume in multiple formats including PDF, DOCX, and plain text. PDF is recommended for most job applications as it preserves formatting across all devices."
                    },
                    {
                      question: "Are the templates ATS-friendly?",
                      answer: "All our templates are designed to be ATS (Applicant Tracking System) friendly. They use standard fonts, proper heading structures, and avoid complex graphics that might confuse automated systems."
                    },
                    {
                      question: "Can I save multiple versions of my resume?",
                      answer: "Currently, the resume builder stores your data locally in your browser. You can create different versions by exporting them with different filenames or using browser profiles."
                    },
                    {
                      question: "Does the resume builder work on mobile devices?",
                      answer: "Yes, our resume builder is fully responsive and works great on tablets and smartphones. However, for the best experience, we recommend using a desktop or laptop computer."
                    },
                    {
                      question: "How do I choose the right template for my industry?",
                      answer: "We provide guidance for each template. Generally, use Modern for tech roles, Minimal for conservative industries like finance/law, and Colorful for creative positions. Consider your industry norms and company culture."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border border-white/20 rounded-lg mb-4 bg-white/30 backdrop-blur-sm">
                      <AccordionTrigger className="hover:bg-white/50 px-6 py-4 rounded-t-lg text-left">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Perfect Resume?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of professionals who have successfully landed their dream jobs with our resume builder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg transition-all duration-300">
                  <FileText className="h-5 w-5 mr-2" />
                  Start Building Now
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/20">
                  <Download className="h-5 w-5 mr-2" />
                  View Examples
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
