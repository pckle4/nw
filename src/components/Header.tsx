import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, Home, Info, Menu, X, HelpCircle, Mail, Cpu, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { toast } = useToast();
  const sampleResumeData = {
    personalInfo: {
      fullName: "John Smith",
      jobTitle: "Senior Software Engineer",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johnsmith",
      summary: "Experienced software engineer with 8+ years of expertise in full-stack development, cloud architecture, and team leadership."
    }
  };

  const handleDownloadSampleResume = () => {
    toast({
      title: "Sample Resume Downloaded!",
      description: "Check out this perfectly filled resume example.",
    });
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm'} border-b border-slate-200`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative transition-transform duration-300 group-hover:scale-110">
              <FileText className="h-6 w-6 text-resume-purple transition-colors group-hover:text-resume-dark-purple" />
              <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500 group-hover:from-resume-dark-purple group-hover:to-blue-600">
              Nowhile
            </span>
          </Link>
        </div>
        
        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleDownloadSampleResume}
                className="animate-fade-in hidden sm:flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Sample Resume
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background shadow-lg border-b border-slate-200 p-4 animate-slide-in-right md:hidden">
                <div className="flex flex-col space-y-3">
                  <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                  <Link to="/guide" className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md">
                    <HelpCircle className="h-4 w-4" />
                    <span>Guide Me</span>
                  </Link>
                  <Link to="/contact" className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md">
                    <Mail className="h-4 w-4" />
                    <span>Contact</span>
                  </Link>
                  <Link to="/tech-stack" className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md">
                    <Cpu className="h-4 w-4" />
                    <span>Tech Stack</span>
                  </Link>
                  <a href="#about" className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md">
                    <Info className="h-4 w-4" />
                    <span>About</span>
                  </a>
                  <a href="#faq" className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md">
                    <HelpCircle className="h-4 w-4" />
                    <span>FAQs</span>
                  </a>
                </div>
              </div>
            )}
          </>
        ) : (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleDownloadSampleResume}
                className="animate-fade-in flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Download className="h-4 w-4" />
                Sample Resume
              </Button>
              
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <FileText className="h-4 w-4 mr-2" />
                  Templates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-resume-purple/20 to-resume-purple/20 p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium">Choose Your Style</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Select from our professionally designed templates to make your resume stand out.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {["Modern", "Minimal", "Colorful"].map((template) => (
                      <li key={template}>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{template}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Professional {template.toLowerCase()} resume template
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/guide" className={navigationMenuTriggerStyle()}>
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Guide Me
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle()}>
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/tech-stack" className={navigationMenuTriggerStyle()}>
                  <Cpu className="h-4 w-4 mr-2" />
                  Tech Stack
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#about" className={navigationMenuTriggerStyle()}>
                  <Info className="h-4 w-4 mr-2" />
                  About
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </header>
  );
};

export default Header;
