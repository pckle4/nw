
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Nowhile Resume Builder work?",
    answer: "Nowhile Resume Builder allows you to create professional resumes in minutes. Simply choose a template, fill in your information through our guided form, and download your customized resume in your preferred format."
  },
  {
    question: "Is Nowhile Resume Builder free to use?",
    answer: "Yes, our basic resume builder is free to use. We also offer premium features for users who want additional templates, export options, and advanced customization."
  },
  {
    question: "What formats can I download my resume in?",
    answer: "You can download your resume in multiple formats including PDF, PNG, JPG, and DOCX. This allows you to use your resume for different submission requirements or platforms."
  },
  {
    question: "Are the resumes created with Nowhile ATS-friendly?",
    answer: "Yes, all our resume templates are designed to be ATS (Applicant Tracking System) friendly, ensuring that your resume can be properly parsed by automated screening systems used by employers."
  },
  {
    question: "Can I create multiple resumes?",
    answer: "Absolutely! You can create multiple resumes for different job applications or career paths. This allows you to tailor your resume to specific job requirements."
  },
  {
    question: "How do I customize my resume template?",
    answer: "Our builder walks you through each section of your resume, allowing you to input your information. You can also customize colors, fonts, and layouts depending on the template you choose."
  },
  {
    question: "What if I need help creating my resume?",
    answer: "We offer various resources including resume writing tips, examples, and customer support to help you create an effective resume. You can also find guides in our Resources section."
  },
  {
    question: "Can I update my resume after creating it?",
    answer: "Yes, you can update your resume at any time. Simply log in to your account, make your changes, and download the updated version."
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our resume builder and how it can help you create a standout resume.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 overflow-hidden bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="bg-resume-light-purple/30 rounded-xl p-6 mt-12">
            <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-4">
              If you couldn't find the answer to your question, feel free to contact our support team.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-resume-purple font-medium hover:text-resume-dark-purple transition-colors"
            >
              Contact Support
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
