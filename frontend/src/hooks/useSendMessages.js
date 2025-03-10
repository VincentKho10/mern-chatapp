/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react'
import { useState } from "react";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";

function useSendMessages() {
  const [ loading, setLoading ] = useState(false);
  const { messages, setMessages, selectedConvo } = useConversation();

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
      if (data.error) throw new Error(data.error);
      setMessages(messages);
    } catch (error) {
      console.log(error.messages);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
}

export default useSendMessages;
