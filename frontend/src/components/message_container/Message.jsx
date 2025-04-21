/* eslint-disable react/prop-types */
// import React from 'react'

import { useAuthContext } from "../../context/AuthContext"

function Message(props) {
  const { message } = props
  const timeSent = message.createdAt.split('T')[1].slice(0,5)
  const { authUser } = useAuthContext()
  
  return (
    <div className={`chat chat-${message.senderId._id==authUser._id?"end": "start"}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-blue-600">
                <img src={message.senderId.profile_pic} alt="Tailwind CSS chat bubble component" />

            </div>
        </div>
        <div className={`text-white chat-bubble  ${message.senderId._id==authUser._id?"bg-blue-600":"bg-slate-600"}`}>{message.message}</div>
        <div className="text-white chat-footer opacity-50 text-xs flex gap-1 items-center">{timeSent}</div>
    </div>
  )
}

export default Message