import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-0">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-white mb-2">
            <span className="text-terminal-gray5">~/</span>about
          </h2>
          <div className="w-20 h-1 bg-terminal-gray5"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Career overview */}
          <div
            className="card animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center mb-4">
              <span className="text-terminal-gray5">{'>'}</span>
              <h3 className="ml-2 text-lg font-bold text-terminal-white">
                Career Overview
              </h3>
            </div>

            <div className="space-y-4 text-terminal-gray8 text-sm leading-relaxed">
              <p>
                Backend software engineer with 1+ year of professional
                experience at Cognizant. Specialized in designing and building
                scalable microservices architectures using Java, Spring Boot,
                and REST APIs.
              </p>

              <p>
                Passionate about clean code, system design, and optimizing
                application performance. Experienced in enterprise-level
                development with focus on reliability, maintainability, and
                security.
              </p>

              <p>
                Currently contributing to intelligent automation solutions in
                the insurance domain, leveraging microservices and cloud-native
                technologies.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Education */}
            <div
              className="card animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-center mb-4">
                <span className="text-terminal-gray5">{'>'}</span>
                <h3 className="ml-2 text-lg font-bold text-terminal-white">
                  Education
                </h3>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-terminal-white font-semibold">
                    B.E. Computer Science Engineering
                  </p>
                  <p className="text-terminal-gray7">
                    SJB Institute of Technology (2019-2023)
                  </p>
                  <p className="text-terminal-gray6">CGPA: 8.33/10</p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div
              className="card animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-center mb-4">
                <span className="text-terminal-gray5">{'>'}</span>
                <h3 className="ml-2 text-lg font-bold text-terminal-white">
                  Quick Facts
                </h3>
              </div>

              <ul className="space-y-2 text-sm text-terminal-gray8">
                <li>
                  <span className="text-terminal-gray5">{'>'}</span>{' '}
                  Full Stack Backend Engineer
                </li>

                <li>
                  <span className="text-terminal-gray5">{'>'}</span>{' '}
                  Microservices Architecture Enthusiast
                </li>

                <li>
                  <span className="text-terminal-gray5">{'>'}</span>{' '}
                  Cloud &amp; DevOps Focused
                </li>

                <li>
                  <span className="text-terminal-gray5">{'>'}</span>{' '}
                  Clean Code Advocate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
