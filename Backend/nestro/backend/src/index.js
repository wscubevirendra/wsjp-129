import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"
import categoryRouter from "./routers/category.router.js"
import roomRouter from "./routers/room.router.js"
dotenv.config();
const app = express();
// Database Connection
connectDB();

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Server Running Successfully"
    });
});

app.use("/api/category", categoryRouter);
app.use("/api/room-type", roomRouter);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});