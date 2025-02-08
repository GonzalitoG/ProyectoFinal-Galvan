// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDYtvDLLdotC5mVe-aLy1o4SMeeMVZ-P8",
  authDomain: "gonzalitogalvan-972c7.firebaseapp.com",
  projectId: "gonzalitogalvan-972c7",
  storageBucket: "gonzalitogalvan-972c7.firebasestorage.app",
  messagingSenderId: "384155829705",
  appId: "1:384155829705:web:af5600abfedebc20a25418",
  measurementId: "G-J79W1DRBDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);