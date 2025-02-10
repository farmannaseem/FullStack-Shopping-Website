import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-content pe-lg-5">
              <Link to="/" className="d-inline-flex align-items-center mb-3 text-decoration-none">
                <FontAwesomeIcon icon="heart" className="text-primary fs-3 me-2" />
                <span className="fs-4 fw-bold text-white">Merches</span>
              </Link>
              <p className="text-primary-light mb-4">
                Discover the latest trends and shop with confidence. Your one-stop destination for quality products and exceptional service.
              </p>
              <div className="social-links d-flex gap-3">
                <a href="#" className="social-link" title="Facebook">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </a>
                <a href="#" className="social-link" title="Twitter">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
                <a href="#" className="social-link" title="Instagram">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon="chevron-right" className="me-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <FontAwesomeIcon icon="chevron-right" className="me-2" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <FontAwesomeIcon icon="chevron-right" className="me-2" />
                  Cart
                </Link>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon="chevron-right" className="me-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon="chevron-right" className="me-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title mb-4">Categories</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon="laptop" className="me-2" />
                  Electronics
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon="tshirt" className="me-2" />
                  Fashion
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon="gem" className="me-2" />
                  Jewelry
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon="house" className="me-2" />
                  Home & Living
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon="clock" className="me-2" />
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title mb-4">Newsletter</h5>
            <p className="text-muted mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="newsletter-form">
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control bg-dark border-secondary text-white" 
                  placeholder="Your email address"
                  aria-label="Your email address"
                />
                <button className="btn btn-primary" type="button">
                  <FontAwesomeIcon icon="paper-plane" className="me-2" />
                  Subscribe
                </button>
              </div>
            </form>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon="phone" className="text-primary me-2" />
                <span>+1 234 567 890</span>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon="envelope" className="text-primary me-2" />
                <span>support@merches.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom mt-5 pt-4 border-top border-secondary">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0 text-muted">
                <FontAwesomeIcon icon={['far', 'copyright']} className="me-2" />
                {new Date().getFullYear()} Merches. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="payment-methods">
                <FontAwesomeIcon icon={['fab', 'cc-visa']} className="mx-2" title="Visa" />
                <FontAwesomeIcon icon={['fab', 'cc-mastercard']} className="mx-2" title="Mastercard" />
                <FontAwesomeIcon icon={['fab', 'cc-paypal']} className="mx-2" title="PayPal" />
                <FontAwesomeIcon icon={['fab', 'apple-pay']} className="mx-2" title="Apple Pay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
