const express = require("express");
const productRouter = require("./routes/routes");

const app = express();

app.use(express.json());

app.use("/products", productRouter);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
