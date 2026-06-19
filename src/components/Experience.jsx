import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: 'Game Developer',
    event: 'Better Ground Krafton',
    period: 'Apr 2026 - Jun 2026',
    desc: 'Merancang arsitektur logika dan gameplay memenuhi standar kompetisi Krafton. Membangun backend & frontend game dengan peningkatan efisiensi 70%.',
    type: 'COMPETITION'
  },
  {
    title: 'Network & Sysadmin',
    event: 'Home Lab Proxmox VE',
    period: 'Sep 2024 - Sekarang',
    desc: 'Mengoperasikan server fisik untuk layanan VPS komersial. Mengelola alokasi sumber daya dan implementasi arsitektur jaringan aman dengan VPN/Firewall.',
    type: 'FREELANCE'
  },
  {
    title: 'Full-Stack Web Dev',
    event: 'Proyek Portofolio',
    period: '2024 - Sekarang',
    desc: 'Membangun fungsionalitas web penuh (React, Node.js, Laravel, Go). Mendesain arsitektur database dan RESTful API aman.',
    type: 'PERSONAL'
  },
  {
    title: 'IoT Developer',
    event: 'Proyek Inovasi Sekolah',
    period: '2025 - Sekarang',
    desc: 'Merancang sirkuit elektronik dan sensor dengan mikrokontroler. Memprogram firmware untuk transmisi data real-time ke cloud.',
    type: 'ACADEMIC'
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-p5-white relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="text-5xl md:text-7xl font-black uppercase text-p5-black mb-16 p5-title"
          style={{ WebkitTextStroke: '1px red', textShadow: '4px 4px 0px red', color: 'black' }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-p5-black border-4 border-p5-black text-p5-white p-6 md:p-8 hover:bg-p5-red transition-colors duration-300"
            >
              {/* Type Badge */}
              <div className="absolute -top-4 -right-4 bg-p5-white text-p5-black font-black px-4 py-1 border-4 border-p5-black transform rotate-3 group-hover:-rotate-3 transition-transform">
                {exp.type}
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight">{exp.title}</h3>
                  <h4 className="text-xl font-bold text-p5-gray group-hover:text-p5-white mt-1">{exp.event}</h4>
                </div>
                <div className="font-mono font-bold bg-p5-gray text-p5-black px-3 py-1 self-start">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-lg font-medium leading-snug max-w-4xl border-l-4 border-p5-red pl-4 group-hover:border-p5-white">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
