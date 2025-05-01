
import React from "react";
import { Lightbulb } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface FieldAiTipProps {
  tip: string;
  variant?: "default" | "success" | "warning" | "info";
}

const FieldAiTip: React.FC<FieldAiTipProps> = ({ tip, variant = "default" }) => {
  const variantClasses = {
    default: "text-yellow-500",
    success: "text-green-500",
    warning: "text-orange-500",
    info: "text-blue-500",
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span 
          tabIndex={0} 
          className={`ml-1 cursor-pointer ${variantClasses[variant]} inline-flex align-middle hover:animate-pulse focus:outline-none transition-all duration-300 transform hover:scale-110`}
        >
          <Lightbulb className="h-4 w-4" />
        </span>
      </TooltipTrigger>
      <TooltipContent 
        className="bg-white max-w-xs z-50 border shadow-lg p-4 rounded-xl animate-fade-in" 
        sideOffset={5}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 mb-1">
            <Lightbulb className={`h-3.5 w-3.5 ${variantClasses[variant]}`} />
            <span className="text-xs font-semibold text-gray-700">Pro Tip</span>
          </div>
          <span className="text-sm text-gray-700">{tip}</span>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default FieldAiTip;
