// src/components/ItemList.jsx

import React from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({ items }) => {
    return (
        <div className="container">
            <div className="row">
                {items.map(item => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <Item item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
