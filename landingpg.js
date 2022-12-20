const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '3' && password === '1') {
    alert('Welcome customer (Details auto saved)');
  } else {
    alert('New User (Details auto saved)');
  }
});



