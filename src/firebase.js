import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo57eWfjMufJOTiO3uYN9wDPuUWDBJ96s",
  authDomain: "fir-auth-9735f.firebaseapp.com",
  projectId: "fir-auth-9735f",
  storageBucket: "fir-auth-9735f.appspot.com",
  messagingSenderId: "638800949258",
  appId: "1:638800949258:web:885a7a98f3219b9deb2ff3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();