import React, { useState } from 'react';
import '../styles/Portfolio.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { ProjectData } from '../components/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import  Zoom  from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (projectIndex) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ProjectData[currentProjectIndex].ImageSrc.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + ProjectData[currentProjectIndex].ImageSrc.length) % ProjectData[currentProjectIndex].ImageSrc.length
    );
  };

  return (
    <section id="portfolio">
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          <div className="text-center">
            <h3 className="gradient-text">My Complete Projects</h3>
            <h1>My Latest Projects</h1>
            <h3>Unveiling a tapestry of skills and achievements in 'My Latest Projects' – witness the culmination of passion and proficiency.</h3>
          </div>

          <div className="portfolio-row">
            {ProjectData.map((project, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={project.id}>
                <div className="im_portfolio text-center mt--40">
                  <div className="thumbnail_inner">
                    <div className="thumbnail">
                      <img className="Portimage" src={project.ThumbnailSrc} alt={project.ProjectName} />
                      <div className="overlay"></div>
                      <div className="content">
                        <div className="inner">
                          <div className="portfolio_heading">
                            <h4 className="title">{project.ProjectName}</h4>
                          </div>
                          <div className="portfolio_hover">
                            <div className="category_list">
                              <button
                                className="btn btn-primary"
                                onClick={() => openModal(index)}
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                View More
                              </button>
                            </div>
                            <p>{project.ProjectTitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bootstrap Modal */}
        <Modal show={isModalOpen} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Project Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <div className="modal-images">
                    {/* Use Zoom component from react-medium-image-zoom */}
                    <Zoom
                      overlayBgColorEnd="#0c0c0c"
                      overlayBgColorStart="#0c0c0c"
                    >
                      <img
                        alt={ProjectData[currentProjectIndex].ProjectName}
                        src={ProjectData[currentProjectIndex].ImageSrc[currentImageIndex]}
                        style={{ width: '100%' }}
                      />
                    </Zoom>
                  </div>
                  <div className="modal-navigation">
                    <button className="btn btn-secondary" onClick={handlePrevImage}>
                      <FaChevronLeft /> Previous
                    </button>
                    <button className="btn btn-secondary" onClick={handleNextImage}>
                      Next <FaChevronRight />
                    </button>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="modal-info">
                    {/* Display project data on the right side */}
                    <h3>{ProjectData[currentProjectIndex].ProjectName}</h3>
                    <p>Description: {ProjectData[currentProjectIndex].ProjectDecr}</p>
                    <p>Technology: {ProjectData[currentProjectIndex].Technology}</p>
                    <p>Date: {ProjectData[currentProjectIndex].Date}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>

        {isModalOpen && <div className="modal-backdrop fade show" style={{ zIndex: '1040' }}></div>}
      </div>
    </section>
  );
};

export default Portfolio;
