
import React, { useEffect, useState } from 'react';
import { FileText, Sparkles, CheckCircle2 } from 'lucide-react';

const PreloadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingTexts, setLoadingTexts] = useState(0);

  const loadingMessages = [
    "Loading your resume experience...",
    "Preparing templates...",
    "Setting up the editor...",
    "Almost there...",
  ];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    // Cycle through loading texts
    const textInterval = setInterval(() => {
      setLoadingTexts(prev => (prev + 1) % loadingMessages.length);
    }, 1500);

    // When progress reaches 100, start fade out
    if (progress >= 100) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
      clearInterval(interval);
      clearInterval(textInterval);
    }

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative mb-6">
        <div className="animate-bounce">
          <FileText className="h-12 w-12 text-resume-purple" />
        </div>
        <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-6">Nowhile</h1>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-resume-purple transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="h-6 mt-3">
        <p className="text-gray-400">{loadingMessages[loadingTexts]}</p>
      </div>
      
      <div className="mt-8 flex flex-col items-center text-xs text-gray-500">
        <div className="flex items-center gap-1 mb-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          <span>Loading templates</span>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          <span>Preparing components</span>
        </div>
        <div className="flex items-center gap-1">
          {progress > 70 ? (
            <CheckCircle2 className="h-3 w-3 text-green-500" />
          ) : (
            <div className="h-3 w-3 rounded-full bg-gray-700 animate-pulse" />
          )}
          <span>Optimizing experience</span>
        </div>
      </div>
    </div>
  );
};

export default PreloadingScreen;
