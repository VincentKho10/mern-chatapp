import express from "express";
import { initiateConversation } from "../controllers/conversation.controller.js";

const routes = express.Router();

routes.post("/initiate", initiateConversation);

export default routes;
