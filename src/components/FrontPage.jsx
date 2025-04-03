import React from "react";
import { Link } from 'react-router-dom'; // Import Link for navigation
import undraw from "../assets/undraw.svg"
import StudySyn from "../assets/StudySyn.svg"

import Google from "../assets/Google.svg";
import Microsoft from "../assets/Microsoft.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

import VectorEdu from "../assets/VectorEdu.svg";
import PersonalizedLearn from "../assets/PersonalizedLearn.svg";
import Affordability from "../assets/Affordability.svg";
import IndustryPatner from "../assets/IndustryPatner.svg";
import InnovativeTech from "../assets/InnovativeTech.svg";
import Support from "../assets/Support.svg";
import Analytics from "../assets/Analytics.svg";

import "../index.css";

const HeroSection = () => {
  return (
    <section className="main-section">
      <div className="content-left">
        <p className="section-label">Very proud to introduce</p>
        <h1 className="section-title">Explore for a Better World</h1>
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="button-group">
          <Link to="/Router_project" className="start-button">Start Now</Link>

  <Link className="contact-button"  to="/contact">Contact Us</Link>

        </div>
      </div>
      <div className="content-right">
        <img src={undraw} alt="Learning Sketch" className="section-image" />
      </div>
    </section>
  );
};




const Companies = () => {


  return (

    <div class="company-container">
      <h2 class="company-title">Trusted by the best</h2>
      <div class="company-grid">
        <div class="company-logo">

          <img src={Google} className="svg-img" />
          <span class="logo-text">Google</span>
        </div>

        <div class="company-logo">
          <img src={Microsoft} className="svg-img" />
          <span class="logo-text">Microsoft</span>
        </div>

        <div class="company-logo">
          <img src={linkedin} className="svg-img" />
          <span class="logo-text">linkedin</span>
        </div>

        <div class="company-logo">
          <img src={VectorEdu} class="svg-img" />
          <span class="logo-text">VectorEdu</span>
        </div>
      </div>
    </div>

  );
};
//===================================CARD

const features = [
  {
    img: PersonalizedLearn,
    title: "Personalized Learning",
    description: "Offer tailored learning experiences through individual student needs.",
  },
  {
    img: Affordability,
    title: "Affordability",
    description: "Provide high-quality education at an affordable price point, making it accessible to a broader audience.",
  },
  {
    img: IndustryPatner,
    title: "Industry Partnerships",
    description: "Collaborate with well-known companies and institutions to offer accredited courses and certifications, adding credibility to your offerings.",
  },
  {
    img: InnovativeTech,
    title: "Innovative Technology",
    description: "Utilize cutting-edge technology, such as augmented reality or virtual reality, to create immersive learning experiences.",
  },
  {
    img: Support,
    title: "Responsive Support",
    description: "Provide exceptional customer support and assistance to students and educators.",
  },
  {
    img: Analytics,
    title: "Analytics and Insights",
    description: "Offer detailed analytics to help students and teachers monitor performance and make data-driven decisions.",
  },
];

const Card = () => {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <div className="main-info">
          <h2 className="main-title">Our Competitive Advantage</h2>
          <p className="main-description">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-container">
                <img className="feature-svg" src={feature.img} alt={feature.title} />
              </div>
              <div className="feature-info">
                <div className="feature-title">{feature.title}</div>
                <div className="feature-description">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//////////////////////////////////CARD END



// Separate social links
const socialLinks = [
  { img: instagram, alt: "instagram", href: "#" },
  { img: twitter, alt: "twitter", href: "#" },
  { img: linkedin, alt: "linkedIn", href: "#" },
  { img: Microsoft, alt: "microsoft", href: "#" },
];

// Separate footer columns
const footerColumns = [
  {
    heading: "Products",
    links: ["Overview", "Pricing", "Features", "Integrations"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    heading: "Support",
    links: ["Help Center", "FAQs", "Contact Support", "Privacy Policy"],
  },
  {
    heading: "About",
    links: ["Our Story", "Leadership", "Investors", "Sustainability"],
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        {/* Top Section (Logo + Social Links) */}
        <div className="footer-top">
          <div className="comp-loop">
            <a className="logo-link" href="#">
              <img src={StudySyn} className="logo-svg" alt="StyleCode Logo" />
              StyleCode
            </a>
          </div>

          <p className="filler-text">Lorem ipsum dolor sit consectetur.</p>

          {/* Social Media Icons */}
          <div className="social">
            {socialLinks.map((social, index) => (
              <a key={index} className="social-link" href={social.href}>
                <img src={social.img} className="social-icon" alt={social.alt} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          © 2024 - present StyleCode. All rights reserved.
        </div>
      </footer>
    </div>
  );
};






const FrontPage = () => {
  return (
    <div>
      <HeroSection />
      <Companies />
      <Card />
      <Footer />
    </div>
  );
};

export default FrontPage;
