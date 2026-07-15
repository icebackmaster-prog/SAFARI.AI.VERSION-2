interface Message {
  sender: string;
  text: string;
}

const messages: Message[] = [
  {
    sender: "SAFARI AI",
    text: "Welcome to SAFARI AI V2!"
  }
];

export default function MessageList() {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className="message-card">
          <strong>{msg.sender}</strong>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
}
