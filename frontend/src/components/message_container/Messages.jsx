// import React from 'react'

// import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Message from "./Message";

function Messages() {
  const { messages } = useConversation();

  const domMessages = messages.toReversed().map((message) => {
    return <Message key={message._id} message={message} />;
  });

  // useEffect(domMessages,[setMessages])

  return (
    <div className="flex flex-col-reverse flex-1 gap-5 overflow-auto">
      {domMessages}
    </div>
  );
}

export default Messages;
