// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArUvD62ZxmY-h7OBIVG87FJY-MQAG-9rQ",
  authDomain: "coffee-store-cf3c0.firebaseapp.com",
  projectId: "coffee-store-cf3c0",
  storageBucket: "coffee-store-cf3c0.appspot.com",
  messagingSenderId: "735693753927",
  appId: "1:735693753927:web:4e90fd1677da0251de6b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;