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
  Link,
  Divider,
  IconButton,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { 
  Email, 
  Phone, 
  LocationOn, 
  GitHub, 
  LinkedIn,
  Send,
  ContactMail,
  WhatsApp
} from '@mui/icons-material';
import { db } from '../Firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

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
        await addDoc(collection(db, 'messages'), {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          timestamp: serverTimestamp()
        });
        
        setSubmitStatus('success');
        resetForm();
      } catch (error) {
        console.error('Error:', error);
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 28 }} />,
      title: "Location",
      content: "Karachi, Pakistan",
      color: "#2563eb"
    },
    {
      icon: <Email sx={{ fontSize: 28 }} />,
      title: "Email",
      content: "muhammadabbas0321299@gmail.com",
      color: "#4f46e5",
      href: "mailto:muhammadabbas0321299@gmail.com"
    },
    {
      icon: <Phone sx={{ fontSize: 28 }} />,
      title: "Phone",
      content: "0318-2322363 / 03212997059",
      color: "#06d6a0",
      href: "tel:+923182322363"
    },
    {
      icon: <GitHub sx={{ fontSize: 28 }} />,
      title: "GitHub",
      content: "github.com/MuhammadAbbasAliRizvi",
      color: "#333",
      href: "https://github.com/MuhammadAbbasAliRizvi",
      target: "_blank"
    },
    {
      icon: <LinkedIn sx={{ fontSize: 28 }} />,
      title: "LinkedIn",
      content: "linkedin.com/in/muhammad-abbas-708bb3366/",
      color: "#0077b5",
      href: "https://linkedin.com/in/muhammad-abbas-708bb3366/",
      target: "_blank"
    }
  ];

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <Box textAlign="center" mb={2}>
              <ContactMail 
                sx={{ 
                  fontSize: 60, 
                  color: 'primary.main',
                  mb: 2,
                  background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }} 
              />
              <Typography 
                variant="h2" 
                component="h2" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1
                }}
              >
                Get In Touch
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  mb: 6,
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Have a project in mind? Let's collaborate and bring your ideas to life
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4} alignItems="stretch">
            {/* Left Side - Contact Info Cards */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 4,
                    background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Box 
                      component="span" 
                      sx={{ 
                        width: 4, 
                        height: 24, 
                        bgcolor: 'primary.main',
                        borderRadius: 1 
                      }} 
                    />
                    Contact Information
                  </Typography>
                  
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card 
                        sx={{ 
                          mb: 2,
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          borderLeft: `4px solid ${item.color}`,
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.12)'
                          }
                        }}
                        elevation={0}
                      >
                        <CardContent sx={{ py: 2.5, px: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                p: 1.5,
                                borderRadius: 2,
                                bgcolor: `${item.color}10`,
                                color: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              {item.icon}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Typography 
                                variant="subtitle2" 
                                sx={{ 
                                  fontWeight: 600,
                                  color: 'text.primary',
                                  mb: 0.5
                                }}
                              >
                                {item.title}
                              </Typography>
                              {item.href ? (
                                <Link
                                  href={item.href}
                                  target={item.target || "_self"}
                                  underline="hover"
                                  sx={{
                                    color: 'text.secondary',
                                    fontSize: '0.9rem',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                      color: 'primary.main'
                                    }
                                  }}
                                >
                                  {item.content}
                                </Link>
                              ) : (
                                <Typography 
                                  variant="body2" 
                                  sx={{ 
                                    color: 'text.secondary',
                                    fontSize: '0.9rem'
                                  }}
                                >
                                  {item.content}
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}

                  {/* WhatsApp Quick Action */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link
                      href="https://wa.me/923182322363"
                      target="_blank"
                      underline="none"
                    >
                      <Card
                        sx={{
                          mt: 3,
                          borderRadius: 3,
                          background: 'linear-gradient(135deg, #25D366, #128C7E)',
                          color: 'white',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)'
                          }
                        }}
                      >
                        <CardContent sx={{ py: 2.5, px: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <WhatsApp sx={{ fontSize: 32 }} />
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                Quick Chat on WhatsApp
                              </Typography>
                              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                03182322363 - Available for quick discussions
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                </Paper>
              </motion.div>
            </Grid>

            {/* Right Side - Contact Form */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Box 
                      component="span" 
                      sx={{ 
                        width: 4, 
                        height: 24, 
                        bgcolor: 'primary.main',
                        borderRadius: 1 
                      }} 
                    />
                    Send a Message
                  </Typography>

                  <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="name"
                          name="name"
                          label="Your Name"
                          variant="outlined"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.name && Boolean(formik.errors.name)}
                          helperText={formik.touched.name && formik.errors.name}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="email"
                          name="email"
                          label="Email Address"
                          type="email"
                          variant="outlined"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="subject"
                          name="subject"
                          label="Subject"
                          variant="outlined"
                          value={formik.values.subject}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.subject && Boolean(formik.errors.subject)}
                          helperText={formik.touched.subject && formik.errors.subject}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="message"
                          name="message"
                          label="Your Message"
                          multiline
                          rows={6}
                          variant="outlined"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.message && Boolean(formik.errors.message)}
                          helperText={formik.touched.message && formik.errors.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            size="large"
                            disabled={formik.isSubmitting}
                            startIcon={<Send />}
                            sx={{
                              px: 6,
                              py: 1.5,
                              borderRadius: 3,
                              fontWeight: 600,
                              fontSize: '1rem',
                              background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                              boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
                              },
                              transition: 'all 0.3s ease'
                            }}
                          >
                            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>

                  {/* Response Time Note */}
                  <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontStyle: 'italic'
                      }}
                    >
                      <Box 
                        component="span" 
                        sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: '#06d6a0',
                          borderRadius: '50%',
                          animation: 'pulse 2s infinite'
                        }} 
                      />
                      Typically responds within 24 hours
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <Snackbar
          open={!!submitStatus}
          autoHideDuration={6000}
          onClose={() => setSubmitStatus(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSubmitStatus(null)}
            severity={submitStatus}
            sx={{ 
              width: '100%',
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
            elevation={6}
          >
            {submitStatus === 'success' 
              ? '🎉 Message sent successfully! I\'ll get back to you within 24 hours.' 
              : '❌ Failed to send message. Please try again or email me directly.'}
          </Alert>
        </Snackbar>
      </Container>

      {/* Add CSS for pulse animation */}
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </Box>
  );
};

export default Contact;