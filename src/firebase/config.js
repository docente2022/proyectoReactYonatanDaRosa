// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9uqsHNbldZ91JlayY6xOg0OQrrvqj9yI",
  authDomain: "e-comerce-relojes.firebaseapp.com",
  projectId: "e-comerce-relojes",
  storageBucket: "e-comerce-relojes.appspot.com",
  messagingSenderId: "231594499485",
  appId: "1:231594499485:web:1c850608cd777d2eca6374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);