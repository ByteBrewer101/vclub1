"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface cardInterface {
    title : string,
    content:string
}

export default function CardComp ({title , content}:cardInterface){
    return (
      <div className=" bg-black bg-opacity-10 backdrop-blur-sm shadow-xl h-72 w-72  z-10 rounded-xl flex justify-between p-10 items-left flex-col hover:scale-105 transition ease-in-out duration-200 ">
        <div className="flex justify-between items-center" >
          <h1 className="text-2xl ">{title}</h1>
          <Avatar>
            <AvatarImage
              src= "https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <p>{content}</p>
        <Button className="space-x-2">
          <h1>Connect</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </Button>
      </div>
    );

}