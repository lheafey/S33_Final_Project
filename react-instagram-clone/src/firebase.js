// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5_ygiapcK23m22D7BzQCKeKJh65jbB10",
  authDomain: "instagram-clone-39e98.firebaseapp.com",
  projectId: "instagram-clone-39e98",
  storageBucket: "instagram-clone-39e98.appspot.com",
  messagingSenderId: "766848732267",
  appId: "1:766848732267:web:fba507be93542310d7752e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);