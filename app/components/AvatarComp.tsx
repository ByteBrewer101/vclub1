"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export default function AvatarComp() {
  const { data: session } = useSession();

  return (
    <Avatar>
      <AvatarImage
        src={session?.user?.image || "https://github.com/shadcn.png"}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
