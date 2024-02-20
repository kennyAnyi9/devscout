import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "@/lib/exports";
import { AlignJustify } from "lucide-react";

const Dropdown = () => {
  return (
    <header className="lg:hidden bottom__liner h-20 flex flex-row items-center justify-between p-2 z-10">
      <div className="font-semibold text-xl">{"{DevScout}"}</div>

      <div className="flex flex-row gap-2 justify-center items-center">
        <AlignJustify />
        <Button variant="secondary" className="flex flex-row gap-2">
          {" "}
          Login
        </Button>
      </div>
    </header>
  );
};

export default Dropdown;
