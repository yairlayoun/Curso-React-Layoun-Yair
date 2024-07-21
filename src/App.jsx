// src/App.jsx

import React from 'react';
import NavBar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
        </div>
    );
};

export default App;
