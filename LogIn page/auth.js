// sign-in.js

document.getElementById('sign-in-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting the usual way

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Sign in the user with email and password
  firebase.auth().signInWithEmailAndPassword(email, password)
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
