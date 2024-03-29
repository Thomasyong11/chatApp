import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
//ROUTES
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
//DATABASE IMPORT
import connectToMongoDB from "./db/connecttoMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); //to parse the incoming requests with json payloads (from req.body)
app.use(cookieParser()); //to parse the incoming cookies from req.cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
});
