// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjJBSLZShRxbX8PLI4gcIaSazWMVfhUis",
  authDomain: "netflix-gpt-279e9.firebaseapp.com",
  projectId: "netflix-gpt-279e9",
  storageBucket: "netflix-gpt-279e9.appspot.com",
  messagingSenderId: "94415770652",
  appId: "1:94415770652:web:cb1b7bd09027e0a0c47bd9",
  measurementId: "G-FKGW9TW4PV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
