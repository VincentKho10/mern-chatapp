/* eslint-disable react/prop-types */
// import React from 'react'

function Message(props) {
  const { message } = props
  const timeSent = message.createdAt.split('T')[1].slice(0,5)
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-blue-600">
                <img src={message.senderId.profile_pic} alt="Tailwind CSS chat bubble component" />

            </div>
        </div>
        <div className={`text-white chat-bubble bg-blue-500`}>{message.message}</div>
        <div className="text-white chat-footer opacity-50 text-xs flex gap-1 items-center">{timeSent}</div>
    </div>
  )
}

export default Message