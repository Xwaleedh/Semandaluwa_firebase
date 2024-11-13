// sign-up.js
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';
import { auth, db } from './firebase-init.js';  // Import auth and db from firebase-init.js

// Handle sign up form submission
const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Create user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data in Firestore (Firestore can store additional details)
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      firstName: firstName,
      lastName: lastName,
      email: email
    });

    console.log('User signed up and saved to Firestore', user);
    alert('User signed up successfully!');
  } catch (error) {
    console.error('Error during sign-up:', error.message);
    alert('Error: ' + error.message);
  }
});
