// src/components/AddItemButton.jsx

import React from 'react';

const AddItemButton = ({ onClick }) => {
    return (
        <button className="btn btn-primary mt-3" onClick={onClick}>
            Add to Cart
        </button>
    );
};

export default AddItemButton;
