
import React from 'react';
import { Award, Clock, FileCheck, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Nowhile</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're on a mission to help job seekers create professional resumes that stand out from the crowd.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-resume-light-purple/50 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-resume-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Save Time</h3>
                  <p className="text-gray-600">
                    Create a professional resume in minutes instead of hours with our intuitive builder.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-resume-light-purple/50 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-resume-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Templates</h3>
                  <p className="text-gray-600">
                    Choose from multiple professionally designed templates that will make your resume stand out.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-resume-light-purple/50 p-2 rounded-lg">
                  <FileCheck className="h-5 w-5 text-resume-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">ATS-Friendly</h3>
                  <p className="text-gray-600">
                    Our resumes are designed to pass Applicant Tracking Systems, increasing your chances of getting an interview.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-resume-light-purple/50 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-resume-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">10,000+ Success Stories</h3>
                  <p className="text-gray-600">
                    Join thousands of satisfied users who have successfully landed their dream jobs with our resume builder.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-resume-purple rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team working on resumes" 
                className="rounded-xl shadow-lg relative z-10 w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-resume-purple">10k+</div>
            <div className="text-gray-600 mt-2">Resumes Created</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-resume-purple">15+</div>
            <div className="text-gray-600 mt-2">Templates</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-resume-purple">98%</div>
            <div className="text-gray-600 mt-2">Satisfaction Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-resume-purple">24/7</div>
            <div className="text-gray-600 mt-2">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
