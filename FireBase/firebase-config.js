// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVkeiCE55H-2mfrVDoDQE8_z8vf3ERvVQ",
  authDomain: "firstfirebase116.firebaseapp.com",
  projectId: "firstfirebase116",
  storageBucket: "firstfirebase116.appspot.com",
  messagingSenderId: "6461955414",
  appId: "1:6461955414:web:4da0561307896bdf920af7",
  measurementId: "G-62FB05R3EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);