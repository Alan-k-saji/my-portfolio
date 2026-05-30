"use client"

import { motion } from "framer-motion"

// We use the Devicon CDN to automatically pull the official logos for your stack
const topRow = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
]

const bottomRow = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" },
  { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative pt-20 pb-15 flex flex-col justify-center">

      <style suppressHydrationWarning>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
        .row-container:hover .animate-scroll,
        .row-container:hover .animate-scroll-reverse {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Framer Motion slide-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
        className="mb-12 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          <span className="text-neon-purple neon-text-purple">Technologies</span> I work with
        </h2>
      </motion.div>

      {/* Scrolling Containers */}
      <div className="flex flex-col gap-16 relative z-10 w-full mask-edges pt-12 pb-8 overflow-hidden">

        {/* Top Row */}
        <div className="row-container w-full">
          <div className="flex w-[200%] animate-scroll">
            {[...topRow, ...topRow].map((skill, index) => (
              <div key={`top-${index}`} className="flex-1 flex justify-center min-w-[200px]">
                <div className="group relative flex flex-col items-center justify-center cursor-pointer p-4">
                  {/* Tooltip: Visible by default on mobile, hidden on md, visible on hover */}
                  <div className="absolute -top-10 opacity-100 scale-100 md:opacity-0 md:scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-[#1e1e2e] text-white text-sm font-semibold py-1.5 px-4 rounded-lg shadow-xl whitespace-nowrap border border-white/10 z-20 pointer-events-none">
                    {skill.name}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e1e2e] rotate-45 border-r border-b border-white/10"></div>
                  </div>
                  {/* Image: Colorful by default on mobile, grayscale on md, colorful on hover */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain filter transition-all duration-300 grayscale-0 opacity-100 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] scale-110 md:grayscale md:opacity-40 md:drop-shadow-none md:scale-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row-container w-full">
          <div className="flex w-[200%] animate-scroll-reverse">
            {[...bottomRow, ...bottomRow].map((skill, index) => (
              <div key={`bottom-${index}`} className="flex-1 flex justify-center min-w-[200px]">
                <div className="group relative flex flex-col items-center justify-center cursor-pointer p-4">
                  {/* Tooltip: Visible by default on mobile, hidden on md, visible on hover */}
                  <div className="absolute -top-10 opacity-100 scale-100 md:opacity-0 md:scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-[#1e1e2e] text-white text-sm font-semibold py-1.5 px-4 rounded-lg shadow-xl whitespace-nowrap border border-white/10 z-20 pointer-events-none">
                    {skill.name}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e1e2e] rotate-45 border-r border-b border-white/10"></div>
                  </div>
                  {/* Image: Colorful by default on mobile, grayscale on md, colorful on hover */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain filter transition-all duration-300 grayscale-0 opacity-100 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] scale-110 md:grayscale md:opacity-40 md:drop-shadow-none md:scale-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style suppressHydrationWarning>{`
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  )
}