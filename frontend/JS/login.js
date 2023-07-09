
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Make an AJAX request to authenticate user
      // Here, you can use a library like Axios or the built-in Fetch API
      console.log({email,password});
      // Example using Fetch API:
      fetch('https://digitalrecbackend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.text())
        .then((data) => {
          // Handle login response
          console.log(data);
          window.location.href = 'index.html';
          alert("You have been logged in Succesfully");
        })
        .catch((error) => {
          console.error('Error logging in:', error);
          alert("Wrong email or password");
        });
    });
  });