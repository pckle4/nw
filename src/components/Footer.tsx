
import React from 'react';
import { FileText, Github, Twitter, Linkedin, Mail, Heart, Clock } from 'lucide-react';
import { useRealTime } from '@/hooks/use-real-time';

const Footer = () => {
  const { formattedDate, formattedTime } = useRealTime();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-resume-purple" />
              <span className="text-xl font-bold font-typewriter">Nowhile</span>
            </div>
            <p className="text-gray-400 max-w-md font-typewriter">
              Create professional, eye-catching resumes in minutes with our easy-to-use resume builder.
              Choose from multiple templates and customize to your needs.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 font-typewriter text-sm text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-resume-purple" />
                <span>{formattedDate}</span>
              </div>
              <span className="hidden sm:block mx-2">|</span>
              <div>{formattedTime}</div>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-resume-purple font-typewriter">Resources</h3>
              <ul className="space-y-2 font-typewriter">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-resume-purple font-typewriter">Company</h3>
              <ul className="space-y-2 font-typewriter">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm flex flex-col sm:flex-row justify-between items-center">
          <div className="font-typewriter">&copy; {new Date().getFullYear()} Nowhile. All rights reserved.</div>
          <div className="mt-2 sm:mt-0 flex items-center font-typewriter">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" fill="currentColor" /> by <span className="ml-1">Ansh</span> | <a href="https://nowhile.com" className="hover:text-white ml-1">Nowhile.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
