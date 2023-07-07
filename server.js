const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Export the app directly instead of the entire server object
module.exports = app;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});