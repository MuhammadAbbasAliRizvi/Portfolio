import React from 'react';
import { Container, Grid, Typography, Button, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, GitHub, LinkedIn, Download } from '@mui/icons-material';
import profilePic from '../assets/pics/io.png';
import cvPdf from '../assets/cv/CV - Abbas.pdf';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme(); // Detect current MUI theme (light/dark)

  const downloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Muhammad_Abbas_CV.pdf'; // desired filename when downloaded
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

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

  // new subtitle text to animate letter-by-letter
  const subtitle = 'Mern Stack Developer based in Karachi, Pakistan';

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
                    // responsive CSS vars for typing animation
                    '--typing-width': { xs: '16ch', md: '18ch' },
                    '--typing-steps': { xs: '16', md: '18' },

                    // use CSS var instead of fixed widths so animation matches screen
                    // Color (green gradient) + background-clip to match green "View Projects" button
                    background: `linear-gradient(90deg, ${theme.palette.success.light || '#9af57a'}, ${theme.palette.success.main || '#4caf50'})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',

                    // Type effect: width animated with steps()
                    display: 'inline-block',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    borderRight: `3px solid ${theme.palette.success.main || '#4caf50'}`,
                    width: 'var(--typing-width)',

                    // Glow animation (text-shadow) with greenish glow
                    textShadow: `0 0 8px rgba(76,175,80,0.45)`,

                    // Keyframes (typing, blink caret, glow pulse)
                    '@keyframes typingHero': {
                      '0%': { width: '0ch' },
                      '100%': { width: 'var(--typing-width)' },
                    },
                    '@keyframes blinkCaretHero': {
                      '50%': { borderRightColor: 'transparent' },
                    },
                    '@keyframes glowHero': {
                      '0%': { textShadow: `0 0 6px rgba(76,175,80,0.35)` },
                      '50%': { textShadow: `0 0 18px rgba(126,217,87,0.9)` },
                      '100%': { textShadow: `0 0 6px rgba(76,175,80,0.35)` },
                    },

                    animation:
                      'typingHero 2.4s steps(var(--typing-steps),end) 0.4s forwards, blinkCaretHero 0.8s steps(2,start) 2s infinite, glowHero 2.4s ease-in-out 0.4s infinite',
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
                  component="div"
                  sx={{
                    // Hide -> we'll animate letters individually
                    overflow: 'hidden',
                    display: 'block',
                    whiteSpace: 'normal', // allow wrapping on small screens
                    color: isLight ? theme.palette.text.secondary : 'rgba(255,255,255,0.9)',
                    mb: 3,
                    // keyframe for individual letters
                    '@keyframes letterIn': {
                      '0%': { opacity: 0, transform: 'translateY(10px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                    // small subtle glow to differentiate from heading
                    textShadow: '0 1px 0 rgba(0,0,0,0.02)',
                  }}
                >
                  {subtitle.split('').map((ch, i) => (
                    <Box
                      component="span"
                      key={i}
                      sx={{
                        display: 'inline-block',
                        opacity: 0,
                        transform: 'translateY(10px)',
                        animation: `letterIn 0.45s ease forwards ${0.9 + i * 0.03}s`,
                      }}
                    >
                      {ch}
                    </Box>
                  ))}
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
                        // change "View Projects" button to green (success)
                        bgcolor: theme.palette.success.main,
                        color: 'white',
                        '&:hover': {
                          bgcolor: theme.palette.success.dark,
                        },
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        // Move effect on mount (subtle transform)
                        transform: 'translateY(8px)',
                        '@keyframes btnRise': {
                          '0%': { transform: 'translateY(8px)', opacity: 0 },
                          '100%': { transform: 'translateY(0)', opacity: 1 },
                        },
                        animation: 'btnRise 0.6s ease forwards 1.2s',
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
                        transform: 'translateY(8px)',
                        animation: 'btnRise 0.6s ease forwards 1.3s',
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
                    startIcon={<LinkedIn />}
                    href="https://www.linkedin.com/in/muhammad-abbas-708bb3366/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: '#0A66C2',
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    LinkedIn
                  </Button>

                  <Button
                    variant="text"
                    startIcon={<Download />}
                    onClick={downloadCV}
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
                      // make avatar square and circular across breakpoints
                      width: { xs: 220, md: 350 },
                      height: { xs: 220, md: 350 },
                      objectFit: 'cover',
                      border: `4px solid ${theme.palette.primary.main}`,
                      boxShadow: `0 15px 40px ${theme.palette.primary.light}`,
                      transition: '0.3s',
                      cursor: 'pointer',
                      borderRadius: '50%' // consistent circle
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