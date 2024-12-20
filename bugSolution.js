const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  try {
    someAsyncOperation().then(() => {
      res.send('Hello World!');
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong!'));
    }, 1000);
  });
}