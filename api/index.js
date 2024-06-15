import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./roots/auth.js"; 
import usersRoutes from "./roots/users.js"; 
import roomsRoutes from "./roots/rooms.js"; 
import hotelsRoutes from "./roots/hotels.js"; 
import cookieParser from "cookie-parser"; // Correct import

const app = express();
dotenv.config();

const connect = async () => {
  try {
    if (!process.env.MONGO) {
      throw new Error("MONGO environment variable not set");
    }

    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // 5 seconds
      socketTimeoutMS: 45000, // 45 seconds
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// Middleware
app.use(cookieParser()); // Call cookieParser as a function
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/rooms", roomsRoutes);

app.get("/api", (req, res) => {
  console.log("hello");
  res.send("Hello from the /api route!");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "There's an error";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
