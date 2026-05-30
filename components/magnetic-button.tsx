"use client"

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function MagneticButton({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        // Get the exact size and position of the button on the screen
        const { height, width, left, top } = ref.current.getBoundingClientRect()

        // Calculate the distance from the mouse to the center of the button
        const middleX = e.clientX - (left + width / 2)
        const middleY = e.clientY - (top + height / 2)

        // Set the position to a fraction of that distance (0.3 is the "pull" strength)
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 })
    }

    const reset = () => {
        // Snap back to original position when mouse leaves
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            // We use a spring transition here so it snaps back elastically!
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`w-fit ${className}`}
        >
            {children}
        </motion.div>
    )
}