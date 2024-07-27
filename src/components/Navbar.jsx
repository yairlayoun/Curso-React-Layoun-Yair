// src/components/NavBar.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    const navBarStyles = {
        backgroundColor: '#800000', // Color Bordo
        color: '#FFD700' // Color Dorado
    };

    const linkStyles = {
        color: '#FFD700' // Color Dorado
    };

    return (
        <nav className="navbar navbar-expand-lg" style={navBarStyles}>
            <Link className="navbar-brand" to="/" style={linkStyles}>Mercado Medieval</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/armas" style={linkStyles}>Armas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/armaduras" style={linkStyles}>Armaduras</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/miscelaneos" style={linkStyles}>Miscelaneos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/quienes-somos" style={linkStyles}>Quienes somos</Link>
                    </li>
                </ul>
                <CartWidget /> {/* Añadimos CartWidget aquí */}
            </div>
        </nav>
    );
};

export default NavBar;
