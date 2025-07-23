import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import zenlogo from "../assets/zenlogo.png";
import { FaSearch, FaSpinner, FaArrowRight, FaTwitter, FaLinkedinIn, FaEnvelope, FaMobileAlt, FaCodeBranch, FaCloud, FaStar, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function Header() {
    return (
        <div>
            {/* Navbar */}
            <Navbar expand="lg" style={{ backgroundColor: '#EFF9F9' }} className="px-4">
                <Navbar.Brand href="#home" className="ms-3 d-flex align-items-center">
                    <img src={zenlogo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
                    <strong className="ms-2">ZEN MERAKI</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-center text-center">
                        <Nav.Link href="#home" className="fw-bold fs-5 text-dark">Home</Nav.Link>
                        <NavDropdown title={<span className="fw-bold fs-5">Expertise</span>} id="expertise-dropdown">
                            <NavDropdown.Item href="#design" className="border-top border-bottom border-dark">Shopify App Development</NavDropdown.Item>
                            <NavDropdown.Item href="#development">Custom Shopify App Development</NavDropdown.Item>
                            <NavDropdown.Item href="#custom">Custom App Development</NavDropdown.Item>
                            <NavDropdown.Item href="#website">Website Development</NavDropdown.Item>
                            <NavDropdown.Item href="#digital">Digital Marketing</NavDropdown.Item>
                            <NavDropdown.Item href="#ecom">E-Commerce Account Management</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about" className="fw-bold fs-5 text-dark">About Us</Nav.Link>
                        <Nav.Link href="#apps" className="fw-bold fs-5 text-dark">Apps</Nav.Link>
                        <Nav.Link href="#projects" className="fw-bold fs-5 text-dark">Projects</Nav.Link>
                        <Nav.Link href="#careers" className="fw-bold fs-5 text-dark">Careers</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Button href="#contact" variant="success" className="d-none d-md-flex ms-2 fw-bold px-4" style={{ boxShadow: 'none' }}>CONTACT US</Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            {/* Card Section */}
            <Container className="mt-5">
                <Card className="p-4">
                    {/* Search Button */}
                    <div className="d-flex align-items-center mb-3">
                        <Button variant="success" size="sm" className="d-flex justify-content-center align-items-center me-2" style={{ width: '40px', height: '40px' }}>
                            <FaSearch className="rotating-icon" />
                        </Button>
                        <span className="fw-bold fs-5">Conversify</span>
                    </div>
                    <hr />

                    {/* HERO, FEATURES, etc. */}
                    <div className="d-flex flex-wrap justify-content-center gap-4 py-2">
                        <span>HERO</span>
                        <span>FEATURES</span>
                        <span>HOW IT WORKS</span>
                        <span>FAQ</span>
                    </div>

                    <h1 className="fw-bold mt-4 display-5 text-center text-md-start">
                        Discover Effortless Chatting with Conversify
                    </h1>
                    <p className="mt-3">
                        Transform your platform with Conversify, where intelligent, seamless chat experiences empower users to connect, engage, and communicate more effectively than ever before. Boost engagement with smooth, real-time messaging—only with Conversify.
                    </p>
                    <button className="btn btn-success d-flex align-items-center gap-2 fw-semibold px-4 py-2 rounded-3">
                        <FaSpinner className="spin" /> GET THE APP
                    </button>

                    <div className="mt-5 p-4 rounded-3 text-white" style={{ backgroundColor: '#198754' }}>
                        <h2 className="mb-2 fs-2">Ready to Make Conversations Effortless with Conversify?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nisi, accusantium facilis iusto.</p>
                        <button className="btn btn-outline-light mt-3 fw-semibold px-4 py-2">WATCH DEMO</button>
                    </div>
                </Card>
            </Container>

            {/* CTA Section */}
            <div className="w-100 d-flex align-items-center justify-content-center mt-5" style={{ backgroundColor: '#198754', minHeight: '500px' }}>
                <div className="container py-4 px-3 text-white" style={{ background: 'linear-gradient(to right, #198754, #4ade80)', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}>
                    <h6 className="text-center mb-4">PARTNER WITH EXPERTS</h6>
                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <h3 className="fs-2">Ready To Chat Smarter With Conversify?</h3>
                            <p className="mt-3 fs-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio pariatur cupiditate sunt dolore deleniti a totam aliquid amet quibusdam minus ipsum iste tempore inventore sit voluptate temporibus voluptatum iusto?
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
                            <button className="btn btn-light text-success fw-semibold px-4 py-3 rounded-pill shadow" style={{ marginTop: '30px' }}>
                                Get Started Today <FaArrowRight className="ms-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="container mt-5">
                <div className="row g-4 mt-5">
                    <div className="col-12 col-md-3">
                        <strong className="fs-5">ZENMERAKI</strong>
                        <p className="mt-3 text-justify fs-6 lh-lg">
                            We specialize in transforming ideas into impactful solutions. From cutting-edge applications to intuitive designs, our work reflects a commitment to excellence and innovation in all we deliver.
                        </p>
                        <div className="mt-4 d-flex gap-3">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                                <FaLinkedinIn size={20} />
                            </a>
                            <a href="mailto:someone@example.com" className="text-dark">
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <h6 className="fw-bold">Services</h6>
                        <div className="bg-success mt-2 mb-3" style={{ width: '40px', height: '3px', borderRadius: '2px' }}></div>
                        <div className="mb-2 d-flex align-items-center">
                            <FaMobileAlt className="me-2" /> Mobile Development
                        </div>
                        <div className="mb-2 d-flex align-items-center">
                            <FaCodeBranch className="me-2" /> Web Development
                        </div>
                        <div className="mb-2 d-flex align-items-center">
                            <FaCloud className="me-2" /> Cloud Solutions
                        </div>
                        <div className="d-flex align-items-center">
                            <FaStar className="me-2" /> AI/ML Integration
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <h6 className="fw-bold">Quick Links</h6>
                        <div className="bg-success mt-2 mb-3" style={{ width: '40px', height: '3px', borderRadius: '2px' }}></div>
                        <a href="#about" className="d-block text-dark text-decoration-none mb-2">About Us</a>
                        <a href="#services" className="d-block text-dark text-decoration-none mb-2">Services</a>
                        <a href="#careers" className="d-block text-dark text-decoration-none mb-2">Careers</a>
                        <a href="#contact" className="d-block text-dark text-decoration-none">Contact</a>
                    </div>
                    <div className="col-12 col-md-3">
                        <h6 className="fw-bold">Contact</h6>
                        <div className="bg-success mt-2 mb-3" style={{ width: '40px', height: '3px', borderRadius: '2px' }}></div>
                        <div className="bg-white shadow-sm p-3 mb-3 rounded">
                            <div className="d-flex align-items-center mb-1">
                                <FaMapMarkerAlt className="text-success me-2" /> <strong>Location</strong>
                            </div>
                            <div className="ps-4">Thrissur, Kerala</div>
                        </div>
                        <div className="bg-white shadow-sm p-3 mb-3 rounded">
                            <div className="d-flex align-items-center mb-1">
                                <FaEnvelope className="text-success me-2" /> <strong>Email</strong>
                            </div>
                            <div className="ps-4">official@zenmeraki.com</div>
                        </div>
                        <div className="bg-white shadow-sm p-3 rounded">
                            <div className="d-flex align-items-center mb-1">
                                <FaPhoneAlt className="text-success me-2" /> <strong>Phone</strong>
                            </div>
                            <div className="ps-4">+91 6282346108</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
