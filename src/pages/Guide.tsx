
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown, FileText, CheckCircle2, AlertCircle, Lightbulb, PieChart, Target, Search } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Guide = () => {
  const [activeTab, setActiveTab] = useState<string>("getting-started");
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Resume Guide</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about creating a professional resume that gets you noticed by recruiters and passes ATS systems.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              variant={activeTab === "getting-started" ? "default" : "outline"} 
              onClick={() => setActiveTab("getting-started")}
              className="rounded-full"
            >
              Getting Started
            </Button>
            <Button 
              variant={activeTab === "sections" ? "default" : "outline"} 
              onClick={() => setActiveTab("sections")}
              className="rounded-full"
            >
              Resume Sections
            </Button>
            <Button 
              variant={activeTab === "templates" ? "default" : "outline"} 
              onClick={() => setActiveTab("templates")}
              className="rounded-full"
            >
              Template Guide
            </Button>
            <Button 
              variant={activeTab === "ats" ? "default" : "outline"} 
              onClick={() => setActiveTab("ats")}
              className="rounded-full"
            >
              ATS Optimization
            </Button>
          </div>
          
          {activeTab === "getting-started" && (
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Basics</CardTitle>
                  <CardDescription>The essential elements of an effective resume</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    A resume is a document that summarizes your work experience, education, skills, and achievements. 
                    It's your personal marketing tool that showcases your qualifications for a specific job or career.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Keep it concise</h4>
                        <p className="text-sm text-gray-600">
                          Most resumes should be one page, especially for early to mid-career professionals.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Use professional formatting</h4>
                        <p className="text-sm text-gray-600">
                          Clean, consistent formatting with clear section headings improves readability.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Tailor to the job</h4>
                        <p className="text-sm text-gray-600">
                          Customize your resume for each position by matching keywords from the job posting.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Highlight achievements</h4>
                        <p className="text-sm text-gray-600">
                          Focus on quantifiable results and accomplishments rather than just listing duties.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Resume Formats</CardTitle>
                  <CardDescription>Different structure options based on your experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="format-1">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-resume-purple" />
                          <span>Chronological Resume</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-7 space-y-2">
                          <p className="text-sm text-gray-600">
                            Lists your work experience in reverse chronological order (most recent first).
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-semibold">Best for:</span> Candidates with steady work history and clear career progression.
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Advantages:</span> Highlights career growth and is the most familiar format to recruiters.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="format-2">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-resume-purple" />
                          <span>Functional Resume</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-7 space-y-2">
                          <p className="text-sm text-gray-600">
                            Emphasizes your skills and abilities rather than work history.
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-semibold">Best for:</span> Career changers, those with employment gaps, or professionals returning to the workforce.
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Advantages:</span> Focuses on transferable skills rather than job titles.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="format-3">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-resume-purple" />
                          <span>Combination Resume</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-7 space-y-2">
                          <p className="text-sm text-gray-600">
                            Blends elements of chronological and functional resumes.
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-semibold">Best for:</span> Experienced professionals with diverse skills or those making a slight career pivot.
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Advantages:</span> Showcases both relevant skills and work history.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "sections" && (
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Essential Resume Sections</CardTitle>
                  <CardDescription>What to include in your resume</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="section-1">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-resume-purple" />
                          <span>Contact Information</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-7 space-y-2">
                          <p className="text-sm text-gray-600">
                            Include your full name, phone number, professional email, LinkedIn profile, and location (city, state).
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-semibold">Pro Tip:</span> Use a professional email address based on your name, not nicknames.
                          </p>
                          <div className="mt-3 border-l-4 border-resume-purple pl-4 py-2">
                            <p className="text-sm italic text-gray-600">
                              "Make your name the largest element on your resume to create a personal brand."
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="section-2">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-resume-purple" />
                          <span>Professional Summary</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-7 space-y-2">
                          <p className="text-sm text-gray-600">
                            A brief 2-3 sentence overview of your qualifications, expertise, and career highlights.
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-semibold">Pro Tip:</span> Customize your summary for each job application to highlight relevant experience.
                          </p>
                          <div className="mt-3 border-l-4 border-resume-purple pl-4 py-2">
                            <p className="text-sm italic text-gray-600">
                              "Your summary is the resume's headline—it should capture attention and make recruiters want to read more."
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="section-3">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-resume-purple" />
                          <span>Work Experience</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-7 space-y-2">
                          <p className="text-sm text-gray-600">
                            List your work experience in reverse chronological order, including job title, company name, dates of employment, and 3-5 bullet points of accomplishments.
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-semibold">Pro Tip:</span> Use action verbs and quantify achievements (numbers, percentages, dollar amounts) whenever possible.
                          </p>
                          <div className="mt-3 border-l-4 border-resume-purple pl-4 py-2">
                            <p className="text-sm italic text-gray-600">
                              "Show results, not responsibilities. Instead of 'Responsible for social media,' write 'Increased Twitter engagement by 45% in 6 months.'"
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="section-4">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-resume-purple" />
                          <span>Education</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-7 space-y-2">
                          <p className="text-sm text-gray-600">
                            Include degrees, certificates, institutions, graduation dates, and relevant coursework or academic achievements.
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-semibold">Pro Tip:</span> For recent graduates, education may come before work experience. For experienced professionals, keep education brief.
                          </p>
                          <div className="mt-3 border-l-4 border-resume-purple pl-4 py-2">
                            <p className="text-sm italic text-gray-600">
                              "Only include GPA if it's impressive (3.5+) and you're a recent graduate."
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="section-5">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-resume-purple" />
                          <span>Skills</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-7 space-y-2">
                          <p className="text-sm text-gray-600">
                            List relevant technical, professional, and soft skills. Consider categorizing them if you have many.
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-semibold">Pro Tip:</span> Match your skills section with keywords from the job description to pass ATS filters.
                          </p>
                          <div className="mt-3 border-l-4 border-resume-purple pl-4 py-2">
                            <p className="text-sm italic text-gray-600">
                              "Be specific with technical skills. Instead of 'Programming,' list specific languages: 'Python, JavaScript, SQL.'"
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="section-6">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-resume-purple" />
                          <span>Projects (Optional)</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-7 space-y-2">
                          <p className="text-sm text-gray-600">
                            Include relevant professional, academic, or personal projects that demonstrate your skills and accomplishments.
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-semibold">Pro Tip:</span> For each project, include the title, your role, technologies used, and outcomes achieved.
                          </p>
                          <div className="mt-3 border-l-4 border-resume-purple pl-4 py-2">
                            <p className="text-sm italic text-gray-600">
                              "Projects are especially valuable for recent graduates or career changers to show skills when work experience is limited."
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>What to Avoid</CardTitle>
                  <CardDescription>Common resume mistakes to watch out for</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Generic Statements</h4>
                        <p className="text-sm text-gray-600">
                          Avoid vague claims like "hard worker" or "team player" without evidence.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Spelling/Grammar Errors</h4>
                        <p className="text-sm text-gray-600">
                          Proofread carefully. Typos suggest carelessness and lack of attention to detail.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Outdated Information</h4>
                        <p className="text-sm text-gray-600">
                          Remove very old or irrelevant experience that doesn't add value.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Unprofessional Email</h4>
                        <p className="text-sm text-gray-600">
                          Avoid emails like "partyguy@email.com" or nicknames. Use your name instead.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "templates" && (
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Template Guide</CardTitle>
                  <CardDescription>Choosing the right template for your career</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-resume-purple text-white p-4">
                        <h3 className="text-xl font-bold">Modern Template</h3>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="col-span-1">
                            <img 
                              src="/svg/modern-template.svg" 
                              alt="Modern Template" 
                              className="w-full h-auto border rounded-md"
                            />
                          </div>
                          <div className="col-span-2 space-y-4">
                            <div>
                              <h4 className="font-semibold text-resume-purple">Best For</h4>
                              <p className="text-sm text-gray-600">
                                Tech, startups, creative industries, marketing, digital roles
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-resume-purple">Key Features</h4>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mt-1">
                                <li>Clean, contemporary design</li>
                                <li>Balanced white space</li>
                                <li>Modern typography</li>
                                <li>Strategic use of color</li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-resume-purple">ATS Score</h4>
                              <div className="flex items-center mt-1">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                                </div>
                                <span className="ml-2 text-sm font-medium">92%</span>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-resume-purple">Pro Tips</h4>
                              <p className="text-sm text-gray-600">
                                The clean layout makes this template versatile for many industries while still feeling fresh and current. 
                                Keep descriptions concise to maintain the clean aesthetic.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-blue-500 text-white p-4">
                        <h3 className="text-xl font-bold">Minimal Template</h3>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="col-span-1">
                            <img 
                              src="/svg/minimal-template.svg" 
                              alt="Minimal Template" 
                              className="w-full h-auto border rounded-md"
                            />
                          </div>
                          <div className="col-span-2 space-y-4">
                            <div>
                              <h4 className="font-semibold text-blue-500">Best For</h4>
                              <p className="text-sm text-gray-600">
                                Traditional industries, finance, legal, healthcare, academia, executive positions
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-blue-500">Key Features</h4>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mt-1">
                                <li>Classic, timeless layout</li>
                                <li>Traditional serif fonts</li>
                                <li>Conservative spacing</li>
                                <li>Subtle formatting</li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-blue-500">ATS Score</h4>
                              <div className="flex items-center mt-1">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                                </div>
                                <span className="ml-2 text-sm font-medium">98%</span>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-blue-500">Pro Tips</h4>
                              <p className="text-sm text-gray-600">
                                This template is excellent for industries where tradition and formality are valued. 
                                It performs exceptionally well with ATS systems due to its clean, straightforward formatting.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-orange-500 text-white p-4">
                        <h3 className="text-xl font-bold">Colorful Template</h3>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="col-span-1">
                            <img 
                              src="/svg/colorful-template.svg" 
                              alt="Colorful Template" 
                              className="w-full h-auto border rounded-md"
                            />
                          </div>
                          <div className="col-span-2 space-y-4">
                            <div>
                              <h4 className="font-semibold text-orange-500">Best For</h4>
                              <p className="text-sm text-gray-600">
                                Creative fields, design, advertising, media, entertainment, marketing
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-orange-500">Key Features</h4>
                              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mt-1">
                                <li>Strategic color accents</li>
                                <li>Creative layout</li>
                                <li>Modern typography</li>
                                <li>Visual hierarchy</li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-orange-500">ATS Score</h4>
                              <div className="flex items-center mt-1">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                                </div>
                                <span className="ml-2 text-sm font-medium">89%</span>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-orange-500">Pro Tips</h4>
                              <p className="text-sm text-gray-600">
                                This template helps you stand out in creative industries while maintaining professionalism.
                                The strategic use of color draws attention to key sections without overwhelming the content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "ats" && (
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-resume-purple" />
                    ATS Optimization Guide
                  </CardTitle>
                  <CardDescription>Making your resume ATS-friendly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What is ATS?</h3>
                    <p className="text-gray-600">
                      Applicant Tracking Systems (ATS) are software used by employers to scan, filter, and rank resumes 
                      before they reach human reviewers. Up to 75% of resumes are rejected by ATS before a human ever sees them.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-resume-purple/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ATS Do's
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Use standard section headings (Experience, Education, Skills)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Include keywords from the job description</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Use a clean, simple layout with standard fonts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Save your resume as a .docx or .pdf file</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Spell out acronyms at least once</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-red-300/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                          ATS Don'ts
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>Use tables, text boxes, or complex formatting</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>Include headers/footers (ATS may not read them)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>Use graphics, logos, or images</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>Submit files in non-standard formats (.jpg, .png)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>Use creative section headings that ATS won't recognize</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-resume-light-purple/30 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                      Keyword Optimization
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                      ATS systems scan for keywords that match the job description. Here's how to optimize your resume:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-resume-purple flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Identify key skills</h4>
                          <p className="text-sm text-gray-600">
                            Highlight important skills, qualifications, and technologies mentioned in the job posting.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-resume-purple flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Use exact matches</h4>
                          <p className="text-sm text-gray-600">
                            Use the exact phrases from the job description, including both the spelled-out terms and acronyms.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-resume-purple flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Incorporate naturally</h4>
                          <p className="text-sm text-gray-600">
                            Weave keywords into your experience descriptions naturally, don't just list them.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-resume-purple flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Include a skills section</h4>
                          <p className="text-sm text-gray-600">
                            Create a dedicated skills section that includes technical skills, software proficiencies, and certifications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-resume-purple" />
                      ATS Score by Template
                    </h3>
                    <div className="space-y-4 mt-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Minimal Template</span>
                          <span className="text-sm font-medium">98%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Modern Template</span>
                          <span className="text-sm font-medium">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Colorful Template</span>
                          <span className="text-sm font-medium">89%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      Note: All our templates are ATS-friendly and score well above industry average.
                      While minimal templates typically score highest, the differences are minor and any of our templates will perform well.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => window.location.href = "/"}>
              <FileText className="h-5 w-5 mr-2" />
              Start Building Your Resume
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Guide;
