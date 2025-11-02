<<<<<<< HEAD
  // import express from "express";
  // import mongoose from "mongoose";
  // import dotenv from "dotenv";
  // import cors from "cors";
=======
// import express from 'express';
// const app = express();
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import 'dotenv/config';
// const PORT = process.env.PORT || 8080;
// import mongoDB from './Models/db.js';
// import Authrouter from './Routes/Authrouter.js';
>>>>>>> tanveer

  // import authRoutes from "./routes/authRoutes.js";
  // import protectedRoutes from "./routes/protectedRoutes.js";
  // import propertyRoutes from "./routes/Propertyroutes.js";
  // import bookingRoutes from "./routes/bookingRoutes.js";

  // dotenv.config();

<<<<<<< HEAD
  // const app = express();

  // // ✅ Proper CORS setup
  // app.use(
  //   cors({
  //     origin: [
  //       "http://localhost:5173",
  //       "https://room-rover-three.vercel.app",
  //       "https://your-frontend.netlify.app", // change this to your real Netlify URL
  //     ],
  //     methods: ["GET", "POST", "PUT", "DELETE"],
  //     credentials: true,
  //   })
  // );

  // app.use(express.json());

  // // ✅ Routes
  // app.use("/api/auth", authRoutes);
  // app.use("/api", protectedRoutes);
  // app.use("/api/properties", propertyRoutes);
  // app.use("/api/bookings", bookingRoutes);

  // // ✅ Root route
  // app.get("/", (req, res) => res.send("API running ✅"));

  // const PORT = process.env.PORT || 5000;

  // mongoose
  //   .connect(process.env.MONGO_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })
  //   .then(() => {
  //     console.log("✅ Connected to MongoDB");
  //     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  //   })
  //   .catch((err) => {
  //     console.error("❌ Failed to connect to MongoDB:", err);
  //   });
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import propertyRoutes from './routes/Propertyroutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
=======
// app.use('/auth',Authrouter)
// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`)
// })
// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes (you might need to fix their syntax too)
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import propertyRoutes from "./routes/Propertyroutes.js";
>>>>>>> tanveer

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// Routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/bookings', bookingRoutes);
=======
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/properties", propertyRoutes);
>>>>>>> tanveer

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('❌ Failed to connect to MongoDB:', err);
});
=======
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
  });
>>>>>>> tanveer
