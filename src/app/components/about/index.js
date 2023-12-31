"use client";
import React from "react";

import Image from "next/image";
import aboutImage from "@/app/images/aboutbg.jpg";

import aboutEffect from "@/app/images/particleOne.png";
import { Mulish, Poppins } from "next/font/google";

import MyResumeDownload from "../resume";
import MainTitle from "../maintitle";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function About() {
  const mbTen = {
    marginBottom: "10px",
  };
  return (
    <>
      <div>
        <div id="about">
          <div className="max-w-[1070px] box-border px-[17px] md:px-0 mx-auto  relative">
            <div className="py-[80px] md:py-36">
              <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left justify-center md:justify-normal gap-[30px]">
                <div className="aboutImage w-full md:max-w-[520px] overflow-hidden hover:brightness-50 transition-all">
                  <Image
                    src={aboutImage}
                    width={"100%"}
                    height={"100%"}
                    alt="aboutleft"
                    className="rounded-md h-[409px !important]"
                  />
                </div>
                <div className="rounded-md relative">
                  <div className="hidden md:block absolute bottom-0 right-[-70px] z-[-10]">
                    <Image
                      src={aboutEffect}
                      width={100}
                      height={100}
                      alt="effectDown"
                      className="banner-particle-one"
                    />
                  </div>
                  <MainTitle
                    textOne="A dedicated Front-end Developer"
                    textTwo="based in Dhaka, Bangladesh 📍"
                    style={mbTen}
                  >
                    About me
                  </MainTitle>

                  <p
                    className={
                      mulish.className +
                      " text-[#767676] text-[17px] font-semibold leading-[1.5]"
                    }
                  >
                    As a Junior Front-End Developer, I possess an impressive
                    arsenal of skills in HTML, CSS, JavaScript, React, Tailwind,
                    and SCSS. I excel in designing and maintaining responsive
                    websites that offer a smooth user experience. My expertise
                    lies in crafting dynamic, engaging interfaces through
                    writing clean and optimized code and utilizing cutting-edge
                    development tools and techniques. I am also a team player
                    who thrives in collaborating with cross-functional teams to
                    produce outstanding web applications.
                  </p>

                  <MyResumeDownload />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
