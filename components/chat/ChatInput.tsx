"use client";

import { useState } from "react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="chat-input">

      <input
        type="text"
        placeholder="Ask SAFARI AI..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button>Send</button>

    </div>
  );
}
