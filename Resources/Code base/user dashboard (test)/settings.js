import { auth } from '../firebase-init.js'; // Ensure this is correct
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';
import { EmailAuthProvider, reauthenticateWithCredential } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';

// Login functionality
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
        window.location.href = '../user dashboard (test)/index.html'; // Redirect after login
    } catch (error) {
        alert(`Login failed: ${error.message}`);
    }
});

// Change password functionality
document.getElementById('changePasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Check if the new password is valid
    if (newPassword.length < 6) {
        feedbackMessage.textContent = 'Password must be at least 6 characters long.';
        feedbackMessage.style.color = 'red';
        return;
    }

    try {
        const user = auth.currentUser;

        if (!user) {
            feedbackMessage.textContent = 'You must be logged in to change the password.';
            feedbackMessage.style.color = 'red';
            return;
        }

        // Reauthenticate the user with their current password
        const credential = EmailAuthProvider.credential(user.email, currentPassword);

        // Attempt reauthentication with the current password
        await reauthenticateWithCredential(user, credential)
            .then(async () => {
                // If reauthentication is successful, update the password
                await user.updatePassword(newPassword);
                feedbackMessage.textContent = 'Password updated successfully!';
                feedbackMessage.style.color = 'green';
            })
            .catch((error) => {
                // If reauthentication fails, show the error message
                feedbackMessage.textContent = 'Incorrect current password. Please try again.';
                feedbackMessage.style.color = 'red';
            });

    } catch (error) {
        console.error('Error updating password:', error);
        feedbackMessage.textContent = `Error: ${error.message}`;
        feedbackMessage.style.color = 'red';
    }
});
    