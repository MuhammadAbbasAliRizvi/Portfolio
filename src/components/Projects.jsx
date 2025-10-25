import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
} from '@mui/material';

// ✅ Proper image imports
import pro1Pic from '../assets/pics/user.png';
import pro2Pic from '../assets/pics/pr2.png';
import pro3Pic from '../assets/pics/pr3.png';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Asmit1 - React & Vite Web App',
      description: 'A modern React application built with Vite featuring responsive design and interactive UI components.',
      longDescription:
        'A comprehensive React application showcasing modern web development practices with Vite, responsive design, and optimized performance. Built with latest React features and best practices.',
      image: pro1Pic,
      technologies: ['React', 'Vite', 'JavaScript', 'CSS3'],
      category: 'react',
      liveLink: 'https://asmit1.netlify.app/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/asmit1',
      features: ['Responsive Design', 'Modern UI', 'Fast Performance', 'SEO Optimized'],
    },
    {
      id: 2,
      title: 'Calculator App',
      description: 'A responsive calculator with animations and advanced mathematical functions.',
      longDescription:
        'Feature-rich calculator application with scientific functions, memory operations, and beautiful animations. Perfect for everyday calculations with elegant user interface.',
      image: pro2Pic,
      technologies: ['JavaScript', 'CSS3', 'HTML5'],
      category: 'javascript',
      liveLink: 'https://muhammadabbasalirizvi.github.io/calculate-repo/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/calculate-repo',
      features: ['Scientific Functions', 'Memory Operations', 'Responsive Design', 'Smooth Animations'],
    },
    {
      id: 3,
      title: 'User Data Dashboard',
      description: 'Interactive dashboard for managing and visualizing user data with real-time updates.',
      longDescription:
        'Comprehensive dashboard application for user data management with real-time updates and data visualization. Features include user management, data analytics, and interactive charts.',
      image: pro3Pic,
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'LocalStorage'],
      category: 'javascript',
      liveLink: 'https://muhammadabbasalirizvi.github.io/user-data/',
      codeLink: 'https://github.com/MuhammadAbbasAliRizvi/user-data',
      features: ['Data Visualization', 'Real-time Updates', 'User Management', 'Local Storage'],
    },
  ];

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{ p: 4, bgcolor: '#fafafa' }} id="projects">
      <Typography variant="h4" align="center" gutterBottom>
        🚀 My Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>

                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip key={index} label={tech} size="small" color="primary" variant="outlined" />
                    ))}
                  </Box>

                  <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleClickOpen(project)}
                      sx={{ flex: 1 }}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      href={project.liveLink}
                      target="_blank"
                      sx={{ flex: 1 }}
                    >
                      Live
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* ✅ Smooth animated Modal */}
      {selectedProject && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>{selectedProject.title}</DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              height="300"
              image={selectedProject.image}
              alt={selectedProject.title}
              sx={{ borderRadius: 2, mb: 2 }}
            />
            <Typography variant="body1" sx={{ mb: 2 }}>
              {selectedProject.longDescription}
            </Typography>
            <Typography variant="h6">Features:</Typography>
            <ul>
              {selectedProject.features.map((feature, i) => (
                <li key={i}>
                  <Typography variant="body2">{feature}</Typography>
                </li>
              ))}
            </ul>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button href={selectedProject.codeLink} target="_blank" color="primary">
              View Code
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Projects;
