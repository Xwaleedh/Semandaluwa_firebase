// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// firebase-init.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';
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

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);