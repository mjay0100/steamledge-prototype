import React from "react";
import Chatroom from "./Chatroom";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
const Content = () => {
  return (
    <div className="main ">
      <Sidebar />
      <div className="mt-[5rem]">
        <Chat />
      </div>
      
      <Chatroom />
    </div>
  );
};

export default Content;
