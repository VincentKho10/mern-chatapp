// import React from 'react'

import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

function Conversations() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="pt-2 flex flex-col overflow-auto gap-2">
      {conversations.map((v, i) => <Conversation key={v._id} conversation={v} lstIdx={conversations.length-1 == i}/>)}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

export default Conversations;
