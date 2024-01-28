// Portfolio.js

import React, { useState } from 'react';
import '../styles/Portfolio.css'; // Don't forget to link your CSS file

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="portfolio-container">
      <div className="text-center">
        <h3 className="gradient-text">My Complete Projects</h3>
        <h1>My Latest Projects</h1>
        <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</h3>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="im_portfolio text-center mt--40">
            <div className="thumbnail_inner">
              <div className="thumbnail">
                <img src="../images/vicky4.jpg" alt="Another Project" />
                <div className="overlay"></div>
                <div className="content">
                  <div className="inner">
                    <div className="portfolio_heading">
                      <h4 className="title">Another Project</h4>
                    </div>
                    <div className="portfolio_hover">
                      <div className="category_list">
                        <button onClick={openModal}>View More</button>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add more portfolio boxes as needed */}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-grid">
              <div className="modal-images">
                <img src="../images/vicky4.jpg" alt="Project Image 1" />
                <img src="../images/vicky5.jpg" alt="Project Image 2" />
                {/* Add more images as needed */}
              </div>
              <div className="modal-info">
                <h2>Project Title</h2>
                <p>Project description goes here.</p>
                <p>Additional project details...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
