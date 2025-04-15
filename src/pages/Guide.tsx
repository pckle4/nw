
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineTitle, TimelineBody } from '@/components/ui/timeline';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Clock, Check, ArrowRight, Lightbulb, Palette, PenSquare, Award, Sparkle, Info, AlertCircle, FileDown, Shuffle, Edit, Mail, Phone, Briefcase, GraduationCap, CheckSquare, MessageSquare } from 'lucide-react';

const Guide = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
            Resume Creation Guide
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow our step-by-step process to create a professional resume that stands out to employers.
            Our expert tips and guidance will help you build an impressive resume in minutes.
          </p>
        </div>

        <Alert className="mb-8 border-resume-purple">
          <Info className="h-4 w-4 text-resume-purple" />
          <AlertTitle>Resume Building Made Simple</AlertTitle>
          <AlertDescription>
            This guide will walk you through creating a professional resume from start to finish. Each step includes helpful tips and examples to showcase your skills effectively.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="process" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="process" className="text-sm">The Process</TabsTrigger>
            <TabsTrigger value="tips" className="text-sm">Expert Tips</TabsTrigger>
            <TabsTrigger value="mistakes" className="text-sm">Common Mistakes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="process" className="mt-6">
            <Timeline>
              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon>
                    <div className="bg-blue-100 p-1 rounded-full">
                      <FileText size={16} className="text-blue-600" />
                    </div>
                  </TimelineIcon>
                  <TimelineTitle>Choose a Template</TimelineTitle>
                </TimelineHeader>
                <TimelineConnector />
                <TimelineBody className="mb-6">
                  <p className="text-gray-600 mb-4">
                    Browse our collection of professionally designed templates. Choose one that best matches your style and industry. Each template has been designed to be ATS-friendly while still maintaining a visually appealing layout.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="border rounded-md p-2 hover:border-resume-purple transition-colors cursor-pointer">
                      <div className="aspect-[8.5/11] bg-gray-100 rounded flex items-center justify-center mb-2">
                        <span className="text-xs text-gray-500">Modern</span>
                      </div>
                      <p className="text-xs text-center text-gray-600">Clean & Professional</p>
                    </div>
                    <div className="border rounded-md p-2 hover:border-resume-purple transition-colors cursor-pointer">
                      <div className="aspect-[8.5/11] bg-gray-100 rounded flex items-center justify-center mb-2">
                        <span className="text-xs text-gray-500">Minimal</span>
                      </div>
                      <p className="text-xs text-center text-gray-600">Simple & Elegant</p>
                    </div>
                    <div className="border rounded-md p-2 hover:border-resume-purple transition-colors cursor-pointer">
                      <div className="aspect-[8.5/11] bg-gray-100 rounded flex items-center justify-center mb-2">
                        <span className="text-xs text-gray-500">Colorful</span>
                      </div>
                      <p className="text-xs text-center text-gray-600">Bold & Creative</p>
                    </div>
                  </div>
                </TimelineBody>
              </TimelineItem>

              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon>
                    <div className="bg-green-100 p-1 rounded-full">
                      <PenSquare size={16} className="text-green-600" />
                    </div>
                  </TimelineIcon>
                  <TimelineTitle>Enter Your Personal Information</TimelineTitle>
                </TimelineHeader>
                <TimelineConnector />
                <TimelineBody className="mb-6">
                  <p className="text-gray-600 mb-4">
                    Start with your contact details and personal information. Make sure to include your name, professional email, phone number, and optionally a LinkedIn profile or personal website.
                  </p>
                  <Card className="border-dashed border-gray-300 bg-gray-50">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex flex-col space-y-1">
                          <label className="text-xs text-gray-600">Full Name</label>
                          <div className="h-8 bg-white border rounded px-3 flex items-center text-gray-400 text-sm">
                            John Doe
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex flex-col space-y-1">
                            <label className="text-xs text-gray-600">Email</label>
                            <div className="h-8 bg-white border rounded px-3 flex items-center text-gray-400 text-sm">
                              <Mail size={14} className="mr-2 text-resume-purple" />
                              john.doe@example.com
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1">
                            <label className="text-xs text-gray-600">Phone</label>
                            <div className="h-8 bg-white border rounded px-3 flex items-center text-gray-400 text-sm">
                              <Phone size={14} className="mr-2 text-resume-purple" />
                              (123) 456-7890
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TimelineBody>
              </TimelineItem>

              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon>
                    <div className="bg-purple-100 p-1 rounded-full">
                      <Briefcase size={16} className="text-purple-600" />
                    </div>
                  </TimelineIcon>
                  <TimelineTitle>Add Work Experience</TimelineTitle>
                </TimelineHeader>
                <TimelineConnector />
                <TimelineBody className="mb-6">
                  <p className="text-gray-600 mb-4">
                    List your relevant work experience in reverse chronological order (most recent first). Focus on achievements rather than just duties. Use strong action verbs and quantify results where possible.
                  </p>
                  <div className="bg-white border rounded-md p-4 shadow-sm mb-3">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-semibold text-gray-800">Senior Web Developer</h3>
                        <p className="text-resume-purple text-sm">TechCorp Inc.</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <Clock size={14} className="inline mr-1" />
                        2020 - Present
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600 pl-5 list-disc">
                      <li>Increased website performance by 40% through code optimization</li>
                      <li>Led a team of 5 developers to rebuild the company's main web application</li>
                      <li>Implemented automated testing, reducing bugs by 35%</li>
                    </ul>
                  </div>
                  <div className="flex justify-center mt-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Edit className="h-3 w-3 mr-1" />
                      Add Another Position
                    </Button>
                  </div>
                </TimelineBody>
              </TimelineItem>

              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon>
                    <div className="bg-amber-100 p-1 rounded-full">
                      <GraduationCap size={16} className="text-amber-600" />
                    </div>
                  </TimelineIcon>
                  <TimelineTitle>Include Education</TimelineTitle>
                </TimelineHeader>
                <TimelineConnector />
                <TimelineBody className="mb-6">
                  <p className="text-gray-600 mb-4">
                    Add your educational background, including degrees, certifications, and relevant coursework. For recent graduates, this section may come before work experience.
                  </p>
                  <div className="bg-white border rounded-md p-4 shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
                        <p className="text-resume-purple text-sm">University of Technology</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <Clock size={14} className="inline mr-1" />
                        2014 - 2018
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Graduated with honors. Specialized in Software Engineering.
                    </p>
                  </div>
                </TimelineBody>
              </TimelineItem>

              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon>
                    <div className="bg-blue-100 p-1 rounded-full">
                      <CheckSquare size={16} className="text-blue-600" />
                    </div>
                  </TimelineIcon>
                  <TimelineTitle>List Skills & Proficiencies</TimelineTitle>
                </TimelineHeader>
                <TimelineConnector />
                <TimelineBody className="mb-6">
                  <p className="text-gray-600 mb-4">
                    Highlight relevant skills for the job you're targeting. Include both technical and soft skills that demonstrate your qualifications. Consider organizing them into categories for clarity.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Technical Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-800">JavaScript</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-800">React.js</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-800">Node.js</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-800">TypeScript</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-800">RESTful APIs</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Soft Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-800">Team Leadership</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-800">Problem Solving</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-800">Communication</div>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-800">Project Management</div>
                      </div>
                    </div>
                  </div>
                </TimelineBody>
              </TimelineItem>

              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon>
                    <div className="bg-green-100 p-1 rounded-full">
                      <FileDown size={16} className="text-green-600" />
                    </div>
                  </TimelineIcon>
                  <TimelineTitle>Download & Share</TimelineTitle>
                </TimelineHeader>
                <TimelineBody>
                  <p className="text-gray-600 mb-4">
                    Review your resume, make any final adjustments, and download it in your preferred format (PDF recommended). You can also easily share it directly via email or generate a link for online access.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" className="bg-resume-purple hover:bg-resume-dark-purple">
                      <FileDown className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Share Resume
                    </Button>
                  </div>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </TabsContent>
          
          <TabsContent value="tips">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                    Tailor to the Job
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Customize your resume for each position by matching keywords from the job description. This helps you pass through Applicant Tracking Systems (ATS) and shows employers you're a perfect fit.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Palette className="h-5 w-5 mr-2 text-purple-500" />
                    Keep Design Clean
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Use a clean, professional design with consistent formatting. Avoid cluttered layouts, excessive colors, or decorative fonts that can distract from your content.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    Quantify Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Add numbers and percentages to demonstrate your impact. Instead of "Improved sales," say "Increased sales by 27% in 6 months" to make your accomplishments more concrete.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-blue-500" />
                    Use Action Verbs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Start bullet points with strong action verbs like "Developed," "Implemented," or "Led" to convey confidence and highlight your direct contributions.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Award className="h-5 w-5 mr-2 text-amber-500" />
                    Highlight Relevant Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Focus on skills that directly relate to the job you're applying for. Research the industry and position to identify the most valuable skills to showcase.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Sparkle className="h-5 w-5 mr-2 text-pink-500" />
                    Keep It Concise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Aim for a one-page resume (two pages maximum for senior roles). Remove outdated experiences and focus on your most recent and relevant achievements.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="mistakes">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-red-600 hover:text-red-700">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Including Generic Objectives
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Generic objective statements like "Seeking a challenging position" waste valuable space. Instead, use a professional summary that highlights your experience and value proposition tailored to the specific role.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-red-600 hover:text-red-700">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Focusing on Duties Instead of Achievements
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Listing job responsibilities without showing your impact doesn't differentiate you from other candidates. Focus on what you accomplished, not just what you were supposed to do. Use metrics when possible to quantify your success.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-red-600 hover:text-red-700">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Typos and Grammatical Errors
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Even a single typo can suggest carelessness to employers. Always proofread carefully and have someone else review your resume before submitting it. Our resume builder includes a spell-check feature to help you avoid these errors.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-red-600 hover:text-red-700">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Using an Inappropriate Email Address
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Email addresses like "partylover@email.com" appear unprofessional. Create a simple email address using your name for job applications. This small detail can significantly impact how recruiters perceive your professionalism.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-red-600 hover:text-red-700">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Including Irrelevant Information
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Including hobbies, interests, or experiences that don't relate to the job can distract from your qualifications. Every item on your resume should serve to showcase why you're the right candidate for the specific position.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-red-600 hover:text-red-700">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Using a One-Size-Fits-All Approach
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sending the same resume to every job posting significantly reduces your chances of getting interviews. Customize your resume for each application to emphasize the skills and experiences most relevant to that specific role.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl p-8 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-resume-purple">AI-Powered Resume Tips</h2>
          <p className="text-gray-600 mb-6">
            Our AI analyzes your resume content and provides personalized suggestions to enhance your resume quality. Here are some examples of how our AI assistant can help:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shuffle className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Word Choice Enhancement</h3>
                  <div className="text-sm text-gray-500">
                    <p className="line-through mb-1">
                      "Responsible for managing a team of developers"
                    </p>
                    <p className="text-resume-purple font-medium">
                      "Led and mentored a team of 8 developers, increasing productivity by 22%"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Skills Gap Analysis</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Our AI identifies important skills mentioned in job descriptions that are missing from your resume.
                  </p>
                  <div className="bg-green-50 p-2 rounded text-sm text-green-700 border border-green-200">
                    <strong>Suggestion:</strong> Based on your target role as Frontend Developer, consider adding experience with "React Testing Library" and "Performance Optimization" to your skills section.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">ATS Optimization Tips</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Our AI checks your resume against ATS algorithms to ensure it gets past automated screening.
                  </p>
                  <div className="bg-amber-50 p-2 rounded text-sm text-amber-700 border border-amber-200">
                    <strong>Tip:</strong> Your resume uses complex formatting that may confuse ATS systems. Consider simplifying tables and using standard section headings like "Experience" and "Education."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-3 text-gray-800">Ready to Build Your Resume?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Follow our step-by-step guide and create a professional, eye-catching resume that will help you land your dream job.
          </p>
          <Button className="bg-resume-purple hover:bg-resume-dark-purple">
            <ArrowRight className="h-4 w-4 mr-2" />
            Get Started Now
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guide;
