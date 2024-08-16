// src/components/NavBar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">E-Commerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Clothing">Clothing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/Accessories">Accessories</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
