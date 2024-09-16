"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import MessageBlock from "./MessageBlock";
import MessageBlockReciever from "./MessageBlockReciever";

export function ChatComp() {
  const [currentChat, setCurrentChat] = useState("");

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [sample, setSample] = useState([
    {
      status: true,
      message: "Hello, how are you?",
      senderName: "Alice",
    },
    {
      status: false,
      message: "I'm doing well, thanks!",
      senderName: "Bob",
    },
    {
      status: true,
      message: "Are you joining the meeting later?",
      senderName: "Alice",
    },
    {
      status: false,
      message: "Yes, I'll be there at 3 PM.",
      senderName: "Bob",
    },
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [sample]);

  const sendHandler = () => {
    if (currentChat.trim()) {
      const chat = {
        status: false,
        message: currentChat,
        senderName: "You",
      };

      setSample((prev) => [...prev, chat]);
      setCurrentChat("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white bg-opacity-5 shadow-2xl  backdrop-blur-xl p-4 rounded-xl w-full xl:w-2/3 md:w-4/5">
      <div className="h-full flex-grow flex flex-col-reverse overflow-y-auto p-2 mb-2 space-y-2 no-scrollbar">
        <div ref={bottomRef} />
        {sample
          .slice()
          .reverse()
          .map((chat, index) => {
            return chat.status ? (
              <MessageBlock key={index} message={chat.message} />
            ) : (
              <MessageBlockReciever key={index} message={chat.message} />
            );
          })}
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="flex-grow p-2 bg-opacity-5 bg-white text-white outline-none rounded-xl"
          value={currentChat}
          onChange={(e) => setCurrentChat(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendHandler();
          }}
        />
        <Button onClick={sendHandler}>Send</Button>
      </div>
    </div>
  );
}
