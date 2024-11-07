// Get the current authenticated user
const user = firebase.auth().currentUser;

if (user) {
  // Get the user's data from Firestore
  firebase.firestore().collection('users').doc(user.uid).get()
    .then((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        // Display user data on the dashboard (e.g., show firstName, lastName)
        document.getElementById('userName').innerText = `${userData.firstName} ${userData.lastName}`;
        document.getElementById('userEmail').innerText = userData.email;
      } else {
        console.log('No user data found');
      }
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
} else {
  console.log('No user is signed in');
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, proceed with loading the data
      console.log('User signed in:', user);
    } else {
      // User is not signed in, redirect to sign-in page
      window.location.href = 'sign-in.html';
    }
  });
  