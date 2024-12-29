// Import the necessary Firebase modules
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';

// Get reference to the UI elements
const welcomeMessage = document.getElementById('welcomeMessage');
const profilePic = document.getElementById('profilePic');
const userEmail = document.getElementById('userEmail');

// Initialize Firebase Auth (already initialized in firebase-init.js)
const auth = getAuth();

// Check if a user is logged in or not
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If user is logged in, display their information
    const displayName = user.displayName || 'User';
    const email = user.email;

    // Update the UI with user information
    userEmail.textContent = `Welcome: ${email}`;
    profilePic.src = photoURL;
  } else {
    // If no user is logged in, redirect to login page
    window.location.href = "login.html";
  }
});
