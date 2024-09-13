"use client"

import { Button } from "@/components/ui/button"

import { signIn, signOut, useSession } from "next-auth/react";

import AvatarComp from "./AvatarComp";


export default function TopBar(){

    const {data:session , status} = useSession()
    



    return (
      <div className="w-full bg-zinc-100 dark:bg-zinc-950 backdrop-blur-xl shadow-xl bg-opacity-40 ">
        <div className="flex justify-between space-x-20  p-2 items-center mx-10  ">
          <h1 className="font-bold text-xl text-zinc-950 dark:text-zinc-100 ">
            SiteName
          </h1>

          <div className="flex space-x-4 items-center justify-center">
            <Button
              variant="outline"
              className="border-black dark:border-zinc-100"
              onClick={()=>{signIn()}}
            >
            
              Signin
            </Button>
           
            {status === "authenticated" ? <AvatarComp/>: null}
          </div>
        </div>
      </div>
    );
}