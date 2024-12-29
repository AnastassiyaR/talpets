// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbOkPm-guvv4Zm_PxOYdL6N4dLFZH1xY4",
  authDomain: "talpets.firebaseapp.com",
  projectId: "talpets",
  storageBucket: "talpets.firebasestorage.app",
  messagingSenderId: "112781167120",
  appId: "1:112781167120:web:89753203eee4d82b8cd895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export { db, doc, getDoc, setDoc };