/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react'
import { useState } from "react";
import useConversation from "../zustand/useConversation";

function useSendMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConvo, conversations, setConversations } =
    useConversation();

  const sendMessage = async (message) => {
    try {
      setLoading(true);
      const res = await fetch("/api/messages/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          conversationId: selectedConvo._id,
        }),
      });
      const data = await res.json();
      console.log(data.newmessage);
      if (data.error) throw new Error(data.error);
      setMessages([...messages, data.newmessage]);
      setConversations(
        conversations.map((v) => {
          if (v._id == data.conversationId) {
            v.messages.push(data.newmessage);
          }
          return v;
        })
      );
    } catch (error) {
      console.log(error.messages);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
}

export default useSendMessages;
