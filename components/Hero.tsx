import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Backend Engineer | Java | Spring Boot | Microservices'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-2 px-4 sm:px-6 lg:px-8 relative z-0">
      <div className="w-full max-w-4xl">
        <div className="animate-fade-in">
          {/* Terminal header */}
          <div className="border border-terminal-gray3 bg-terminal-gray1 mb-4">
            <div className="flex items-center h-8 px-4 border-b border-terminal-gray3 bg-terminal-gray2">
              <span className="text-xs text-terminal-gray6">
               root@portfolio ~ {'>'} _
              </span>
            </div>
            <div className="px-6 py-6">
              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-terminal-white mb-2">
                Ankitha Karyam
              </h1>

              {/* Typewriter role */}
              <div className="text-lg sm:text-xl md:text-2xl text-terminal-gray8 font-mono tracking-wide mb-3">
                {displayText}
                <span className="animate-blink text-terminal-white">_</span>
              </div>

                {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'AWS'].map((badge, idx) => (
                  <span
                    key={badge}
                    className="text-xs px-2 py-1 border rounded bg-terminal-gray1 transition-all duration-300"
                    style={{
                      borderColor: ['#00d4ff', '#0088ff', '#bb86fc', '#ffa500', '#00ff88'][idx % 5],
                      color: ['#00d4ff', '#0088ff', '#bb86fc', '#ffa500', '#00ff88'][idx % 5],
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-terminal-gray7 text-sm md:text-base leading-relaxed mt-4 max-w-2xl">
                Building scalable microservices and robust backend systems. Specialized in Java, Spring Boot, REST APIs, and cloud-native architecture.
              </p>

              {/* Contact info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm text-terminal-gray7">
                <a
                  href="mailto:ankitha.karyam.work@gmail.com"
                  className="hover:text-terminal-white transition-colors duration-300"
                >
                  <span className="text-terminal-gray5"> {'>'} </span>
                  ankitha.karyam.work@gmail.com
                </a>
                <span>
                  <span className="text-terminal-gray5"> {'>'} </span>
                  Bangalore, India
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#projects"
                  className="btn btn-dark text-center hover:shadow-lg transition-all"
                  style={{ boxShadow: 'inset 0 0 20px rgba(0, 212, 255, 0.2)' }}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="btn text-center border border-accent-cyan hover:border-accent-cyan hover:shadow-lg transition-all"
                  style={{ boxShadow: 'inset 0 0 20px rgba(0, 212, 255, 0.1)' }}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-10 animate-pulse">
            <svg
              className="w-6 h-6 mx-auto text-terminal-gray6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
