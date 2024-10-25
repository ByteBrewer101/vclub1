"use client";
import { ChatComp } from "@/app/components/ChatComponent";
import { UserData } from "@/app/components/Userdatacard";
import { signIn, useSession } from "next-auth/react";

import { useEffect } from "react";

export default function ChatPage() {
  const { status } = useSession();


  useEffect(() => {
    // If the user is not authenticated, directly trigger signIn without rendering the page.
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);


  if (status === "loading" || status === "unauthenticated") {
    return null; 
  }

  // Render the page content only when the user is authenticated.
  return (
    <div className="flex justify-center items-start space-x-4 w-full h-screen p-4 py-20 md:p-20 bg-graph-paper">
      <UserData />
      <ChatComp />
    </div>
  );
}
