import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "./components/Topbar";
import { ThemeProviders } from "./theme-providers";
import { Providers } from "./providers";

import RecoidContextProvider from "./recoilrootprovider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecoidContextProvider>
          <Providers>
            <ThemeProviders>
              <TopBar />
              {children}
            </ThemeProviders>
          </Providers>
        </RecoidContextProvider>
      </body>
    </html>
  );
}
