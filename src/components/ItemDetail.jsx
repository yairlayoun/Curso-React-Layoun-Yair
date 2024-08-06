// src/components/ItemDetail.jsx

import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector.jsx';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} style={{ width: '200px' }} />
            <Description text={item.description} />
            <p>Price: ${item.price}</p>
            <ItemQuantitySelector />
            <AddItemButton />
        </div>
    );
};

export default ItemDetail;
