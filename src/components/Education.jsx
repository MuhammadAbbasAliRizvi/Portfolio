import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { School, SelfImprovement } from '@mui/icons-material';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: 'DAE in CIT (Computer Information Technology)',
      institute: 'Government Polytechnic Institute',
      duration: '2023 - Present (1st Year)',
      status: 'Currently Enrolled',
      description: 'Pursuing Diploma of Associate Engineering in Computer Information Technology.'
    },
    {
      icon: <SelfImprovement sx={{ fontSize: 40 }} />,
      title: 'Self-Learning & Online Courses',
      institute: 'YouTube, Udemy, FreeCodeCamp',
      duration: '2022 - Present',
      status: 'Continuous Learning',
      description: 'Web Development (HTML, CSS, JavaScript, PHP), Design (Photoshop, Illustrator)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box id="education" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
              Education
            </Typography>
            <Typography variant="h6" component="p" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
              My learning journey
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderLeft: '4px solid',
                      borderColor: 'primary.main',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: 'primary.main', mr: 2 }}>
                        {edu.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" component="h3" gutterBottom>
                          {edu.title}
                        </Typography>
                        <Typography variant="h6" component="p" color="primary" fontWeight="600">
                          {edu.institute}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {edu.duration} • {edu.status}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {edu.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;