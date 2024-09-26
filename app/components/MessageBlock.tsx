"use client"

import AvatarComp from "./AvatarComp";


interface Mprops {
    message:string,
    sender: string
}

export  default function MessageBlock({message,sender}:Mprops){
    return (
      <div className="h-fit w-fit space-y-2 py-4">
        <div className="flex space-x-2  items-center  " >
          <AvatarComp  />
          <h1 className="font-bold ">{sender}</h1>
        </div>

        <div className="bg-orange-500 p-2 px-4 rounded-xl w-full  text-white">
          {message}
        </div>
        <p>11:11</p>
      </div>
    );
    
    
}