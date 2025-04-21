
import React, { useState, useEffect } from 'react';
import { FileText, Github, Twitter, Linkedin, Mail, Heart, Clock, Calendar, Copyright } from 'lucide-react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formatDate = (date) => date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <footer className="bg-black text-white py-10 relative overflow-hidden border-t-4 border-resume-purple">
      {/* Animated SVG Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="footerPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="16" fill="#22223B" />
              <rect x="0" y="0" width="40" height="40" fill="none" stroke="#9b87f5" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerPattern)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-resume-purple" />
              <span className="text-xl font-bold">Nowhile</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Create professional, modern resumes with our one-click builder and vibrant templates.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-4 border-t border-gray-800 text-gray-400 text-sm">
          <div className="flex items-center px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm">
            <Clock className="h-4 w-4 mr-2" />
            <span className="font-mono">{formatTime(currentTime)}</span>
          </div>
          <div className="flex items-center px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm">
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
