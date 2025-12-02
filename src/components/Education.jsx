import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { School, SelfImprovement } from '@mui/icons-material';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fade = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const education = [
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: "DAE in CIT (Computer Information Technology)",
      institute: "Government Polytechnic Institute",
      duration: "2023 - Present (2nd Year)",
      status: "Currently Enrolled",
      description: "Studying Computer Information Technology with focus on development."
    },
    {
      icon: <SelfImprovement sx={{ fontSize: 40 }} />,
      title: "Self-Learning & Online Courses",
      institute: "YouTube · Udemy · FCC",
      duration: "2022 - Present",
      status: "Continuous Learning",
      description: "Frontend + Backend + Design tools like React, Firebase, PHP, Git."
    }
  ];

  return (
    <Box id="education" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={fade}>
            <Typography variant="h2" textAlign="center" sx={{ fontWeight: 700, color: "#0B63E5", mb: 2 }}>
              Education
            </Typography>
            <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
              My learning journey so far
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {education.map((edu, i) => (
              <Grid item xs={12} md={6} key={i}>
                <motion.div variants={fade}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      borderLeft: "5px solid #0B63E5",
                      background: "white",
                      transition: "0.3s",
                      "&:hover": { transform: "translateY(-5px)", boxShadow: 6 }
                    }}
                  >
                    <Box sx={{ display: "flex", mb: 2 }}>
                      <Box sx={{ color: "primary.main", mr: 2 }}>{edu.icon}</Box>
                      <Box>
                        <Typography variant="h5" fontWeight={700}>{edu.title}</Typography>
                        <Typography variant="h6" color="primary">{edu.institute}</Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {edu.duration} • {edu.status}
                    </Typography>

                    <Typography>{edu.description}</Typography>
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
