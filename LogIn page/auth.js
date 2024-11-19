import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';
import { auth } from '../firebase-init.js';

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            message.textContent = "Login successful! Redirecting...";
            window.location.href = "../index.html"; 
        })
        .catch((error) => {
           const errorCode = error.code;
            const errorMessage = error.message;
            message.textContent = "Login failed. Please check your credentials.";
        });
});
