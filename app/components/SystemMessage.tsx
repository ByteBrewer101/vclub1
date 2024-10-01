"use client";


interface Mprops {
  message: string;
 
}

export default function SystemMessage({ message }: Mprops) {
  return (
    <div className="h-fit w-full flex items-center text-center justify-center space-y-2 py-4">
      <div className="bg-transparant p-2 flex items-center justify-center px-4 rounded-xl w-full font-semibold text-lg  text-white">
        <h1 className="bg-white bg-opacity-10 p-2 rounded-xl w-fit"> {message}</h1>
      </div>
    </div>
  );
}
