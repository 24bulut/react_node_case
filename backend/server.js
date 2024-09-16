const express = require('express');
const app = express();
const PORT = 3010;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
