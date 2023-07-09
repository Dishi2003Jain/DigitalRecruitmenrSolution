const mongoose = require("mongoose");
const express = require("express");
const app = express();
const auth=require("./routes/auth")
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api",auth)

app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend Server is running")
})