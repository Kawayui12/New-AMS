// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbx5BX0ieMrqCcQE4Mp1Qa36ShdQ6Gc_4",
  authDomain: "eastern-terra-94876.firebaseapp.com",
  projectId: "eastern-terra-94876",
  storageBucket: "eastern-terra-94876.appspot.com",
  messagingSenderId: "508346713085",
  appId: "1:508346713085:web:5fba4e8a93bd2fcfb18f94",
  measurementId: "G-Q0LC1H0NZM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

///////////////////////////////////
