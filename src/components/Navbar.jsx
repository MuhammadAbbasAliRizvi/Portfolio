import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  Box,
  Container,
  Avatar,
  Chip,
  Badge,
} from '@mui/material';
import { Menu, Close, LightMode, DarkMode, WhatsApp, Email } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleTheme, theme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: '' },
    { name: 'About', href: '#about', icon: '' },
    { name: 'Skills', href: '#skills', icon: '' },
    { name: 'Projects', href: '#projects', icon: '' },
    { name: 'Contact', href: '#contact', icon: '' },
  ];

  const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  const drawerVariants = {
    closed: {
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      color: "#2563eb",
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2, height: '100%', bgcolor: 'background.paper' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4, px: 2 }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgcolor: 'primary.main',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}
          >
            MA
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
              Muhammad Abbas
            </Typography>
            <Typography variant="caption" color="primary" sx={{ fontWeight: 500 }}>
              Full Stack Developer
            </Typography>
          </Box>
        </Box>
      </motion.div>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ width: '100%' }}
            >
              <Button
                href={item.href}
                sx={{ 
                  width: '100%', 
                  textAlign: 'left',
                  color: activeSection === item.name.toLowerCase() ? 'primary.main' : 'text.primary',
                  py: 1.5,
                  px: 3,
                  fontSize: '1.1rem',
                  justifyContent: 'flex-start',
                  gap: 2,
                  borderRadius: 0,
                  borderLeft: activeSection === item.name.toLowerCase() ? '4px solid' : 'none',
                  borderColor: 'primary.main',
                  bgcolor: activeSection === item.name.toLowerCase() ? 'rgba(37, 99, 235, 0.05)' : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(37, 99, 235, 0.1)',
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                  }
                }}
              >
                <Typography component="span" sx={{ fontSize: '1.2rem' }}>{item.icon}</Typography>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{ 
                    fontWeight: activeSection === item.name.toLowerCase() ? 600 : 400 
                  }} 
                />
              </Button>
            </motion.div>
          </ListItem>
        ))}
      </List>
      
      {/* Quick Contact in Drawer */}
      <Box sx={{ mt: 4, px: 3 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
          Quick Contact
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            href="https://wa.me/923182322363"
            target="_blank"
            sx={{
              bgcolor: 'success.main',
              color: 'white',
              '&:hover': { bgcolor: 'success.dark' }
            }}
          >
            <WhatsApp />
          </IconButton>
          <IconButton
            href="mailto:muhammadabbas0321299@gmail.com"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            <Email />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          component="nav"
          sx={{
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'background.paper',
            backgroundImage: 'none',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 1,
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            borderBottom: '1px solid',
            borderColor: scrolled ? 'divider' : 'transparent',
            py: scrolled ? 0.5 : 1,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: scrolled ? 0.5 : 1 }}>
              {/* Logo/Brand */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: 'primary.main',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                    }}
                  >
                    MA
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      component="a"
                      href="#home"
                      sx={{
                        textDecoration: 'none',
                        color: 'text.primary',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        cursor: 'pointer',
                        letterSpacing: '-0.5px',
                      }}
                    >
                      Muhammad Abbas
                    </Typography>
                    {scrolled && (
                      <Typography variant="caption" color="primary" sx={{ fontWeight: 500, ml: 0.5 }}>
                        Developer
                      </Typography>
                    )}
                  </Box>
                </Box>
              </motion.div>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={navItemVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      href={item.href}
                      startIcon={<Typography component="span">{item.icon}</Typography>}
                      sx={{ 
                        color: activeSection === item.name.toLowerCase() ? 'primary.main' : 'text.primary', 
                        fontWeight: activeSection === item.name.toLowerCase() ? 600 : 500,
                        fontSize: '0.95rem',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: activeSection === item.name.toLowerCase() ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                          width: '80%',
                          height: 2,
                          bgcolor: 'primary.main',
                          transition: 'transform 0.3s ease',
                          borderRadius: 1
                        },
                        '&:hover::after': {
                          transform: 'translateX(-50%) scaleX(1)'
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
                
                {/* Quick Contact Buttons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      href="https://wa.me/923182322363"
                      target="_blank"
                      size="small"
                      sx={{
                        bgcolor: 'success.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'success.dark' }
                      }}
                    >
                      <WhatsApp fontSize="small" />
                    </IconButton>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      href="#contact"
                      size="small"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                          transform: 'translateY(-1px)',
                          boxShadow: '0 6px 20px rgba(37, 99, 235, 0.3)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Hire Me
                    </Button>
                  </motion.div>
                </Box>
              </Box>

              {/* Mobile Menu Button */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{
                      color: 'text.primary',
                      bgcolor: 'action.hover',
                      borderRadius: 2,
                      p: 1
                    }}
                  >
                    {mobileOpen ? <Close /> : <Menu />}
                  </IconButton>
                </motion.div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: 280,
                backgroundColor: 'background.paper',
                borderLeft: '1px solid',
                borderColor: 'divider'
              },
            }}
          >
            <motion.div
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ height: '100%' }}
            >
              <Box sx={{ position: 'relative', height: '100%' }}>
                <IconButton
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: 16,
                    zIndex: 1,
                    bgcolor: 'action.hover',
                    '&:hover': { bgcolor: 'action.selected' }
                  }}
                  onClick={handleDrawerToggle}
                >
                  <Close />
                </IconButton>
                {drawer}
              </Box>
            </motion.div>
          </Drawer>
        )}
      </AnimatePresence>
      
      {/* Spacing for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;