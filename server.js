// import Mongoose and Express
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user-router");

// JSON parsing middleware
app.use(express.json());

// apply middleware to routes
app.use("/users", userRouter);

// DB connection reference
const uri =
  "mongodb+srv://haileruta:love1129@cluster0.bswww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

// connect to mongoDb
async function connectDb() {
  try {
    // create a Mongoose client
    await mongoose.connect(uri, clientOptions);
    console.log("GIRLLL it's connected!");
  } catch (error) {
    // close if error
    await mongoose.disconnect();
    console.error(error);
  }
}

// run server
app.listen(PORT, async () => {
  await connectDb().catch(console.dir);
  console.log(`Server started at: http://localhost:${PORT}`);
});
