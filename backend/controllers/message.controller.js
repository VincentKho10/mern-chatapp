import messageModel from "../models/message.model.js";
import conversationModel from "../models/conversation.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { message, conversationId } = req.body;

    const conversation = await conversationModel.findById(conversationId);

    const newMessage = new messageModel({
      senderId,
      message,
    });

    conversation.messages.push(newMessage._id);

    await Promise.all([newMessage.save(), conversation.save()]);

    //socket functionality
    conversation.participants.filter((v)=>!v.equals(senderId)).forEach(async (v) => {
      const receiverId = getRecieverSocketId(v);
      if (receiverId) {
        io.to(receiverId).emit(
          "newMessage",
          {conversationId, newmessage: await newMessage.populate("senderId")}
        );
      }
    });

    res.status(201).json({conversationId, newmessage: await newMessage.populate("senderId")});
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
