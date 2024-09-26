"use client";

import AvatarComp from "./AvatarComp";

interface Mprops {
  message: string;
}

export default function MessageBlockReciever({ message }: Mprops) {
  return (
    <div className="w-full  flex justify-end" >
      <div className="w-fit p-4 space-y-2 py-4">
        <div className="flex justify-end items-center space-x-2">
          <h1 className="font-bold text-white">You</h1>
          <AvatarComp />
        </div>

        <div className="flex justify-end">
          <div className="bg-gray-700 bg-opacity-20 backdrop-blur-xl p-2 px-4 rounded-xl  text-white">
            {message}
          </div>
        </div>

        <div className="flex justify-end">
          <p className="text-white">11:11</p>
        </div>
      </div>
    </div>
  );
}
