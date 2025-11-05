// import express from "express";
// import cors from "cors";
// import authRoutes from "./Routes/authRoutes.js";
// import protectedRoutes from "./Routes/protectedRoutes.js";
// import propertyRoutes from "./Routes/Propertyroutes.js";
// import bookingRoutes from "./Routes/bookingRoutes.js";
// import connectDB from "./db.js";

// const app = express();
//  await connectDB();
// app.use(cors());

// // Middleware to parse JSON
// app.use(express.json());

// // Example routes
// app.use("/api/auth", authRoutes);
// app.use("/api", protectedRoutes);
// app.use("/api/properties", propertyRoutes);
// app.use("/api/bookings", bookingRoutes);
// app.get("/", (req, res) => {
//   res.send("API running 🚀");
// });

// const PORT = process.env.PORT || 5000;
// // const MONGO =
// //   process.env.MONGO_URI ||
// //   "mongodb+srv://yadavbhavesh:12345@rooms.xeajzyr.mongodb.net/Rooms-Data?retryWrites=true&w=majority&appName=Rooms";

// // mongoose
// //   .connect(MONGO)
// //   .then(() => {
// //     console.log("✅ Connected to MongoDB");
// //     //app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// //   })
// //   .catch((err) => {
// //     console.error("❌ Failed to connect to MongoDB:", err);
// //   });

// export default app;
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoutes.js";
import protectedRoutes from "./Routes/protectedRoutes.js";
import propertyRoutes from "./Routes/Propertyroutes.js";
import bookingRoutes from "./Routes/bookingRoutes.js";
import connectDB from "./db.js";

dotenv.config();

const app = express();

// ✅ Connect to MongoDB (call async function)
const startServer = async () => {
  try {
    await connectDB();
    

    // Middleware
    app.use(cors());
    app.use(express.json());

    // Routes
    app.use("/api/auth", authRoutes);
    app.use("/api", protectedRoutes);
    app.use("/api/properties", propertyRoutes);
    app.use("/api/bookings", bookingRoutes);

    // Default route
    app.get("/", (req, res) => {
      res.send("API running 🚀");
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Server start failed:", error);
  }
};

startServer();
