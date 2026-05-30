"use client"

import { motion } from "framer-motion"
import { Bot, Video, Cpu, Mic } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI Resume Evaluation and Mock Interview Bot",
    description: "Developed a full-stack web app using Next.js and Tailwind CSS that utilizes the Gemini API to evaluate resumes. I developed a Node.js backend to parse PDF uploads and implemented a chat system that conducts interactive mock interviews based on the user’s specific experience.",
    icon: Bot,
    tags: ["Next.js", "Tailwind CSS", "Gemini API", "Node.js"],
    color: "from-blue-500/20 to-indigo-600/20", // Softened the gradients so the icons pop
    iconColor: "text-blue-400"
  },
  {
    id: 2,
    title: "AI-Based Crowd Monitoring and Control System",
    description: "Developed a real-time computer vision pipeline using the MobileNet-SSD framework for automated human detection and density analysis. Optimized the model for edge deployment on a Raspberry Pi, implementing OpenCV for image preprocessing and data logging to monitor public safety metrics. Leveraged Python to manage asynchronous processing, ensuring high-accuracy tracking and efficient resource utilization in a hardware-constrained environment.",
    icon: Video,
    tags: ["Python", "OpenCV", "Raspberry Pi", "MobileNet-SSD"],
    color: "from-emerald-500/20 to-teal-600/20",
    iconColor: "text-emerald-400"
  },
  {
    id: 3,
    title: "Hand Following Vehicle",
    description: "Built a responsive robotic vehicle that tracks and follows hand movements using distance sensors and object detection logic. The system was developed using an Arduino UNO and motor driver circuits to coordinate real-time motion and precise distance maintenance between the robot and the user.",
    icon: Cpu,
    tags: ["Arduino UNO", "Robotics", "Sensors", "Hardware"],
    color: "from-orange-500/20 to-red-600/20",
    iconColor: "text-orange-400"
  },
  {
    id: 4,
    title: "Wispr Clone Desktop App",
    description: "Developed a lightweight, highly responsive voice-to-text desktop application cloning the core functionality of Wispr. Engineered the application architecture using the Tauri framework for optimal cross-platform performance, and seamlessly integrated the Deepgram SDK to handle real-time, highly accurate audio transcription and processing.",
    icon: Mic,
    tags: ["Tauri", "Deepgram SDK", "Desktop App", "Audio Processing"],
    color: "from-violet-500/20 to-fuchsia-600/20",
    iconColor: "text-violet-400"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="mb-6">
        <span className="text-sm font-medium uppercase tracking-wider text-neon-purple">My Projects</span>
      </div>

      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
          Crafting <span className="text-neon-purple neon-text-purple">Digital</span>
          <br />
          <span className="text-neon-purple neon-text-purple">Experiences</span>.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {"Here are some of the core projects I've engineered. Each project represents a unique technical challenge, from full-stack AI integrations to edge-deployed computer vision and robotics."}
        </p>
      </motion.div>

      {/* Projects Vertical Stack Layout */}
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.6, delay: index * 0.15 }}
            className="group flex flex-col md:flex-row gap-8 overflow-hidden rounded-xl bg-card border border-border/50 p-6 transition-all hover:neon-glow-purple hover:border-neon-purple/50"
          >
            {/* Minimalist Icon Graphic Container */}
            <div className={`relative flex h-auto min-h-[16rem] shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${project.color} border border-white/5 md:w-2/5 lg:w-1/3`}>
              <div className="transition-transform duration-500 group-hover:scale-110">
                {/* Render the Lucide icon dynamically */}
                <project.icon className={`w-24 h-24 ${project.iconColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`} strokeWidth={1.5} />
              </div>
            </div>

            {/* Detailed Project Info */}
            <div className="flex flex-1 flex-col justify-center py-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">{project.title}</h3>
                <p className="mb-6 text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Full Tech Tags */}
              <div className="mt-auto pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-secondary/50 px-4 py-1.5 text-sm font-medium text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}