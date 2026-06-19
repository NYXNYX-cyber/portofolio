import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiStar } from 'react-icons/hi'
import { FaTrophy, FaGraduationCap } from 'react-icons/fa'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="section-padding bg-dark-900 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pencapaian <span className="gradient-text">& Pendidikan</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
              <FaTrophy className="text-yellow-400" />
              Pencapaian
            </h3>

            {/* Certificate Card */}
            <div className="glass rounded-2xl overflow-hidden hover:border-yellow-500/40 transition-all group">
              <div className="relative overflow-hidden">
                <img
                  src="/certificate-bandung.jpg"
                  alt="Juara 3 Bandung - Satu University Certificate"
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <HiStar className="text-yellow-400" />
                    <span className="text-yellow-400 font-bold text-sm">Juara 3</span>
                  </div>
                  <p className="text-text-primary font-semibold text-sm">
                    Kompetisi Bandung — Satu University
                  </p>
                </div>
              </div>
            </div>

            {/* Krafton Competition */}
            <div className="glass rounded-2xl p-5 hover:border-red-500/40 transition-all">
              <div className="flex items-center gap-4">
                <img
                  src="/krafton-logo.png"
                  alt="Krafton"
                  className="h-12 w-auto"
                />
                <div>
                  <h4 className="text-text-primary font-bold">Better Ground by Krafton</h4>
                  <p className="text-text-secondary text-sm mt-1">
                    Peserta kompetisi game developer internasional oleh Prestasi Junior Indonesia bersama Krafton
                    untuk memajukan industri game di dunia.
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-mono rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    International Competition
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
              <FaGraduationCap className="text-primary-light" />
              Pendidikan
            </h3>

            <div className="glass rounded-2xl p-6 hover:border-primary/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary-light text-2xl flex-shrink-0">
                  <HiAcademicCap />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary">
                    SMK Skye Digipreneur School
                  </h4>
                  <p className="text-primary-light font-medium text-sm mt-1">
                    Pengembangan Perangkat Lunak dan Game
                  </p>
                  <p className="text-text-muted text-sm font-mono mt-2">2024 - Sekarang</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Mendalami pengembangan perangkat lunak dan game dengan kurikulum yang
                      mencakup pemrograman, desain game, dan kewirausahaan digital.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['Software Dev', 'Game Dev', 'Entrepreneurship', 'IT Skills'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills summary card */}
            <div className="glass rounded-2xl p-6 hover:border-accent/40 transition-all">
              <h4 className="text-lg font-bold text-text-primary mb-4">Ringkasan Kompetensi</h4>
              <div className="space-y-3">
                {[
                  { label: 'Web Development', level: 90 },
                  { label: 'Game Development', level: 80 },
                  { label: 'Network & Sysadmin', level: 85 },
                  { label: 'IoT & Hardware', level: 70 },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-text-secondary">{skill.label}</span>
                      <span className="text-text-muted font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
