// import React from 'react'

import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

function Conversations() {
  const { loading, conversations } = useGetConversations();
  const conversationComponents = () => {
    return (
      <>
        {conversations.map(() => {
          <Conversation />;
        })}
      </>
    );
  };

  return (
    <div className="pt-2 flex flex-col overflow-auto gap-2">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : conversationComponents()}
    </div>
  );
}

export default Conversations;
