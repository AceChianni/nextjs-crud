// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLayi9sOYdLxXj6yKrFVVblEQHclWtvh8",
  authDomain: "nextjs-crud-a6183.firebaseapp.com",
  projectId: "nextjs-crud-a6183",
  storageBucket: "nextjs-crud-a6183.appspot.com",
  messagingSenderId: "476444086151",
  appId: "1:476444086151:web:caed36b8ae3474801b4d22",
  measurementId: "G-R8RPQRSCFR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
