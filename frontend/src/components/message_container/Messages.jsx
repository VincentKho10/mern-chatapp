// import React from 'react'

// import { useEffect } from "react";
import { useEffect, useRef } from "react";
import useMessageListener from "../../hooks/useMessageListener";
import useConversation from "../../zustand/useConversation";
import Message from "./Message";

function Messages() {
  const { messages } = useConversation();
  useMessageListener()
  const lastmessageref = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      lastmessageref?.current.scrollIntoView({ behavior: "smooth" })
    },100)
  },[messages])

  const domMessages = messages.map((message) => {
    return <div key={message._id} ref={lastmessageref}>
      <Message message={message} />
    </div>
  });

  // useEffect(domMessages,[setMessages])

  return (
    <div className="flex flex-col flex-1 gap-5 overflow-auto">
      {domMessages}
    </div>
  );
}

export default Messages;
