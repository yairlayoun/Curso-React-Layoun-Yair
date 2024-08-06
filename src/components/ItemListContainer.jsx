// src/components/ItemListContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/FakeStoreApi.jsx';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getProducts();
            let filteredProducts = [];

            switch (id) {
                case 'technology':
                    filteredProducts = allProducts.filter(product => product.category === 'electronics');
                    break;
                case 'clothing':
                    filteredProducts = allProducts.filter(product => 
                        product.category === "men's clothing" || product.category === "women's clothing"
                    );
                    break;
                case 'accessories':
                    filteredProducts = allProducts.filter(product => 
                        product.category === 'jewelery'
                    );
                    break;
                default:
                    filteredProducts = allProducts;
            }

            setProducts(filteredProducts);
        };

        fetchProducts();
    }, [id]);

    return (
        <div className="container">
            <h2 className="my-4">{greeting}</h2>
            <ItemList items={products} />
        </div>
    );
};

export default ItemListContainer;
