import express from "express";
import { initiateConversation, listConversation, retrieveConversation } from "../controllers/conversation.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const routes = express.Router();

routes.post("/initiate", protectRoute, initiateConversation);
routes.post("/retrieve", protectRoute, retrieveConversation);
routes.post("/list", protectRoute, listConversation);

export default routes;
