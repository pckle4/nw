
import html2canvas from 'html2canvas';

export const captureCanvas = async (resumeRef: React.RefObject<HTMLDivElement>) => {
  if (!resumeRef.current) return null;
  
  try {
    // Higher quality settings for better output
    const canvas = await html2canvas(resumeRef.current, {
      scale: 4, // Increased from 2 to 4 for higher quality
      logging: false,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      imageTimeout: 0,
      
      // Remove the problematic fontDisplay property
      // Use onclone to handle font styling correctly
      onclone: (document, element) => {
        // Apply font smoothing to the cloned element
        const styleElement = document.createElement('style');
        styleElement.innerHTML = `
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-smooth: always;
          }
        `;
        document.head.appendChild(styleElement);
        
        // Process all elements to ensure proper font rendering
        const allElements = element.querySelectorAll('*');
        allElements.forEach(el => {
          if (el instanceof HTMLElement) {
            // Force text rendering to be crisp
            el.style.textRendering = 'optimizeLegibility';
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
