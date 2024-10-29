"use client";

import { Button } from "@/components/ui/button";
import CardComp from "../components/CardComp";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { ConnStatus } from "../SocketLogic/atoms";
import { useRecoilValue } from "recoil";

export default function AppPage() {
  const router = useRouter();
  const { status } = useSession();
  const conStatus = useRecoilValue(ConnStatus)




  const handleChatNow = () => {
    if (status === "authenticated" && conStatus) {
      router.push("/pages/chatpage");
    } else if(status === "unauthenticated") {
      toast.info("Sign in to continue");
    }
    else if(!conStatus){
       toast.error("Connecting to server");

    }
  };

  return (
    <div className=" min-h-screen flex justify-center items-center">
      
      <div className="flex flex-col items-center justify-center space-y-8 h-full w-full px-4 sm:px-8 sm:mt-20 mt-40">
        <h1 className="text-3xl md:text-7xl font-bold text-center">
          Start Connecting Now
        </h1>
        <h5 className="text-center  z-50 text-md md:text-xl font-semibold max-w-lg">
          Connect with others easily and efficiently with our platform. Click
          the button below to get started.
        </h5>
        <Button
          onClick={handleChatNow}
          className="bg-orange-500  text-white hover:text-black shadow-lg shadow-orange-500/50 "
        >
          Chat Now
        </Button>

        <div className="flex items-center space-x-4">
          <button className="underline font-bold">Disclaimer</button>
          <button className="underline font-bold">Terms of Service</button>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <CardComp
            title="Card One"
            content="This is the content of the first card sample."
          />
          <CardComp
            title="Second"
            content="Here is another card with some more sample content."
          />
          <CardComp
            title="Final Card"
            content="The final card content contains exactly ten words."
          />
        </div>
      </div>
    </div>
  );
}
