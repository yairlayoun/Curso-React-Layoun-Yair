// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useCart } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchItem = async () => {
            const itemDoc = doc(collection(db, "products"), id);
            const itemSnapshot = await getDoc(itemDoc);
            if (itemSnapshot.exists()) {
                setItem(itemSnapshot.data());
            } else {
                console.log("No such document!");
            }
        };

        fetchItem();
    }, [id]);

    const handleAddToCart = () => {
        if (item) {
            addToCart(item, quantity);
        }
    };

    return (
        <div className="container mt-4">
            {item ? (
                <div>
                    <h2>{item.title}</h2>
                    <img src={item.Image} alt={item.title} />
                    <p>{item.description}</p>
                    <h3>${item.price}</h3>
                    <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
                    <AddItemButton onClick={handleAddToCart} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
