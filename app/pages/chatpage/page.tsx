"use client"
import { ChatComp } from "@/app/components/ChatComponent";
import { UserData } from "@/app/components/Userdatacard";


export default function ChatPage(){



    return (
      <div className="flex justify-center items-start space-x-4 w-full h-screen p-4 py-20 md:p-20  bg-graph-paper ">
        <UserData/>
        <ChatComp />
      </div>
    );
}