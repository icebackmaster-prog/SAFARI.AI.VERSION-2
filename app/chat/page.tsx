import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import ChatBubble from "@/components/chat/ChatBubble";
import FileUpload from "@/components/chat/FileUpload";
import VoiceButton from "@/components/chat/VoiceButton";

export default function ChatPage() {
  return (
    <main>

      <ChatHeader />

      <ChatBubble
        sender="SAFARI AI"
        text="Hello! Welcome to SAFARI AI V2."
      />

      <FileUpload />

      <VoiceButton />

      <ChatInput />

    </main>
  );
}
