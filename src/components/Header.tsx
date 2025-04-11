
import React from 'react';
import { FileText, Download, Sparkles, Home, Info, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <FileText className="h-6 w-6 text-resume-purple" />
            <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1" />
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-resume-purple to-blue-500">
            ColorBurst Resume Builder
          </span>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                <Home className="h-4 w-4 mr-2" />
                Home
              </NavigationMenuLink>
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavigationMenuLink href="#about" className={navigationMenuTriggerStyle()}>
                      <Info className="h-4 w-4 mr-2" />
                      About
                    </NavigationMenuLink>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Learn more about our resume builder</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save your resume as PDF</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
};

export default Header;
