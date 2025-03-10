/* eslint-disable react/prop-types */
// import React from 'react'

import useConversation from "../../zustand/useConversation";

const Conversation = (props) => {
  const {selectedConvo, setSelectedConvo, setMessages} = useConversation()

  const { conversation, lstIdx } = props;
  const { room_name, participants } = conversation;

  const isSelected = selectedConvo?._id === conversation._id;

  const handleSelect = ()=>{
    setSelectedConvo(conversation)
    setMessages(conversation.messages)
    // if(isSelected){
    //   e.target.className = 
    // }
  }

  const moreParticipants = participants.length > 2
  const groupProfile = "https://www.ibcs.com/wp-content/uploads/2024/01/Projekt-bez-nazwy-15.png"

  return (
    <>
    <div onClick={handleSelect}  className={`flex gap-2 items-center max-w-64 hover:bg-sky-500 ${isSelected?"bg-sky-500":""} rounded p-2 py-1 cursor-pointer`}>
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={moreParticipants?groupProfile:participants[0].profile_pic} alt="user avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200 overflow-x-auto">{room_name}</p>
        </div>
      </div>

    </div>
    {!lstIdx&&<div className="divider my-0 py-0 h-1"></div>}
    </>
  );
}

export default Conversation;
