// import React from 'react'

import { TiMessages } from "react-icons/ti";
import MessageInput from "./MessageInput"
import Messages from "./Messages"

function MessageContainer() {
  const noChatSelected = true;

  return (
    <div className="flex flex-col md:min-w-[450px]">
      <div className="bg-slate-500 px-4 py-2 mb-2 text-start">
        <span className="label-text">To:</span> <span className="font-bold text-gray-900">John Doe</span>
      </div>
      {noChatSelected?(
        <NoChatSelected />
      ):(
        <>
        <Messages />
        <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = ()=>{
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap2">
        <p>Welcome John Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  )
}