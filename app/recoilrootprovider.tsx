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

  const url = process.env.NEXT_PUBLIC_API_URL || "ws//localhost:3000";
  console.log(url);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.EaPF7QPFJ0C8B6ys3ZnXXlYscf_-og9CCYvzaja3ApQ";

  useWebSocketServer(url+"?token=" +`${token}`) ;

  // Corrected to return JSX
  return <>{children}</>;
}
