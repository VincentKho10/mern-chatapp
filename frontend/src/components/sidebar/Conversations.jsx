// import React from 'react'

import Conversation from "./Conversation"

function Conversations() {
  return (
    <div className="pt-2 flex flex-col overflow-auto gap-2">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default Conversations