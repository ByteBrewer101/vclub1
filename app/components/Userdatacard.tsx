import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserData() {
  return (
    <div className="flex bg-white bg-opacity-5  backdrop-blur-sm p-4 rounded-xl  flex-col justify-center items-center space-y-4">
      <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-xl p-2  justify-start">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1>Name Lastname</h1>
          <h1>position</h1>
        </div>
      </div>
      <div className="flex flex-col  items-start justify-start">
        <h1>username</h1>
        <h1>website</h1>
      </div>
    </div>
  );
}