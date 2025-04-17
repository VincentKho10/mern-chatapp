import messageModel from "../models/message.model.js";
import conversationModel from "../models/conversation.model.js";
import { getConversationSocketId } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { message, conversationId } = req.body;

    const conversation = await conversationModel.findById(conversationId);

    const newMessage = new messageModel({
      senderId,
      message,
    });

    await newMessage.save();
    
    conversation.messages.push(newMessage._id);
    
    await conversation.save();

    //socket functionality
    const conversationSocketId = getConversationSocketId(conversationId)
    if(conversationSocketId){
      io.to(conversationSocketId).emit("newMessage", newMessage)
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
