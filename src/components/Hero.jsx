import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import ThreeScene from './ThreeScene'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-p5-black overflow-hidden">
      {/* 3D Background */}
      <ThreeScene />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start pt-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50, skewX: -10 }}
            animate={{ opacity: 1, x: 0, skewX: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-p5-white text-p5-black px-4 py-1 mb-6 font-bold uppercase tracking-widest text-sm border-l-4 border-p5-red inline-block"
          >
            SMK Student / Developer
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-9xl p5-title leading-none mb-2 relative z-10">
              HANDIKA<br/>PRATAMA
            </h1>
            {/* Background block for text */}
            <div className="absolute -inset-4 bg-p5-red transform -skew-x-12 -z-10 mix-blend-multiply opacity-80 mt-8 ml-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <div className="bg-p5-black border-2 border-p5-white text-p5-white px-4 py-2 font-mono font-bold text-sm transform -skew-x-6">
              # FULL STACK
            </div>
            <div className="bg-p5-black border-2 border-p5-red text-p5-red px-4 py-2 font-mono font-bold text-sm transform -skew-x-6">
              # GAME DEV
            </div>
            <div className="bg-p5-black border-2 border-p5-white text-p5-white px-4 py-2 font-mono font-bold text-sm transform -skew-x-6">
              # SYSADMIN
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Marquee Strip */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="marquee-container">
          <div className="marquee-content">
            TAKE YOUR HEART • WAKE UP, GET UP, GET OUT THERE • THE PHANTOM THIEVES OF HEARTS • TAKE YOUR HEART • WAKE UP, GET UP, GET OUT THERE • THE PHANTOM THIEVES OF HEARTS • 
          </div>
        </div>
      </div>
    </section>
  )
}
