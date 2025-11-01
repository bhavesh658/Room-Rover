  import express from "express";
  import mongoose from "mongoose";
  import dotenv from "dotenv";
  import cors from "cors";

  import authRoutes from "./routes/authRoutes.js";
  import protectedRoutes from "./routes/protectedRoutes.js";
  import propertyRoutes from "./routes/Propertyroutes.js";
  import bookingRoutes from "./routes/bookingRoutes.js";

  dotenv.config();

  const app = express();

  // ✅ Proper CORS setup
  app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "https://room-rover-three.vercel.app",
        "https://your-frontend.netlify.app", // change this to your real Netlify URL
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

  app.use(express.json());

  // ✅ Routes
  app.use("/api/auth", authRoutes);
  app.use("/api", protectedRoutes);
  app.use("/api/properties", propertyRoutes);
  app.use("/api/bookings", bookingRoutes);

  // ✅ Root route
  app.get("/", (req, res) => res.send("API running ✅"));

  const PORT = process.env.PORT || 5000;

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ Connected to MongoDB");
      app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error("❌ Failed to connect to MongoDB:", err);
    });
