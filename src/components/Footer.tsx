import React, { useState, useEffect } from 'react';
import { FileText, Github, Twitter, Linkedin, Mail, Heart, Clock, Calendar, Copyright } from 'lucide-react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format the current time with seconds
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  
  // Format the current date
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <footer className="bg-gray-900 text-white py-10 relative overflow-hidden">
      {/* Add subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-resume-purple" />
              <span className="text-xl font-bold">Nowhile</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Create professional, eye-catching resumes in minutes with our easy-to-use resume builder.
              Choose from multiple templates and customize to your needs.
            </p>
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
              <h3 className="font-bold text-lg mb-3 text-resume-purple">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-resume-purple">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Date and time display with updated styling */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-4 border-t border-gray-800 text-gray-400 text-sm">
          <div className="flex items-center px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm">
            <Clock className="h-4 w-4 mr-2" />
            <span className="font-mono">{formatTime(currentTime)}</span>
          </div>
          <div className="flex items-center px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(currentTime)}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-4 pt-6 text-center text-gray-500 text-sm flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center">
            <Copyright className="h-4 w-4 mr-1" />
            <span>{new Date().getFullYear()} Nowhile. All rights reserved. Not for commercial use.</span>
          </div>
          <div className="mt-2 sm:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" fill="currentColor" /> by Ansh | <a href="https://nowhile.com" className="hover:text-white ml-1">Nowhile.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
