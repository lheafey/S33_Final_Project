// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO13pRZDN_Mj7iwSFoAdgjCXeNde-zhWI",
  authDomain: "fir-final-ae028.firebaseapp.com",
  projectId: "fir-final-ae028",
  storageBucket: "fir-final-ae028.appspot.com",
  messagingSenderId: "383602041548",
  appId: "1:383602041548:web:9a4fe3884c89c6bfa99869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
