"use client";
import { Mulish } from "next/font/google";
import Image from "next/image";
import React from "react";
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function SkillSet() {
  return (
    <div className="skilltech flex items-center text-[#767676] text-[1.7rem] absolute bottom-0 left-0">
      <p
        className={
          mulish.className +
          " text-[17px] text-[#2d2e32] border-r-[2px] border-solid border-[rgba(45,46,50,0.5)] font-extrabold mr-[70px] pr-5  "
        }
      >
        Tech Stack
      </p>
      <div>
        <ul className="myskill flex flex-wrap gap-[30px] list-none">
          <li>
            <Image
              src="https://skillicons.dev/icons?i=html,css"
              alt="JS and TS Icons"
              unoptimized
              width={100}
              height={100}
            />
          </li>
          <li>
            <Image
              src="https://skillicons.dev/icons?i=js,ts"
              alt="JS and TS Icons"
              unoptimized
              width={100}
              height={100}
            />
          </li>
          <li>
            <Image
              src="https://skillicons.dev/icons?i=react,next"
              alt="JS and TS Icons"
              unoptimized
              width={100}
              height={100}
            />
          </li>
          <li>
            <Image
              src="https://skillicons.dev/icons?i=tailwind,sass"
              alt="JS and TS Icons"
              unoptimized
              width={100}
              height={100}
            />
          </li>
          <li>
            <Image
              src="https://skillicons.dev/icons?i=materialui,bootstrap"
              alt="JS and TS Icons"
              unoptimized
              width={100}
              height={100}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}