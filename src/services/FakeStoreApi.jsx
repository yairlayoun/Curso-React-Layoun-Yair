// src/services/fakeStoreApi.js

export const getProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
