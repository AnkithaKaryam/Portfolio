import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Backend & Languages',
      skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Hibernate', 'Spring Data JPA', 'Spring Security'],
    },
    {
      name: 'Databases & Data',
      skills: ['PostgreSQL', 'MySQL', 'Database Design', 'SQL Optimization'],
    },
    {
      name: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3)', 'Docker', 'Git', 'Maven', 'SonarQube'],
    },
    {
      name: 'Frontend Exposure',
      skills: ['Angular', 'Vue.js', 'HTML', 'CSS', 'React'],
    },
    {
      name: 'Testing & Tools',
      skills: ['JUnit', 'Mockito', 'Postman', 'Swagger', 'Kibana'],
    },
    {
      name: 'Messaging & Streaming',
      skills: ['Kafka', 'Message Queues', 'Event-Driven Architecture'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-terminal-gray3 relative z-0">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-blue to-transparent"></div>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-white mb-2">
            <span className="text-terminal-gray5">~/</span>skills
          </h2>
          <div className="w-20 h-1 bg-terminal-gray5"></div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="card animate-slide-up transition-all duration-300"
              style={{ animationDelay: `${0.1 + categoryIndex * 0.05}s`, borderColor: '#00d4ff' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = ['#00d4ff', '#0088ff', '#bb86fc', '#ffa500', '#00ff88', '#ff006e'][categoryIndex % 6])}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2d2d2d')}
            >
              <div className="flex items-center mb-4">
                <span className="text-terminal-gray5">{'>'}</span>
                <h3 className="ml-2 font-bold text-terminal-white text-sm uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill} className="flex items-center text-terminal-gray8 text-sm group">
                    <span 
                      className="mr-2 transition-colors"
                      style={{ color: ['#00d4ff', '#0088ff', '#bb86fc', '#ffa500', '#00ff88', '#ff006e'][skillIndex % 6] }}
                    >
                      ▸
                    </span>
                    <span className="group-hover:text-accent-cyan transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 card animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center mb-4">
            <span className="text-terminal-gray5">{'>'}</span>
            <h3 className="ml-2 font-bold text-terminal-white uppercase tracking-wider">
              Certifications & Training
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-terminal-gray5 mr-3">✓</span>
              <div>
                <p className="text-terminal-white font-semibold text-sm">Cognizant ADM RBP</p>
                <p className="text-terminal-gray7 text-xs">Jr. Software Engineer Certification (Java Core Cluster Skills)</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-terminal-gray5 mr-3">✓</span>
              <div>
                <p className="text-terminal-white font-semibold text-sm">Docker Fundamentals</p>
                <p className="text-terminal-gray7 text-xs">KodeKloud - Docker for the Absolute Beginner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
