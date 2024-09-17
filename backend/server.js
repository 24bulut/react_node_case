import express from "express";
import cors from "cors";
import router from "./router/router.js";

const app = express();
app.use(cors());

app.use(router);

const PORT = 3010;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
