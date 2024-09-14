import { Button } from "@/components/ui/button";
import CardComp from "./components/CardComp";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-gradient-radial relative">
      <div className="absolute inset-0 -z-5 bg-graph-paper mask-graph-paper" />
      <div className="flex flex-col items-center justify-center h-full  inset-0 z-10 h-1/2 space-y-10 relative ">
        <h1 className=" text-3xl md:text-7xl font-bold">
          Start Connecting Now
        </h1>
        <h5 className="text-md  md:text-xl font-semibold text-center max-w-lg px-4">
          Connect with others easily and efficiently with our platform. Click
          the button below to get started.
        </h5>
        <Button className=" bg-indigo-500 text-white hover:text-black shadow-xl shadow-indigo-500/50">Chat Now</Button>

        <div className="flex items-center space-x-2 ">
          <button className="underline font-bold">Disclamer</button>
          <button className="underline font-bold ">Terms of service</button>
        </div>

        <div className="flex justify-center items-center space-x-10 md:overflow-visible overflow-x-auto">
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
