import React from "react";
import "./Message.css";

function Message({ role, content }) {
  return (
    <div className={`message ${role === "user" ? "user" : "assistant"}`}>
      <span>{role === "user" ? "🧑‍💻" : "🤖"} {content}</span>
    </div>
  );
}

export default Message;
