// src/utils/uploadProducts.js
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const products = [
  {
    title: "Mens Casual Premium Slim Fit T-Shirts",
    category: "Clothing",
    price: 22.3,
    stock: 10,
    Image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    title: "Mens Cotton Jacket",
    category: "Clothing",
    price: 55.99,
    stock: 4,
    Image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    category: "Accessories",
    price: 695,
    stock: 9,
    Image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    title: "Solid Gold Petite Micropave",
    category: "Accessories",
    price: 168,
    stock: 5,
    Image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    category: "Technology",
    price: 200,
    stock: 2,
    Image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
  },
  {
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    category: "Technology",
    price: 190,
    stock: 3,
    Image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
  },
];

const uploadProducts = async () => {
  const productsCollection = collection(db, "products");

  // Limpiar la colección antes de agregar productos nuevos
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });

  // Agregar los productos
  products.forEach(async (product) => {
    await addDoc(productsCollection, product);
  });

  console.log("Productos subidos correctamente!");
};

export default uploadProducts;
