const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS to allow requests from different origins
app.use(express.json());

let posts = [];

function generatePosts(page) {
  // Simulate generating posts
  const newPosts = Array.from({ length: 5 }, (_, index) => ({
    id: page * 5 + index + 1,
    user: `User ${page * 5 + index + 1}`,
    content: `This is the content of post #${page * 5 + index + 1}.`,
  }));
  return newPosts;
}

// Endpoint to fetch posts based on the page
app.get('/api/posts', (req, res) => {
  const { page = 1 } = req.query;
  const newPosts = generatePosts(Number(page));
  res.json(newPosts);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
