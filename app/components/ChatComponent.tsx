"use client"
import { Button } from "@/components/ui/button";
export  function ChatComp(){
const sample = [
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
];


    return <div className="flex flex-col h-full bg-white bg-opacity-5 backdrop-blur-xl p-4 rounded-xl  w-1/3" >
        <div className="h-full  w-full">
  

        </div>
        <div className="flex  justify-center items-center space-x-2 " >
            <input type="text" className="w-full p-2 bg-white  rounded-xl  "/>
            <Button>Send</Button>
        </div>

    

    </div>
}