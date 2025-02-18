import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import conversationRoutes from "./route/conversation.routes.js";
import messageRoutes from "./route/message.routes.js";
import authRoutes from "./route/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/conversations", conversationRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`listening to http://localhost:${PORT}`);
});
