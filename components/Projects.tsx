import React, { useState } from 'react'

const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>('fuel-delivery')

  const projects = [
    {
      id: 'fuel-delivery',
      name: 'Fuel Delivery Application',
      subtitle: 'Full-Stack Fuel Delivery Platform',
      description: 'A comprehensive fuel delivery platform enabling customers to place orders and administrators to manage inventory and deliveries.',
      tech: ['Java', 'Spring Boot', 'Angular', 'JWT', 'MySQL'],
      github: 'GitHub',
      features: [
        'REST APIs for fuel ordering and inventory management',
        'Role-based access control for customers and admins',
        'JWT-based authentication and authorization',
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-terminal-gray3 relative z-0">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-amber to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-white mb-2">
            <span className="text-terminal-gray5">~/</span>projects
          </h2>
          <div className="w-20 h-1 bg-terminal-gray5"></div>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              {/* Project card */}
              <div
                className="card cursor-pointer transition-all duration-300 hover:border-terminal-gray5"
                onClick={() =>
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-gray5">
                        {expandedId === project.id ? '▼' : '▶'}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-terminal-white">
                          {project.name}
                        </h3>
                        <p className="text-terminal-gray7 text-sm">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 border rounded bg-terminal-gray1 transition-all duration-300"
                      style={{
                        borderColor: ['#00d4ff', '#0088ff', '#bb86fc', '#ffa500', '#00ff88'][idx % 5],
                        color: ['#00d4ff', '#0088ff', '#bb86fc', '#ffa500', '#00ff88'][idx % 5],
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-terminal-gray8 text-sm mb-4">
                  {project.description}
                </p>

                {/* Expanded Content */}
                {expandedId === project.id && (
                  <div className="mt-6 pt-6 border-t border-terminal-gray3 animate-fade-in">
                    {/* Features */}
                    <div className="mb-8">
                      <p className="text-xs uppercase tracking-widest font-semibold text-terminal-gray6 mb-4">
                        Key Features
                      </p>
                      <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-terminal-gray8 text-sm group"
                          >
                            <span className="text-terminal-gray5 mr-3 flex-shrink-0 group-hover:animate-pulse">
                              ▸
                            </span>
                            <span className="group-hover:text-terminal-white transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View on GitHub Button */}
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="btn btn-dark text-xs flex-1 text-center hover:shadow-lg hover:shadow-terminal-white/20 transition-all"
                      >
                        ⚡ View on {project.github}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-12 p-4 border border-dashed border-terminal-gray4 rounded text-terminal-gray7 text-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <span className="text-terminal-gray5">{'> '}</span>
          More projects available on GitHub. Showcasing a Fuel Delivery Application with full-stack implementation, microservices patterns, and cloud deployment strategies.
        </div>
      </div>
    </section>
  )
}

export default Projects
