// user-dashboard.js

// Check if user is signed in on page load
firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in, display email on the page
      document.getElementById('user-email').textContent = user.email;
      
      // Listen for logout button click
      document.getElementById('logout-button').addEventListener('click', logout);
    } else {
      // No user signed in, redirect to login page
      window.location.href = 'sign-in.html';
    }
  });
  
  // Logout function
  function logout() {
    firebase.auth().signOut().then(() => {
      console.log("User logged out.");
      window.location.href = 'sign-in.html'; // Redirect to sign-in page
    }).catch(error => {
      console.error("Error signing out: ", error);
    });
  }
  