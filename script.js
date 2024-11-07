//Welcome Alert

alert("Welcome To Semmandalluwa.lk!");

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  
  // Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  
  // Initialize Firebase App
  const app = firebase.initializeApp(firebaseConfig);
  
  
  // Initialize Firebase Services
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwO0xuY9imGzuoxuoun6XXprB50W6NOfQ",
  authDomain: "semmandalluwa-test.firebaseapp.com",
  projectId: "semmandalluwa-test",
  storageBucket: "semmandalluwa-test.firebasestorage.app",
  messagingSenderId: "140774806089",
  appId: "1:140774806089:web:ea67fadc0e3ada8cc5e598",
  measurementId: "G-84M46V5JQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);