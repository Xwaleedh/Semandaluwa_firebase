// script.js
const form = document.getElementById('changePasswordForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Add your password validation logic here, e.g., checking password strength, matching confirmation password, etc.

    // If validation passes, submit the form (e.g., using AJAX or a regular form submission)
    form.submit();
});