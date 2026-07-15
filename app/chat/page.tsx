import ChatHeader from "@/components/chat/ChatHeader";
import MessageList from "@/components/chat/MessageList";
import ChatInput from "@/components/chat/ChatInput";
import ChatHistory from "@/components/chat/ChatHistory";
import OnlineUsers from "@/components/chat/OnlineUsers";
import ImagePreview from "@/components/chat/ImagePreview";
import VideoPreview from "@/components/chat/VideoPreview";
import PDFPreview from "@/components/chat/PDFPreview";

export default function ChatPage() {

return(

<main>

<ChatHeader/>

<OnlineUsers/>

<MessageList/>

<ImagePreview/>

<VideoPreview/>

<PDFPreview/>

<ChatHistory/>

<ChatInput/>

</main>

);

}
