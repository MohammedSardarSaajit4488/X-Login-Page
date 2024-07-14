document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Email: ${email}\nPassword: ${password}`);
  });
});
