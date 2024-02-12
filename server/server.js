const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/db");
const dotenv = require("dotenv");
const router = require("./routes/route");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  console.log(`Database Connected!`);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
