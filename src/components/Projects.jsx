import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

// Import icons
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaStar, FaTimes } from 'react-icons/fa';

// ✅ Proper image imports
import pro1Pic from '../assets/pics/ary.png';
import pro2Pic from '../assets/pics/Bablooz.png';
import pro3Pic from '../assets/pics/pr3.png';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [autoSlide, setAutoSlide] = useState(true);

  // Projects data with themes
  const projects = [
    {
      id: 1,
      title: 'ARY Tech – Modern Website Clone',
      subtitle: 'React & Vite | Premium UI Clone',
      description: 'A modern and responsive clone of the ARY Tech website built using React and Vite, featuring a clean layout, smooth animations, and professional UI components.',
      longDescription: 'This ARY Tech Clone is a fully responsive and visually accurate frontend replica of the original ARY Tech website. Built with React, Vite, and modern CSS, the project focuses on clean design, fast performance, and code reusability. It includes modern UI components, smooth animations, and responsive design principles.',
      image: pro1Pic,
      technologies: ['React', 'Vite', 'JavaScript', 'CSS3', 'Framer Motion', 'Responsive Design'],
      category: 'Web Development',
      liveLink: 'https://arytech-clone.netlify.app/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/ARYTECH-Clone',
      features: [
        'Fully Responsive Design',
        'Modern UI/UX Components',
        'Smooth Animations & Transitions',
        'SEO Optimized Structure',
        'Cross-browser Compatibility',
        'Fast Performance Loading'
      ],
      status: 'featured',
      year: '2024',
      theme: 'blue'
    },
    {
      id: 2,
      title: 'Bablooz Restaurant Website',
      subtitle: 'Frontend | Restaurant Business',
      description: 'A modern and responsive restaurant website showcasing menu items, deals, and online ordering UI with attractive food presentations.',
      longDescription: 'Bablooz is a fully responsive restaurant website built for a real client. It features a clean UI for browsing food categories including pizza, burgers, BBQ, Chinese, and fast food. The project includes sections such as hero banner, menu highlights, location/contact details, and a visually appealing layout built for better user engagement and conversion.',
      image: pro2Pic,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX', 'Bootstrap'],
      category: 'Frontend Development',
      liveLink: 'https://muhammadabbasalirizvi.github.io/Bablooz/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/Bablooz',
      features: [
        'Fully Responsive UI Design',
        'Attractive Food Menu Sections',
        'Client-Based Real Restaurant Layout',
        'Smooth Animations & Styling',
        'Clean and Modern Design',
        'Fast Loading Performance'
      ],
      status: 'completed',
      year: '2023',
      theme: 'yellow'
    },
    {
      id: 3,
      title: 'User Data Dashboard',
      subtitle: 'JavaScript | Data Management',
      description: 'Interactive dashboard for managing and visualizing user data with real-time updates and comprehensive data visualization.',
      longDescription: 'Comprehensive dashboard application for user data management with real-time updates and data visualization. Features include user management, data analytics, interactive charts, and local storage integration for persistent data.',
      image: pro3Pic,
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'LocalStorage', 'Charts.js', 'Data Visualization'],
      category: 'Web Application',
      liveLink: 'https://muhammadabbasalirizvi.github.io/user-data/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/user-data',
      features: [
        'Data Visualization with Charts',
        'Real-time Data Updates',
        'User Management System',
        'Local Storage Integration',
        'Interactive UI Components',
        'Export/Import Functionality'
      ],
      status: 'completed',
      year: '2023',
      theme: 'pink'
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, autoSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
    setAutoSlide(false);
  };

  const handleClose = () => {
    setOpenModal(false);
    setTimeout(() => setSelectedProject(null), 300);
    setAutoSlide(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'featured': return '#FFD700';
      case 'completed': return '#10B981';
      case 'ongoing': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'featured': return 'Featured Project';
      case 'completed': return 'Completed';
      case 'ongoing': return 'In Progress';
      default: return status;
    }
  };

  const currentProject = projects[currentSlide];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <div className="section-title-wrapper">
            <span className="section-label">PORTFOLIO</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="title-underline">
              <div className="underline-gradient"></div>
            </div>
          </div>
          <p className="section-subtitle">
            Showcasing my expertise through real-world projects and innovative solutions
          </p>
        </motion.div>

        {/* Single Slide Carousel Container */}
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {/* Navigation Buttons */}
            <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous project">
              <FaChevronLeft />
            </button>
            
            <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next project">
              <FaChevronRight />
            </button>

            {/* Single Active Slide */}
            <div className="carousel-slide-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  className={`carousel-slide theme-${currentProject.theme}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                >
                  {/* Status Badge */}
                  <div 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(currentProject.status) }}
                  >
                    {getStatusText(currentProject.status)}
                  </div>

                  {/* Year Badge */}
                  <div className="year-badge">
                    {currentProject.year}
                  </div>

                  {/* Featured Badge */}
                  {currentProject.status === 'featured' && (
                    <div className="featured-badge">
                      <FaStar className="star-icon" />
                      <span className="badge-text">FEATURED</span>
                    </div>
                  )}

                  {/* Project Card */}
                  <div className="project-card">
                    {/* Left Side - Text Content */}
                    <div className="card-content">
                      <div className="content-wrapper">
                        <div className="card-header">
                          <h3 className="project-title">{currentProject.title}</h3>
                          <p className="project-subtitle">{currentProject.subtitle}</p>
                        </div>
                        
                        <p className="project-description">{currentProject.description}</p>

                        {/* Technologies */}
                        <div className="technologies-container">
                          {currentProject.technologies.slice(0, 4).map((tech, index) => (
                            <span key={index} className="tech-chip">
                              {tech}
                            </span>
                          ))}
                          {currentProject.technologies.length > 4 && (
                            <span className="more-tech">+{currentProject.technologies.length - 4} more</span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="card-actions">
                          <button
                            className="view-details-btn"
                            onClick={() => handleClickOpen(currentProject)}
                          >
                            View Details
                            <span className="btn-icon">→</span>
                          </button>
                          <div className="action-buttons">
                            <a
                              href={currentProject.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="live-demo-btn"
                            >
                              <FaExternalLinkAlt className="btn-icon-left" />
                              Live Demo
                            </a>
                            <a
                              href={currentProject.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="source-code-btn"
                            >
                              <FaGithub className="btn-icon-left" />
                              Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="card-image-container">
                      <div className="image-wrapper">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="card-image"
                        />
                        <div className="image-overlay"></div>
                        
                        {/* Quick View Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="quick-view-btn"
                          onClick={() => handleClickOpen(currentProject)}
                          aria-label="Quick view"
                        >
                          <span className="quick-view-text">Quick View</span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Glass Effect Overlay */}
                    <div className="glass-effect"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project Counter */}
            <div className="project-counter">
              <span className="current-number">0{currentSlide + 1}</span>
              <span className="counter-divider">/</span>
              <span className="total-number">0{projects.length}</span>
            </div>

            {/* Carousel Dots */}
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className="dot-inner"></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="project-stats"
        >
          <div className="stat-item">
            <h3 className="stat-number">3</h3>
            <p className="stat-label">Featured Projects</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Client Satisfaction</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Technologies Used</p>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {openModal && selectedProject && (
          <div className="project-modal-overlay" onClick={handleClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="modal-close-btn"
                onClick={handleClose}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="modal-header">
                <div className="modal-title-wrapper">
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <span className="modal-category">{selectedProject.category}</span>
                </div>
                <p className="modal-subtitle">{selectedProject.subtitle}</p>
              </div>
              
              <div className="modal-content">
                {/* Modal Image */}
                <div className="modal-image-container">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                  <div className="image-gradient-overlay"></div>
                </div>
                
                {/* Project Info */}
                <div className="project-info-grid">
                  <div className="info-column">
                    <div className="info-section">
                      <h4 className="section-heading">
                        <span className="heading-icon">📋</span>
                        Project Overview
                      </h4>
                      <p className="modal-description">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="features-section">
                      <h4 className="section-heading">
                        <span className="heading-icon">✨</span>
                        Key Features
                      </h4>
                      <div className="features-list">
                        {selectedProject.features.map((feature, i) => (
                          <div key={i} className="feature-item">
                            <div className="feature-check">✓</div>
                            <p className="feature-text">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="info-column">
                    {/* Technologies Used */}
                    <div className="technologies-section">
                      <h4 className="section-heading">
                        <span className="heading-icon">⚙️</span>
                        Technologies Used
                      </h4>
                      <div className="technologies-grid">
                        {selectedProject.technologies.map((tech, index) => (
                          <div key={index} className="technology-item">
                            <div className="tech-dot"></div>
                            <p className="tech-name">{tech}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="links-section">
                      <h4 className="section-heading">
                        <span className="heading-icon">🔗</span>
                        Project Links
                      </h4>
                      <div className="links-container">
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-live-btn"
                        >
                          <FaExternalLinkAlt className="btn-icon-left" />
                          Visit Live Website
                        </a>
                        <a
                          href={selectedProject.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-code-btn"
                        >
                          <FaGithub className="btn-icon-left" />
                          View Source Code
                        </a>
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="modal-stats">
                      <div className="modal-stat">
                        <h4 className="modal-stat-number">{selectedProject.technologies.length}</h4>
                        <p className="modal-stat-label">Technologies</p>
                      </div>
                      <div className="modal-stat">
                        <h4 className="modal-stat-number">{selectedProject.features.length}</h4>
                        <p className="modal-stat-label">Features</p>
                      </div>
                      <div className="modal-stat">
                        <h4 className="modal-stat-number">{selectedProject.year}</h4>
                        <p className="modal-stat-label">Year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-actions">
                <button 
                  onClick={handleClose}
                  className="close-modal-btn"
                >
                  <FaTimes className="btn-icon-left" />
                  Close
                </button>
                <a 
                  href={selectedProject.liveLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-visit-btn"
                >
                  Visit Project
                  <span className="btn-icon">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;