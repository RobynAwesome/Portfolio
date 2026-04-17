import { GraduationCap, Layers, Globe, Code2, Server, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CVRole {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export const CV_ROLES: CVRole[] = [
  {
    id: "computer-eng-student",
    label: "Computer Engineering Student",
    description: "Engineering fundamentals, systems thinking, and technical depth",
    icon: GraduationCap,
  },
  {
    id: "fullstack-developer",
    label: "Full-Stack Engineer",
    description: "Product delivery across frontend, backend, auth, and deployment",
    icon: Layers,
  },
  {
    id: "web-developer",
    label: "Product Web Developer",
    description: "Modern web products with strong UX and operational thinking",
    icon: Globe,
  },
  {
    id: "frontend-developer",
    label: "Frontend Engineer",
    description: "React, TypeScript, animation, and resilient UI systems",
    icon: Monitor,
  },
  {
    id: "software-developer",
    label: "Software Engineer",
    description: "Scalable software, clean architecture, and production habits",
    icon: Code2,
  },
  {
    id: "frontend-backend-developer",
    label: "Frontend + Backend Engineer",
    description: "End-to-end delivery across UI, APIs, and supporting systems",
    icon: Server,
  },
];

export interface RecruiterInfo {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  downloadedRole: string;
  downloadedFormat: "pdf" | "docx";
  timestamp: string;
}
