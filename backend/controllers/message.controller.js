import messageModel from "../models/message.model.js";
import conversationModel from "../models/conversation.model.js";

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

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
