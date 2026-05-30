"use client"

import { useEffect, useState, useCallback } from "react"
import { TopNav } from "@/components/top-nav"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { Github, Linkedin } from "lucide-react"

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("about")

    const handleNavigate = useCallback((section: string) => {
        setActiveSection(section)
        const element = document.getElementById(section)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }, [])

    useEffect(() => {
        const sections = ["about", "skills", "projects", "experience", "contact"]

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        // ADDED: overflow-x-hidden to prevent side-scrolling
        <div className="min-h-screen bg-background overflow-x-hidden">
            <TopNav activeSection={activeSection} onNavigate={handleNavigate} />

            <main className="pt-20">
                {/* CHANGED: px-8 is now px-4 on mobile, expands to px-8 on medium screens */}
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">

                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ExperienceSection />

                    {/* Contact Section */}
                    <section id="contact" className="min-h-screen py-20">
                        <div className="mb-6">
                            <span className="text-sm font-medium uppercase tracking-wider text-neon-purple">Contact</span>
                        </div>
                        <h2 className="mb-8 text-4xl font-bold text-white lg:text-5xl">
                            {"Let's"} <span className="text-neon-purple neon-text-purple">Connect</span>
                        </h2>
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="rounded-xl bg-card p-8 neon-border">
                                <h3 className="mb-6 text-xl font-semibold text-white">Send me a message</h3>
                                <form
                                    className="space-y-4"
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        const form = e.currentTarget;
                                        const formData = new FormData(form);
                                        formData.append("access_key", "2091e4f2-39a4-4ca3-add4-187dcd4ae0fd");
                                        try {
                                            const response = await fetch("https://api.web3forms.com/submit", {
                                                method: "POST",
                                                body: formData,
                                            });
                                            const data = await response.json();
                                            if (data.success) {
                                                alert("Message sent successfully! I will get back to you soon.");
                                                form.reset();
                                            } else {
                                                alert("Something went wrong. Please try again.");
                                            }
                                        } catch (error) {
                                            console.error("Form submission error:", error);
                                            alert("Network error. Please check your connection and try again.");
                                        }
                                    }}
                                >
                                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <input type="text" name="name" required placeholder="Your Name" className="rounded-lg border border-border bg-secondary px-4 py-3 text-white placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none" />
                                        <input type="email" name="email" required placeholder="Your Email" className="rounded-lg border border-border bg-secondary px-4 py-3 text-white placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none" />
                                    </div>
                                    <input type="text" name="subject" required placeholder="Subject" className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-white placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none" />
                                    <textarea name="message" required placeholder="Your Message" rows={4} className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-white placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none" />
                                    <button type="submit" className="w-full rounded-lg bg-neon-purple px-6 py-3 font-medium text-white transition-all hover:opacity-90 neon-glow-purple">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            <div className="space-y-6">
                                <div className="rounded-xl bg-card p-6 neon-border h-fit">
                                    <h3 className="mb-4 text-lg font-semibold text-white">Contact Information</h3>
                                    <div className="space-y-3">
                                        <p className="flex items-center gap-3 text-muted-foreground">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-purple/20">📧</span>
                                            karingachiraalan@gmail.com
                                        </p>
                                        <p className="flex items-center gap-3 text-muted-foreground">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-purple/20">📍</span>
                                            Bangalore, India
                                        </p>
                                        <p className="flex items-center gap-3 text-muted-foreground">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-purple/20">📱</span>
                                            +91 8431904459
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="border-t border-border/50 py-8 mt-10">
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                            <div className="text-center md:text-left">
                                <p className="text-sm text-muted-foreground">
                                    © {new Date().getFullYear()} <span className="font-semibold text-neon-purple">Alan K Saji</span>. All rights reserved.
                                </p>
                            </div>

                            <div className="flex gap-6">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all hover:text-neon-purple hover:scale-110">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/alan-k-saji-055760267" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all hover:text-neon-purple hover:scale-110">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </div>

                        </div>
                    </footer>

                </div>
            </main>
        </div>
    )
}