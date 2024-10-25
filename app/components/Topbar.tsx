"use client"

import { Button } from "@/components/ui/button"

import { signIn,  signOut,  useSession } from "next-auth/react";

import AvatarComp from "./AvatarComp";


export default function TopBar(){
    
    const { status} = useSession()
    



    return (
      <div className="w-full bg-black bg-opacity-5 z-50 absolute  backdrop-blur-sm  ">
        <div className="flex justify-between space-x-20  p-2 items-center mx-10  ">
          <h1 className="font-bold text-xl text-zinc-950 dark:text-zinc-100 ">
           Collaborate
          </h1>

          <div className="flex space-x-4 items-center justify-center">
            <Button
              
              className="border-black dark:border-zinc-100"
              onClick={() => {
                signIn();
              }}
            >
              Signin
            </Button>

            <Button onClick={()=>{signOut()}} >
              Signout
            </Button>

            {status === "authenticated" ? <AvatarComp /> : null}
          </div>
        </div>
      </div>
    );
}