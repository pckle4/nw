
import React, { useState } from 'react';
import { 
  Blocks, Download, FileCode, Github, Server, 
  Database, Palette, Laptop, Sparkles, Layers, 
  Braces, Workflow, Code2, Paintbrush
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

const TechStack = () => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const frontendTechs = [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces with component-based architecture.",
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      color: "blue",
      url: "https://reactjs.org/"
    },
    {
      name: "TypeScript",
      description: "A strongly typed programming language that builds on JavaScript, giving better tooling at any scale.",
      icon: <Braces className="h-6 w-6 text-blue-700" />,
      color: "blue",
      url: "https://www.typescriptlang.org/"
    },
    {
      name: "Tailwind CSS",
      description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center that can be composed to build any design.",
      icon: <Paintbrush className="h-6 w-6 text-sky-500" />,
      color: "sky",
      url: "https://tailwindcss.com/"
    },
    {
      name: "Shadcn UI",
      description: "Beautiful, accessible UI components built with Radix UI and Tailwind CSS.",
      icon: <Palette className="h-6 w-6 text-gray-800" />,
      color: "gray",
      url: "https://ui.shadcn.com/"
    },
    {
      name: "Lucide Icons",
      description: "Beautiful & consistent icon toolkit made by the community.",
      icon: <Sparkles className="h-6 w-6 text-purple-500" />,
      color: "purple",
      url: "https://lucide.dev/"
    }
  ];

  const buildTools = [
    {
      name: "Vite",
      description: "Next Generation Frontend Tooling that provides fast development and optimized builds.",
      icon: <Laptop className="h-6 w-6 text-purple-600" />,
      color: "purple",
      url: "https://vitejs.dev/"
    },
    {
      name: "React Router",
      description: "Declarative routing for React web applications.",
      icon: <Workflow className="h-6 w-6 text-red-500" />,
      color: "red",
      url: "https://reactrouter.com/"
    },
    {
      name: "Tanstack Query",
      description: "Powerful asynchronous state management for fetching, caching, and updating server state.",
      icon: <Server className="h-6 w-6 text-pink-500" />,
      color: "pink",
      url: "https://tanstack.com/query/latest"
    }
  ];

  const libraries = [
    {
      name: "html2canvas",
      description: "Screenshots with JavaScript, used for capturing resume previews.",
      icon: <FileCode className="h-6 w-6 text-yellow-500" />,
      color: "yellow",
      url: "https://html2canvas.hertzen.com/"
    },
    {
      name: "jsPDF",
      description: "Client-side JavaScript PDF generation, used for downloading resumes as PDF.",
      icon: <FileCode className="h-6 w-6 text-green-500" />,
      color: "green",
      url: "https://parall.ax/products/jspdf"
    },
    {
      name: "date-fns",
      description: "Modern JavaScript date utility library, used for date manipulation.",
      icon: <FileCode className="h-6 w-6 text-indigo-500" />,
      color: "indigo",
      url: "https://date-fns.org/"
    },
    {
      name: "Recharts",
      description: "A composable charting library built on React components.",
      icon: <Blocks className="h-6 w-6 text-blue-400" />,
      color: "blue",
      url: "https://recharts.org/"
    }
  ];

  const handleDownloadCode = async () => {
    try {
      setIsDownloading(true);
      toast({
        title: "Preparing download",
        description: "Getting your code ready. This might take a moment...",
      });

      // Create a new JSZip instance
      const zip = new JSZip();
      
      // In a real implementation, this would fetch all the code files
      // For now, we're just simulating with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Add files to the zip
      zip.file("README.md", "# Resume Builder Project\n\nThis is a resume builder application.");
      
      // Create directories and add files
      const srcFolder = zip.folder("src");
      srcFolder.file("index.tsx", "// Source code would be here");
      srcFolder.file("App.tsx", "// App component code");
      
      const componentsFolder = srcFolder.folder("components");
      componentsFolder.file("ResumeForm.tsx", "// ResumeForm component code");
      componentsFolder.file("ResumePreview.tsx", "// ResumePreview component code");
      
      // Generate the zip file
      const content = await zip.generateAsync({ type: "blob" });
      
      // Save the zip file
      FileSaver.saveAs(content, "resume-builder-source.zip");
      
      toast({
        title: "Download complete!",
        description: "Your code has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Download failed:", error);
      toast({
        title: "Download failed",
        description: "There was an error preparing your download. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const TechCard = ({ tech }) => (
    <a href={tech.url} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-resume-purple">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">{tech.name}</CardTitle>
          <div className="p-2 rounded-full bg-gray-100">
            {tech.icon}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm">{tech.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Badge variant="outline" className={`bg-${tech.color}-50 text-${tech.color}-600 border-${tech.color}-200`}>
            {tech.name}
          </Badge>
        </CardFooter>
      </Card>
    </a>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
            Our Technology Stack
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the powerful technologies that make our resume builder fast, responsive, and feature-rich.
            Our carefully selected tech stack ensures a smooth user experience and professional results.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <Button 
            onClick={handleDownloadCode} 
            disabled={isDownloading}
            className="bg-resume-purple hover:bg-resume-dark-purple flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            {isDownloading ? "Preparing..." : "Download Source Code"}
          </Button>
        </div>

        <div className="mb-12">
          <Tabs defaultValue="frontend">
            <div className="flex justify-center mb-6">
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger value="frontend" className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  <span>Frontend</span>
                </TabsTrigger>
                <TabsTrigger value="buildtools" className="flex items-center gap-2">
                  <Laptop className="h-4 w-4" />
                  <span>Build Tools</span>
                </TabsTrigger>
                <TabsTrigger value="libraries" className="flex items-center gap-2">
                  <FileCode className="h-4 w-4" />
                  <span>Libraries</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="frontend" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frontendTechs.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="buildtools" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {buildTools.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="libraries" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {libraries.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-resume-purple">How This Site Works</h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Blocks className="h-8 w-8 text-resume-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Component-Based Architecture</h3>
                <p className="text-gray-600">
                  Our resume builder is built using React's component-based architecture, allowing for modular, reusable UI elements that create a consistent user experience. Each part of your resume is a separate component that can be updated independently.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Sparkles className="h-8 w-8 text-resume-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Preview</h3>
                <p className="text-gray-600">
                  As you make changes to your resume content, our application renders a real-time preview using React's state management. This live feedback ensures you can see exactly how your resume will look while you're editing.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Download className="h-8 w-8 text-resume-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Export Functionality</h3>
                <p className="text-gray-600">
                  When you're ready to download your resume, we use HTML2Canvas to capture your design as an image. For PDF generation, we use jsPDF to create a professional document that preserves your formatting and design elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechStack;
