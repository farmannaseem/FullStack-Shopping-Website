import React from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Merches
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Product">
                  Product
                </Link>
              </li>
              <li>
                <Link className="nav-link" to='/Cart'>CART ITEMS</Link>
              </li>
            </ul>
            <SignedOut>
              <SignInButton className="btn btn-primary" />
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
