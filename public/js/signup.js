const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value;
  const email = document.querySelector('#email-signup').value;
  const password = document.querySelector('#password-signup').value;

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(
      'Please enter a valid email and password with at least 8 characters!'
    );
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
