import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h6" component="div" color="primary.main" fontWeight="700">
            Muhammad Abbas
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Web Developer & Designer
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              href="https://github.com/MuhammadAbbasAliRizvi"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="mailto:muhammadabbas0321299@gmail.com"
              color="primary"
            >
              <Email />
            </IconButton>
          </Box>
          
          <Typography variant="body2" color="text.secondary" textAlign="center">
            © 2025 Muhammad Abbas. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;