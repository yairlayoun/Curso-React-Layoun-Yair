// src/components/CartWidget.jsx

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Librería de iconos de react-icons
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart size={24} />
            <span className="badge badge-pill badge-danger">3</span> {/* Número hardcodeado */}
        </div>
    );
};

export default CartWidget;
