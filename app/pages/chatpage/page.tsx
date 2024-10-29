"use client";
import { ChatComp } from "@/app/components/ChatComponent";
import TopBar from "@/app/components/Topbar";

import { useJoinMessage } from "@/app/customHooks/Functionsws";
import { LookingForMatch } from "@/app/SocketLogic/atoms";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { signIn, useSession } from "next-auth/react";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { toast } from "sonner";

export default function ChatPage() {
  const { status } = useSession();
  const joinNewRoom = useJoinMessage();
 
  const value = useRecoilValue(LookingForMatch);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

 

  useEffect(() => {
    // If the user is not authenticated, directly trigger signIn without rendering the page.
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  useEffect(() => {
    // Open dialog based on `LookingForMatch` value
    setIsDialogOpen(value === "first" || value === "false");
    if(value === "true"){
      toast.success("You are connected Start Chatting")
    }
  }, [value]);

  if (status === "loading" || status === "unauthenticated") {
    return null;
  }

  // Render the page content only when the user is authenticated.
  return (
    <div>
      <TopBar/>
      <div className="flex justify-center items-start space-x-4 w-full h-screen p-4 py-20 md:p-20 ">
        {isDialogOpen && (
          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {value === "first" ? "Join the Lobby" : "Waiting for a Match"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {value === "first"
                    ? "Click the button below to join the lobby."
                    : "Please wait, we are finding a match for you."}
                </AlertDialogDescription>
                {value === "first" && (
                  <Button
                    onClick={() => {
                      joinNewRoom();
                      setIsDialogOpen(false);
                    }}
                  >
                    Join
                  </Button>
                )}
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        )}

        
        <ChatComp />
      </div>
    </div>
  );
}
