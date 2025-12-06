import React from 'react';
import { Container, Grid, Typography, Button, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, GitHub, Download } from '@mui/icons-material';
import profilePic from '../assets/pics/Avatar.png';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme(); // Detect current MUI theme (light/dark)

  const isLight = theme.palette.mode === 'light';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { type: 'spring', stiffness: 400 },
    },
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: isLight
          ? 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'
          : 'linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: '64px',
        color: isLight ? theme.palette.text.primary : 'white',
      }}
    >
      {/* Subtle Animated Background Circles */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'absolute', inset: 0 }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: isLight
              ? 'rgba(58,134,255,0.15)'
              : 'rgba(255,255,255,0.1)',
            top: '10%',
            left: '15%',
            filter: 'blur(60px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: isLight
              ? 'rgba(131,56,236,0.12)'
              : 'rgba(255,255,255,0.05)',
            bottom: '10%',
            right: '10%',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section (Text) */}
          <Grid item xs={12} md={6}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    color: isLight ? theme.palette.primary.dark : 'white',
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  Muhammad Abbas
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: isLight
                      ? theme.palette.text.secondary
                      : 'rgba(255,255,255,0.9)',
                    mb: 3,
                  }}
                >
                  Mern Stack Developer based in Karachi, Pakistan
                  
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      size="large"
                      href="#projects"
                      startIcon={<Code />}
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                        '&:hover': {
                          bgcolor: theme.palette.primary.dark,
                        },
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                      }}
                    >
                      View Projects
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outlined"
                      size="large"
                      href="#contact"
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        '&:hover': {
                          bgcolor: theme.palette.primary.light + '20',
                        },
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                      }}
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="text"
                    startIcon={<GitHub />}
                    href="https://github.com/MuhammadAbbasAliRizvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    GitHub
                  </Button>

                  <Button
                    variant="text"
                    startIcon={<Download />}
                    href="/resume.pdf"
                    download
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.secondary.main,
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Section (Avatar) */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={avatarVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div animate={floatAnimation}>
                  <Avatar
                    src={profilePic}
                    alt="Muhammad Abbas"
                    sx={{
                      width: { xs: 250, md: 350 },
                      height: { xs: 250, md: 350 },
                      border: `4px solid ${theme.palette.primary.main}`,
                      boxShadow: `0 15px 40px ${theme.palette.primary.light}`,
                      transition: '0.3s',
                      cursor: 'pointer',
                    }}
                  />
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
