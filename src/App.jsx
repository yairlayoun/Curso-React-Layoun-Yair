// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import Brief from './components/Brief';
import { CartProvider } from './context/CartContext';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Welcome to our store!" />} />
                    <Route path="/category/:id" element={<ItemListContainer greeting="Category Products" />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/brief" element={<Brief />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
