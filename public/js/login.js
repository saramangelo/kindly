const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      if (!email) {
        document.querySelector('#email-login').className =
          'input-error form-control';
      }
      if (!password) {
        document.querySelector('#password-login').className =
          'input-error form-control';
      }
      document.querySelector('.error-text').textContent =
        'You need to complete all fields to login';
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      if (!name) {
        document.querySelector('#name-signup').className =
          'input-error form-control';
      }
      if (!email) {
        document.querySelector('#email-signup').className =
          'input-error form-control';
      }
      if (!password) {
        document.querySelector('#password-signup').className =
          'input-error form-control';
      }

      document.querySelector('.error-text').textContent =
        'You need to complete all fields to create a profile';
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
