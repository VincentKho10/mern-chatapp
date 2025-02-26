// import React from 'react'

function Message() {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-blue-600">
                <img src={
                    "https://avatar.iran.liara.run/public"
                } alt="Tailwind CSS chat bubble component" />

            </div>
        </div>
        <div className={`text-white chat-bubble bg-blue-500`}>Hi! What is up?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:24</div>
    </div>
  )
}

export default Message