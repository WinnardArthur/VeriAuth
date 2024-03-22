import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({ subsets: ["latin"], weight: ["600"] });

import React from "react";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", poppinsFont.className)}>
        🔑 VeriAuth
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
