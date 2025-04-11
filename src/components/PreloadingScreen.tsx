
import React, { useEffect, useState } from 'react';
import { FileText, Sparkles } from 'lucide-react';

const PreloadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    // When progress reaches 100, start fade out
    if (progress >= 100) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative mb-6 animate-bounce">
        <FileText className="h-16 w-16 text-resume-purple" />
        <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-6">Nowhile</h1>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-resume-purple transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-gray-400 mt-3">Loading your resume experience...</p>
    </div>
  );
};

export default PreloadingScreen;
