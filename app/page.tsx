import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-gradient-radial">
      <div className="absolute inset-0 -z-5 bg-graph-paper mask-graph-paper" />
      <div className="flex flex-col items-center justify-center h-full relative inset-0 z-10 h-1/2 space-y-10  ">
        <h1 className="text-5xl font-bold">Start Connecting Now</h1>
        <h5 className="text-xl font-semibold text-center max-w-lg px-4">
          Connect with others easily and efficiently with our platform. Click
          the button below to get started.
        </h5>
        <Button>Connect</Button>

        <div className="flex items-center justify-center space-x-2">
          <button className="underline font-bold">Disclamer</button>
          <button className="underline font-bold ">Terms of service</button>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10">
        <div className="bg-black bg-opacity-10 backdrop-blur-sm shadow-xl h-72 w-72  z-10 rounded-xl flex justify-between p-10 items-left flex-col">
          <h1 className="text-2xl ">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            temporibus.
          </p>
          <Button className="space-x-2">
            <h1>Connect</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </Button>
        </div>
        <div className="bg-black bg-opacity-10 backdrop-blur-sm shadow-xl h-72 w-72  z-10 rounded-xl flex justify-between p-10 items-left flex-col">
          <h1 className="text-2xl ">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            temporibus.
          </p>
          <Button className="space-x-2">
            <h1>Connect</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </Button>
        </div>
        <div className="bg-black bg-opacity-10 backdrop-blur-sm shadow-xl h-72 w-72  z-10 rounded-xl flex justify-between p-10 items-left flex-col">
          <h1 className="text-2xl ">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            temporibus.
          </p>
          <Button className="space-x-2">
            <h1>Connect</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </Button>
        </div>{" "}
        <div className="bg-black bg-opacity-10 backdrop-blur-sm shadow-xl h-72 w-72  z-10 rounded-xl flex justify-between p-10 items-left flex-col">
          <h1 className="text-2xl ">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            temporibus.
          </p>
          <Button className="space-x-2">
            <h1>Connect</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
