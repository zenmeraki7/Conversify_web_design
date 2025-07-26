import React from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import NavbarComponent from '../Components/NavbarComponent';
import ConversifyImg from '../assets/ConversifyImg.png';

function ConversifyPage() {
  return (
    <Box>

      {/* Navbar */}
      <NavbarComponent />




      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        bgcolor="#f8f9fa"
        mt={5}
        px={2}
      >
        <Box>
          <Typography variant="h3" fontWeight="bold" color="success.main">
            Conversify Chat Console
          </Typography>
          <Typography variant="h6" color="text.secondary" mt={2}>
            Streamline communication with a smart, scalable chat platform.
          </Typography>
        </Box>
      </Box>




      <Box
        sx={{
          width: '100%',
          maxWidth: '900px',
          mx: 'auto',
          mt: 4,
          px: 2,
        }}
      >
        {/* Image */}
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            p: 2,
            borderRadius: '16px',
          }}
        >
          <img
            src={ConversifyImg}
            alt="Conversify Chat"
            style={{ width: '100%', borderRadius: '12px' }}
          />
        </Paper>





        {/* How It Works */}
        <Box py={6}>
          <Typography variant="h4" fontWeight="bold" color="success.main" textAlign="center" mb={4}>
            How It Works
          </Typography>

          {/* Intro Card */}
          <Paper
            elevation={4}
            sx={{
              mb: 5,
              p: 3,
              borderRadius: 3,
              backgroundColor: '#e8f5e9',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" color="success.main" fontWeight={600}>
              Discover how Conversify simplifies your communication in four easy steps.
            </Typography>
          </Paper>

          {/* Step 1 */}
          <Paper className="shadow-step hover-step" sx={{ p: 2, mb: 3 }}>
            <Box display="flex" gap={2} alignItems="flex-start">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <FaCheck size={18} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  1. Easy Integration
                </Typography>
                <Typography variant="body2">
                  Connect Conversify with your platform using simple APIs or SDKs — no complex setup required.
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Step 2 */}
          <Paper className="shadow-step hover-step" sx={{ p: 2, mb: 3 }}>
            <Box display="flex" gap={2} alignItems="flex-start">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: 'success.main',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <FaCheck size={18} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  2. Seamless Onboarding
                </Typography>
                <Typography variant="body2">
                  Customize your chat environment with user roles, permissions, and branding in just a few clicks.
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Step 3 */}
          <Paper className="shadow-step hover-step" sx={{ p: 2, mb: 3 }}>
            <Box display="flex" gap={2} alignItems="flex-start">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: '#fd7e14',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <FaCheck size={18} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  3. Smart Messaging Engine
                </Typography>
                <Typography variant="body2">
                  Enable real-time conversations with auto-replies, AI assistance, and multi-user support.
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Step 4 */}
          <Paper className="shadow-step hover-step" sx={{ p: 2, mb: 3 }}>
            <Box display="flex" gap={2} alignItems="flex-start">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: '#dc3545',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <FaCheck size={18} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  4. Real-Time Insights & Notifications
                </Typography>
                <Typography variant="body2">
                  Track message activity, user engagement, and receive instant alerts to stay in control.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>





      {/* Tutorial Video */}
      <Box
        height="500px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: '#EFF9F9', mt: 4 }}
      >
        <iframe
          width="800"
          height="350"
          src="https://www.youtube.com/embed/014uZYpNdMY?si=f9g__CkxH8KlqBO8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>

      {/* Partner Section */}
      <Box
        mt={6}
        sx={{
          backgroundColor: '#198754',
          py: 6,
          px: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '500px',
        }}
      >
        <Box
          className="text-white"
          sx={{
            width: '100%',
            maxWidth: '1200px',
            background: 'linear-gradient(to right, #198754, #4ade80)',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            p: { xs: 3, sm: 4 },
          }}
        >
          <Typography textAlign="center" variant="subtitle1" mb={3}>
            PARTNER WITH EXPERTS
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Ready To Chat Smarter With Conversify?</Typography>
              <Typography mt={2} variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio pariatur cupiditate sunt dolore deleniti a totam aliquid amet quibusdam minus ipsum iste tempore inventore sit voluptate temporibus voluptatum iusto?
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="flex-start">
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'white',
                  color: 'success.main',
                  fontWeight: 'bold',
                  px: 4,
                  py: 2,
                  borderRadius: '30px',
                  mt: { xs: 2, md: 4 },
                  boxShadow: 3,
                  '&:hover': {
                    bgcolor: '#f1f1f1',
                  },
                }}
              >
                Get Started Today <FaArrowRight style={{ marginLeft: '8px' }} />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default ConversifyPage;
