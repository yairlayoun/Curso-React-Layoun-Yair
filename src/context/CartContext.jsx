// src/context/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);
