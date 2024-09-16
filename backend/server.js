import express from "express";
import router from "./router/router.js";

const app = express();
app.use(router);

const PORT = 3010;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
