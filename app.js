const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/books", require("./routes/booksRoute"));

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});
