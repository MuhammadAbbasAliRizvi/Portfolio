import React from 'react';
import { Container, Typography, Box, IconButton, Grid, Link, Chip } from '@mui/material';
import { GitHub, LinkedIn, Email, WhatsApp, Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    {
      icon: <GitHub />,
      href: "https://github.com/MuhammadAbbasAliRizvi",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: <LinkedIn />,
      href: "https://linkedin.com/in/muhammad-abbas-708bb3366/",
      label: "LinkedIn",
      color: "#0077b5"
    },
    {
      icon: <Email />,
      href: "mailto:muhammadabbas0321299@gmail.com",
      label: "Email",
      color: "#ea4335"
    },
    {
      icon: <WhatsApp />,
      href: "https://wa.me/923182322363",
      label: "WhatsApp",
      color: "#25D366"
    },
    {
      icon: <Phone />,
      href: "tel:+923182322363",
      label: "Phone",
      color: "#34B7F1"
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(79, 70, 229, 0.03) 100%)',
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 3 }}>
                  <Typography 
                    variant="h4" 
                    component="div" 
                    sx={{ 
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1
                    }}
                  >
                    Muhammad Abbas
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    Full Stack Developer & UI/UX Designer
                  </Typography>
                  <Chip
                    label="Available for Projects"
                    color="success"
                    size="small"
                    sx={{ 
                      fontWeight: 500,
                      borderRadius: 2
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      underline="hover"
                      sx={{
                        color: 'text.secondary',
                        transition: 'all 0.3s',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateX(4px)'
                        }
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Get In Touch
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Email sx={{ fontSize: 20, color: 'primary.main' }} />
                    <Link
                      href="mailto:muhammadabbas0321299@gmail.com"
                      underline="hover"
                      sx={{ color: 'text.secondary' }}
                    >
                      muhammadabbas0321299@gmail.com
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Phone sx={{ fontSize: 20, color: 'primary.main' }} />
                    <Link
                      href="tel:+923182322363"
                      underline="hover"
                      sx={{ color: 'text.secondary' }}
                    >
                      +92 318 2322363
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <WhatsApp sx={{ fontSize: 20, color: 'success.main' }} />
                    <Link
                      href="https://wa.me/923182322363"
                      target="_blank"
                      underline="hover"
                      sx={{ color: 'text.secondary' }}
                    >
                      WhatsApp: 0318-2322363
                    </Link>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2,
              mb: 4,
              mt: 4,
              pt: 4,
              borderTop: '1px solid',
              borderColor: 'divider'
            }}>
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href={link.href}
                    target={link.href.includes('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s',
                      '&:hover': {
                        backgroundColor: link.color,
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 20px ${link.color}40`
                      }
                    }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants}>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              textAlign="center"
              sx={{ 
                mt: 4,
                pt: 3,
                borderTop: '1px solid',
                borderColor: 'divider'
              }}
            >
              © {new Date().getFullYear()} Muhammad Abbas. All rights reserved.
              <br />
              <Typography component="span" variant="caption" sx={{ opacity: 0.7 }}>
                Designed & Developed with 
              </Typography>
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;