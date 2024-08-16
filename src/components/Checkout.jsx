// src/components/Checkout.jsx

import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart, totalItems, totalPrice, generateOrder } = useCart();

    return (
        <div className="container">
            <h2 className="my-4">Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul className="list-group mb-4">
                        {cart.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>${item.price} x {item.quantity}</p>
                                </div>
                                <span className="badge bg-primary rounded-pill">{item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                    <h5>Total Items: {totalItems()}</h5>
                    <h5>Total Price: ${totalPrice().toFixed(2)}</h5>
                    <button className="btn btn-success mt-3" onClick={generateOrder}>Confirm Purchase</button>
                </div>
            )}
            <Link to="/" className="btn btn-secondary mt-3">Continue Shopping</Link>
        </div>
    );
};

export default Checkout;
