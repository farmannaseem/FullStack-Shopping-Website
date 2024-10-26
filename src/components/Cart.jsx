import React, { useState } from "react";

const Cart = ({ cartItems,removeFromCart }) => {
  return (
    <div className="container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
              <img src={item.image} alt={item.title} style={{ width: "10%" }} />
              <p>{item.description}</p>
              <button type="button" onClick={() => removeFromCart(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
