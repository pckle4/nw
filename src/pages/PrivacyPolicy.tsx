
import React from 'react';
import { Shield, Lock, FileText, Globe, Server, BookOpen, Database, Code2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-10 w-10 text-resume-purple animate-pulse" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead font-medium text-gray-700">
              Last Updated: April 22, 2025
            </p>
            
            <div className="my-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-blue-800 font-medium flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Your privacy is paramount to us. This document explains how we handle your data with care and respect.
              </p>
            </div>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <FileText className="h-6 w-6" /> 
              Introduction
            </h2>
            <p>
              Welcome to Nowhile's Privacy Policy. At Nowhile, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              Our resume builder is designed with privacy as a fundamental principle. We process your data locally in your browser whenever possible, minimizing data transmission and storage.
            </p>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <Globe className="h-6 w-6" />
              Information We Collect
            </h2>
            <p>When you use Nowhile's resume builder, we collect the following types of information:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Server className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <strong>Resume Content:</strong> Information you enter into the resume builder, including personal details, education, work experience, skills, and projects. This data is primarily stored locally in your browser.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <strong>Usage Information:</strong> Basic information about how you use our service, such as which templates you view and features you use. This helps us improve our service.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Database className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.
                </div>
              </li>
            </ul>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <Code2 className="h-6 w-6" />
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="space-y-2">
              <li>Provide and maintain our resume building service</li>
              <li>Improve and personalize your experience</li>
              <li>Develop new features and functionality</li>
              <li>Communicate with you about service updates</li>
              <li>Ensure the security and integrity of our platform</li>
            </ul>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <Lock className="h-6 w-6" />
              Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="space-y-2">
              <li>Resume data is primarily processed and stored locally in your browser</li>
              <li>Any data transmitted to our servers uses encryption in transit</li>
              <li>We implement industry-standard security practices and regularly review our security measures</li>
              <li>We do not sell or rent your personal information to third parties</li>
            </ul>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              Your Rights
            </h2>
            <p>
              Under data protection laws, you have rights including:
            </p>
            <ul className="space-y-2">
              <li><strong>Access:</strong> You can request copies of your personal information.</li>
              <li><strong>Rectification:</strong> You can ask us to correct inaccurate information.</li>
              <li><strong>Erasure:</strong> You can ask us to delete your personal information in certain circumstances.</li>
              <li><strong>Restriction:</strong> You can ask us to restrict the processing of your information.</li>
              <li><strong>Data Portability:</strong> You can ask us to transfer your information to another organization or directly to you.</li>
            </ul>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: privacy@nowhile.app</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
