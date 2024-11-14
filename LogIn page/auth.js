import { getAuth, logi } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';
import { auth, db } from '../firebase-init.js';  // Import auth and db from firebase-init.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting the usual way

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Sign in the user with email and password
  log(email, password)
    .then(userCredential => {
      // Signed in successfully
      console.log('User signed in:', userCredential.user);
      // Redirect to the dashboard
      window.location.href = 'user-dashboard.html';
    })
    .catch(error => {
      console.error('Error signing in:', error);
      alert(error.message); // Display error message
    });
});
