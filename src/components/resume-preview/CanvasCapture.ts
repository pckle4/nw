
import html2canvas from 'html2canvas';

export const captureCanvas = async (resumeRef: React.RefObject<HTMLDivElement>) => {
  if (!resumeRef.current) return null;
  
  try {
    // Significantly increased quality settings for better output
    const canvas = await html2canvas(resumeRef.current, {
      scale: 5, // Increased from 4 to 5 for even higher quality
      logging: false,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      imageTimeout: 0,
      
      // Enhanced rendering quality options
      onclone: (document, element) => {
        // Apply font smoothing to the cloned element
        const styleElement = document.createElement('style');
        styleElement.innerHTML = `
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-smooth: always;
            text-rendering: geometricPrecision;
            shape-rendering: geometricPrecision;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        `;
        document.head.appendChild(styleElement);
        
        // Process all elements to ensure proper font rendering
        const allElements = element.querySelectorAll('*');
        allElements.forEach(el => {
          if (el instanceof HTMLElement) {
            // Force text rendering to be crisp
            el.style.textRendering = 'optimizeLegibility';
            // Improve text clarity
            el.style.fontVariantLigatures = 'common-ligatures';
            // Add slight contrast
            el.style.fontWeight = getComputedStyle(el).fontWeight;
          }
        });
        
        return element;
      }
    });
    
    return canvas;
  } catch (error) {
    console.error('Error capturing canvas:', error);
    return null;
  }
};
