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
} from '@mui/material';
import { Menu, Close, LightMode, DarkMode } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleTheme, theme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
      scale: 1.1,
      color: "#3a86ff",
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2, height: '100%' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Typography variant="h6" sx={{ my: 2, fontWeight: 700, color: 'text.primary' }}>
          Muhammad Abbas
        </Typography>
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
                  textAlign: 'center',
                  color: 'text.primary',
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                <ListItemText primary={item.name} />
              </Button>
            </motion.div>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>B
        <AppBar
          component="nav"
          sx={{
            backgroundColor: scrolled ? '#635f5f07' : 'background.paper',
            backgroundImage: 'none',
            boxShadow: scrolled ? 3 : 1,
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
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
                  }}
                >
                  Muhammad Abbas
                </Typography>
              </motion.div>

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
                      sx={{ 
                        color: 'text.primary', 
                        fontWeight: 500,
                        fontSize: '0.95rem'
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={toggleTheme}
                    color="inherit"
                    aria-label="toggle theme"
                    sx={{ ml: 1 }}
                  >
                    {theme === 'light' ? <DarkMode /> : <LightMode />}
                  </IconButton>
                </motion.div>
              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={toggleTheme}
                    color="inherit"
                    aria-label="toggle theme"
                  >
                    {theme === 'light' ? <DarkMode /> : <LightMode />}
                  </IconButton>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    <Menu />
                  </IconButton>
                </motion.div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

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
                    right: 8,
                    top: 8,
                    zIndex: 1,
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
    </>
  );
};

export default Navbar;