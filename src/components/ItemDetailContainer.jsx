// src/components/ItemDetailContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setItem(response.data);
            } catch (error) {
                console.error("Error fetching item: ", error);
            }
        };

        fetchItem();
    }, [id]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="item-detail-container">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} style={{ width: '200px' }} />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
};

export default ItemDetailContainer;
