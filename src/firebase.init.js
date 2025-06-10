// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";``
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5t37K17UW7D2ZBfqg5hkdv_oGG_o9yvQ",
  authDomain: "email-password-auth-16109.firebaseapp.com",
  projectId: "email-password-auth-16109",
  storageBucket: "email-password-auth-16109.firebasestorage.app",
  messagingSenderId: "895348149856",
  appId: "1:895348149856:web:e9ab540dc612e0730afd05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);