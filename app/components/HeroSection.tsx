'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const floatIcons = [
    { icon: '🎨', delay: '0s', position: 'top-20 left-[10%]' },
    { icon: '📐', delay: '0.3s', position: 'top-40 right-[15%]' },
    { icon: '🖱️', delay: '0.6s', position: 'bottom-20 left-[25%]' },
    { icon: '📱', delay: '0.9s', position: 'top-[70%] right-[20%]' },
    { icon: '🔍', delay: '1.2s', position: 'top-12 left-[50%]' },
    { icon: '🧠', delay: '1.5s', position: 'bottom-10 right-[45%]' },
    { icon: '🧪', delay: '1.8s', position: 'top-[55%] left-[30%]' },
    { icon: '📊', delay: '2.1s', position: 'bottom-[25%] right-[10%]' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      {/* Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {floatIcons.map(({ icon, delay, position }, i) => (
          <motion.div
            key={i}
            className={`absolute ${position} text-white text-2xl sm:text-3xl opacity-40`}
            style={{
              animation: `floatWobble 6s ease-in-out ${delay} infinite`,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500"
        >
          Animesh Chaudhary
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-2 text-lg md:text-2xl font-light text-purple-300"
        >
          UX Specialist & Design System Enthusiast
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-md md:text-lg text-pink-200 max-w-4xl mx-auto mt-6"
        >
          I design clean, curious, and human-centered digital experiences — the kind that don&apos;t just look good, but feel right. From wireframes to workflows, I obsess over micro-interactions, accessibility, and that magical &ldquo;this just works&rdquo; moment. Let&apos;s turn complex ideas into delightful journeys.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition"
          >
            Explore Work
          </a>
		  
          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition"
          >
            Connect
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* Floating Animation Keyframes */}
      <style jsx global>{`
        @keyframes floatWobble {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-6px) rotate(-2deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(6px) rotate(2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
      `}</style>
    </motion.section>
  );
}
