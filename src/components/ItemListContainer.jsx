// src/components/ItemListContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Importamos axios
import Item from './Item';

const ItemListContainer = ({ greeting }) => {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                let fetchedItems = response.data;

                if (id) {
                    fetchedItems = fetchedItems.filter(item => item.category === id);
                }

                setItems(fetchedItems);
            } catch (error) {
                console.error("Error fetching items: ", error);
            }
        };

        fetchItems();
    }, [id]);

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <div className="row">
                {items.map(item => (
                    <div className="col-md-4" key={item.id}>
                        <Item id={item.id} name={item.title} image={item.image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
