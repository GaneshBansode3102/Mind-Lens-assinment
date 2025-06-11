import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import SlideViewer from "./SlideViewer";

const ChatWindow = ({ messages, setMessages }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    // Simulated AI response for testing without API
    setTimeout(() => {
      const content = input.includes("<table")
        ? input
        : input.includes("```js")
        ? input
        : input.includes("---") && input.includes("#")
        ? input
        : input.includes("#") || input.includes("**") || input.includes("![")
        ? input
        : `Ai: ${input}`;
      setMessages((prev) => [...prev, { role: "assistant", content }]);
      setLoading(false);
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderContent = (msg) => {
    const content = msg.content;

    // Slide Viewer
    if (content.includes("---") && content.includes("#")) {
      return <SlideViewer content={content} />;
    }

    // Table HTML Preview
    if (content.startsWith("<table")) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    // JavaScript Code Preview
    if (content.includes("```js")) {
      const codeMatch = content.match(/```js([\s\S]*?)```/);
      const jsCode = codeMatch?.[1]?.trim() || "// No valid JS code";

      const html = `
        <html>
          <body>
            <script>
              window.onload = () => {
                ${jsCode}
              };
            </script>
          </body>
        </html>
      `;

      return (
        <iframe
          title="code-preview"
          srcDoc={html}
          style={{ width: "100%", height: "300px", border: "1px solid #ccc" }}
        />
      );
    }

    // Markdown Preview
    if (content.includes("#") || content.includes("**") || content.includes("![")) {
      return <ReactMarkdown>{content}</ReactMarkdown>;
    }

    // Default fallback
    return <div>{content}</div>;
  };

  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role}>
            {renderContent(msg)}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
