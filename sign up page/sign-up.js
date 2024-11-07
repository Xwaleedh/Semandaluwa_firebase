firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // Storing additional user data in Firestore
    firebase.firestore().collection('users').doc(user.uid).set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      subscribed: subscribeToNewsletter
    })
    .then(() => {
      console.log("User data stored in Firestore.");
      window.location.href = 'user-dashboard.html'; // Redirect to the user dashboard
    })
    .catch((error) => {
      console.error("Error saving user data to Firestore:", error);
    });
  })
  .catch((error) => {
    console.error('Error during sign-up:', error.message);
  });
