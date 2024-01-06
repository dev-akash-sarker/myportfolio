import { Mulish, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import projectCarRental from "@/app/images/portfolioimage/car-rental.webp";
import projectGym from "@/app/images/portfolioimage/gymate.webp";
import projectEcom from "@/app/images/portfolioimage/ecommerce.webp";
import ExternalLink from "../LinkExternal";
import MainTitle from "../maintitle";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function Project() {
  const mb = {
    marginBottom: "60px",
  };
  return (
    <>
      <div id="project" className="bg-[#f9f9f9] py-[50px] md:py-[150px] px-0">
        <div className="max-w-[1070px] px-[17px] md:px-[40px] mx-auto">
          <div className={poppins.className}>
            <div className="text-center">
              <MainTitle
                textOne=" Each project is a unique piece of development 🧩"
                style={mb}
              >
                portfolio
              </MainTitle>
            </div>
            <h3 className="text-[25px] text-[#2d2e32] font-bold mb-[60px] "></h3>
            <div className="grid grid-cols-1 grid-rows-auto gap-[50px] h-auto w-full">
              {/* project one */}
              <div className="bg-white rounded-lg shadow-md flex">
                <div class="flex flex-col md:flex-row gap-[35px] md:gap-[80px] h-auto md:h-[400px] p-5">
                  <div class="bg-[hsla-0-0-46-20] rounded-lg shadow-md overflow-hidden h-[400px] md:h-auto w-full md:w-[530px]">
                    <Link
                      href="https://car-rental-ochre-zeta.vercel.app/"
                      className="projecthover"
                    >
                      <Image src={projectCarRental} alt="" />
                    </Link>
                  </div>

                  <div class="flex flex-col h-auto justify-center items-center text-center w-full md:w-[300px]">
                    <h3 className="items-center text-[#2d2e32] font-bold flex text-[17px] uppercase gap-[2px] justify-center mb-8 relative">
                      Car Rental
                      <span class="text-[#433d3d] text-[14px] ml-[2px]">
                        (March 2023)
                      </span>
                      🚗
                    </h3>
                    <div className={mulish.className}>
                      <p className="text-[#767676] text-[17px] font-bold text-center">
                        A car rental website is an online platform that allows
                        users to rent cars for personal or business use. The
                        website provides an interface for searching, comparing,
                        and reserving cars.
                      </p>
                    </div>

                    <div className="flex gap-[10px] justify-center mt-[10px]">
                      <p className="text-[17px]  text-center font-bold bg-white shadow-md text-black py-[10px] px-[13px]">
                        React
                      </p>
                      <p className="text-[17px] text-center font-bold bg-white shadow-md text-black py-[10px] px-[13px]">
                        SCSS
                      </p>
                    </div>
                    <div className="flex items-center justify-evenly">
                      <Link
                        href=""
                        className="mt-[30px] hover:text-[#147efb] transition-all mr-[15px] text-[#2d2e32] text-[17px] font-semibold gap-[5px] flex items-center"
                      >
                        Code <FiGithub fontSize={24} />
                      </Link>
                      <Link
                        href=""
                        className="mt-[30px] hover:text-[#147efb] transition-all ml-[15px] text-[#2d2e32] text-[17px] font-semibold gap-[5px] flex items-center"
                      >
                        Live Demo <ExternalLink />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* project two */}
              <div className="bg-white rounded-lg shadow-md flex">
                <div class="flex flex-col md:flex-row-reverse gap-[35px] md:gap-[80px] h-auto md:h-[400px] p-5">
                  <div class="bg-[hsla-0-0-46-20] rounded-lg shadow-md overflow-hidden h-[400px] md:h-auto w-full md:w-[530px]">
                    <Link
                      href="https://gymate-red.vercel.app/"
                      className="projecthover"
                    >
                      <Image src={projectGym} alt="" />
                    </Link>
                  </div>

                  <div class="flex flex-col h-auto justify-center items-center text-center w-full md:w-[300px]">
                    <h3 className="items-center text-[#2d2e32] font-bold flex text-[17px] uppercase gap-[2px] justify-center mb-8 relative">
                      Car Rental
                      <span class="text-[#433d3d] text-[14px] ml-[2px]">
                        (March 2023)
                      </span>
                      🚗
                    </h3>
                    <div className={mulish.className}>
                      <p className="text-[#767676] text-[17px] font-bold text-center">
                        A car rental website is an online platform that allows
                        users to rent cars for personal or business use. The
                        website provides an interface for searching, comparing,
                        and reserving cars.
                      </p>
                    </div>

                    <div className="flex gap-[10px] justify-center mt-[10px]">
                      <p className="text-[17px]  text-center font-bold bg-white shadow-md text-black py-[10px] px-[13px]">
                        React
                      </p>
                      <p className="text-[17px] text-center font-bold bg-white shadow-md text-black py-[10px] px-[13px]">
                        SCSS
                      </p>
                    </div>
                    <div className="flex items-center justify-evenly">
                      <Link
                        href=""
                        className="mt-[30px] hover:text-[#147efb] transition-all mr-[15px] text-[#2d2e32] text-[17px] font-semibold gap-[5px] flex items-center"
                      >
                        Code <FiGithub fontSize={24} />
                      </Link>
                      <Link
                        href=""
                        className="mt-[30px] hover:text-[#147efb] transition-all ml-[15px] text-[#2d2e32] text-[17px] font-semibold gap-[5px] flex items-center"
                      >
                        Live Demo <ExternalLink />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* project three  */}
              <div className="bg-white rounded-lg shadow-md flex">
                <div class="flex flex-col md:flex-row gap-[35px] md:gap-[80px] h-auto md:h-[400px] p-5">
                  <div class="bg-[hsla-0-0-46-20] rounded-lg shadow-md overflow-hidden h-[400px] md:h-auto w-full md:w-[530px]">
                    <Link
                      href="https://minimul-ecommerce.vercel.app/"
                      className="projecthover"
                    >
                      <Image src={projectEcom} alt="" />
                    </Link>
                  </div>

                  <div class="flex flex-col h-auto justify-center items-center text-center w-full md:w-[300px]">
                    <h3 className="items-center text-[#2d2e32] font-bold flex text-[17px] uppercase gap-[2px] justify-center mb-8 relative">
                      Car Rental
                      <span class="text-[#433d3d] text-[14px] ml-[2px]">
                        (March 2023)
                      </span>
                      🚗
                    </h3>
                    <div className={mulish.className}>
                      <p className="text-[#767676] text-[17px] font-bold text-center">
                        A car rental website is an online platform that allows
                        users to rent cars for personal or business use. The
                        website provides an interface for searching, comparing,
                        and reserving cars.
                      </p>
                    </div>

                    <div className="flex gap-[10px] justify-center mt-[10px]">
                      <p className="text-[17px]  text-center font-bold bg-white shadow-md text-black py-[10px] px-[13px]">
                        React
                      </p>
                      <p className="text-[17px] text-center font-bold bg-white shadow-md text-black py-[10px] px-[13px]">
                        SCSS
                      </p>
                    </div>
                    <div className="flex items-center justify-evenly">
                      <Link
                        href=""
                        className="mt-[30px] hover:text-[#147efb] transition-all mr-[15px] text-[#2d2e32] text-[17px] font-semibold gap-[5px] flex items-center"
                      >
                        Code <FiGithub fontSize={24} />
                      </Link>
                      <Link
                        href=""
                        className="mt-[30px] hover:text-[#147efb] transition-all ml-[15px] text-[#2d2e32] text-[17px] font-semibold gap-[5px] flex items-center"
                      >
                        Live Demo <ExternalLink />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* project two */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
