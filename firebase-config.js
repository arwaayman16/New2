// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFWtW5v5tcpT0IBTKmedBYFaIwetbMqvk",
  authDomain: "expoapp16.firebaseapp.com",
  projectId: "expoapp16",
  storageBucket: "expoapp16.appspot.com",
  messagingSenderId: "268131790961",
  appId: "1:268131790961:web:6531f6622faf42f866ebd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 
