
import React from "react";
import { Lightbulb } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface FieldAiTipProps {
  tip: string;
}

const FieldAiTip: React.FC<FieldAiTipProps> = ({ tip }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <span tabIndex={0} className="ml-1 cursor-pointer text-yellow-500 inline-flex align-middle hover:animate-pulse focus:outline-none">
        <Lightbulb className="h-4 w-4" />
      </span>
    </TooltipTrigger>
    <TooltipContent className="bg-white max-w-xs z-50 border shadow-lg p-4 rounded-xl">
      <span className="text-sm text-gray-700">{tip}</span>
    </TooltipContent>
  </Tooltip>
);

export default FieldAiTip;
