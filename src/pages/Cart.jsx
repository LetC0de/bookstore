import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 24.99,
      quantity: 1,
      color: "#2C3E50"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 27.99,
      quantity: 2,
      color: "#E74C3C"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page section">
      <div className="container">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some books to get started!</p>
            <button className="btn btn-primary" onClick={() => navigate('/shop')}>
              Browse Books
            </button>
          </div>
        ) : (
          <div className="cart-content">
            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image" style={{ backgroundColor: item.color }}>
                    <div className="cart-item-title">{item.title}</div>
                  </div>

                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.title}</h3>
                    <p className="cart-item-author">by {item.author}</p>
                    <p className="cart-item-price">${item.price}</p>
                  </div>

                  <div className="cart-item-quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    className="cart-item-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <h2 className="summary-title">Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                className="btn btn-primary checkout-btn"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => navigate('/shop')}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
