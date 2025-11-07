'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

function Hero() {
  const heroRef = useRef(null)

  return (
    <header
      ref={heroRef}
      className="h-screen w-screen bg-linear-to-b from-gray-900 to-black text-gray-300 flex flex-col items-center justify-center overflow-hidden"
    >
        <div className="hero-content flex flex-col items-center justify-center gap-10">
            <motion.h1
                className="lg:text-8xl text-6xl mt-30"
                initial={{ opacity: 0, y: 80 }}     // point de départ
                animate={{ opacity: 1, y: 0 }}      // état final
                transition={{
                    duration: 1.2,                    // durée totale
                    ease: [0.25, 0.1, 0.25, 1],       // courbe d’accélération (ease-out)
                }}
            >
                TITLE
            </motion.h1>
            <h2 className="lg:text-4xl text-xl max-w-5xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            accusantium optio distinctio ratione, blanditiis magni consectetur
            fugiat? Recusandae, atque totam?
            </h2>
            <div className="flex gap-10">
                <Link
                    href="#"
                    className="text-2xl px-6 py-3 bg-gray-700 border border-black"
                >
                    CTA
                </Link>
                <Link
                    href="#"
                    className="text-2xl px-6 py-3 bg-gray-700 border border-black"
                >
                    CTA 2
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Hero

