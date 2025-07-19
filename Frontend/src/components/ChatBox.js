import React from "react";
import Message from "./Message";
import "./ChatBox.css";

function ChatBox({ messages, input, setInput, handleSend, isLoading }) {
  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, i) => (
          <Message key={i} role={msg.role} content={msg.content} />
        ))}
        {isLoading && <Message role="assistant" content="⏳ Typing..." />}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onEnterPress}
          placeholder="Type your question..."
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
