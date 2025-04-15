
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
    });
    
    return canvas;
  } catch (error) {
    console.error('Error capturing canvas:', error);
    return null;
  }
};
