import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import ConversifyImg from '../assets/ConversifyImg.png'
import { FaCheck } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

function ConversifyPage() {
  return (
    <div>

      {/* navbar */}
      <NavbarComponent />


      <div className="d-flex justify-content-center align-items-center text-center  bg-light mt-5">
        <div>
          <h1 className="fw-bold display-4 text-success">Conversify Chat Console</h1>
          <p className="fs-5 text-muted mt-3">
            Streamline communication with a smart, scalable chat platform.
          </p>
        </div>
      </div>

      {/* Centered Image  */}
      <div className="d-flex justify-content-center mt-4">
        <img
          src={ConversifyImg}
          alt="Conversify Chat"
          className="img-fluid"
          style={{ width: '70%' }}
        />
      </div>


      {/* how to work */}
      <div className="container my-5">
        <h2 className="text-center fw-bold text-success mb-5">How It Works</h2>

        {/* Step 1 */}
        <div className="card mb-4 p-3 shadow-step hover-step">
          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#0d6efd',
                color: 'white',
                flexShrink: 0,
              }}
            >
              <FaCheck size={18} />
            </div>
            <div>
              <h5 className="fw-semibold">1. Easy Integration</h5>
              <p className="mb-0">Connect Conversify with your platform using simple APIs or SDKs — no complex setup required.</p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="card mb-4 p-3 shadow-step hover-step">
          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#198754',
                color: 'white',
                flexShrink: 0,
              }}
            >
              <FaCheck size={18} />
            </div>
            <div>
              <h5 className="fw-semibold">2. Seamless Onboarding</h5>
              <p className="mb-0">Customize your chat environment with user roles, permissions, and branding in just a few clicks.</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="card mb-4 p-3 shadow-step hover-step">
          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#fd7e14',
                color: 'white',
                flexShrink: 0,
              }}
            >
              <FaCheck size={18} />
            </div>
            <div>
              <h5 className="fw-semibold">3. Smart Messaging Engine</h5>
              <p className="mb-0">Enable real-time conversations with auto-replies, AI assistance, and multi-user support.</p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="card mb-4 p-3 shadow-step hover-step">
          <div className="d-flex align-items-start gap-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#dc3545',
                color: 'white',
                flexShrink: 0,
              }}
            >
              <FaCheck size={18} />
            </div>
            <div>
              <h5 className="fw-semibold">4. Real-Time Insights & Notifications</h5>
              <p className="mb-0">Track message activity, user engagement, and receive instant alerts to stay in control.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Tutorial */}

      <div
        style={{
          height: '500px',
          backgroundColor: '#EFF9F9',
          marginTop: "30px"
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <iframe width="800" height="350" src="https://www.youtube.com/embed/014uZYpNdMY?si=f9g__CkxH8KlqBO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>


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
  )
}

export default ConversifyPage