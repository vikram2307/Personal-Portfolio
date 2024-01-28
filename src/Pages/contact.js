import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === 'email' ? e.target.value.toLowerCase() : e.target.value,
    });
    if (e.target.name === 'email' && !isTyping) {
      setIsTyping(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_09iyvpr', //  your service ID
        'template_zen7bkt', // template ID
        e.target,
        'XObsd--qAQdBu4uyE' // user ID
      );

      console.log(result);

      if (result.status === 200) {
        console.log('Email sent successfully');
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setError('');
        setShowSuccessMessage(true);

        // Hide success message after 10 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 10000);
      } else {
        setError('Error sending email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email: ', error);
      setError('Error sending email. Please try again.');
    }
  };

  return (
    <section id="contact">
      <div id="contact" className="fix">
        <div className="rn-contact-area pb--120 bg_color--8">
          <div className="contact-form--1">
            <div className="container">
              <div className="row row--35 align-items-start">
                <div className="col-lg-6 order-2 order-lg-1">
                  <div className="section-title text-left mb--50">
                    <span className="subcon">Let's Say Hi</span>
                    <h2 className="subtitle">Hire Me.</h2>
                    <div className="im_address_inner">
                      <div className="im_address">
                        <span>Call Me directly:</span>
                        <a className="link im-hover" href="tel:+91-9172277511">
                          +91-9172277511
                        </a>
                      </div>
                      <div className="im_address mt--5">
                        <span>Contact Email:</span>
                        <a className="link im-hover" href="mailto:Vikramthakur2323@gmail.com">
                          vikramthakur2323@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-wrapper">
                    <form onSubmit={handleSubmit}>
                      <div className="rn-form-group">
                        <input
                          type="text"
                          name="fullname"
                          placeholder="Your Name"
                          onChange={handleChange}
                          value={formData.fullname}
                          required
                        />
                      </div>
                      <div className="rn-form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          onChange={handleChange}
                          value={formData.email}
                          required
                        />
                        {isTyping && !isEmailValid(formData.email) && (
                          <p className="error-message">Please enter a valid email address.</p>
                        )}
                      </div>
                      <div className="rn-form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          onChange={handleChange}
                          value={formData.phone}
                          required
                        />
                      </div>
                      <div className="rn-form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          onChange={handleChange}
                          value={formData.subject}
                          required
                        />
                      </div>
                      <div className="rn-form-group">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          onChange={handleChange}
                          value={formData.message}
                          required
                        ></textarea>
                      </div>
                      <div className="rn-form-group">
                        <button
                          className="btn-default"
                          type="submit"
                          value="submit"
                          name="submit"
                          id="mc-embedded-subscribe"
                        >
                          Submit Now
                        </button>
                      </div>
                      {error && <p className="error-message">{error}</p>}
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <div className="thumbnail1 mb_md--30 mb_sm--30">
                    <div className='Contactimg'>
                      <img className="Contactimg" src="../images/vicky7.JPG" alt="Vicky" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Email submitted successfully!</p>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
