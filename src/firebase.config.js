// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjIf_Z8OQhp0sAJcKk4YhBm1ImDEkYb0s",
  authDomain: "house-marketplace-app-c5ba5.firebaseapp.com",
  projectId: "house-marketplace-app-c5ba5",
  storageBucket: "house-marketplace-app-c5ba5.appspot.com",
  messagingSenderId: "212385512784",
  appId: "1:212385512784:web:45e8e2e6b4c68629498055",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
