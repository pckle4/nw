
import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, Home, Info, Menu, X, HelpCircle, Mail, Cpu, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const mobileNavLinks = [
  { to: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { to: '/guide', label: 'Guide Me', icon: <HelpCircle className="h-5 w-5" /> },
  { to: '/documentation', label: 'Documentation', icon: <BookOpen className="h-5 w-5" /> },
  { to: '/contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
  { to: '/tech-stack', label: 'Tech Stack', icon: <Cpu className="h-5 w-5" /> },
  { href: '#about', label: 'About', icon: <Info className="h-5 w-5" /> },
];

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background/80 backdrop-blur-sm'} border-b border-slate-200`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative transition-transform duration-300 group-hover:scale-110">
            <FileText className="h-6 w-6 text-resume-purple transition-colors group-hover:text-resume-dark-purple" />
            <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500 group-hover:from-resume-dark-purple group-hover:to-blue-600">
            Nowhile
          </span>
        </Link>
        {isMobile ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] bg-white p-0 border-r shadow-lg">
              <SheetHeader className="p-5 border-b space-y-0">
                <SheetTitle className="font-bold flex items-center gap-2 text-resume-purple">
                  <FileText className="h-5 w-5" />
                  <span>Nowhile</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="py-4">
                <ul className="space-y-1 px-2">
                  {mobileNavLinks.map((item, i) => 
                    item.to ? (
                      <li key={i}>
                        <Link 
                          to={item.to} 
                          className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-slate-100 font-medium text-gray-800 transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ) : (
                      <li key={i}>
                        <a 
                          href={item.href} 
                          className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-slate-100 font-medium text-gray-800 transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-2">
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
                <Link to="/documentation" className={navigationMenuTriggerStyle()}>
                  <BookOpen className="h-4 w-4 mr-2" />
                  Documentation
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/tech-stack" className={navigationMenuTriggerStyle()}>
                  <Cpu className="h-4 w-4 mr-2" />
                  Tech Stack
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle()}>
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
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
