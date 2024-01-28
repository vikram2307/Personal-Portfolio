// Service.js
import React from 'react';
import '../styles/Service.css';

const Service = () => {
  return (
    <section id="service">
    <div className="row rowser">
    <div className="col-md-12">  
    <div className="service-container">
      <div className="bracket-text">
      <h3 className="gradient-text">What I can do for you</h3>

        <h1>My Awesome Service</h1>
        <h4>Transforming dreams into reality – 'My Awesome Service' is here to make it happen for you!</h4>
      </div>

      <div className="service-box">
        <div className="service-item">
          <svg width="100px" height="100px" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.945 23h-2.016c-.439-3.064-2.865-5.49-5.929-5.929v-2.016c4.169.462 7.483 3.776 7.945 7.945zm4.017 0h-2.007c-.476-5.274-4.681-9.479-9.955-9.955v-2.007c6.378.486 11.476 5.584 11.962 11.962zm-8.062 0h-3.9v-3.9c1.958.398 3.502 1.942 3.9 3.9zm20.1 0h-10v-2h8v-15h-20v3h-2v-8h24v22z" fill="#3498db" />
          </svg>
          <h2>Frontend Development</h2>
          <p>Empowering businesses with sleek, responsive, and user-friendly designs – dive into my frontend development showcase.</p>
        </div>

        <div className="service-item">
          <svg width="100px" height="100px" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m2.394 15.759s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm0-3.113s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm10.271-9.455c-.246-.128-.471-.191-.692-.191-.223 0-.443.065-.675.191l-8.884 5.005c-.276.183-.414.444-.414.698 0 .256.139.505.414.664l8.884 5.006c.221.133.447.203.678.203.223 0 .452-.065.689-.203l8.884-5.006c.295-.166.451-.421.451-.68 0-.25-.145-.503-.451-.682zm-8.404 5.686 7.721-4.349 7.72 4.349-7.72 4.35z" fill="#e74c3c" />
          </svg>
          <h2>Backend Development</h2>
          <p>Efficiency in every line of code – my backend development portfolio is a testament to optimized performance.</p>
        </div>

        <div className="service-item">
          <svg width="100px" height="100px" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M5 22h4v-3h-9v-18h24v18h-10v3h4v1h-13v-1zm5-3v3h3v-3h-3zm13-17h-22v16h22v-16z" fill="#2ecc71" />
          </svg>
          <h2>Full-stack Development </h2>
          <p>Balancing the art of frontend elegance with backend efficiency – my full-stack portfolio is the epitome of digital harmony.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  </section>
  );
};

export default Service;
