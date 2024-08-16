// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Checkout from './components/Checkout.jsx';
import Brief from './components/Brief.jsx';
import { CartProvider } from './context/CartContext.jsx';
import uploadProducts from './utils/uploadProducts.jsx';

const App = () => {
    useEffect(() => {
        // Solo llamar a esta función una vez para subir los productos
        uploadProducts();
    }, []);

    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Welcome to our store!" />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/brief" element={<Brief />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
