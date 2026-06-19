import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="contact" className="section-padding bg-p5-red relative overflow-hidden flex justify-center items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-dots opacity-30 mix-blend-multiply pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="bg-p5-black border-8 border-p5-white p-8 md:p-12 transform rotate-1 mx-auto max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase text-p5-white mb-8 p5-title text-center">
            CALLING CARD
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-p5-white">
            <div className="space-y-6">
              <div className="bg-p5-dark border-2 border-p5-gray p-4 hover:border-p5-white transition-colors">
                <p className="font-mono text-p5-red font-bold mb-1">PHONE</p>
                <a href="tel:085122117526" className="text-2xl font-black hover:text-p5-red">085122117526</a>
              </div>
              <div className="bg-p5-dark border-2 border-p5-gray p-4 hover:border-p5-white transition-colors">
                <p className="font-mono text-p5-red font-bold mb-1">EMAIL</p>
                <a href="mailto:emailhandika@nyxstudios.site" className="text-xl font-black hover:text-p5-red break-all">emailhandika@nyxstudios.site</a>
              </div>
              <div className="bg-p5-dark border-2 border-p5-gray p-4 hover:border-p5-white transition-colors">
                <p className="font-mono text-p5-red font-bold mb-1">WEB</p>
                <a href="https://handika.nyxstudios.site" target="_blank" rel="noreferrer" className="text-xl font-black hover:text-p5-red">handika.nyxstudios.site</a>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-p5-white text-p5-black p-6 border-4 border-p5-black transform -skew-x-6 rotate-[-3deg]">
                <p className="text-xl font-black leading-tight uppercase text-center">
                  "I AM THOU, THOU ART I... <br/>
                  LET'S BUILD SOMETHING GREAT TOGETHER."
                </p>
              </div>
              
              <a 
                href="mailto:emailhandika@nyxstudios.site"
                className="mt-8 bg-p5-red text-p5-white text-center py-4 text-2xl font-black uppercase border-4 border-p5-white hover:bg-p5-white hover:text-p5-red hover:scale-105 transition-all transform skew-x-12 inline-block"
              >
                SEND CALLING CARD
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
