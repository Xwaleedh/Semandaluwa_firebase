// Import the functions you need from the SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';

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
const auth = getAuth(app);
const db = getFirestore(app);

// Example usage of Firestore and Auth
// Function to create a new user
async function createNewUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Function to add a document to a Firestore collection
async function addDocumentToCollection(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
}
