
// pages / // 
  // Home.jsx // 

import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Home = ({ toggleTheme, theme }) => {
  return (
    <>
      <SEO />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box component="main">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </Box>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;