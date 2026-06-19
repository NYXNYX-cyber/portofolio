import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-p5-black relative border-t-8 border-p5-red">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase text-p5-white mb-8 p5-title">
              ABOUT <span className="text-p5-red">ME</span>
            </h2>
            
            <div className="bg-p5-dark border-4 border-p5-gray p-8 transform -skew-x-2 relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-p5-red -translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-p5-red translate-x-2 translate-y-2" />
              
              <p className="text-xl font-bold leading-tight mb-6">
                Saya adalah siswa <span className="p5-text-highlight">SMK Skye Digipreneur</span> jurusan 
                Pengembangan Perangkat Lunak dan Game.
              </p>
              <p className="text-p5-gray text-lg font-mono mb-6 leading-relaxed">
                Memiliki keahlian luas di bidang IT, meliputi Full Stack Web Development, Administrasi Jaringan, Pengembangan Game, dan IoT. Memiliki pengalaman praktis mengelola home server pribadi menggunakan Proxmox VE.
              </p>
              <p className="text-p5-white font-bold bg-p5-red inline-block px-3 py-1 transform skew-x-12">
                &gt; SIAP UNTUK PKL / MAGANG
              </p>
            </div>
          </motion.div>

          {/* Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Background block */}
            <div className="absolute w-full max-w-sm aspect-[3/4] bg-p5-red transform rotate-6 translate-x-4 translate-y-4" />
            <div className="absolute w-full max-w-sm aspect-[3/4] bg-p5-white border-8 border-p5-black transform -rotate-3 -translate-x-2 -translate-y-2" />
            
            {/* Image */}
            <img 
              src="/profile.png" 
              alt="Profile" 
              className="relative z-10 w-full max-w-sm aspect-[3/4] object-cover object-top border-4 border-p5-black grayscale contrast-125 brightness-90 filter hover:grayscale-0 transition-all duration-300"
            />
            
            {/* Decoration tags */}
            <div className="absolute -left-6 top-1/4 z-20 bg-p5-black text-p5-white font-bold px-4 py-2 border-2 border-p5-red transform -skew-x-12 rotate-[-15deg]">
              Lvl. 17
            </div>
            <div className="absolute -right-8 bottom-1/4 z-20 bg-p5-white text-p5-black font-black text-xl px-4 py-2 border-4 border-p5-black transform skew-x-12 rotate-[10deg]">
              CONFIDANT
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
