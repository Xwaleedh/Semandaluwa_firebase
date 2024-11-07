// sign-in.js

// Function to sign in a user
async function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      // Use Firebase Authentication to sign in the user
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
  
      // User successfully signed in
      console.log("User signed in:", userCredential.user);
      alert("User signed in successfully!");
  
      // Optionally, you can redirect the user to a different page
      // Example: window.location.href = "dashboard.html";
    } catch (error) {
      console.error("Error signing in:", error.message);
      alert("Error signing in: " + error.message);
    }
  }
  
  // Add event listener for the form submission (optional)
  document.getElementById("sign-in-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    signIn();
  });
      