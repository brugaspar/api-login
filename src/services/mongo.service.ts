import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

try {
  mongoose.connect(uri, options);
  console.log("\n✔ Successfully connected to database!")
} catch(err) {
  console.log("\nError when trying to connect to database: " + err);
}

mongoose.connection.on("error", (err) => {
  console.log(err);
});