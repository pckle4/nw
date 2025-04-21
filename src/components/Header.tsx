
import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, Home, Info, Menu, X, HelpCircle, Mail, Cpu } from 'lucide-react';
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

const mobileNavLinks = [
  { to: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
  { to: '/guide', label: 'Guide Me', icon: <HelpCircle className="h-4 w-4" /> },
  { to: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
  { to: '/tech-stack', label: 'Tech Stack', icon: <Cpu className="h-4 w-4" /> },
  { href: '#about', label: 'About', icon: <Info className="h-4 w-4" /> },
];

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove sample resume logic

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
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {/* Mobile drawer menu */}
            <div
              className={`fixed top-0 left-0 w-full h-full bg-black/50 z-40 transition-opacity ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible'} md:hidden`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <nav
                className={`fixed left-0 top-0 h-full bg-white shadow-xl w-[85vw] max-w-xs p-6 animate-slide-in-right transition-transform
                  ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                onClick={e => e.stopPropagation()}
                role="menu"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-bold text-lg text-resume-purple tracking-wide flex items-center">
                    <FileText className="h-5 w-5 mr-1 text-resume-purple" /> Nowhile
                  </span>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <ul className="flex flex-col space-y-4">
                  {mobileNavLinks.map((item, i) =>
                    item.to ? (
                      <li key={i}>
                        <Link to={item.to} className="flex items-center gap-3 hover:scale-105 transition-transform font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                          {item.icon} {item.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={i}>
                        <a href={item.href} className="flex items-center gap-3 hover:scale-105 transition-transform font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                          {item.icon} {item.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </>
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
