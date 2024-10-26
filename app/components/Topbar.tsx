"use client";

import { Button } from "@/components/ui/button";

import { signIn, signOut, useSession } from "next-auth/react";

import AvatarComp from "./AvatarComp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useEffect } from "react";

export default function TopBar() {
  const { status } = useSession();

    useEffect(() => {
      if (status === "authenticated") {
        toast.success("You have signed in successfully!");
      } else if (status === "unauthenticated") {
        toast.info("You have signed out.");
      }
    }, [status]);



  return (
    <div className="w-full bg-black bg-opacity-5 z-50 absolute  backdrop-blur-sm  ">
      <div className="flex justify-around space-x-20  p-4 items-center mx-10  ">
        <h1 className="font-bold text-xl text-zinc-950 dark:text-zinc-100 ">
          Collaborate
        </h1>

        <div className="flex space-x-4 items-center justify-center">
          {status === "authenticated" ? (
            <AvatarList />
          ) : (
            <Button
              className="border-black dark:border-zinc-100"
              onClick={() => {
                signIn();
              }}
            >
              Signin
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function AvatarList() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <AvatarComp />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>{
          toast("hello")
        }} >Profile</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
           
            signOut();

           

          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
