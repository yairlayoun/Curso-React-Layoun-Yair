// src/components/Checkout.jsx

import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart, clearCart } = useCart();

    const handleCheckout = () => {
        // Aquí puedes agregar lógica para finalizar la compra
        // Por ejemplo, hacer una solicitud a una API para procesar el pago
        clearCart(); // Vacía el carrito después de la compra
        alert('Thank you for your purchase!');
    };

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
                                    <p>${item.price}</p>
                                </div>
                                <span className="badge bg-primary rounded-pill">{item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-success" onClick={handleCheckout}>Confirm Purchase</button>
                </div>
            )}
            <Link to="/" className="btn btn-secondary mt-3">Continue Shopping</Link>
        </div>
    );
};

export default Checkout;
