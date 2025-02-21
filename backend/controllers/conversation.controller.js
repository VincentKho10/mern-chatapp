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
        res
          .status(200)
          .json(
            await existedConvo.populate({
              path: "participants",
              select: "_id full_name profile_pic",
            })
          );
        return;
      }
    }
    const newConvo = new conversationModel({
      participants,
    });
    await newConvo.save();
    res
      .status(200)
      .json(await newConvo.select("-password").populate("participants"));
  } catch (error) {
    console.log("Error in initiate conversation controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const retrieveConversation = async (req, res) => {
  try {
    const user = req.user;
    const { _id } = req.body;

    const conversation = await conversationModel.findOne({ _id }).select("-_id").populate({
      path: "messages",
      populate: {
        path: "senderId",
        select: "-_id full_name profile_pic"
      },
    });

    if (conversation) {
      res.status(200).json({uid: user._id,conversation});
    }
  } catch (error) {
    console.log("Error in retrieve conversation controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const listConversation = async (req, res)=>{
  try {
    const uid = req.user._id
    const lsofconvo = await conversationModel.find({participants: uid}).select('_id')
    res.status(200).json(lsofconvo)
  } catch (error) {
    console.log("Error in list conversation controller")
  }
}
