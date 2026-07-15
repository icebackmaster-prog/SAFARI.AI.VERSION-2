interface Props {
  sender: string;
  text: string;
}

export default function ChatBubble({
  sender,
  text,
}: Props) {
  return (
    <div className="chat-bubble">

      <strong>{sender}</strong>

      <p>{text}</p>

    </div>
  );
}
