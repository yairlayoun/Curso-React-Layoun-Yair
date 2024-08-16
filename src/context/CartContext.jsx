// src/context/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para añadir productos al carrito
    const addToCart = (item, quantity = 1) => {
        // Verificar si el producto ya está en el carrito
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            // Si ya está en el carrito, actualiza la cantidad
            if (existingItem.quantity + quantity <= existingItem.stock) {
                setCart(cart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                ));
            } else {
                alert('No hay suficiente stock disponible.');
            }
        } else {
            // Si no está en el carrito, lo añade
            if (quantity <= item.stock) {
                setCart([...cart, { ...item, quantity }]);
            } else {
                alert('No hay suficiente stock disponible.');
            }
        }
    };

    // Función para eliminar productos del carrito
    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    // Función para limpiar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Función para calcular la cantidad total de productos
    const totalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Función para calcular el precio total
    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Función para generar una orden de compra
    const generateOrder = () => {
        if (cart.length === 0) {
            alert('El carrito está vacío.');
            return;
        }

        // Aquí puedes simular la creación de una orden
        const order = {
            items: cart,
            total: totalPrice(),
        };

        console.log('Orden generada:', order);
        alert(`Compra exitosa por un total de $${totalPrice()}.`);

        clearCart(); // Limpiar el carrito después de la compra
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            totalItems,
            totalPrice,
            generateOrder
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
