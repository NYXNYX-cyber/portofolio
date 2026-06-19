import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    title: "Dov'E",
    desc: 'Game kompetisi Better Ground Krafton. Dibangun menggunakan Unity 6 dengan standar internasional.',
    tech: 'Unity 6 / C#',
    link: '#',
    hasLogo: true,
    imageId: 'dove'
  },
  {
    title: 'NyxPaaS / Nyx-DeployApps',
    desc: 'Platform as a Service untuk mempublikasikan aplikasi dengan cepat, mudah, dan murah.',
    tech: 'Cloud / DevOps',
    link: 'https://github.com/NYXNYX-cyber/Nyx-DeployApps',
    hasLogo: false,
    imageId: 'nyxpaas'
  },
  {
    title: 'NyxIDE',
    desc: 'AI-Powered Desktop IDE terintegrasi agen kustom. Dibangun dengan Electron dan Monaco Editor.',
    tech: 'TypeScript / Electron',
    link: 'https://github.com/NYXNYX-cyber/NyxIDE-Agent',
    hasLogo: false,
    imageId: 'nyxide'
  },
  {
    title: 'Prosopon',
    desc: 'Game RPG Dungeon Crawler singkat dan interaktif yang dibangun dan dijalankan murni di atas web/browser.',
    tech: 'JavaScript / Web',
    link: 'https://github.com/NYXNYX-cyber/Prosopon-Gemini',
    hasLogo: false,
    imageId: 'prosopon'
  },
  {
    title: 'DigiClass',
    desc: 'Platform edukasi modern (Next.js & NestJS) untuk mengelola tugas, kuis, dan mata pelajaran.',
    tech: 'Next.js / NestJS',
    link: 'https://github.com/NYXNYX-cyber/digiclass-remake',
    hasLogo: false,
    imageId: 'digiclass'
  },
  {
    title: 'Image Analyzer',
    desc: 'MCP (Model Context Protocol) Server untuk analisis gambar menggunakan vision AI model.',
    tech: 'Python / MCP',
    link: 'https://github.com/NYXNYX-cyber/MCP-Image_Analyzer',
    hasLogo: false,
    imageId: 'image-analyzer'
  },
  {
    title: 'NYXBOT32',
    desc: 'Proyek automasi bot serbaguna berbasis JavaScript dengan kemampuan integrasi sistem.',
    tech: 'JavaScript / Node.js',
    link: 'https://github.com/NYXNYX-cyber/NYXBOT32',
    hasLogo: false,
    imageId: 'nyxbot32'
  },
  {
    title: 'Home Lab',
    desc: 'Infrastruktur VPS komersial menggunakan Proxmox VE dengan isolasi VPN dan firewall ketat.',
    tech: 'Proxmox / Linux',
    link: '#',
    hasLogo: false,
    imageId: 'homelab'
  }
]

// Komponen Card Gambar
function ProjectImageCard({ proj }) {
  const [imgSrc, setImgSrc] = useState(`/projects/${proj.imageId}.png`)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative aspect-video w-full bg-p5-dark border-4 border-p5-gray flex items-center justify-center overflow-hidden group">
      {/* Jika gambar tidak ada/error, tampilkan placeholder "SOON" */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-p5-black text-p5-gray transform -skew-x-6">
          <span className="font-mono text-xs opacity-50 mb-1">{proj.title}</span>
          <span className="font-black text-3xl tracking-widest text-p5-red">SOON</span>
        </div>
      ) : (
        <img 
          src={imgSrc} 
          alt={proj.title}
          onError={() => {
            // Coba fallback format .jpg jika .png gagal
            if (imgSrc.endsWith('.png')) {
              setImgSrc(`/projects/${proj.imageId}.jpg`)
            } else {
              setHasError(true)
            }
          }}
          className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
        />
      )}
      
      {/* Decorative frame overlay ala Persona */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-p5-red m-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-p5-red m-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding bg-p5-black relative border-t-8 border-p5-red">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="text-5xl md:text-7xl font-black uppercase text-p5-red mb-12 p5-title"
        >
          TARGETS
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <motion.a
              href={proj.link !== '#' ? proj.link : undefined}
              target={proj.link !== '#' ? '_blank' : undefined}
              rel={proj.link !== '#' ? 'noopener noreferrer' : undefined}
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: (idx % 4) * 0.1 }}
              className={`block relative bg-p5-dark border-2 border-p5-gray p-6 hover:bg-p5-white hover:border-p5-red group transition-all duration-300 flex flex-col justify-between ${proj.link !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-p5-red clip-angle-reverse opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-p5-white group-hover:text-p5-black tracking-tighter uppercase break-words pr-2 leading-none">
                    {proj.title}
                  </h3>
                  {proj.hasLogo && (
                    <img src="/krafton-logo.png" alt="Krafton" className="h-6 w-auto grayscale group-hover:grayscale-0 transition-all flex-shrink-0" />
                  )}
                  {!proj.hasLogo && proj.link !== '#' && (
                    <svg className="w-5 h-5 text-p5-gray group-hover:text-p5-red transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>

                <p className="text-p5-gray group-hover:text-p5-dark text-sm font-bold mb-8 line-clamp-4 leading-snug">
                  {proj.desc}
                </p>
              </div>

              <div className="inline-block bg-p5-black text-p5-red font-mono font-bold px-2 py-1 border border-p5-red group-hover:bg-p5-red group-hover:text-p5-white text-xs self-start mt-auto">
                {proj.tech}
              </div>
            </motion.a>
          ))}
        </div>

        {/* --- Bagian Galeri/Cuplikan --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-24 sm:mt-32"
        >
          <div className="flex items-center gap-4 mb-10 sm:mb-12">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-p5-white p5-subtitle shrink-0">
              GALLERY
            </h3>
            <div className="flex-1 h-1 bg-p5-gray opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projects.map((proj, idx) => (
              <ProjectImageCard key={`img-${idx}`} proj={proj} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
