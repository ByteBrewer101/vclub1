"use client";
import { ChatComp } from "@/app/components/ChatComponent";
import TopBar from "@/app/components/Topbar";
import { useWebSocketServer } from "@/app/customHooks/Connection";
import { useJoinMessage } from "@/app/customHooks/Functionsws";
import { ConnStatus, LookingForMatch } from "@/app/SocketLogic/atoms";
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
  const conStatus = useRecoilValue(ConnStatus);

  const url = process.env.NEXT_PUBLIC_API_URL || "";
  useWebSocketServer(url);

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  useEffect(() => {
    setIsDialogOpen(value === "first" || value === "false");
    if (value === "true") {
      toast.success("You are connected. Start Chatting");
    }
  }, [value]);

  if (status === "loading" || status === "unauthenticated") {
    return null;
  }

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-col md:flex-row justify-center items-start space-x-4 flex-grow p-4 py-10 md:py-20">
        {isDialogOpen && (
          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogContent className="max-w-sm w-full mx-auto">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-lg md:text-xl">
                  {value === "first" ? "Join the Lobby" : "Waiting for a Match"}
                </AlertDialogTitle>
                <AlertDialogDescription className="text-sm md:text-base">
                  {value === "first"
                    ? "Click the button below to join the lobby."
                    : "Please wait, we are finding a match for you."}
                </AlertDialogDescription>
                {value === "first" && (
                  <Button
                    variant={!conStatus ? "outline" : "default"}
                    onClick={() => {
                      joinNewRoom();
                      setIsDialogOpen(false);
                    }}
                    disabled={!conStatus}
                    className="mt-4 w-full md:w-auto"
                  >
                    {!conStatus ? "Connecting..." : "Join Chat"}
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
