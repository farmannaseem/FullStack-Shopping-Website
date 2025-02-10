import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = ({ cartItemsCount = 0 }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-bag-heart-fill text-primary fs-3 me-2"></i>
          <span className="brand-text">Merches</span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list-nested fs-2"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/')}`} 
                to="/"
              >
                <i className="bi bi-house-heart me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/products')}`} 
                to="/products"
              >
                <i className="bi bi-grid-fill me-1"></i>
                Products
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link 
              to="/cart" 
              className={`nav-btn btn-glass ${isActive('/cart')}`}
            >
              <i className="bi bi-cart3"></i>
              <span className="ms-2">Cart</span>
              {cartItemsCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {cartItemsCount}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </Link>

            <div className="vr opacity-25 d-none d-lg-block"></div>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="nav-btn btn-glass-primary">
                  <i className="bi bi-person-circle me-2"></i>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonTrigger: "focus:shadow-none",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
