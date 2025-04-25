const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, Images) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve Bootstrap from node_modules
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
