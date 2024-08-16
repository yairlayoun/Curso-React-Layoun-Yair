// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmZw3740WhKwDJnE8mHdnmpZo7bssk044",
    authDomain: "curso-react-82f85.firebaseapp.com",
    projectId: "curso-react-82f85",
    storageBucket: "curso-react-82f85.appspot.com",
    messagingSenderId: "1042410723368",
    appId: "1:1042410723368:web:64638e0d4fe73ef015bd1d"
};

// Inicializa Firebase y almacena la instancia en 'app'
const app = initializeApp(firebaseConfig);

// Inicializa Firestore usando la instancia 'app'
export const db = getFirestore(app);
