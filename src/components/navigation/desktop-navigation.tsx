import {
  CommandDialogDemo,
  ModeToggle,
  NavigationMenuDemo,
} from "@/lib/exports";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="hidden bottom__liner h-20 lg:flex flex-row items-center justify-between p-10 px-20 z-10">
      <div className="font-semibold text-2xl">{"{DevScout}"}</div>
      <div>
        <NavigationMenuDemo />
      </div>
      <div className="flex flex-row gap-5 justify-center items-center">
        <CommandDialogDemo />
        <ModeToggle />
        <Button variant="ghost" className="flex flex-row gap-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" x2="3" y1="12" y2="12"></line>
          </svg>
          Login
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
