const express = require('express');
const app = express();
const PORT = 7000;

// Home Page Route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// About Page Route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Contact Page Route
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// 404 Route (Not Found)
app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
