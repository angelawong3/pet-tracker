const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username-login').value;
  const password = document.querySelector('#password-login').value;

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert('Incorrect user name or password, please try again!');
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
