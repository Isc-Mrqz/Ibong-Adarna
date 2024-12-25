// This handles the navigation function.

// This selects all of the pages.
const pages = document.querySelectorAll('.page');

// This selects all of the navigation links.
const navLinks = document.querySelectorAll('nav a');


// I added a click event listener to each of the navigation link.
navLinks.forEach(link => {
    link.addEventListener('click', () => {

        // This gets the page ID from data-page attribute.
        const targetPage = link.getAttribute('data-page');

        // This is responsible for hiding all pages.
        pages.forEach(page => {
            page.classList.add('hidesection');
        });

        // This shows or unveils the targeted page.
        document.getElementById(targetPage).classList.remove('hidesection');
    });
});

// This handles the signup function.
document.getElementById('signup-btn').addEventListener('click', () => {

    // This gets the user's name input.
    const name = document.getElementById('signup-name').value;

    // This gets the user's email address input.
    const email = document.getElementById('signup-email').value;

    // This gets the user's password input.
    const password = document.getElementById('signup-password').value;

    // This validates if the user has filled all the fields.
    if (name && email && password) {

        // This holds or stores the user data in localStorage.
        localStorage.setItem('user', JSON.stringify({ name, email, password }));

        // This messages the user about their successful sign-up and redirects them to the login page.
        alert('Welcome! Your sign-up was successful. You’ll be redirected to the Login page.');

        // This hides the sign-up form and show the login form.
        document.getElementById('signup').classList.add('hidesection');
        document.getElementById('login').classList.remove('hidesection');
    } else {

        // This displays a message to the user if any fields are empty.
        alert('Please fill in all fields.');
    }
});

// This handles the login Function.
document.getElementById('login-btn').addEventListener('click', () => {

    // This gets the user's email address input.
    const email = document.getElementById('login-email').value;

    // This gets the user's password input.
    const password = document.getElementById('login-password').value;

    // This retrieves the stored user data from localStorage.
    const user = JSON.parse(localStorage.getItem('user'));

    // This validates if the entered credentials by the user matches the stored user data.
    if (user && user.email === email && user.password === password) {

        // This displays a welcome message to the user if credentials are correct.
        alert(`Welcome back to Ibong Adarna, ${user.name}!`);
    } else {
        // This displays an error message to the user if credentials are incorrect.
        alert('The email or password you entered is incorrect. Please try again.');
    }
});

