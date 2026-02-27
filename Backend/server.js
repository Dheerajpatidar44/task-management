const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const path = require("path");
const adminRoutes = require("./routes/adminRoutes");
const developerRoutes = require("./routes/developerRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/admin", adminRoutes);
app.use("/api/developer", developerRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
