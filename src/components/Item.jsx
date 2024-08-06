// src/components/Item.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ item }) => {
    return (
        <div className="card h-100">
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <Link to={`/item/${item.id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default Item;
