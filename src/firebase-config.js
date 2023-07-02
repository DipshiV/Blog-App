// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu8d8KjeR1zY2kWvB8CFXi5quuEg92dMg",
  authDomain: "blogproject-31f29.firebaseapp.com",
  projectId: "blogproject-31f29",
  storageBucket: "blogproject-31f29.appspot.com",
  messagingSenderId: "978192870667",
  appId: "1:978192870667:web:93d37235c52abcdd9dc60e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 
