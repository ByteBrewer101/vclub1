import { ChatComp } from "@/app/components/ChatComponent";

export default function ChatPage(){
    return (
      <div className="flex justify-center items-center w-full min-h-screen p-4 py-20 md:p-20  bg-graph-paper ">
        <ChatComp />
      </div>
    );
}