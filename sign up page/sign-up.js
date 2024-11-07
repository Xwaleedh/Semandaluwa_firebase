// sign-up.js

// Get the sign-up form by its ID
const signUpForm = document.getElementById('sign-up-form');

signUpForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get user inputs from the form
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const subscribeToNewsletter = document.getElementById("newsletter").checked;

  // Create user with Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Store additional user details (firstName, lastName, subscribeToNewsletter) in Firestore
      firebase.firestore().collection('users').doc(user.uid).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        subscribed: subscribeToNewsletter
      })
      .then(() => {
        console.log("User data stored in Firestore.");
        // Redirect to user dashboard or another page
        window.location.href = 'user-dashboard.html'; 
      })
      .catch((error) => {
        console.error("Error saving user data to Firestore:", error);
        alert("Error saving user data: " + error.message);
      });

    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error('Error during sign-up:', errorMessage);
      alert(errorMessage); // Show error message to the user
    });
});
