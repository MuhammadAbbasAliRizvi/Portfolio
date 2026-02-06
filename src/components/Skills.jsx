import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const skills = [
    { name: "HTML5", percentage: 90, color: "#e34f26" },
    { name: "CSS3", percentage: 85, color: "#1572b6" },
    { name: "JavaScript", percentage: 75, color: "#f7df1e" },
    { name: "React", percentage: 70, color: "#61dafb" },
    { name: "Firebase", percentage: 85, color: "#caab1f" },
    { name: "NextJs", percentage: 80, color: "#e7e54c" },
    { name: "MogoDB", percentage: 50, color: "#777bb4" },
    { name: "Node.js", percentage: 40, color: "#439fca" },
    { name: "Exprees.js", percentage: 60, color: "#e217c0" },
  ];

  return (
    <Box id="skills" sx={{ py: 10, bgcolor: "#f8faff" }}>
      <Container maxWidth="lg">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"}>
          
          <motion.div variants={fadeUp}>
            <Typography
              variant="h2"
              textAlign="center"
              sx={{ fontWeight: 700, mb: 2, color: "#0B63E5" }}
            >
              Skills
            </Typography>
            <Typography variant="h6" textAlign="center" sx={{ mb: 6 }} color="text.secondary">
              Technologies I work with
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {skills.map((skill, i) => (
              <Grid item xs={12} md={6} key={i}>
                <motion.div variants={fadeUp}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      backdropFilter: "blur(6px)",
                      background: "rgba(255,255,255,0.8)",
                      transition: "0.3s",
                      "&:hover": { transform: "translateY(-5px)", boxShadow: 6 }
                    }}
                  >
                    <Typography variant="h6" fontWeight={700}>
                      {skill.name}
                    </Typography>

                    <Box sx={{ mt: 2, height: 10, bgcolor: "#e3e8ef", borderRadius: 5 }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.4 }}
                        style={{
                          height: "100%",
                          background: skill.color,
                          borderRadius: 5
                        }}
                      />
                    </Box>

                    <Typography sx={{ mt: 1 }} color="primary" fontWeight={600}>
                      {skill.percentage}%
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

export default Skills;
