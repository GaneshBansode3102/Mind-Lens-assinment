import React, { useState } from "react";
import "../components/style.css"; // Import CSS file



const Sidebar = ({ setSelectedChat }) => {
  const [chats, setChats] = useState(["Chat 1", "Chat 2"]);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "☰" : "✖"}
      </div>

      {!collapsed && (
        <div className="sidebar-content">
          <h3 className="sidebar-title">💬 Chat History</h3>
          <div className="chat-list">
            {chats.map((chat, idx) => (
              <div
                key={idx}
                className="chat-item"
                onClick={() => setSelectedChat(chat)}
              >
                {chat}
              </div>
            ))}
          </div>
          <button className="login-btn">🔐 Login/Logout</button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
