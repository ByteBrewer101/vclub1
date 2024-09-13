"use client";
import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};
