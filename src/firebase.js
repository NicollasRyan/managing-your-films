// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt-3VaWAeGMBk5azBhUCKB9JPIrwQZ_1I",
  authDomain: "managing-your-films.firebaseapp.com",
  projectId: "managing-your-films",
  storageBucket: "managing-your-films.appspot.com",
  messagingSenderId: "275002529772",
  appId: "1:275002529772:web:1db25c52e4b2b7351d52c9",
  measurementId: "G-3GL2BK0JWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {analytics, auth, db}
