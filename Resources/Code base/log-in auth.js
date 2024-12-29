// log-in auth.js
import { auth } from './firebase-init.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

// Get navbar elements
const loginLink = document.getElementById('loginLink');
const logoutLink = document.getElementById('logoutLink');
const userDashboardLink = document.getElementById('userDashboardLink');
const logoutBtn = document.getElementById('logoutBtn');

// Check authentication state and update navbar
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If user is logged in
    loginLink.style.display = 'none';  // Hide login
    logoutLink.style.display = 'block';  // Show logout
    userDashboardLink.style.display = 'block';  // Show user dashboard
  } else {
    // If user is logged out
    loginLink.style.display = 'block';  // Show login
    logoutLink.style.display = 'none';  // Hide logout
    userDashboardLink.style.display = 'none';  // Hide user dashboard
  }
});

// Handle logout button click
logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.href = '../index.html';  // Redirect to home page after logout
  }).catch((error) => {
    console.error('Error logging out: ', error);
  });
});
