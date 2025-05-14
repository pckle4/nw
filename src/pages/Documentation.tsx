
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, BookOpen, Search, Layout, Layers, Book, FileText, HelpCircle, Star, CheckSquare, Settings, Calendar, Link } from "lucide-react";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 min-h-screen">
      <div className="flex flex-col space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Resume Builder Documentation</h1>
          <p className="text-muted-foreground">Comprehensive guide to understand and use our resume building platform effectively.</p>
        </div>

        {/* Documentation Navigation */}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="bg-muted/50 p-1 rounded-lg mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full h-auto">
              <TabsTrigger value="overview" className="data-[state=active]:bg-background py-2 flex flex-col md:flex-row gap-2 items-center">
                <BookOpen className="h-4 w-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-background py-2 flex flex-col md:flex-row gap-2 items-center">
                <Book className="h-4 w-4" />
                <span>User Guides</span>
              </TabsTrigger>
              <TabsTrigger value="api" className="data-[state=active]:bg-background py-2 flex flex-col md:flex-row gap-2 items-center">
                <Code className="h-4 w-4" />
                <span>Components</span>
              </TabsTrigger>
              <TabsTrigger value="architecture" className="data-[state=active]:bg-background py-2 flex flex-col md:flex-row gap-2 items-center">
                <Layers className="h-4 w-4" />
                <span>Architecture</span>
              </TabsTrigger>
              <TabsTrigger value="choices" className="data-[state=active]:bg-background py-2 flex flex-col md:flex-row gap-2 items-center">
                <Star className="h-4 w-4" />
                <span>Tech Choices</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Section */}
          <TabsContent value="overview" className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle>Resume Builder Platform Overview</CardTitle>
                </div>
                <CardDescription>
                  A comprehensive introduction to our resume building application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Key Features
                    </h3>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Interactive form-based resume creation</li>
                      <li>Multiple professionally designed templates</li>
                      <li>Real-time preview as you build</li>
                      <li>AI-powered content suggestions and tips</li>
                      <li>Export to PDF, DOCX and other formats</li>
                      <li>Responsive design for all device types</li>
                      <li>Section-based organization for structured resumes</li>
                    </ul>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary to-secondary" />
                    <h3 className="text-xl font-semibold mb-3">Platform Benefits</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Professional Results</p>
                          <p className="text-sm text-muted-foreground">Industry-standard templates ensure your resume stands out</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Time Efficiency</p>
                          <p className="text-sm text-muted-foreground">Create polished resumes in minutes instead of hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Content Guidance</p>
                          <p className="text-sm text-muted-foreground">AI suggestions help you highlight important skills and achievements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4 mt-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Layout className="h-5 w-5 text-primary" />
                    Application Structure
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-medium">Form Section</h4>
                      <p className="text-muted-foreground">Interactive form for information entry with context-aware fields</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Preview Panel</h4>
                      <p className="text-muted-foreground">Real-time rendering of resume with zoom and pan capabilities</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Template Gallery</h4>
                      <p className="text-muted-foreground">Collection of professionally designed resume templates</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Interactive Walk-through</h3>
                  <div className="relative rounded-lg bg-muted/30 border p-4 overflow-hidden">
                    <div className="animate-pulse absolute top-2 right-2 bg-primary/10 rounded-full p-1">
                      <HelpCircle className="h-4 w-4 text-primary" />
                    </div>
                    <ol className="space-y-3 ml-6 list-decimal">
                      <li className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                        <span className="font-medium">Personal Information:</span> Begin by entering your contact details and personal summary
                      </li>
                      <li className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <span className="font-medium">Professional Experience:</span> Add your work history with achievements
                      </li>
                      <li className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <span className="font-medium">Education & Skills:</span> Include academic credentials and relevant skills
                      </li>
                      <li className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <span className="font-medium">Template Selection:</span> Choose from multiple professional design templates
                      </li>
                      <li className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                        <span className="font-medium">Preview & Download:</span> Review your resume and export in your preferred format
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 flex justify-between">
                <div className="text-sm text-muted-foreground">Last updated: May 10, 2025</div>
                <div className="text-sm">
                  <Link to="/guide" className="text-primary hover:underline flex items-center gap-1">
                    <Link className="h-4 w-4" />
                    <span>View Detailed Guide</span>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* User Guides Section */}
          <TabsContent value="guides" className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-primary" />
                  <CardTitle>Getting Started with Resume Builder</CardTitle>
                </div>
                <CardDescription>
                  Step-by-step instructions for creating your perfect resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-md -mx-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Setting Up Your Resume
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 space-y-4">
                      <div className="rounded-lg border p-4 bg-muted/20">
                        <h4 className="font-medium text-lg mb-2">Personal Information Section</h4>
                        <p className="mb-3">Start by filling out your personal details to create the header of your resume:</p>
                        <ul className="space-y-2 ml-6 list-disc">
                          <li><span className="font-medium">Full Name:</span> Use your complete professional name</li>
                          <li><span className="font-medium">Contact Information:</span> Include email, phone, and optionally LinkedIn</li>
                          <li><span className="font-medium">Professional Title:</span> Your current position or target role</li>
                          <li><span className="font-medium">Summary:</span> 2-3 sentence overview of your professional profile</li>
                        </ul>
                        <div className="mt-4 rounded border p-3 bg-background">
                          <p className="text-sm text-muted-foreground italic">
                            💡 Pro Tip: Keep your summary concise and focused on your most relevant qualifications for the target position.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-lg border p-4">
                          <h4 className="font-medium mb-2">Best Practices</h4>
                          <ul className="space-y-1 ml-5 list-disc text-sm">
                            <li>Use a professional email address</li>
                            <li>Include city and state (full address not necessary)</li>
                            <li>Verify all contact information is current</li>
                            <li>Create a headline that matches job targets</li>
                          </ul>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h4 className="font-medium mb-2">Common Mistakes to Avoid</h4>
                          <ul className="space-y-1 ml-5 list-disc text-sm">
                            <li>Using unprofessional email addresses</li>
                            <li>Including outdated contact information</li>
                            <li>Making your summary too long or generic</li>
                            <li>Using an unclear professional title</li>
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-lg p-4 bg-primary/5 border border-primary/20">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Settings className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Interactive Features</h4>
                            <p className="text-sm">
                              Notice the real-time preview on the right updates as you type. You can toggle between templates at any time to see how your
                              information appears in different layouts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-md -mx-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Adding Professional Experience
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 space-y-4">
                      <div className="space-y-3">
                        <p>
                          The Professional Experience section is often considered the most important part of your resume. 
                          It showcases your work history and accomplishments to potential employers.
                        </p>
                        
                        <div className="rounded-lg border p-4">
                          <h4 className="font-medium mb-2">Step-by-Step Experience Entry</h4>
                          <ol className="space-y-2 ml-6 list-decimal">
                            <li><span className="font-medium">Click "Add Experience"</span> to create a new entry</li>
                            <li><span className="font-medium">Enter company name</span> and your position title</li>
                            <li><span className="font-medium">Specify employment dates</span> (month/year format recommended)</li>
                            <li><span className="font-medium">Add location</span> information (city, state, remote)</li>
                            <li><span className="font-medium">Describe responsibilities and achievements</span> using bullet points</li>
                          </ol>
                        </div>
                        
                        <div className="bg-muted/20 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Achievement-Focused Descriptions</h4>
                          <p className="mb-2">Use the STAR method to create compelling bullet points:</p>
                          <ul className="space-y-1 ml-6 list-disc">
                            <li><span className="font-medium">Situation:</span> Context for your action</li>
                            <li><span className="font-medium">Task:</span> What you needed to accomplish</li>
                            <li><span className="font-medium">Action:</span> Steps you took to address it</li>
                            <li><span className="font-medium">Result:</span> Measurable outcomes (use numbers when possible)</li>
                          </ul>
                          
                          <div className="mt-3 border rounded p-3 bg-background">
                            <p className="text-sm font-medium">Example:</p>
                            <p className="text-sm italic text-muted-foreground">
                              "Led redesign of customer support workflow, reducing response time by 43% and increasing satisfaction scores from 3.2 to 4.7 out of 5."
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <HelpCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">AI Tips Feature</h4>
                            <p className="text-sm">
                              Look for the AI suggestion tips that appear when you're filling out experience details. These can help you craft
                              more impactful descriptions and highlight overlooked achievements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-md -mx-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Adding Education & Skills
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-medium">Education Section</h4>
                          <div className="rounded-lg border p-4">
                            <h5 className="text-sm font-medium mb-2">Key Information to Include:</h5>
                            <ul className="space-y-1 ml-5 list-disc text-sm">
                              <li>Degree name and major/concentration</li>
                              <li>Institution name and location</li>
                              <li>Graduation date (or expected date)</li>
                              <li>GPA (if above 3.5), honors, relevant coursework</li>
                              <li>Certifications and continuing education</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-muted/20 rounded border">
                            <p className="text-sm text-muted-foreground">
                              For experienced professionals, keep education brief. For recent graduates, you may expand this section with relevant projects,
                              coursework, and academic achievements.
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="font-medium">Skills Section</h4>
                          <div className="rounded-lg border p-4">
                            <h5 className="text-sm font-medium mb-2">Effective Skills Organization:</h5>
                            <ul className="space-y-1 ml-5 list-disc text-sm">
                              <li>Group skills by categories (Technical, Soft Skills, Languages)</li>
                              <li>List most relevant skills to job target first</li>
                              <li>Be specific with technical skills and tools</li>
                              <li>Include proficiency levels when appropriate</li>
                              <li>Match keywords from job descriptions when relevant</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-muted/20 rounded border">
                            <p className="text-sm text-muted-foreground">
                              Our template system will automatically format your skills in the most visually appealing way for each template style.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg p-4 bg-primary/5 border border-primary/20">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-full">
                            <Settings className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Skill Suggestions</h4>
                            <p className="text-sm">
                              As you type, our system will suggest relevant skills based on your industry and job titles. You can quickly add these
                              suggestions to your skills list with a single click.
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-md -mx-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Selecting Templates & Downloading
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="space-y-3">
                        <p>
                          Our resume builder offers multiple professionally designed templates to showcase your information in the most effective way.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="rounded-lg border p-4 hover:bg-muted/20 transition-colors">
                            <h4 className="font-medium mb-2">Modern Template</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Clean, contemporary design with strategic use of color and typography.
                            </p>
                            <p className="text-sm italic">Ideal for: Tech, design, and creative fields</p>
                          </div>
                          <div className="rounded-lg border p-4 hover:bg-muted/20 transition-colors">
                            <h4 className="font-medium mb-2">Minimal Template</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Classic, elegant layout with refined typography and subtle formatting.
                            </p>
                            <p className="text-sm italic">Ideal for: Executive, legal, finance, and traditional industries</p>
                          </div>
                          <div className="rounded-lg border p-4 hover:bg-muted/20 transition-colors">
                            <h4 className="font-medium mb-2">Colorful Template</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Bold, vibrant design with distinctive sections and modern layout.
                            </p>
                            <p className="text-sm italic">Ideal for: Marketing, sales, hospitality, and creative positions</p>
                          </div>
                        </div>
                        
                        <div className="bg-muted/20 rounded-lg p-4 mt-3">
                          <h4 className="font-medium mb-2">Selecting the Right Template</h4>
                          <p className="mb-2 text-sm">Consider these factors when choosing your template:</p>
                          <ul className="space-y-1 ml-6 list-disc text-sm">
                            <li><span className="font-medium">Industry standards:</span> Some fields prefer conservative designs while others value creativity</li>
                            <li><span className="font-medium">Content volume:</span> Some templates handle more text better than others</li>
                            <li><span className="font-medium">Personal brand:</span> Choose a design that reflects your professional persona</li>
                            <li><span className="font-medium">Readability:</span> Ensure your information is clearly presented and easily scannable</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-3">Downloading Your Resume</h4>
                        <div className="space-y-3">
                          <p className="text-sm">
                            Once you've completed your resume, you can download it in several formats:
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                            <div className="p-3 border rounded bg-background">
                              <p className="font-medium text-sm">PDF Format</p>
                              <p className="text-xs text-muted-foreground">Universal format that preserves all formatting</p>
                            </div>
                            <div className="p-3 border rounded bg-background">
                              <p className="font-medium text-sm">DOCX Format</p>
                              <p className="text-xs text-muted-foreground">Editable in Microsoft Word or Google Docs</p>
                            </div>
                            <div className="p-3 border rounded bg-background">
                              <p className="font-medium text-sm">TXT Format</p>
                              <p className="text-xs text-muted-foreground">Plain text for ATS compatibility</p>
                            </div>
                          </div>
                          
                          <div className="bg-primary/5 border border-primary/20 rounded p-3 mt-2">
                            <p className="text-sm">
                              <span className="font-medium">Tip:</span> For most job applications, PDF is recommended as it ensures your formatting remains consistent across devices.
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Section */}
          <TabsContent value="api" className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <CardTitle>Component Documentation</CardTitle>
                </div>
                <CardDescription>
                  Detailed information on the core components of the Resume Builder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Form Components</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">ResumeForm</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          The main form container that orchestrates all input sections and manages form state.
                        </p>
                        <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                          {`<ResumeForm
  initialData={initialResumeData}
  onSave={handleSaveResume}
  onChange={handleFormChange}
/>`}
                        </div>
                        <div className="mt-3">
                          <h5 className="text-sm font-medium">Props:</h5>
                          <ul className="space-y-1 mt-1">
                            <li className="text-sm"><span className="font-mono text-xs">initialData</span>: Initial resume data object</li>
                            <li className="text-sm"><span className="font-mono text-xs">onSave</span>: Function called when form is submitted</li>
                            <li className="text-sm"><span className="font-mono text-xs">onChange</span>: Function called on any form field change</li>
                          </ul>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">PersonalInfoForm</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Form section for collecting user's personal and contact information.
                        </p>
                        <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                          {`<PersonalInfoForm
  data={personalData}
  onChange={handlePersonalInfoChange}
  errors={formErrors.personalInfo}
/>`}
                        </div>
                        <div className="mt-3">
                          <h5 className="text-sm font-medium">Props:</h5>
                          <ul className="space-y-1 mt-1">
                            <li className="text-sm"><span className="font-mono text-xs">data</span>: Personal information data object</li>
                            <li className="text-sm"><span className="font-mono text-xs">onChange</span>: Function to handle field changes</li>
                            <li className="text-sm"><span className="font-mono text-xs">errors</span>: Validation errors object</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Preview Components</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">ResumePreview</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Container component that renders the selected template with the current resume data.
                        </p>
                        <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                          {`<ResumePreview
  resumeData={currentResumeData}
  templateId={selectedTemplate}
  zoom={zoomLevel}
/>`}
                        </div>
                        <div className="mt-3">
                          <h5 className="text-sm font-medium">Props:</h5>
                          <ul className="space-y-1 mt-1">
                            <li className="text-sm"><span className="font-mono text-xs">resumeData</span>: Complete resume data object</li>
                            <li className="text-sm"><span className="font-mono text-xs">templateId</span>: ID of the selected template</li>
                            <li className="text-sm"><span className="font-mono text-xs">zoom</span>: Preview zoom level (0.5-2.0)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">ResumeTemplateRenderer</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Maps resume data to the correct template component and renders it.
                        </p>
                        <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                          {`<ResumeTemplateRenderer
  templateId="modern"
  resumeData={resumeData}
/>`}
                        </div>
                        <div className="mt-3">
                          <h5 className="text-sm font-medium">Props:</h5>
                          <ul className="space-y-1 mt-1">
                            <li className="text-sm"><span className="font-mono text-xs">templateId</span>: Template identifier string</li>
                            <li className="text-sm"><span className="font-mono text-xs">resumeData</span>: Complete resume data object</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Utility Components</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">TemplateSelector</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Grid of template options with preview thumbnails.
                        </p>
                        <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                          {`<TemplateSelector
  templates={availableTemplates}
  selectedId={currentTemplate}
  onSelect={handleTemplateChange}
/>`}
                        </div>
                        <div className="mt-3">
                          <h5 className="text-sm font-medium">Props:</h5>
                          <ul className="space-y-1 mt-1">
                            <li className="text-sm"><span className="font-mono text-xs">templates</span>: Array of template objects</li>
                            <li className="text-sm"><span className="font-mono text-xs">selectedId</span>: ID of currently selected template</li>
                            <li className="text-sm"><span className="font-mono text-xs">onSelect</span>: Function to handle template selection</li>
                          </ul>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">AiTips</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Displays contextual AI-powered suggestions for resume content.
                        </p>
                        <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                          {`<AiTips
  section="experience"
  fieldValue={currentInput}
  position={jobTitle}
/>`}
                        </div>
                        <div className="mt-3">
                          <h5 className="text-sm font-medium">Props:</h5>
                          <ul className="space-y-1 mt-1">
                            <li className="text-sm"><span className="font-mono text-xs">section</span>: Current form section identifier</li>
                            <li className="text-sm"><span className="font-mono text-xs">fieldValue</span>: Current input value</li>
                            <li className="text-sm"><span className="font-mono text-xs">position</span>: Job title context (optional)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Section */}
          <TabsContent value="architecture" className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <CardTitle>System Architecture</CardTitle>
                </div>
                <CardDescription>
                  Overview of the Resume Builder's technical architecture and data flow
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Application Structure</h3>
                  <div className="overflow-hidden rounded-lg border">
                    <div className="p-4 bg-muted/30">
                      <div className="relative w-full h-[300px] bg-background rounded-lg border overflow-hidden">
                        {/* Architecture Diagram */}
                        <div className="absolute inset-0 p-6 flex flex-col">
                          <div className="border-b pb-2 mb-4">
                            <div className="font-medium text-center">Resume Builder Architecture</div>
                          </div>
                          <div className="flex-1 flex gap-2">
                            <div className="w-1/3 flex flex-col gap-2">
                              <div className="bg-primary/10 rounded p-2 border border-primary/30 text-center text-sm">
                                User Interface Layer
                              </div>
                              <div className="flex-1 bg-muted/20 rounded p-2 border text-xs space-y-2">
                                <div className="bg-background rounded p-1 border">Form Components</div>
                                <div className="bg-background rounded p-1 border">Preview Components</div>
                                <div className="bg-background rounded p-1 border">Template Selector</div>
                              </div>
                            </div>

                            <div className="w-1/3 flex flex-col gap-2">
                              <div className="bg-primary/10 rounded p-2 border border-primary/30 text-center text-sm">
                                Business Logic Layer
                              </div>
                              <div className="flex-1 bg-muted/20 rounded p-2 border text-xs space-y-2">
                                <div className="bg-background rounded p-1 border">State Management</div>
                                <div className="bg-background rounded p-1 border">Form Validation</div>
                                <div className="bg-background rounded p-1 border">Template Rendering</div>
                                <div className="bg-background rounded p-1 border">Export Utilities</div>
                              </div>
                            </div>

                            <div className="w-1/3 flex flex-col gap-2">
                              <div className="bg-primary/10 rounded p-2 border border-primary/30 text-center text-sm">
                                Data Layer
                              </div>
                              <div className="flex-1 bg-muted/20 rounded p-2 border text-xs space-y-2">
                                <div className="bg-background rounded p-1 border">Resume Schema</div>
                                <div className="bg-background rounded p-1 border">Local Storage</div>
                                <div className="bg-background rounded p-1 border">Template Definitions</div>
                              </div>
                            </div>
                          </div>

                          {/* Data Flow Arrows */}
                          <div className="absolute top-1/2 left-[33%] transform -translate-y-1/2">
                            <div className="border-t-2 border-r-2 border-primary/30 w-4 h-8 border-dashed"></div>
                            <div className="border-b-2 border-r-2 border-primary/30 w-4 h-8 border-dashed"></div>
                          </div>
                          <div className="absolute top-1/2 left-[66%] transform -translate-y-1/2">
                            <div className="border-t-2 border-r-2 border-primary/30 w-4 h-8 border-dashed"></div>
                            <div className="border-b-2 border-r-2 border-primary/30 w-4 h-8 border-dashed"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The Resume Builder follows a layered architecture pattern with clear separation of concerns between the UI components, business logic,
                    and data management.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Data Flow</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Form to Preview Flow</h4>
                      <ol className="space-y-2 ml-6 list-decimal text-sm">
                        <li>User enters data into form fields</li>
                        <li>OnChange handlers update application state</li>
                        <li>State changes trigger re-rendering of preview</li>
                        <li>Template renderer processes data into visual format</li>
                        <li>Preview updates in real-time as user types</li>
                      </ol>
                      <div className="mt-4 p-3 bg-muted/20 rounded border text-sm">
                        <p><span className="font-medium">Key Benefit:</span> This real-time flow provides immediate feedback to users about how their resume will appear.</p>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Export Process Flow</h4>
                      <ol className="space-y-2 ml-6 list-decimal text-sm">
                        <li>User selects export format (PDF, DOCX, etc.)</li>
                        <li>System captures current template render</li>
                        <li>Conversion utility processes the capture</li>
                        <li>Output is formatted according to chosen format</li>
                        <li>File is generated and provided to user for download</li>
                      </ol>
                      <div className="mt-4 p-3 bg-muted/20 rounded border text-sm">
                        <p><span className="font-medium">Technical Note:</span> Export uses HTML-to-PDF and HTML-to-DOCX libraries to maintain visual fidelity across formats.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Core Technologies</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 py-2 text-left border text-sm font-medium">Category</th>
                          <th className="px-4 py-2 text-left border text-sm font-medium">Technology</th>
                          <th className="px-4 py-2 text-left border text-sm font-medium">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border text-sm font-medium bg-muted/20">Frontend Framework</td>
                          <td className="px-4 py-2 border text-sm">React</td>
                          <td className="px-4 py-2 border text-sm">Component-based UI rendering and state management</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border text-sm font-medium bg-muted/20">Build Tool</td>
                          <td className="px-4 py-2 border text-sm">Vite</td>
                          <td className="px-4 py-2 border text-sm">Fast development server and optimized builds</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border text-sm font-medium bg-muted/20">Styling</td>
                          <td className="px-4 py-2 border text-sm">Tailwind CSS</td>
                          <td className="px-4 py-2 border text-sm">Utility-first CSS for responsive design</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border text-sm font-medium bg-muted/20">UI Components</td>
                          <td className="px-4 py-2 border text-sm">shadcn/ui</td>
                          <td className="px-4 py-2 border text-sm">Accessible component library with Radix UI primitives</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border text-sm font-medium bg-muted/20">Type Safety</td>
                          <td className="px-4 py-2 border text-sm">TypeScript</td>
                          <td className="px-4 py-2 border text-sm">Static type checking and improved developer experience</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border text-sm font-medium bg-muted/20">Export Utilities</td>
                          <td className="px-4 py-2 border text-sm">html2canvas, jsPDF</td>
                          <td className="px-4 py-2 border text-sm">HTML to PDF conversion for resume exports</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border text-sm font-medium bg-muted/20">Storage</td>
                          <td className="px-4 py-2 border text-sm">Local Storage</td>
                          <td className="px-4 py-2 border text-sm">Persistent data storage for resume drafts</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technology Choices Section */}
          <TabsContent value="choices" className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <CardTitle>Technology Choices</CardTitle>
                </div>
                <CardDescription>
                  Rationale behind our technology stack and architectural decisions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Core Framework Decisions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg border p-4 bg-muted/10">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">React</h4>
                        <div className="bg-primary/10 p-1.5 rounded">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-sm mt-2 mb-3">
                        React was chosen as our primary framework for several compelling reasons:
                      </p>
                      <ul className="space-y-2 ml-6 list-disc text-sm">
                        <li><span className="font-medium">Component architecture</span> - Perfect for breaking down the complex UI of resume sections</li>
                        <li><span className="font-medium">Virtual DOM</span> - Provides optimal rendering performance for real-time preview</li>
                        <li><span className="font-medium">Mature ecosystem</span> - Wide range of libraries for form handling and PDF generation</li>
                        <li><span className="font-medium">Developer experience</span> - Large community and extensive documentation</li>
                      </ul>
                      <div className="mt-4 p-3 bg-background border rounded">
                        <p className="text-sm">
                          <span className="font-medium">Alternative considered:</span> Vue.js offered similar capabilities, but React's more extensive
                          ecosystem for document generation and form handling made it the superior choice for this application.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4 bg-muted/10">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">TypeScript</h4>
                        <div className="bg-primary/10 p-1.5 rounded">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-sm mt-2 mb-3">
                        TypeScript provides crucial benefits for a complex form-based application:
                      </p>
                      <ul className="space-y-2 ml-6 list-disc text-sm">
                        <li><span className="font-medium">Type safety</span> - Ensures resume data structure consistency across components</li>
                        <li><span className="font-medium">Developer tooling</span> - Enhanced IDE support with autocompletion and error detection</li>
                        <li><span className="font-medium">Clearer interfaces</span> - Self-documenting code with explicit props and state types</li>
                        <li><span className="font-medium">Refactoring confidence</span> - Type checking catches potential errors during refactors</li>
                      </ul>
                      <div className="mt-4 p-3 bg-background border rounded">
                        <p className="text-sm">
                          <span className="font-medium">Implementation insight:</span> Our resume data schema is fully typed, preventing inconsistencies
                          in data structures that could cause rendering errors in templates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">UI and Styling Decisions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg border p-4 bg-muted/10">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Tailwind CSS</h4>
                        <div className="bg-primary/10 p-1.5 rounded">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-sm mt-2 mb-3">
                        Tailwind CSS was selected for several key advantages:
                      </p>
                      <ul className="space-y-2 ml-6 list-disc text-sm">
                        <li><span className="font-medium">Utility-first approach</span> - Provides flexibility for complex template styling</li>
                        <li><span className="font-medium">Design consistency</span> - Enforces a consistent design system through utility classes</li>
                        <li><span className="font-medium">Performance</span> - Generates minimal CSS, optimizing page load times</li>
                        <li><span className="font-medium">Responsive design</span> - Built-in responsive utilities for mobile-friendly interface</li>
                      </ul>
                      <div className="mt-4 p-3 bg-background border rounded">
                        <p className="text-sm">
                          <span className="font-medium">Alternative considered:</span> CSS-in-JS libraries like Styled Components offered component 
                          styling, but Tailwind's performance benefits and rapid development capabilities were preferred.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4 bg-muted/10">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">shadcn/ui Components</h4>
                        <div className="bg-primary/10 p-1.5 rounded">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-sm mt-2 mb-3">
                        shadcn/ui was chosen to provide high-quality UI components:
                      </p>
                      <ul className="space-y-2 ml-6 list-disc text-sm">
                        <li><span className="font-medium">Accessibility</span> - Built on Radix UI primitives for robust accessibility support</li>
                        <li><span className="font-medium">Customizability</span> - Direct access to component source code for tailored modifications</li>
                        <li><span className="font-medium">Tailwind integration</span> - Seamless combination with our utility-first CSS approach</li>
                        <li><span className="font-medium">Modern design</span> - Contemporary, clean aesthetic aligned with application goals</li>
                      </ul>
                      <div className="mt-4 p-3 bg-background border rounded">
                        <p className="text-sm">
                          <span className="font-medium">Implementation insight:</span> Components like Tabs, Accordion, and Cards provide consistent 
                          interaction patterns while maintaining design flexibility across the application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Export and Document Generation</h3>
                  <div className="rounded-lg border p-4 bg-muted/10">
                    <h4 className="font-medium mb-3">PDF Generation Approach</h4>
                    <p className="text-sm mb-4">
                      For exporting resumes to PDF format, we considered several approaches before selecting our current implementation:
                    </p>

                    <div className="space-y-4">
                      <div className="p-3 border rounded bg-background">
                        <h5 className="text-sm font-medium mb-1">HTML-to-PDF Conversion (Selected)</h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          Uses html2canvas to capture the rendered template and jsPDF to create the document.
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <CheckSquare className="h-3 w-3 text-primary" />
                            <p className="text-xs">Maintains exact visual fidelity with preview</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckSquare className="h-3 w-3 text-primary" />
                            <p className="text-xs">Client-side processing without server dependencies</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckSquare className="h-3 w-3 text-primary" />
                            <p className="text-xs">Supports all visual elements including custom fonts and graphics</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border rounded bg-muted/30">
                        <h5 className="text-sm font-medium mb-1">Server-side Rendering (Considered)</h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          Would use a Node.js server with Puppeteer or similar headless browser technology.
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <CheckSquare className="h-3 w-3 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Higher quality rendering but requires server infrastructure</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckSquare className="h-3 w-3 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">More processing power for complex documents</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckSquare className="h-3 w-3 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Better for high-volume usage</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border rounded bg-muted/30">
                        <h5 className="text-sm font-medium mb-1">Template-Based Generation (Considered)</h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          Would use predefined PDF templates with data insertion points.
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <CheckSquare className="h-3 w-3 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Fastest performance but limited design flexibility</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckSquare className="h-3 w-3 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Consistent output quality across all browsers</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckSquare className="h-3 w-3 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Less processing overhead</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded">
                      <p className="text-sm">
                        <span className="font-medium">Decision rationale:</span> The HTML-to-PDF approach was selected to prioritize visual consistency
                        between preview and final document, while maintaining a serverless architecture that works entirely in the browser.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">State Management Considerations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">React Context (Selected)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        We chose React Context API combined with the useReducer hook for our application's state management.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Right-sized solution</p>
                            <p className="text-xs text-muted-foreground">Provides the necessary state sharing without external dependencies</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">TypeScript integration</p>
                            <p className="text-xs text-muted-foreground">Strong typing for actions and state with built-in React features</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Reduced bundle size</p>
                            <p className="text-xs text-muted-foreground">No additional state management libraries required</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4 bg-muted/30">
                      <h4 className="font-medium mb-2">Redux (Considered)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        We evaluated Redux as an alternative state management solution.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">More structured state management</p>
                            <p className="text-xs text-muted-foreground">Provides strict patterns for state updates</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Better for larger applications</p>
                            <p className="text-xs text-muted-foreground">More suitable for complex state with many components</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Developer tools</p>
                            <p className="text-xs text-muted-foreground">Excellent debugging capabilities with Redux DevTools</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-background border text-xs rounded">
                        Ultimately not selected due to additional complexity and bundle size concerns for our specific use case.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documentation;
