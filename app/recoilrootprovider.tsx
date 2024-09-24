"use client";

import { RecoilRoot } from "recoil";
import { useWebSocketServer } from "./customHooks/Connection";

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <ConnectionInitializer>{children}</ConnectionInitializer>
    </RecoilRoot>
  );
}

function ConnectionInitializer({ children }: { children: React.ReactNode }) {
  useWebSocketServer("ws://localhost:3000");

  // Corrected to return JSX
  return <>{children}</>;
}
