// import React from 'react'

// import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Message from "./Message";

function Messages() {
  const { messages } = useConversation();

  console.log(messages)
  const domMessages = messages.map((message) => {
    return <Message key={message._id} message={message} />;
  });

  // useEffect(domMessages,[setMessages])

  return (
    <div className="flex flex-col gap-5 overflow-auto">
      {domMessages}
    </div>
  );
}

export default Messages;
