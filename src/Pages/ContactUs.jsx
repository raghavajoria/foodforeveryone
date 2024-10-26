import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-info">
        <div className="info-item">
          <strong>Name : </strong>
          <p> Raghav Rajoria</p>
        </div>
        <div className="contact-methods">
          <div className="method">
            <FaPhone />
            <span>Call</span>
          </div>
          <div className="method">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </div>
          <div className="method">
            <FaEnvelope />
            <span>Email</span>
          </div>
          <div className="method">
            <FaMapMarkerAlt />
            <span>Locate</span>
          </div>
        </div>
        <div className="contact-details">
          <div className="detail-item">
            <strong>CALL</strong>
            <p>+91-8700726095</p>
          </div>
          <div className="detail-item">
            <strong>WHATSAPP</strong>
            <p>+91-8700726095</p>
          </div>
          <div className="detail-item">
            <strong>EMAIL</strong>
            <p>raghav.rajoria25@email.com</p>
          </div>
          <div className="detail-item">
            <strong>SKYPE</strong>
            <p>Contact DevOps_US</p>
          </div>
          <div className="detail-item">
            <strong>ADDRESS</strong>
            <p>ggsipu team DevOps</p>
          </div>
          <div className="detail-item">
            <strong>WEBSITE</strong>
            <p>
              <a href="abc.com" target="_blank" rel="noopener noreferrer">
                abc.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
