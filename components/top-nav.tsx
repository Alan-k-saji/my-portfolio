"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface TopNavProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]

export function TopNav({ activeSection, onNavigate }: TopNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileNav = (id: string) => {
    onNavigate(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 w-full z-50 flex items-center justify-between border-b border-border bg-background/90 px-4 md:px-8 py-4 backdrop-blur-md">

      <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 md:px-4 md:py-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 shrink-0" />
        <span className="text-xs md:text-sm text-white truncate">Available for freelance</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={cn(
              "text-sm font-medium transition-colors",
              activeSection === link.id
                ? "text-neon-purple border-b-2 border-neon-purple pb-1"
                : "text-muted-foreground hover:text-white"
            )}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <button
        className="md:hidden p-2 text-white hover:text-neon-purple transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 border-b border-border shadow-lg md:hidden backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleMobileNav(link.id)}
                className={cn(
                  "text-left text-lg font-medium p-2 rounded-md transition-colors",
                  activeSection === link.id
                    ? "text-neon-purple bg-neon-purple/10"
                    : "text-muted-foreground hover:text-white hover:bg-secondary/50"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}