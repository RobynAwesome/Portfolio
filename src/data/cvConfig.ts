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
    label: "Computer Eng (Student)",
    description: "Engineering fundamentals & academic focus",
    icon: GraduationCap,
  },
  {
    id: "fullstack-developer",
    label: "Full-Stack Developer",
    description: "End-to-end MERN stack delivery",
    icon: Layers,
  },
  {
    id: "web-developer",
    label: "Web Developer",
    description: "Modern web apps & responsive UI",
    icon: Globe,
  },
  {
    id: "frontend-developer",
    label: "Frontend Developer",
    description: "React, UI/UX & modern frontend systems",
    icon: Monitor,
  },
  {
    id: "software-developer",
    label: "Software Developer",
    description: "Scalable software & clean architecture",
    icon: Code2,
  },
  {
    id: "frontend-backend-developer",
    label: "Front & Backend Developer",
    description: "Full-spectrum frontend + backend systems",
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
