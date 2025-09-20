// server/index.js
const express = require('express');
const app = express();
const PORT = 3001; // We choose a port for our backend, e.g., 3001

// A simple test route to make sure the server is running
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the CodePod server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});