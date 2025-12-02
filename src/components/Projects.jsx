import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Grid,
  Box,
  IconButton
} from '@mui/material';
import {
  Close,
  GitHub,
  Launch,
  ArrowForward,
  Star
} from '@mui/icons-material';

// ✅ Proper image imports
import pro1Pic from '../assets/pics/ary.png';
import pro2Pic from '../assets/pics/Bablooz.png';
import pro3Pic from '../assets/pics/pr3.png';

// Import CSS
import './Projects.css';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Only showing 3 real projects
  const projects = [
    {
      id: 1,
      title: 'ARY Tech – Modern Website Clone',
      subtitle: 'React & Vite | Premium UI Clone',
      description: 'A modern and responsive clone of the ARY Tech website built using React and Vite, featuring a clean layout, smooth animations, and professional UI components.',
      longDescription:
        'This ARY Tech Clone is a fully responsive and visually accurate frontend replica of the original ARY Tech website. Built with React, Vite, and modern CSS, the project focuses on clean design, fast performance, and code reusability. It includes modern UI components, smooth animations, and responsive design principles.',
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
      year: '2024'
    },
    {
      id: 2,
      title: 'Bablooz Restaurant Website',
      subtitle: 'Frontend | Restaurant Business',
      description: 'A modern and responsive restaurant website showcasing menu items, deals, and online ordering UI with attractive food presentations.',
      longDescription:
        'Bablooz is a fully responsive restaurant website built for a real client. It features a clean UI for browsing food categories including pizza, burgers, BBQ, Chinese, and fast food. The project includes sections such as hero banner, menu highlights, location/contact details, and a visually appealing layout built for better user engagement and conversion.',
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
      year: '2023'
    },
    {
      id: 3,
      title: 'User Data Dashboard',
      subtitle: 'JavaScript | Data Management',
      description: 'Interactive dashboard for managing and visualizing user data with real-time updates and comprehensive data visualization.',
      longDescription:
        'Comprehensive dashboard application for user data management with real-time updates and data visualization. Features include user management, data analytics, interactive charts, and local storage integration for persistent data.',
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
      year: '2023'
    }
  ];

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
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

  return (
    <section className="projects-section" id="projects">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-container"
        >
          {/* Section Header */}
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="header-content"
            >
              <div className="section-title-wrapper">
                <span className="section-label">PORTFOLIO</span>
                <Typography 
                  variant="h2" 
                  className="section-title"
                >
                  Featured <span className="gradient-text">Projects</span>
                </Typography>
                <div className="title-underline">
                  <div className="underline-gradient"></div>
                </div>
              </div>
              <Typography 
                variant="subtitle1" 
                className="section-subtitle"
              >
                Showcasing my expertise through real-world projects and innovative solutions
              </Typography>
            </motion.div>
          </div>

          {/* Projects Grid - Only 3 Projects */}
          <Grid container spacing={4} className="projects-grid">
            {projects.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={project.id}
                className="grid-item"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -12 }}
                  className={`project-card-wrapper ${project.status === 'featured' ? 'featured-project' : ''}`}
                >
                  {/* Featured Badge */}
                  {project.status === 'featured' && (
                    <div className="featured-badge">
                      <Star className="star-icon" />
                      <span className="badge-text">FEATURED</span>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {getStatusText(project.status)}
                  </div>

                  {/* Year Badge */}
                  <div className="year-badge">
                    {project.year}
                  </div>

                  {/* Project Card */}
                  <Card className="project-card">
                    {/* Image Container */}
                    <div className="card-image-container">
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        className="card-image"
                      />
                      <div className="image-overlay" />
                      
                      {/* Quick View Button */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="quick-view-btn"
                        onClick={() => handleClickOpen(project)}
                      >
                        <ArrowForward />
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <CardContent className="card-content">
                      <div className="card-header">
                        <Typography variant="h6" className="project-title">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" className="project-subtitle">
                          {project.subtitle}
                        </Typography>
                      </div>
                      
                      <Typography variant="body2" className="project-description">
                        {project.description}
                      </Typography>

                      {/* Technologies */}
                      <div className="technologies-container">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <Chip 
                            key={index} 
                            label={tech} 
                            size="small" 
                            className="tech-chip"
                          />
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="more-tech">+{project.technologies.length - 4} more</span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="card-actions">
                        <Button
                          variant="contained"
                          className="view-details-btn"
                          onClick={() => handleClickOpen(project)}
                          fullWidth
                          endIcon={<ArrowForward />}
                        >
                          View Details
                        </Button>
                        <div className="action-buttons">
                          <Button
                            variant="outlined"
                            className="live-demo-btn"
                            href={project.liveLink}
                            target="_blank"
                            startIcon={<Launch />}
                          >
                            Live Demo
                          </Button>
                          <Button
                            variant="outlined"
                            className="source-code-btn"
                            href={project.codeLink}
                            target="_blank"
                            startIcon={<GitHub />}
                          >
                            Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>

                    {/* Glass Effect Overlay */}
                    <div className="glass-effect"></div>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="project-stats"
          >
            <div className="stat-item">
              <Typography variant="h3" className="stat-number">
                3
              </Typography>
              <Typography variant="body2" className="stat-label">
                Featured Projects
              </Typography>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Typography variant="h3" className="stat-number">
                100%
              </Typography>
              <Typography variant="body2" className="stat-label">
                Client Satisfaction
              </Typography>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Typography variant="h3" className="stat-number">
                15+
              </Typography>
              <Typography variant="body2" className="stat-label">
                Technologies Used
              </Typography>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Project Modal */}
      <AnimatePresence>
        {open && selectedProject && (
          <Dialog 
            open={open} 
            onClose={handleClose} 
            maxWidth="lg" 
            fullWidth
            className="project-modal"
            PaperProps={{ className: 'modal-paper' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="modal-content-wrapper"
            >
              {/* Close Button */}
              <IconButton
                className="modal-close-btn"
                onClick={handleClose}
              >
                <Close />
              </IconButton>

              <DialogTitle className="modal-title">
                <div className="modal-header">
                  <Typography variant="h3" className="modal-title-text">
                    {selectedProject.title}
                  </Typography>
                  <Chip 
                    label={selectedProject.category} 
                    className="modal-category"
                    size="small"
                  />
                </div>
                <Typography variant="subtitle1" className="modal-subtitle">
                  {selectedProject.subtitle}
                </Typography>
              </DialogTitle>
              
              <DialogContent className="modal-content">
                {/* Modal Image */}
                <div className="modal-image-container">
                  <CardMedia
                    component="img"
                    image={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                  <div className="image-gradient-overlay"></div>
                </div>
                
                {/* Project Info */}
                <div className="project-info-grid">
                  <div className="info-column">
                    <div className="info-section">
                      <Typography variant="h6" className="section-heading">
                        <span className="heading-icon">📋</span>
                        Project Overview
                      </Typography>
                      <Typography variant="body1" className="modal-description">
                        {selectedProject.longDescription}
                      </Typography>
                    </div>

                    {/* Key Features */}
                    <div className="features-section">
                      <Typography variant="h6" className="section-heading">
                        <span className="heading-icon">✨</span>
                        Key Features
                      </Typography>
                      <div className="features-list">
                        {selectedProject.features.map((feature, i) => (
                          <div key={i} className="feature-item">
                            <div className="feature-check">✓</div>
                            <Typography variant="body2" className="feature-text">
                              {feature}
                            </Typography>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="info-column">
                    {/* Technologies Used */}
                    <div className="technologies-section">
                      <Typography variant="h6" className="section-heading">
                        <span className="heading-icon">⚙️</span>
                        Technologies Used
                      </Typography>
                      <div className="technologies-grid">
                        {selectedProject.technologies.map((tech, index) => (
                          <div key={index} className="technology-item">
                            <div className="tech-dot"></div>
                            <Typography variant="body2" className="tech-name">
                              {tech}
                            </Typography>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="links-section">
                      <Typography variant="h6" className="section-heading">
                        <span className="heading-icon">🔗</span>
                        Project Links
                      </Typography>
                      <div className="links-container">
                        <Button
                          variant="contained"
                          className="modal-live-btn"
                          href={selectedProject.liveLink}
                          target="_blank"
                          fullWidth
                          startIcon={<Launch />}
                        >
                          Visit Live Website
                        </Button>
                        <Button
                          variant="outlined"
                          className="modal-code-btn"
                          href={selectedProject.codeLink}
                          target="_blank"
                          fullWidth
                          startIcon={<GitHub />}
                        >
                          View Source Code
                        </Button>
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="modal-stats">
                      <div className="modal-stat">
                        <Typography variant="h4" className="modal-stat-number">
                          {selectedProject.technologies.length}
                        </Typography>
                        <Typography variant="caption" className="modal-stat-label">
                          Technologies
                        </Typography>
                      </div>
                      <div className="modal-stat">
                        <Typography variant="h4" className="modal-stat-number">
                          {selectedProject.features.length}
                        </Typography>
                        <Typography variant="caption" className="modal-stat-label">
                          Features
                        </Typography>
                      </div>
                      <div className="modal-stat">
                        <Typography variant="h4" className="modal-stat-number">
                          {selectedProject.year}
                        </Typography>
                        <Typography variant="caption" className="modal-stat-label">
                          Year
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
              
              <DialogActions className="modal-actions">
                <Button 
                  onClick={handleClose}
                  className="close-modal-btn"
                  startIcon={<Close />}
                >
                  Close
                </Button>
                <Button 
                  href={selectedProject.liveLink} 
                  target="_blank"
                  className="modal-visit-btn"
                  variant="contained"
                  endIcon={<ArrowForward />}
                >
                  Visit Project
                </Button>
              </DialogActions>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;