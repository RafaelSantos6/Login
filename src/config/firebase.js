

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD45QXRfAajClOlU6WbCXajKyyYqIKUZ4s",
  authDomain: "aulalogin-4908b.firebaseapp.com",
  projectId: "aulalogin-4908b",
  storageBucket: "aulalogin-4908b.appspot.com",
  messagingSenderId: "431308133027",
  appId: "1:431308133027:web:30b38b487c52f82842e516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);