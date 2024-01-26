// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwSiUAcYfZr06CoLKyKphVKusr8eXQLw8",
  authDomain: "react-apple-tv-clone.firebaseapp.com",
  projectId: "react-apple-tv-clone",
  storageBucket: "react-apple-tv-clone.appspot.com",
  messagingSenderId: "918896609351",
  appId: "1:918896609351:web:afda6945acf06683370962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;