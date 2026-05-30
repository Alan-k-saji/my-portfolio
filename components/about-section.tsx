"use client"

import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'

export function AboutSection() {
  return (
    // Main container: pb-8 keeps the gap small before the next section
    <section id="about" className="pt-20 lg:pt-10 pb-8 relative">

      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mb-6 relative z-10">
        <span className="text-sm font-medium uppercase tracking-wider text-neon-purple block">
          Introduction
        </span>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center relative z-10">

        {/* Left Column: Text and Buttons */}
        <div>
          {/* Heading container to manage the spacing */}
          <div className="mb-6 min-h-[140px] md:min-h-[180px] flex flex-col justify-center">

            {/* The Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Hi, I'm <span className="text-neon-purple neon-text-purple">Alan K Saji.</span>
            </h1>

            {/* The Typing Animation */}
            <h2 className="text-3xl md:text-4xl font-semibold text-white/90 tracking-tight mt-2">
              I build{" "}
              <TypeAnimation
                sequence={[
                  'Web Applications.',
                  2000,
                  'Softwares.',
                  2000,
                  'Web Designs.',
                  2000,
                  'AI Systems.',
                  2000
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={50}
                className="text-white opacity-90"
                repeat={Infinity}
                cursor={true}
              />
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            I am a passionate developer with a background in Electronics and Computer Engineering.
            I specialize in bridging the gap between hardware and software, engineering everything
            from interactive web interfaces to edge-deployed computer vision systems.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* !!! The 'Let's Talk' button previously located here has been removed !!! */}

            {/* View My Work - Restyled with purple gradient and glow */}
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-lg bg-neon-purple text-white font-medium hover:opacity-90 transition-all neon-glow-purple flex items-center"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right Column: Clean Photograph Container */}
        <div className="flex justify-center">
          <div className="relative h-[400px] w-[350px] overflow-hidden rounded-2xl border border-neon-purple/30 neon-glow-purple transition-transform duration-500 hover:scale-105 cursor-pointer">
            <Image
              src="/profile.jpg"
              alt="Alan K Saji"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}