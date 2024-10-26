import React from "react";
import { Link } from "react-router-dom";
import imgdonatin2 from "../assets/imgdonatin2.jpeg";
import aboutusimg from "../assets/aboutusimg.jpg";
import instagramIcon from "../assets/instagramIcon.jpg";
import sponsor1Img from "../assets/sponsor1Img.jpg";
import sponsor2Img from "../assets/sponsor2Img.jpg";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={imgdonatin2} alt="Food donation" className="Img-1" />
        <div className="overlay-content">
          <h1>Welcome to Food For All</h1>
          <p>
            Our mission is to reduce food waste and hunger by connecting donors,
            food banks, and recipients.
          </p>
          <div className="overlay-buttons">
            <Link to="/Register">
              <button>Register</button>
            </Link>
            <Link to="/donate">
              <button>Donate Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="impact-section">
        <h2>Why Donate?</h2>
        <p>
          Your donation makes a significant difference. By contributing food or
          funds, you help us ensure that surplus food reaches those who need it
          most. Every donation helps reduce food waste and provides nutritious
          meals to individuals and families facing food insecurity.
        </p>
        <p>
          Educating our community about food waste and hunger can lead to
          lasting change. Your support not only helps meet immediate needs but
          also promotes long-term solutions for reducing food insecurity and
          fostering a more sustainable future.
        </p>
        <Link to="/donate">
          <button className="about-us-button">Donate</button>
        </Link>
      </div>
      <div className="about-us-section">
        <div className="about-us-image">
          <img src={aboutusimg} alt="About Us" />
        </div>
        <div className="about-us-info">
          <h2>About Us</h2>
          <p>
            Food For All is dedicated to reducing food waste and alleviating
            hunger by connecting donors with food banks and recipients. Our team
            works tirelessly to ensure that surplus food reaches those in need,
            making a positive impact on our community and environment.
          </p>
          <Link to="/About-us">
            <button className="about-us-button">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="instagram-section">
        <h2>Join Us on Instagram!</h2>
        <p>
          Stay updated with our latest events, success stories, and ways you can
          get involved by following us on Instagram. Share your support and be
          part of our community!
        </p>
        <a
          href="https://www.instagram.com/FoodForAllJoinUs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
        </a>
      </div>

      <div className="sponsors-section">
        <h2>Our Sponsors</h2>
        <div className="sponsor-cards">
          <div className="sponsor-card">
            <img src={sponsor1Img} alt="Sponsor 1" className="sponsor-image" />
            <div className="sponsor-info">
              <h3>Sponsor 1</h3>
              <p>
                Sponsor 1 is a leading company in sustainable practices,
                supporting initiatives that reduce waste and promote community
                well-being.
              </p>
            </div>
          </div>
          <div className="sponsor-card">
            <img src={sponsor2Img} alt="Sponsor 2" className="sponsor-image" />
            <div className="sponsor-info">
              <h3>Sponsor 2</h3>
              <p>
                Sponsor 2 provides essential resources and support to various
                charitable causes, including our mission to combat hunger and
                food waste.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>What People Say</h2>
        <div className="testimonial">
          <p>
            "Food For All has made a huge impact in our community. Their
            dedication to reducing food waste and helping those in need is truly
            inspiring."
          </p>
          <cite>- Jane Doe, Community Volunteer</cite>
        </div>
        <div className="testimonial">
          <p>
            "I am grateful for the support Food For All provides. It’s great to
            see a local initiative making such a big difference."
          </p>
          <cite>- John Smith, Recipient</cite>
        </div>
        <div className="testimonial">
          <p>
            "The work that Food For All does is incredible. They not only
            provide food but also bring awareness to important issues around
            food waste and hunger."
          </p>
          <cite>- Emily Davis, Donor</cite>
        </div>
        <div className="testimonial">
          <p>
            "Seeing how our small contributions help so many people is
            heartwarming. Food For All is truly making a difference."
          </p>
          <cite>- Michael Brown, Volunteer</cite>
        </div>
      </div>
      <div className="footer">
        <p>© 2024 Food For All. All rights reserved.</p>
      </div>
    </div>
  );
}
