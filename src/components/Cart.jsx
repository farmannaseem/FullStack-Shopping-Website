import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-5">
                <i className="bi bi-cart-x display-1 text-muted mb-4"></i>
                <h2 className="mb-4">Your cart is empty</h2>
                <p className="text-muted mb-4">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/products" className="btn btn-primary btn-lg px-5">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              {cartItems.map((item) => (
                <div key={item.id} className="row align-items-center mb-4 pb-4 border-bottom">
                  <div className="col-md-2">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="img-fluid rounded"
                      style={{ maxHeight: "80px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-4">
                    <h5 className="mb-2">{item.title}</h5>
                    <p className="text-muted mb-0">${item.price}</p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <span className="mx-3">{item.quantity || 1}</span>
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <p className="fw-bold mb-0">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                  <div className="col-md-1">
                    <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/products" className="btn btn-outline-primary">
              <i className="bi bi-arrow-left me-2"></i>
              Continue Shopping
            </Link>
            <button 
              className="btn btn-outline-danger"
              onClick={() => cartItems.forEach(item => removeFromCart(item.id))}
            >
              <i className="bi bi-trash me-2"></i>
              Clear Cart
            </button>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong className="text-primary">${calculateTotal().toFixed(2)}</strong>
              </div>
              <button className="btn btn-primary w-100 mb-3">
                <i className="bi bi-credit-card me-2"></i>
                Proceed to Checkout
              </button>
              <div className="text-center text-muted small">
                <i className="bi bi-shield-lock me-1"></i>
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
