
import * as React from "react"
import { cn } from "@/lib/utils"

// Timeline container
const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-4", className)}
    {...props}
  />
))
Timeline.displayName = "Timeline"

// Timeline item
const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative pl-8", className)}
    {...props}
  />
))
TimelineItem.displayName = "TimelineItem"

// Timeline connector (vertical line)
const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute left-2.5 top-10 h-full w-px bg-border",
      className
    )}
    {...props}
  />
))
TimelineConnector.displayName = "TimelineConnector"

// Timeline header containing icon and title
const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 mb-2", className)}
    {...props}
  />
))
TimelineHeader.displayName = "TimelineHeader"

// Timeline icon container
const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute left-0 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-2 ring-border",
      className
    )}
    {...props}
  />
))
TimelineIcon.displayName = "TimelineIcon"

// Timeline title
const TimelineTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold text-md text-foreground", className)}
    {...props}
  />
))
TimelineTitle.displayName = "TimelineTitle"

// Timeline body content
const TimelineBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
TimelineBody.displayName = "TimelineBody"

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineTitle,
  TimelineBody,
}
