"use client";

import { RecoilRoot } from "recoil";



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


  // Corrected to return JSX
  return <>{children}</>;
}
