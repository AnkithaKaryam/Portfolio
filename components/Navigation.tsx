import React, { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'experience', href: '#experience' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-terminal-black border-b-2 border-terminal-gray3 backdrop-blur-sm shadow-lg">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-terminal-white text-xl font-bold">
              <span className="text-terminal-gray5">&gt;</span> ak.dev
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-terminal-gray7 hover:text-terminal-white transition-colors duration-300 uppercase text-xs tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-terminal-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-terminal-gray3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-terminal-gray7 hover:text-terminal-white transition-colors duration-300 uppercase text-xs"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
