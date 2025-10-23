import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Alert,
  Card,
  CardContent,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { Email, Phone, LocationOn, GitHub } from '@mui/icons-material';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // For demo purposes - in real app, use EmailJS
        console.log('Form submitted:', values);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSubmitStatus('success');
        resetForm();
      } catch (error) {
        setSubmitStatus('error');
      }
    },
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="h6" component="p" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
              Let's work together on your next project
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <motion.div variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ mb: 3 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 3 }}>
                      <LocationOn color="primary" sx={{ fontSize: 32 }} />
                      <Box>
                        <Typography variant="h6">Location</Typography>
                        <Typography color="text.secondary">Karachi, Pakistan</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card sx={{ mb: 3 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 3 }}>
                      <Email color="primary" sx={{ fontSize: 32 }} />
                      <Box>
                        <Typography variant="h6">Email</Typography>
                        <Typography color="text.secondary">
                          muhammadabbas0321299@gmail.com
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card sx={{ mb: 3 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 3 }}>
                      <Phone color="primary" sx={{ fontSize: 32 }} />
                      <Box>
                        <Typography variant="h6">Phone</Typography>
                        <Typography color="text.secondary">
                          0318-2322363 / 03212997059
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 3 }}>
                      <GitHub color="primary" sx={{ fontSize: 32 }} />
                      <Box>
                        <Typography variant="h6">GitHub</Typography>
                        <Typography color="text.secondary">
                          github.com/MuhammadAbbasAliRizvi
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <form onSubmit={formik.handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Your Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email Address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="subject"
                            name="subject"
                            label="Subject"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.subject && Boolean(formik.errors.subject)}
                            helperText={formik.touched.subject && formik.errors.subject}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="message"
                            name="message"
                            label="Message"
                            multiline
                            rows={4}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            size="large"
                            disabled={formik.isSubmitting}
                            sx={{ px: 4, py: 1.5 }}
                          >
                            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <Snackbar
          open={!!submitStatus}
          autoHideDuration={6000}
          onClose={() => setSubmitStatus(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSubmitStatus(null)}
            severity={submitStatus}
            sx={{ width: '100%' }}
          >
            {submitStatus === 'success' 
              ? 'Message sent successfully! I will get back to you soon.' 
              : 'Failed to send message. Please try again.'}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;