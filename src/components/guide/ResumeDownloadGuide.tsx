
import React from 'react';
import { Printer, Download, Lock, FileText, Image, File, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeDownloadGuide = () => {
  return (
    <div className="p-6 border rounded-xl bg-white/90 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Download className="h-6 w-6 text-resume-purple" />
        Resume Export Guide
      </h2>
      
      <p className="text-gray-700 mb-6">
        Nowhile offers multiple export options to ensure your resume is ready for any application format:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 border rounded-lg bg-blue-50 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold text-blue-800">PDF Format</h3>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            Professional, universal format that preserves formatting across all devices. Best for job applications.
          </p>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mt-auto">
            <li>ATS-friendly document</li>
            <li>Maintains precise formatting</li>
            <li>Industry standard for job applications</li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg bg-green-50 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Image className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-green-800">PNG Format</h3>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            High-quality image with transparency. Ideal for portfolio websites and social media profiles.
          </p>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mt-auto">
            <li>Perfect for online portfolios</li>
            <li>Maintains visual quality</li>
            <li>Good for web display</li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg bg-purple-50 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Camera className="h-5 w-5 text-purple-600" />
            <h3 className="font-semibold text-purple-800">JPG Format</h3>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            Smaller file size with good quality. Best for email attachments when file size matters.
          </p>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mt-auto">
            <li>Optimized file size</li>
            <li>Compatible with all devices</li>
            <li>Ideal for email sharing</li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg bg-gray-50 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <File className="h-5 w-5 text-gray-600" />
            <h3 className="font-semibold text-gray-800">DOCX Format (Coming Soon)</h3>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            Editable Microsoft Word format. Allows recruiters to make notes or adjustments if needed.
          </p>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mt-auto">
            <li>Editable by recruiters</li>
            <li>Compatible with MS Office</li>
            <li>Format may vary slightly across devices</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
        <div className="flex items-start gap-2">
          <Lock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-800 mb-1">Privacy Guarantee</h4>
            <p className="text-sm text-gray-700">
              All resume processing happens locally in your browser. Your data never leaves your device during export.
              Learn more in our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <Printer className="h-5 w-5 text-resume-purple" />
          <span className="text-sm">Need more help? Check our <Link to="/guide" className="text-blue-600 hover:underline">User Guide</Link></span>
        </div>
        
        <Link 
          to="/tech-stack"
          className="px-4 py-2 bg-resume-purple text-white rounded-lg hover:bg-resume-dark-purple transition-colors text-sm font-medium"
        >
          Learn About Our Technology
        </Link>
      </div>
    </div>
  );
};

export default ResumeDownloadGuide;
