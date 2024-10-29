"use client";

import { RecoilRoot } from "recoil";
import { useWebSocketServer } from "./customHooks/Connection";

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const url = process.env.NEXT_PUBLIC_API_URL || "";
  useWebSocketServer(url);

  return (
    <RecoilRoot>
      <ConnectionInitializer>{children}</ConnectionInitializer>
    </RecoilRoot>
  );
}

function ConnectionInitializer({ children }: { children: React.ReactNode }) {
  // Corrected to return JSX
  return <>{children}</>;
}
