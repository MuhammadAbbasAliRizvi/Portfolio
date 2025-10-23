import React from 'react';
import { Container, Typography, Box, LinearProgress, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'HTML5', percentage: 90, notes: 'Semantic HTML, Forms, Accessibility', color: '#e34f26' },
    { name: 'CSS', percentage: 85, notes: 'Flexbox, Grid, Responsive Design', color: '#1572b6' },
    { name: 'JavaScript', percentage: 75, notes: 'DOM Manipulation, ES6+', color: '#f7df1e' },
    { name: 'Firebase', percentage: 90, notes: 'Auth, Firestore, Hosting', color: '#ffca28' },
    { name: 'PHP', percentage: 35, notes: 'Basic Backend', color: '#777bb4' },
    { name: 'React', percentage: 70, notes: 'Components, Hooks, State', color: '#61dafb' }
  ];

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
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
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
              sx={{ mb: 2 }}
            >
              Skills
            </Typography>
            <Typography 
              variant="h6" 
              component="p" 
              textAlign="center" 
              color="text.secondary" 
              sx={{ mb: 6 }}
            >
              Technologies I work with
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={6} key={skill.name}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" component="span" fontWeight="600">
                          {skill.name}
                        </Typography>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : { scale: 0 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 200,
                            delay: 1 + index * 0.1 
                          }}
                        >
                          <Typography 
                            variant="body1" 
                            color="primary.main" 
                            fontWeight="600"
                            sx={{
                              padding: '4px 12px',
                              backgroundColor: 'primary.light',
                              borderRadius: '12px',
                              color: 'white',
                            }}
                          >
                            {skill.percentage}%
                          </Typography>
                        </motion.div>
                      </Box>
                      
                      <Box 
                        sx={{ 
                          height: 10, 
                          backgroundColor: 'action.hover',
                          borderRadius: 5,
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        <motion.div
                          custom={skill.percentage}
                          variants={progressVariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                            borderRadius: 5,
                          }}
                        />
                      </Box>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                      >
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            mt: 1, 
                            fontStyle: 'italic',
                            textAlign: 'center'
                          }}
                        >
                          {skill.notes}
                        </Typography>
                      </motion.div>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.5 }}
          >
            <Paper
              elevation={1}
              sx={{
                p: 4,
                mt: 4,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom>
                Always Learning & Growing
              </Typography>
              <Typography variant="body1">
                Continuously expanding my skill set with new technologies and best practices
              </Typography>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;