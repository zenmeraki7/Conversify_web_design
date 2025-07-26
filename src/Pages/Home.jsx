import React from 'react';
import { Container, Typography, Button, Card, Box, Grid } from '@mui/material';
import { FaSearch, FaSpinner, FaArrowRight } from 'react-icons/fa';
import NavbarComponent from '../Components/NavbarComponent';

function Home() {
    return (
        <div>
            <NavbarComponent />

            {/* Card Section */}
            <Container maxWidth="md" sx={{ mt: 6 }}>
                <Card sx={{ p: 4 }}>
                    {/* Search Button */}
                    <Box display="flex" alignItems="center" mb={3}>
                        <Button
                            variant="contained"
                            size="small"
                            color="success"
                            sx={{ minWidth: '40px', minHeight: '40px', p: 1, mr: 2 }}
                        >
                            <FaSearch />
                        </Button>
                        <Typography variant="h6" fontWeight="bold">
                            Conversify
                        </Typography>
                    </Box>
                    <Box component="hr" my={2} />

                    {/* HERO, FEATURES, etc. */}
                    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3} py={2}>
                        <Typography variant="body1">HERO</Typography>
                        <Typography variant="body1">FEATURES</Typography>
                        <Typography variant="body1">HOW IT WORKS</Typography>
                        <Typography variant="body1">FAQ</Typography>
                    </Box>

                    <Typography variant="h3" fontWeight="bold" mt={4} textAlign={{ xs: 'center', md: 'left' }}>
                        Discover Effortless Chatting with Conversify
                    </Typography>
                    <Typography mt={3}>
                        Transform your platform with Conversify, where intelligent, seamless chat experiences empower users to connect, engage, and communicate more effectively than ever before. Boost engagement with smooth, real-time messaging—only with Conversify.
                    </Typography>
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<FaSpinner className="spin" />}
                        sx={{ mt: 2, px: 2, py: 1.5, width: 160, fontWeight: 'bold', whiteSpace: 'nowrap' }}
                    >
                        GET THE APP
                    </Button>

                    <Box mt={5} p={4} borderRadius={2} sx={{ backgroundColor: 'success.main', color: 'white' }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Ready to Make Conversations Effortless with Conversify?
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nisi, accusantium facilis iusto.
                        </Typography>
                        <Button variant="outlined" color="inherit" sx={{ mt: 3, px: 4, py: 1.5, fontWeight: 'bold' }}>
                            WATCH DEMO
                        </Button>
                    </Box>
                </Card>
            </Container>

            {/* Next Section */}
            <Box
                sx={{
                    width: '100%',
                    mt: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '500px',
                    backgroundColor: 'success.main',
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        py: 4,
                        px: 3,
                        borderRadius: 2,
                        background: 'linear-gradient(to right, #198754, #4ade80)',
                        boxShadow: 3,
                        color: 'white',
                    }}
                >
                    <Typography textAlign="center" variant="subtitle1" gutterBottom>
                        PARTNER WITH EXPERTS
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" fontWeight="bold">
                                Ready To Chat Smarter With Conversify?
                            </Typography>
                            <Typography mt={2} variant="body1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio pariatur cupiditate sunt dolore deleniti a totam aliquid amet quibusdam minus ipsum iste tempore inventore sit voluptate temporibus voluptatum iusto?
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            display="flex"
                            alignItems="flex-start"
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: 'white', color: 'success.main', mt: 3, px: 4, py: 2, borderRadius: '999px', fontWeight: 'bold' }}
                                endIcon={<FaArrowRight />}
                            >
                                Get Started Today
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default Home;
