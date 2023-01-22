// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDixJotya6IzsD3-DNP9oF_qqk-wG6Ke1w",
  authDomain: "prometeo-hackoverflow.firebaseapp.com",
  projectId: "prometeo-hackoverflow",
  storageBucket: "prometeo-hackoverflow.appspot.com",
  messagingSenderId: "1097618303077",
  appId: "1:1097618303077:web:9f9f4a57355620a94f7e8c",
  measurementId: "G-1ENK1GL4PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth, provider}
