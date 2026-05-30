"use client"

import { Github, Linkedin, Mail, } from "lucide-react"

interface SidebarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[180px] flex-col justify-between bg-sidebar border-r border-border px-4 py-8">
      <div>
        <nav className="space-y-1 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full rounded-md px-4 py-2 text-left text-sm font-medium transition-colors ${activeSection === item.id
                ? "bg-neon-purple/10 text-neon-purple"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center gap-4">
          {/* GitHub Link */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-purple transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>

          {/* LinkedIn Link - Update the href below! */}
          <a href="https://www.linkedin.com/in/alan-k-saji-055760267" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-purple transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>

        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">© 2026</p>
          <p className="text-xs font-semibold text-neon-purple">Alan K Saji</p>
        </div>
      </div>
    </aside>
  )
}