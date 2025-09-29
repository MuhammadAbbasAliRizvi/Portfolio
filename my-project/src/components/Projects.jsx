import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Asmit1 - React & Vite Web App',
      description: 'A modern React application built with Vite featuring responsive design and interactive UI components.',
      tech: ['React', 'Vite', 'JavaScript', 'CSS3'],
      image: 'asmit1',
      liveLink: 'https://asmit1.netlify.app/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/asmit1' // Add your GitHub repo if available
    },
    {
      title: 'Calculator App',
      description: 'A responsive calculator with animations and advanced mathematical functions.',
      tech: ['JavaScript', 'CSS3', 'HTML5'],
      image: 'calculator',
      liveLink: 'https://muhammadabbasalirizvi.github.io/calculate-repo/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/calculate-repo'
    },
    {
      title: 'User Data Dashboard',
      description: 'Interactive dashboard for managing and visualizing user data with real-time updates.',
      tech: ['JavaScript', 'CSS3', 'HTML5', 'LocalStorage'],
      image: 'dashboard',
      liveLink: 'https://muhammadabbasalirizvi.github.io/user-data/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/user-data'
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={`/assets/images/${project.image}.png`} 
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    // Fallback agar image load na ho
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="project-image-fallback">
                  {project.image === 'asmit1' && '⚛️'}
                  {project.image === 'calculator' && '🧮'}
                  {project.image === 'dashboard' && '📊'}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a 
                    href={project.liveLink} 
                    className="btn btn-primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="btn btn-secondary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects