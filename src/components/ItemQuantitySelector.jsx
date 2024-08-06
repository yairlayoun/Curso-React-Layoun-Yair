// src/components/ItemQuantitySelector.jsx

import React from 'react';

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-quantity-selector">
            <button className="btn btn-secondary" onClick={handleDecrease}>-</button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-secondary" onClick={handleIncrease}>+</button>
        </div>
    );
};

export default ItemQuantitySelector;
