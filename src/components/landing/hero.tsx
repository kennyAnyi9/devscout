import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-5">
      <Link
        href="#"
        className="rounded-full bg-white/80 px-3 py-1 dark:bg-black/80 ring-1 ring-blue-400 ring-opacity-20"
      >
        <span className="flex select-none items-center bg-gradient-to-r from-[#31bdc6] to-[#3178c6] bg-clip-text text-transparent">
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
            className="animate-oldstar   -left-1 top-0.5 mr-2 h-5 w-5 translate-x-0.5 stroke-[#31bdc6] stroke-2 duration-500 group-hover:rotate-180 group-hover:scale-110 group-hover:stroke-yellow-600 dark:duration-500  "
          >
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
          </svg>
          <span className="">Drop a Star on Github</span>
        </span>
      </Link>
      <h1 className="hero__title">
        Empower Your{" "}
        <span className="bg-gradient-to-r from-[#31bdc6] to-[#3178c6] bg-clip-text text-transparent">
          Development
        </span>{" "}
        Workflow
      </h1>
      <p className="hero__subliner">
        Simplify, automate, and accelerate your development journey. Essential
        tools, hand-picked tutorials, and AI assistance at your fingertips
      </p>
      <Link
        target="_blank"
        rel="noreferrer"
        className="justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background border-input hover:bg-accent hover:text-accent-foreground h-10 flex items-center gap-2 rounded-full border-2 px-4 py-2 dark:text-white md:inline-flex"
        href="https://github.com/typehero/typehero"
      >
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
        Get started
      </Link>
    </div>
  );
};

export default Hero;
