// This handles the navigation function.

    // This selects all of the pages.
    const pages = document.querySelectorAll('.page');

    // This selects all of the navigation links.
    const navLinks = document.querySelectorAll('nav a');

    // I added a click event listener to each of the navigation link.
    navLinks.forEach(link => {
        link.addEventListener('click', event => {

            // This prevents the default link behavior (page reload)
            event.preventDefault();

            // This gets the page ID from data-page attribute.
            const targetPage = link.getAttribute('data-page');

            // This is responsible for hiding all pages.
            pages.forEach(page => page.classList.add('hidesection'));

            // This shows or unveils the targeted page.
            document.getElementById(targetPage).classList.remove('hidesection');
        });
    });

// This handles the signup function.
document.getElementById('signup-btn').addEventListener('click', async () => {

// This gets the user's name input.
const name = document.getElementById('signup-name').value.trim();

// This gets the user's email address input.
const email = document.getElementById('signup-email').value.trim();

// This gets the user's password input.
const password = document.getElementById('signup-password').value.trim();

// This selects the error message container.
const error = document.getElementById('signup-error');

// This validates if the user has filled all the fields.
if (name && email && password) {
    try {
        // This sends a POST request to the backend to create a new user.
        const response = await fetch('http://localhost:4000/api/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // This sends the user data in request body.
            body: JSON.stringify({ name, email, password }),
        });

        // This is the Parse JSON response from backend.
        const data = await response.json();

        // This validates if sign-up was successful.
        if (response.ok) {
            alert('Welcome! Your sign-up was successful. You’ll be redirected to the Login page.');

            // This hides the error message if sign-up is successful.
            error.style.display = 'none';

            // This hides the sign-up form.
            document.getElementById('signup').classList.add('hidesection');

            // This shows the login form.
            document.getElementById('login').classList.remove('hidesection');
        } else {
            // This is to show the error message.
            error.textContent = data.message || 'Sign Up Failed!';
            // This displays the error message.
            error.style.display = 'block';
        }
    } catch (err) {
        // This handles any error if the request fails.
        error.textContent = 'An error occurred. Please try again later.';
        // This displays the error message.
        error.style.display = 'block';
    }
} else {
    // This shows an error if any fields are empty.
    error.textContent = 'Please complete all fields!';
    // This displays the error message.
    error.style.display = 'block';
}
});

// This handles the login Function.
document.getElementById('login-btn').addEventListener('click', async () => {

// This gets the user's email address input.
const email = document.getElementById('login-email').value.trim();

// This gets the user's password input.
const password = document.getElementById('login-password').value.trim();

// This selects the error message container.
const error = document.getElementById('login-error');

// This validates if both email and password are provided by the user.
if (email && password) {
    try {

        // This sends a POST request to backend to login the user.
        const response = await fetch('http://localhost:4000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // This sends login data in request body.
            body: JSON.stringify({ email, password }),
        });

        // Parse JSON response from backend.
        const data = await response.json();

        // This validates if login was successful.
        if (response.ok) {
            // Welcome message to the user.
            alert(`Welcome back to Ibong Adarna, ${data.user.name}!`);

            // Hide any error message.
            error.style.display = 'none';

            // This stores the user data in localStorage.
            localStorage.setItem('user', JSON.stringify(data));

            // This hides the sign up and login page and redirects the user to the home page.
            document.querySelectorAll('.page').forEach(page => page.classList.add('hidesection'));
            document.getElementById('home').classList.remove('hidesection');
        } else {
            // This shows an error message.
            error.textContent = data.message || 'The email or password you entered is incorrect.';

            // This displays the error message.
            error.style.display = 'block';
        }
    } catch (err) {
        // This handles any error if the request fails.
        error.textContent = 'An error occurred. Please try again later.';

        // This displays an error message.
        error.style.display = 'block';
    }
} else {
    // This shows an error if any fields are empty.
    error.textContent = 'Please complete all fields!';
    
    // This displays an error message.
    error.style.display = 'block';
}
});
