// src/components/CartWidget.jsx

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../context/CartContext.jsx';

const CartWidget = () => {
    const { cart } = useCart();

    return (
        <Link to="/checkout" className="cart-widget d-flex align-items-center text-decoration-none text-white">
            <FaShoppingCart size={24} />
            {cart.length > 0 && <span className="badge bg-danger rounded-pill ms-2">{cart.length}</span>}
        </Link>
    );
};

export default CartWidget;
