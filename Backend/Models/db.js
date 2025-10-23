import mongoose from "mongoose";

const Mongourl = process.env.MONGO_URI; // must match .env variable

const mongoDB = async () => {
  try {
    await mongoose.connect(Mongourl);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
  }
};

export default mongoDB;
