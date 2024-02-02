// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d5ce7.firebaseapp.com",
  projectId: "mern-blog-d5ce7",
  storageBucket: "mern-blog-d5ce7.appspot.com",
  messagingSenderId: "464497910350",
  appId: "1:464497910350:web:0ebca19a3a0fdc3bd6591f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
