
import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, HelpCircle, Gavel, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-10 w-10 text-resume-purple animate-pulse" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Terms of Service</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead font-medium text-gray-700">
              Last Updated: April 22, 2025
            </p>
            
            <div className="my-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
              <p className="text-amber-800 font-medium flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Please read these terms carefully before using Nowhile's services.
              </p>
            </div>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <BookOpen className="h-6 w-6" /> 
              Introduction
            </h2>
            <p>
              Welcome to Nowhile. By accessing or using our website, resume builder, and related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Nowhile regarding your use of the Services. Please read them carefully.
            </p>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <CheckCircle className="h-6 w-6" />
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using our Services, you affirm that:
            </p>
            <ul className="space-y-2">
              <li>You are at least 18 years old or have the consent of a legal guardian</li>
              <li>You have the right, authority, and capacity to agree to these Terms</li>
              <li>You will use the Services in accordance with these Terms</li>
            </ul>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <Scale className="h-6 w-6" />
              Use of Services
            </h2>
            <p>
              Nowhile provides a platform for creating, editing, and downloading professional resumes and CVs. Our Services are subject to the following conditions:
            </p>
            <ul className="space-y-2">
              <li>You may use our Services for personal or professional purposes</li>
              <li>You may not use our Services for any illegal or unauthorized purpose</li>
              <li>You may not interfere with or disrupt the Services or servers</li>
              <li>You may not attempt to gain unauthorized access to any part of the Services</li>
              <li>You are responsible for all content you create using our Services</li>
            </ul>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <HelpCircle className="h-6 w-6" />
              Intellectual Property
            </h2>
            <p>
              Nowhile's Services, including all content, features, and functionality, are owned by Nowhile and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <ul className="space-y-2">
              <li>You retain all rights to the content you create using our Services</li>
              <li>Nowhile retains all rights to our templates, designs, and platform features</li>
              <li>You may not copy, modify, distribute, or reverse engineer our Services without permission</li>
              <li>You may use our templates to create resumes for personal or professional use</li>
            </ul>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <Shield className="h-6 w-6" />
              Privacy and Data
            </h2>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information when you use our Services. By using Nowhile, you consent to the practices described in our Privacy Policy.
            </p>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <AlertTriangle className="h-6 w-6" />
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Nowhile shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Services.
            </p>
            <p>
              We do not guarantee that our Services will be error-free, uninterrupted, or that defects will be corrected. You use our Services at your own risk.
            </p>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              <Gavel className="h-6 w-6" />
              Changes to Terms
            </h2>
            <p>
              We may modify these Terms at any time. We will notify you of significant changes by posting an update on our website. Your continued use of the Services after such modifications constitutes your acceptance of the revised Terms.
            </p>
            
            <h2 className="flex items-center gap-2 text-resume-purple">
              Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: terms@nowhile.app</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
