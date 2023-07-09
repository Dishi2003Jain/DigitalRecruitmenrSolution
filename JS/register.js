
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('form');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    console.log({name,email,password});

    // Make an AJAX request to register user
    // Here, you can use a library like Axios or the built-in Fetch API

    // Example using Fetch API:
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.text())
      .then((data) => {
        // Handle registration response
        console.log(data);
        window.location.href = 'login.html';
        alert("You have been registered Succesfully!");
        
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        alert("This email is already existing");
      });
  });
});