const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public folder (if needed)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Node.js Front-End Web Server Running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
