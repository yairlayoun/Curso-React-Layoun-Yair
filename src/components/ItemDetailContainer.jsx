// src/components/ItemDetailContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ItemDetail from './ItemDetail';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Llamada a la API para obtener detalles del producto
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching item:', error));
    }, [id]);

    const handleAddToCart = () => {
        addToCart({ ...item, quantity });
    };

    if (!item) return <p>Loading...</p>;

    return (
        <div className="container">
            <ItemDetail item={item} />
            <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <AddItemButton onClick={handleAddToCart} />
        </div>
    );
};

export default ItemDetailContainer;
