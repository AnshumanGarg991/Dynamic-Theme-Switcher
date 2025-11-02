const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

// Toggle theme and save preference
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  const theme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Optional: Handle form submission
document.getElementById('feedback-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you for your feedback!");
  e.target.reset();
});
