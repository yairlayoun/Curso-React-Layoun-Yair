// src/components/NavBar.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget.jsx'; // Importamos CartWidget

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
            <a className="navbar-brand" href="#" style={linkStyles}>Mercado Medieval</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#category1" style={linkStyles}>Armas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#category2" style={linkStyles}>Armaduras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#category3" style={linkStyles}>Miscelaneos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#category4" style={linkStyles}>Quienes somos</a>
                    </li>
                </ul>
                <CartWidget /> {/* Añadimos CartWidget aquí */}
            </div>
        </nav>
    );
};

export default NavBar;
