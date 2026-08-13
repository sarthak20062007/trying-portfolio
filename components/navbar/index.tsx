"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  Home,
  User,
  Code2,
  FolderKanban,
  Briefcase,
  Mail,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FolderKanban className="h-4 w-4" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

export function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
