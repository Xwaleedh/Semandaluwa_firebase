import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwO0xuY9imGzuoxuoun6XXprB50W6NOfQ",
  authDomain: "semmandalluwa-test.firebaseapp.com",
  projectId: "semmandalluwa-test",
  storageBucket: "semmandalluwa-test.firebase.storage.app",
  messagingSenderId: "140774806089",
  appId: "1:140774806089:web:ea67fadc0e3ada8cc5e598",
  measurementId: "G-84M46V5JQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
