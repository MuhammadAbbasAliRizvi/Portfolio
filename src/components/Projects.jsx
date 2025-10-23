import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Box,
  Modal,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Close, Launch, Code } from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';
import pro1Pic from '../assets/pics/user.png';
import pro2Pic from '../assets/pics/pr2.png';
import pro3Pic from '../assets/pics/pr3.png';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Asmit1 - React & Vite Web App',
      description: 'A modern React application built with Vite featuring responsive design and interactive UI components.',
      longDescription: 'A comprehensive React application showcasing modern web development practices with Vite, responsive design, and optimized performance. Built with latest React features and best practices.',
      image: 'user.png',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS3'],
      category: 'react',
      liveLink: 'https://asmit1.netlify.app/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/asmit1',
      features: ['Responsive Design', 'Modern UI', 'Fast Performance', 'SEO Optimized']
    },
    {
      id: 2,
      title: 'Calculator App',
      description: 'A responsive calculator with animations and advanced mathematical functions.',
      longDescription: 'Feature-rich calculator application with scientific functions, memory operations, and beautiful animations. Perfect for everyday calculations with elegant user interface.',
      image: 'pr2.png',
      technologies: ['JavaScript', 'CSS3', 'HTML5'],
      category: 'javascript',
      liveLink: 'https://muhammadabbasalirizvi.github.io/calculate-repo/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/calculate-repo',
      features: ['Scientific Functions', 'Memory Operations', 'Responsive Design', 'Smooth Animations']
    },
    {
      id: 3,
      title: 'User Data Dashboard',
      description: 'Interactive dashboard for managing and visualizing user data with real-time updates.',
      longDescription: 'Comprehensive dashboard application for user data management with real-time updates and data visualization. Features include user management, data analytics, and interactive charts.',
      image: 'pr3.png',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'LocalStorage'],
      category: 'javascript',
      liveLink: 'https://muhammadabbasalirizvi.github.io/user-data/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/user-data',
      features: ['Data Visualization', 'Real-time Updates', 'User Management', 'Local Storage']
    }
  ];

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'React', value: 'react' },
    { label: 'JavaScript', value: 'javascript' },
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
              Projects
            </Typography>
            <Typography variant="h6" component="p" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
              Here are some of my recent works
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Tabs
              value={filter}
              onChange={(e, newValue) => setFilter(newValue)}
              sx={{ mb: 4 }}
            >
              {categories.map((category) => (
                <Tab key={category.value} label={category.label} value={category.value} />
              ))}
            </Tabs>
          </Box>

          <Grid container spacing={3}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        height: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {project.technologies[0].charAt(0)}
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip key={tech} label={tech} size="small" variant="outlined" />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <Modal
              open={!!selectedProject}
              onClose={() => setSelectedProject(null)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{
                  backgroundColor: 'background.paper',
                  borderRadius: 12,
                  padding: 0,
                  maxWidth: 800,
                  width: '100%',
                  maxHeight: '90vh',
                  overflow: 'auto',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <IconButton
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      zIndex: 1,
                      bgcolor: 'background.paper',
                    }}
                    onClick={() => setSelectedProject(null)}
                  >
                    <Close />
                  </IconButton>
                  
                  <CardMedia
                    component="div"
                    sx={{
                      height: 300,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontSize: '4rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {selectedProject.technologies[0].charAt(0)}
                  </CardMedia>
                  
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h4" component="h3" gutterBottom>
                      {selectedProject.title}
                    </Typography>
                    
                    <Typography variant="body1" paragraph>
                      {selectedProject.longDescription}
                    </Typography>

                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {selectedProject.features.map((feature) => (
                        <Chip key={feature} label={feature} color="primary" variant="outlined" />
                      ))}
                    </Box>

                    <Typography variant="h6" gutterBottom>
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {selectedProject.technologies.map((tech) => (
                        <Chip key={tech} label={tech} color="secondary" />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Button
                        variant="contained"
                        startIcon={<Launch />}
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Code />}
                        href={selectedProject.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Projects;