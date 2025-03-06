/* eslint-disable react/prop-types */
// import React from 'react'

const Conversation = () => {
  console.log("props")
  // const { conversation, lstIdx } = props;
  // const { room_name } = conversation;
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://avatar.iran.liara.run/public" alt="user avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          {/* <p className="font-bold text-gray-200">{room_name}</p> */}
          {/* <p className="font-bold text-gray-200">room_name</p> */}
        </div>
      </div>

    </div>
    {/* {!lstIdx&&<div className="divider my-0 py-0 h-1"></div>} */}
    </>
  );
}

export default Conversation;
