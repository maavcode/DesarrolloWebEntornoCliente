// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByM_iod0njTftxIKOErYOoLVXbz_8ky5k",
  authDomain: "finalproject-budgettracker.firebaseapp.com",
  projectId: "finalproject-budgettracker",
  storageBucket: "finalproject-budgettracker.firebasestorage.app",
  messagingSenderId: "200468392949",
  appId: "1:200468392949:web:d1e5ad48c3195bb0fd0ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios para usarlos en la app
export const auth = getAuth(app);
export const db = getFirestore(app);