import mongoose from 'mongoose'

const conversationSchema = mongoose.Schema({
    room_name: {
        type: String
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: []
    }]
},{timestamps: true})

export default mongoose.model("Conversation", conversationSchema)