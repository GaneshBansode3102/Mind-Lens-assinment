import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import "../components/style.css"; // Keep this for layout styling

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

  return (
    <div className="layout">
      <Sidebar setSelectedChat={setSelectedChat} />
      <ChatWindow
        selectedChat={selectedChat}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
};

export default ChatPage;
