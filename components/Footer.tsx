import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-terminal-gray3 bg-terminal-gray1 py-8 px-4 sm:px-6 lg:px-8 relative z-0">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-pink via-accent-cyan to-accent-green"></div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-terminal-white text-lg font-bold mb-2 block">
              <span className="text-terminal-gray5">&gt;</span> ak.dev
            </a>
            <p className="text-terminal-gray7 text-sm">
              Backend Engineer • Java • Spring Boot • Microservices
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-terminal-white font-bold text-sm mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-terminal-gray7 hover:text-terminal-white transition-colors"
                    >
                      <span className="text-terminal-gray5">{'>'}</span> {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-terminal-white font-bold text-sm mb-3 uppercase tracking-wider">
              Follow
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="block text-terminal-gray7 hover:text-terminal-white transition-colors"
              >
                <span className="text-terminal-gray5">→</span> GitHub
              </a>
              <a
                href="#"
                className="block text-terminal-gray7 hover:text-terminal-white transition-colors"
              >
                <span className="text-terminal-gray5">→</span> LinkedIn
              </a>
              <a
                href="#"
                className="block text-terminal-gray7 hover:text-terminal-white transition-colors"
              >
                <span className="text-terminal-gray5">→</span> Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 border-t border-terminal-gray3">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-terminal-gray6">
            <p>
              <span className="text-terminal-gray5"> > </span> © {currentYear} Ankitha Karyam.
              All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              <span className="text-terminal-gray5"> > </span> Designed & Built with Next.js + Tailwind CSS
            </p>
          </div>
        </div>

        {/* Terminal prompt */}
        <div className="mt-6 text-xs text-terminal-gray6 overflow-hidden">
          <p className="truncate">
            <span className="text-terminal-gray5">root@portfolio ~</span>
            <span className="animate-blink"> ></span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
