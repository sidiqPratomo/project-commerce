// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSV9HjGIQ8zXAd_U_Y7hEIM9raymn5fC0",
  authDomain: "website-commerce.firebaseapp.com",
  databaseURL: "https://website-commerce-default-rtdb.firebaseio.com",
  projectId: "website-commerce",
  storageBucket: "website-commerce.appspot.com",
  messagingSenderId: "576555085133",
  appId: "1:576555085133:web:cb945de4357a53e75c1b04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
