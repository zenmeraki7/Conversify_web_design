import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import zenlogo from "../assets/zenlogo.png";
import { FaSearch } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaMobileAlt, FaCodeBranch, FaCloud, FaStar } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";



function Header() {
    return (
        <div>
            {/* Navbar */}
            <Navbar expand="lg" style={{ backgroundColor: '#EFF9F9' }} className="px-4">
                <Navbar.Brand href="#home" className="ms-5 d-flex align-items-center">
                    <img
                        alt=""
                        src={zenlogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <strong className="ms-2">ZEN MERAKI</strong>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-center">
                        <Nav.Link href="#home" style={{ fontWeight: 'bold', fontSize: "20px" }} className="text-dark">Home</Nav.Link>

                        <NavDropdown
                            title={<span style={{ fontWeight: 'bold', fontSize: "20px" }}>Expertise</span>}
                            id="expertise-dropdown"
                        >
                            <NavDropdown.Item
                                href="#design"
                                style={{
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                }}
                            >
                                Shopify App Development
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#development">Custom Shopify App Development</NavDropdown.Item>
                            <NavDropdown.Item href="#custom">Custom App Development</NavDropdown.Item>
                            <NavDropdown.Item href="#website">Website Development</NavDropdown.Item>
                            <NavDropdown.Item href="#digital">Digital Marketing</NavDropdown.Item>
                            <NavDropdown.Item href="#ecom">E-Commerce Account Management</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#about" style={{ fontWeight: 'bold', fontSize: "20px" }} className="text-dark">About Us</Nav.Link>
                        <Nav.Link href="#apps" style={{ fontWeight: 'bold', fontSize: "20px" }} className="text-dark">Apps</Nav.Link>
                        <Nav.Link href="#projects" style={{ fontWeight: 'bold', fontSize: "20px" }} className="text-dark">Projects</Nav.Link>
                        <Nav.Link href="#careers" style={{ fontWeight: 'bold', fontSize: "20px" }} className="text-dark">Careers</Nav.Link>
                    </Nav>

                    <div className="d-flex">
                        <Button
                            href="#contact"
                            variant="success"
                            className="d-none d-md-flex ms-2"
                            style={{
                                textTransform: 'none',
                                paddingLeft: '20px',
                                paddingRight: '20px',
                                fontWeight: 'bold',
                                boxShadow: 'none',
                                marginRight: "20px"
                            }}
                        >
                            CONTACT US
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            {/* Card Section */}
            <Container className="d-flex justify-content-start mt-5">
                <Card
                    style={{
                        width: '100%',
                        padding: '20px',
                    }}
                >
                    {/* Search Button */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '0px',
                        }}
                    >
                        <Button
                            variant="success"
                            size="sm"
                            style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '10px',
                            }}
                        >
                            <FaSearch className="rotating-icon" />
                        </Button>

                        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Conversify</span>
                    </div>

                    <hr />

                    {/* HERO, FEATURES, etc. */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '40px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            fontWeight: '-moz-initial',
                            fontSize: '18px',
                            width: '50%',
                            marginLeft: "400px"
                        }}
                    >
                        <span>HERO</span>
                        <span>FEATURES</span>
                        <span>HOW IT WORKS</span>
                        <span>FAQ</span>
                    </div>

                    <h1 style={{ fontWeight: 'bolder', marginTop: '40px', fontSize: "50px" }}>
                        Discover Effortless Chatting with Conversify
                    </h1>

                    <p style={{ marginTop: "20px" }}>Transform your platform with Conversify, where intelligent, seamless chat experiences empower users to connect, engage, and communicate more effectively than ever before.
                        Boost engagement with smooth, real-time messaging—only with Conversify.

                    </p>


                    <button
                        style={{
                            backgroundColor: '#198754',
                            color: 'white',
                            border: 'none',
                            padding: '12px 20px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '10px',
                            width: 'fit-content',
                            borderRadius: '8px',
                        }}
                        className="app-button"
                    >
                        <FaSpinner className="spin" />
                        GET THE APP
                    </button>


                    <div
                        style={{
                            marginTop: "70px",
                            backgroundColor: '#198754',
                            padding: '20px',
                            borderRadius: '8px',
                            color: 'white',
                        }}
                    >
                        <strong style={{ margin: "60px", fontSize: "40px", width: "30%" }}>Ready to Make Conversations Effortless with Conversify?</strong>
                        <p style={{ marginLeft: "60px" }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nisi, accusantium facilis iusto.</p>
                        <button
                            style={{
                                marginTop: "40px",
                                marginLeft: "50px",
                                backgroundColor: 'white',
                                color: 'black',
                                border: '2px solid black',
                                padding: '12px 24px',
                                fontSize: '16px',
                                fontWeight: '600',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                        >
                            WATCH DEMO
                        </button>

                    </div>

                </Card>
            </Container>



            <div
                style={{
                    backgroundColor: '#198754',
                    height: '600px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: "60px"
                }}
            >
                <div
                    style={{
                        width: '70%',
                        height: '500px',
                        background: 'linear-gradient(to right, #198754, #4ade80)',
                        padding: '40px',
                        borderRadius: '12px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        gap: '40px',
                    }}
                >
                    <h6 style={{ textAlign: 'center', margin: 0 }}>PARTNER WITH EXPERTS</h6>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: '30px',
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                                textAlign: 'left',
                                fontSize: '32px',
                                lineHeight: '1.3',
                            }}
                        >
                            <div>Ready To Chat Smarter With Conversify?</div>

                            <div
                                style={{
                                    fontWeight: 'normal',
                                    fontSize: '20px',
                                    marginTop: '16px',
                                    lineHeight: '1.6',
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odio
                                pariatur cupiditate sunt dolore deleniti a totam aliquid amet quibusdam
                                minus ipsum iste tempore inventore sit voluptate temporibus voluptatum iusto?
                            </div>
                        </div>


                        <div
                            style={{
                                flex: 1,
                                textAlign: 'right',
                                fontSize: '24px',
                            }}
                        >
                            <button
                                style={{
                                    backgroundColor: 'white',
                                    color: '#14b8a6',
                                    border: 'none',
                                    padding: '14px 28px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    borderRadius: '999px',
                                    boxShadow: '0 8px 20px rgba(20, 184, 166, 0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    cursor: 'pointer',
                                    marginLeft: "150px",
                                    marginTop: "100px"
                                }}
                            >
                                Get Started Today
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* footer */}

            <div className="container mt-5">
                <div className="row mb-3" style={{ marginTop: "90px" }}>

                    {/* Column 1  */}
                    <div className="col-md-3">
                        <strong style={{ fontSize: "20px" }}>ZENMERAKI</strong>
                        <p
                            className="mt-3"
                            style={{ textAlign: "justify", fontSize: "18px", lineHeight: "1.6" }}
                        >
                            We specialize in transforming ideas into impactful solutions. From cutting-edge applications to intuitive designs, our work reflects a commitment to excellence and innovation in all we deliver.
                        </p>
                        {/* Social Icons */}
                        <div className="mt-5" style={{ display: "flex", gap: "15px" }}>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "black" }}
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "black" }}
                            >
                                <FaLinkedinIn size={20} />
                            </a>
                            <a href="mailto:someone@example.com" style={{ color: "black" }}>
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Services */}
                    <div className="col-md-3 d-flex flex-column align-items-start justify-content-start">
                        <div style={{ fontWeight: 'bold', fontSize: '18px', marginLeft: "20px" }}>Services</div>
                        <div
                            style={{
                                width: '40px',
                                height: '3px',
                                backgroundColor: '#4ade80',
                                marginTop: '5px',
                                borderRadius: '2px',
                                marginBottom: '15px',
                                marginLeft: "20px"
                            }}
                        ></div>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "20px" }}>
                            <FaMobileAlt style={{ marginRight: '8px' }} />
                            <span>Mobile Development</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "20px" }}>
                            <FaCodeBranch style={{ marginRight: '8px' }} />
                            <span>Web Development</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: "20px" }}>
                            <FaCloud style={{ marginRight: '8px' }} />
                            <span>Cloud Solutions</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: "20px" }}>
                            <FaStar style={{ marginRight: '8px' }} />
                            <span>AI/ML Integration</span>
                        </div>
                    </div>

                    {/* Column 3 - Quick Links */}
                    <div className="col-md-3">
                        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                            Quick Links
                        </div>
                        <div
                            style={{
                                width: '40px',
                                height: '3px',
                                backgroundColor: '#4ade80',
                                marginTop: '5px',
                                borderRadius: '2px',
                                marginBottom: '15px',
                            }}
                        ></div>

                        <a href="#about" style={{ textDecoration: 'none', color: 'black', display: 'block', marginBottom: '8px' }}>
                            About Us
                        </a>
                        <a href="#services" style={{ textDecoration: 'none', color: 'black', display: 'block', marginBottom: '8px' }}>
                            Services
                        </a>
                        <a href="#careers" style={{ textDecoration: 'none', color: 'black', display: 'block', marginBottom: '8px' }}>
                            Careers
                        </a>
                        <a href="#contact" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                            Contact
                        </a>
                    </div>

                    {/* Column 4 - Contact Info Cards */}
                    <div className="col-md-3">
                        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                            Contact
                        </div>
                        <div
                            style={{
                                width: '40px',
                                height: '3px',
                                backgroundColor: '#4ade80',
                                marginTop: '5px',
                                borderRadius: '2px',
                                marginBottom: '15px',
                            }}
                        ></div>

                        {/* Location Card */}
                        <div style={{
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            padding: '15px',
                            marginBottom: '15px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <FaMapMarkerAlt style={{ color: '#4ade80', marginRight: '10px' }} />
                                <strong>Location</strong>
                            </div>
                            <div style={{ marginLeft: '25px' }}>Thrissur, Kerala</div>
                        </div>

                        {/* Email Card */}
                        <div style={{
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            padding: '15px',
                            marginBottom: '15px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <FaEnvelope style={{ color: '#4ade80', marginRight: '10px' }} />
                                <strong>Email</strong>
                            </div>
                            <div style={{ marginLeft: '25px' }}>official@zenmeraki.com</div>
                        </div>

                        {/* Phone Card */}
                        <div style={{
                            backgroundColor: 'white',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            padding: '15px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <FaPhoneAlt style={{ color: '#4ade80', marginRight: '10px' }} />
                                <strong>Phone</strong>
                            </div>
                            <div style={{ marginLeft: '25px' }}>+91 6282346108</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;
