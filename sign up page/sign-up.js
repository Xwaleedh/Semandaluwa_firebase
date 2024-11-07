// sign-up.js

// Function to sign up a user
async function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      // Use Firebase Authentication to create a user
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      // User successfully created
      console.log("User signed up:", userCredential.user);
      alert("User signed up successfully!");
  
      // Optionally, you can store user data in Firestore or redirect them
      // Example: save additional user info to Firestore (see database.js)
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert("Error signing up: " + error.message);
    }
  }
  
  // Add event listener for the form submission (optional)
  document.getElementById("sign-up-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    signUp();
  });
  

  async function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      console.log("Attempting to sign up...");
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("User signed up:", userCredential.user);
      alert("User signed up successfully!");
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert("Error signing up: " + error.message);
    }
  }
  