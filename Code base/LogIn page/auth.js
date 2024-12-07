import { auth } from '../firebase-init.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';

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
