
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCAj8bSdKtiFg1Sd8FrGHl7GKxtKwO5MUs",
  authDomain: "instagram-clone-78334.firebaseapp.com",
  projectId: "instagram-clone-78334",
  storageBucket: "instagram-clone-78334.appspot.com",
  messagingSenderId: "572799271369",
  appId: "1:572799271369:web:85ba9c7605da000e356818"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
