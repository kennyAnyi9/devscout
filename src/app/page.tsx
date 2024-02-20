import { FrequentlyAskedQuestions, Hero, HeadsUp } from "@/lib/exports";
import Image from "next/image";
("");
export default function Home() {
  return (
    <main className="max-w-screen flex min-h-screen flex-col items-center justify-between py-10 px-4 lg:p-24">
      {/* <HeadsUp /> */}
      <Hero />
      <FrequentlyAskedQuestions />
      {/* <svg
        className="animate-beam pointer-events-none absolute left-0 top-0 z-[-1] h-[169%] w-[138%] lg:w-[84%]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter0_f_1065_8)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill="white"
            fill-opacity="0.21"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter0_f_1065_8"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg> */}
    </main>
  );
}
