"use client"

import { Calendar, MapPin, Building2, Shield, Radio } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
    {
        id: 1,
        company: "Bharat Electronics Limited (BEL)",
        location: "Bangalore",
        date: "Apr 2024 – May 2024",
        role: "Industrial Trainee",
        bullets: [
            "Worked in Military Communication SBU.",
            "Gained knowledge of military communication systems and secure networks.",
            "Learned about embedded defence protocols and high reliability components."
        ],
        icon: Shield,
        color: "from-blue-500 to-indigo-600",
    },
    {
        id: 2,
        company: "Super Power Transmitter, Akashvani",
        location: "Yelahanka",
        date: "May 2025",
        role: "Industrial Trainee",
        bullets: [
            "Studied RF systems and AM transmitter operations.",
            "Learned broadcast transmission techniques."
        ],
        icon: Radio,
        color: "from-emerald-500 to-teal-600",
    }
]

export function ExperienceSection() {
    return (
        <section id="experience" className="min-h-screen py-20">
            {/* Animated Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
                className="mb-16 max-w-3xl"
            >
                <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                    My <span className="text-neon-purple neon-text-purple">Experience</span>.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {"These are the experience i gained as an intern during my four years of engineering while pursuing Electronics and Computer Engineering."}
                </p>
            </motion.div>

            {/* Experience Vertical Timeline Layout */}
            <div className="relative border-l border-border/50 pl-6 md:pl-10 ml-2 md:ml-4">

                {/* The animated glowing timeline line */}
                <motion.div
                    className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple via-neon-purple/50 to-transparent origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                />

                {/* The Glowing Dot at the top of the timeline */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-neon-purple shadow-[0_0_10px_#a855f7]"
                />

                <div className="flex flex-col gap-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.6, delay: index * 0.2 }}
                            className="group flex flex-col md:flex-row gap-8 overflow-hidden rounded-xl bg-card border border-border/50 p-6 md:p-8 transition-all hover:neon-glow-purple hover:border-neon-purple/50 relative"
                        >
                            {/* Icon / Visual Indicator */}
                            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                                <exp.icon className="h-8 w-8 text-white" />
                            </div>

                            {/* Detailed Experience Info */}
                            <div className="flex flex-1 flex-col justify-center">
                                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                                        {/* Location & Role info */}
                                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <Building2 className="h-4 w-4 text-neon-purple" />
                                                {exp.role}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="h-4 w-4 text-neon-purple" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Date Badge */}
                                    <div className="flex items-center gap-2 rounded-full bg-neon-purple/10 px-4 py-1.5 text-sm font-medium text-neon-purple border border-neon-purple/20 w-fit mt-4 md:mt-0 shrink-0">
                                        <Calendar className="h-4 w-4" />
                                        {exp.date}
                                    </div>
                                </div>

                                {/* Bullet Points */}
                                <div className="mt-4 pt-4 border-t border-border/50">
                                    <ul className="space-y-3">
                                        {exp.bullets.map((bullet, index) => (
                                            <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                                {/* Custom neon bullet point */}
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-purple"></span>
                                                <span className="leading-relaxed text-base">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}