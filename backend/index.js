const express = require("express");
const articleRoutes = require("./routes/articleRoutes");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

port = 5000;

app.use(express.json());

app.use("/api/articles", articleRoutes);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
