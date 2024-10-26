"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import MessageBlock from "./MessageBlock";
import MessageBlockReciever from "./MessageBlockReciever";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { chatArray } from "../SocketLogic/atoms";
import { useJoinMessage, useSendChat } from "../customHooks/Functionsws";
import SystemMessage from "./SystemMessage";

export function ChatComp() {
  const [currentChat, setCurrentChat] = useState("");
  const sendMessageChat = useSendChat();
  const joinNewRoom = useJoinMessage();

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const chatarrayglobal = useSetRecoilState(chatArray);
  const chatArrayValue = useRecoilValue(chatArray);

  useEffect(() => {
    scrollToBottom();
  }, [chatArrayValue]);

  const sendHandler = () => {
    if (currentChat.trim()) {
      const chat = {
        status: false,
        message: currentChat,
        senderName: "You",
      };
      chatarrayglobal((prev) => [...prev, chat]);
      setCurrentChat("");
      sendMessageChat(chat.message);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white bg-opacity-5 shadow-2xl  backdrop-blur-sm p-4 rounded-xl w-full xl:w-2/3 md:w-4/5">
      <div className="h-full flex-grow flex flex-col-reverse overflow-y-scroll p-2 mb-2 space-y-2 no-scrollbar">
        <div ref={bottomRef} />
        {chatArrayValue
          .slice()
          .reverse()
          .map((chat, index) => {
            if (chat.senderName === "system") {
              return <SystemMessage key={index} message={chat.message} />;
            }
            return chat.status ? (
              <MessageBlock
                key={index}
                sender={chat.senderName}
                message={chat.message}
              />
            ) : (
              <MessageBlockReciever key={index} message={chat.message} />
            );
          })}
      </div>

      <div className="flex items-center w-full space-x-2">
        <input
          type="text"
          className="flex-grow p-2 bg-opacity-5 bg-white text-white outline-none rounded-xl"
          value={currentChat}
          onChange={(e) => setCurrentChat(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendHandler();
          }}
        />
        <Button
        variant="outline"
          className="bg-orange-800 hover:bg-orange-500"
          onClick={sendHandler}
        >
          Send
        </Button>
        <Button
        
          onClick={() => {
            joinNewRoom();
          }}
         
        >
          Change Partner
        </Button>
      </div>
    </div>
  );
}
