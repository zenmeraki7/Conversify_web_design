import React from 'react'; import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaSpinner, FaArrowRight } from 'react-icons/fa';
import NavbarComponent from '../Components/NavbarComponent';




function Header() {
    return (
        <div>
            <NavbarComponent />

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
                    <button
                        className="btn btn-success d-flex align-items-center gap-2 fw-semibold px-2 py-2 rounded-3 text-nowrap"
                        style={{ width: '140px', overflow: 'hidden', whiteSpace: 'nowrap' }}
                    >
                        <FaSpinner className="spin" /> GET THE APP
                    </button>


                    <div className="mt-5 p-4 rounded-3 text-white" style={{ backgroundColor: '#198754' }}>
                        <h2 className="mb-2 fs-2">Ready to Make Conversations Effortless with Conversify?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nisi, accusantium facilis iusto.</p>
                        <button className="btn btn-outline-light mt-3 fw-semibold px-4 py-2">WATCH DEMO</button>
                    </div>
                </Card>
            </Container>

            {/* next Section */}
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


        </div>
    );
}

export default Header;
