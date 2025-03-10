// import React from 'react'

import { BsSend } from "react-icons/bs";
import useSendMessages from "../../hooks/useSendMessages";
import { useState } from "react";

function MessageInput() {
  const [ message, setMessage ] = useState("")
  const { loading, sendMessage } = useSendMessages();

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    if(!message) return
    // console.log(message)
    sendMessage(message)
  }

  return (
    <form className="px-4 my-3" onSubmit={handleOnSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          onChange={(e)=>setMessage(e.target.value)}
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <BsSend />
          </button>
        )}
      </div>
    </form>
  );
}

export default MessageInput;
