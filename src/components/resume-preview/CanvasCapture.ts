
import html2canvas from 'html2canvas';

export const captureCanvas = async (resumeRef: React.RefObject<HTMLDivElement>) => {
  if (!resumeRef.current) return null;
  
  try {
    // Apply any custom fonts to ensure they're included in the capture
    const applyFontsForCapture = () => {
      const element = resumeRef.current;
      if (!element) return;
      
      // Add font-display: swap to ensure fonts render correctly
      const styleSheet = document.createElement('style');
      styleSheet.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');
        
        .resume-font {
          font-family: 'Courier Prime', monospace;
          font-display: swap;
        }
      `;
      document.head.appendChild(styleSheet);
      
      // Mark the element for font capture
      element.classList.add('resume-font');
      
      return () => {
        document.head.removeChild(styleSheet);
        element.classList.remove('resume-font');
      };
    };
    
    // Apply fonts before capture
    const cleanupFonts = applyFontsForCapture();
    
    // Higher quality settings for better output
    const canvas = await html2canvas(resumeRef.current, {
      scale: 4, // Higher scale for better resolution
      logging: false,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      imageTimeout: 0,
      fontDisplay: 'swap',
      onclone: (document, element) => {
        // Ensure styles are preserved in the cloned document
        const clonedElement = element as HTMLElement;
        clonedElement.style.width = '800px'; // Fixed width for consistency
        clonedElement.style.height = 'auto';
        
        // Apply any additional styles needed for professional appearance
        const allElements = clonedElement.querySelectorAll('*');
        allElements.forEach(el => {
          const element = el as HTMLElement;
          // Ensure font rendering is crisp
          element.style.textRendering = 'optimizeLegibility';
          element.style.fontSmooth = 'always';
          element.style.webkitFontSmoothing = 'antialiased';
          element.style.mozOsxFontSmoothing = 'grayscale';
        });
      }
    });
    
    // Clean up fonts after capture
    if (cleanupFonts) cleanupFonts();
    
    return canvas;
  } catch (error) {
    console.error('Error capturing canvas:', error);
    return null;
  }
};
