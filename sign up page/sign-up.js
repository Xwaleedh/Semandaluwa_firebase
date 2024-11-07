// sign-up.js

document.getElementById('sign-up-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Create a new user with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      // User created successfully
      console.log('User created:', userCredential.user);

      // Redirect to the user dashboard or other page after successful sign up
      window.location.href = 'user-dashboard.html'; 
    })
    .catch(error => {
      console.error('Error during sign up:', error);
      alert(error.message); // Display error message if something goes wrong
    });
});
