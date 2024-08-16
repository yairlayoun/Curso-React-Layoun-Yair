import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "products");
      
      let q = id 
        ? query(productsCollection, where("category", "==", id.charAt(0).toUpperCase() + id.slice(1)))
        : productsCollection;
      
      const productSnapshot = await getDocs(q);
      const productList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProducts(productList);
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{greeting}</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.Image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }} // Ajustar el tamaño aquí
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <a href={`/item/${product.id}`} className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;

