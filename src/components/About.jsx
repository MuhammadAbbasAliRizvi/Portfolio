import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <Box id="about" sx={{ py: 10, bgcolor: "#f8faff" }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <Typography
              variant="h2"
              textAlign="center"
              sx={{ mb: 6, fontWeight: 700, color: "#0B63E5" }}
            >
              About Me
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {/* LEFT SIDE TEXT */}
            <Grid item xs={12} md={8}>
              <motion.div variants={fadeUp}>
                <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.8 }}>
                  I’m a passionate Web Developer from Karachi, currently studying
                  DAE in CIT (2nd Year). I build modern, clean and animated UIs
                  using React, Firebase & the MERN stack.
                </Typography>

                <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Skilled in HTML, CSS, JavaScript & React — and now learning backend
                  development to become a full-stack developer.
                </Typography>

                <Typography variant="h6" sx={{ lineHeight: 1.8 }}>
                  I enjoy exploring new technologies, contributing to open-source
                  and making projects that improve my skillset.
                </Typography>
              </motion.div>
            </Grid>

            {/* RIGHT SIDE INFO CARD */}
            <Grid item xs={12} md={4}>
              <motion.div variants={fadeUp}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderLeft: "5px solid #0B63E5",
                    borderRadius: 3,
                    background: "white",
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                    Personal Information
                  </Typography>

                  <Box sx={{ '& > div': { py: 1.5, borderBottom: "1px solid #eee" } }}>
                    <InfoRow label="Name" value="Muhammad Abbas" />
                    <InfoRow label="Location" value="Karachi, Pakistan" />
                    <InfoRow label="Email" value="muhammadabbas0321299@gmail.com" />
                    <InfoRow label="Phone" value="0318-2322363 / 03212997059" />
                    <InfoRow label="Freelance" value="Available" highlight />
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

const InfoRow = ({ label, value, highlight }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography fontWeight={600}>{label}:</Typography>
    <Typography color={highlight ? "primary.main" : "text.secondary"} fontWeight={highlight ? 700 : 400}>
      {value}
    </Typography>
  </Box>
);

export default About;
