// src/components/ItemDetail.jsx

import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
    );
};

export default ItemDetail;
