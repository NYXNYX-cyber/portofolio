import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    title: 'DEVELOPMENT',
    skills: ['JavaScript', 'React', 'Node.js', 'PHP Laravel', 'Go', 'Unity 6', 'C#']
  },
  {
    title: 'INFRASTRUCTURE',
    skills: ['Linux', 'Proxmox VE', 'Mikrotik', 'VPN', 'Firewall', 'LAN/WLAN']
  },
  {
    title: 'HARDWARE & SOFT',
    skills: ['IoT (Arduino)', 'Troubleshooting', 'Self-Driven Learning', 'Time Management']
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-p5-red relative overflow-hidden">
      {/* Background text pattern */}
      <div className="absolute inset-0 opacity-10 font-black text-9xl leading-none overflow-hidden text-p5-black break-words select-none pointer-events-none">
        SKILLSSKILLSSKILLSSKILLSSKILLSSKILLSSKILLSSKILLSSKILLSSKILLS
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="text-5xl md:text-7xl font-black uppercase text-p5-white mb-12 p5-title"
          style={{ WebkitTextStroke: '1px black', textShadow: '4px 4px 0px black' }}
        >
          ARSENAL
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: groupIdx * 0.15 }}
              className="bg-p5-black border-4 border-p5-white p-6 transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-8px_8px_0px_white] transition-all duration-200"
            >
              <h3 className="text-2xl font-black text-p5-red mb-6 border-b-2 border-p5-gray pb-2 uppercase tracking-widest">
                {group.title}
              </h3>
              
              <ul className="space-y-4">
                {group.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-bold font-mono text-p5-white">
                    <span className="text-p5-red">★</span>
                    <span className="hover:text-p5-red hover:bg-p5-white px-2 transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
