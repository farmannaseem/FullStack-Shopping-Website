import { useState } from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="mb-3">About Us</h5>
            <p className="mb-0">We provide the best shopping experience with quality products and excellent customer service.</p>
          </div>
          
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cart</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li>📍 123 Shopping Street, City</li>
              <li>📧 info@shopping.com</li>
              <li>📞 +1 234 567 8900</li>
            </ul>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12">
            <hr className="bg-light" />
            <p className="text-center mb-0">
              © {new Date().getFullYear()} Shopping Website. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
