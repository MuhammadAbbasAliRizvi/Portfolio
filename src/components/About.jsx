import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <Box id="about" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6 }}
            >
              About Me
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mb: 3, lineHeight: 1.8 }}
                >
                  I'm a passionate web developer based in Karachi, Pakistan currently pursuing my DAE in CIT (1st year). 
                  I specialize in front-end development with expertise in HTML5, CSS, and JavaScript.
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mb: 3, lineHeight: 1.8 }}
                >
                  Currently expanding my knowledge in advanced JavaScript, PHP, and React.js to become a full-stack developer. 
                  I also have foundational skills in Adobe Photoshop and Illustrator for design work.
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ lineHeight: 1.8 }}
                >
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and creating personal projects to enhance my skills.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'background.paper',
                  }}
                >
                  <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 3 }}>
                    Personal Information
                  </Typography>
                  
                  <Box sx={{ '& > div': { py: 1.5, borderBottom: '1px solid', borderColor: 'divider' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1" fontWeight="600">Name:</Typography>
                      <Typography variant="body1" color="text.secondary">Muhammad Abbas</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1" fontWeight="600">Location:</Typography>
                      <Typography variant="body1" color="text.secondary">Karachi, Pakistan</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1" fontWeight="600">Email:</Typography>
                      <Typography variant="body1" color="text.secondary">muhammadabbas0321299@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1" fontWeight="600">Phone:</Typography>
                      <Typography variant="body1" color="text.secondary">0318-2322363 / 03212997059</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body1" fontWeight="600">Freelance:</Typography>
                      <Typography variant="body1" color="primary.main">Available</Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;