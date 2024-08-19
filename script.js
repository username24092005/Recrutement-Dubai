document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        event.preventDefault();
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        event.preventDefault();
        return;
    }
    
    // If validation passes, the form will be submitted
    console.log('Login attempt:', { email, password });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}