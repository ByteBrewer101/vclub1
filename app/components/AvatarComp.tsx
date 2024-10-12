"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export default function AvatarComp() {
  const { data: session } = useSession();

  return (
    <Avatar className="w-8 h-8" >
      <AvatarImage
        src={session?.user?.image || "https://github.com/shadcn.png"}
        
      />
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
  );
}
