import React, { useState } from 'react'

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>('cognizant')

  const experiences = [
    {
      id: 'cognizant',
      company: 'Cognizant',
      position: 'Software Engineer',
      duration: 'Dec 2023 – Present',
      location: 'Bangalore, Karnataka',
      techStack: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'OpenFeign', 'Microservices'],
      responsibilities: [
        'Led backend development of the Intelligent Reinspection Advisor Transform Service, enabling AI-driven vehicle reinspection workflows that streamlined insurance claims processing and decision-making.',
        'Designed the Intelligent Reinspection Configuration Page, streamlining customer onboarding and configuration management workflows while enhancing usability and operational efficiency.',
        'Migrated legacy Predictive APIs into a scalable microservices architecture, reducing API response latency by 35%, improving service modularity, and enhancing deployment efficiency across enterprise platforms.',
        'Built and integrated distributed microservices using REST APIs and OpenFeign clients, enabling reliable inter-service communication and scalable enterprise workflow automation.',
      ],
    },
    {
      id: 'ethonotech',
      company: 'Ethonotech',
      position: 'Engineer Intern',
      duration: 'Oct 2022 – Dec 2022',
      location: 'Bangalore, Karnataka',
      techStack: ['Java', 'Spring', 'Angular', 'MySQL', 'JUnit', 'Mockito'],
      responsibilities: [
        'Performed vulnerability remediation and resolved SonarQube code quality issues, improving application maintainability and security compliance.',
        'Wrote unit tests using JUnit and Mockito, strengthening backend reliability and reducing regression defects.',
        'Collaborated with team members on application architecture, debugging, and clean coding practices in Agile development environments.',
        'Assisted in implementing and testing REST API endpoints and database operations using Java and Spring.',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-terminal-gray3 relative z-0">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-purple to-transparent"></div>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-white mb-2">
            <span className="text-terminal-gray5">~/</span>experience
          </h2>
          <div className="w-20 h-1 bg-terminal-gray5"></div>
        </div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="card animate-slide-up cursor-pointer transition-all duration-300"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-terminal-gray5 mr-2">{expandedId === exp.id ? '▼' : '▶'}</span>
                    <h3 className="text-lg md:text-xl font-bold text-terminal-white">
                      {exp.position} @ {exp.company}
                    </h3>
                  </div>
                  <p className="text-terminal-gray7 text-sm ml-6">
                    {exp.duration} • {exp.location}
                  </p>
                </div>
              </div>

              {/* Tech stack - always visible */}
              <div className="mt-4 ml-6">
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, idx) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border rounded bg-terminal-gray1 transition-all"
                      style={{
                        borderColor: ['#00d4ff', '#0088ff', '#bb86fc', '#ffa500', '#00ff88'][idx % 5],
                        color: ['#00d4ff', '#0088ff', '#bb86fc', '#ffa500', '#00ff88'][idx % 5],
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded content */}
              {expandedId === exp.id && (
                <div className="mt-6 ml-6 space-y-3 animate-fade-in">
                  <p className="text-terminal-gray6 text-xs uppercase tracking-widest font-semibold">Responsibilities</p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-terminal-gray8 text-sm">
                        <span className="text-terminal-gray5 mr-3 mt-1 flex-shrink-0">›</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* JSON-style footer */}
              <div className="mt-4 text-xs text-terminal-gray6 ml-6">
                {expandedId === exp.id ? '} ]' : '{ ... }'}
              </div>
            </div>
          ))}
        </div>

        {/* Key achievement */}
        <div className="mt-12 card animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center mb-4">
            <span className="text-terminal-gray5">★</span>
            <h3 className="ml-2 font-bold text-terminal-white">Key Achievement</h3>
          </div>
          <p className="text-terminal-gray8 text-sm">
            Recognized by leadership for delivering the Intelligent Reinspection Advisor Transform Service and configuration module with high quality and timely execution in a production environment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
