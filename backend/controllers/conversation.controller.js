import conversationModel from "../models/conversation.model.js";

export const initiateConversation = async (req, res) => {
  try {
    const { participants } = req.body;
    if (participants.length < 2) {
      throw Error("Less than 2 participants impossible");
    }
    if (participants.length == 2) {
      const existedConvo = await conversationModel.findOne({ participants });
      if (existedConvo) {
        res.status(200).json(await existedConvo.populate({path:"participants", select: "_id full_name profile_pic"}));
        return
      }
    }
    const newConvo = new conversationModel({
      participants,
    });
    await newConvo.save();
    res.status(200).json(await newConvo.select("-password").populate("participants"));
  } catch (error) {
    console.log("Error in initiate conversation controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
