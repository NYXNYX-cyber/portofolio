export default function Footer() {
  return (
    <footer className="bg-p5-black border-t-8 border-p5-white py-8 relative overflow-hidden flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center relative z-10 text-center">
        <h2 className="text-4xl font-black text-p5-white uppercase tracking-widest mb-4">
          HANDIKA PRATAMA
        </h2>
        <div className="flex justify-center items-center gap-4 font-mono font-bold text-p5-red mb-6 w-full">
          <a href="#about" className="hover:text-p5-white">ABOUT</a>
          <span>/</span>
          <a href="#projects" className="hover:text-p5-white">TARGETS</a>
          <span>/</span>
          <a href="#contact" className="hover:text-p5-white">CONTACT</a>
        </div>
        <p className="text-p5-gray font-mono text-sm">
          © {new Date().getFullYear()} HANDIKA. BUILT WITH REACT & THREE.JS
        </p>
      </div>
    </footer>
  )
}
