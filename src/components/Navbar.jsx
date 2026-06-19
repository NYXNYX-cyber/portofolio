import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXP', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-p5-black border-b-4 border-p5-red' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group bg-p5-white text-p5-black px-3 py-1 transform -skew-x-12 p5-border-alt">
            <span className="text-xl font-bold font-mono uppercase italic tracking-tighter">
              Handika
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-2 py-1 text-sm font-black uppercase tracking-wider text-p5-white hover:text-p5-black hover:bg-p5-white transform -skew-x-12 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/HandikaPratamaWicaksonoResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 text-sm font-black uppercase text-p5-white bg-p5-red transform -skew-x-12 hover:scale-105 transition-transform border-2 border-p5-white"
            >
              RESUME
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-p5-white bg-p5-red border-2 border-p5-white transform -skew-x-12"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-p5-black border-b-4 border-p5-red overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4 items-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center py-3 text-xl font-black text-p5-white bg-p5-dark border-2 border-p5-gray transform -skew-x-12 active:bg-p5-red active:text-p5-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="/HandikaPratamaWicaksonoResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 mt-2 text-xl font-black text-p5-white bg-p5-red border-2 border-p5-white transform -skew-x-12"
              >
                RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
