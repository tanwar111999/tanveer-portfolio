const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Set initial theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.replace('light-mode', 'dark-mode');
  toggleButton.textContent = 'Switch to Light Mode';
} else {
  body.classList.add('light-mode');
  toggleButton.textContent = 'Switch to Dark Mode';
}

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.replace('light-mode', 'dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark-mode', 'light-mode');
    toggleButton.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});
