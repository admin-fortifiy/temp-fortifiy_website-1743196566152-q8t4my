import React from "react";
import { RightMarkIcon } from "../../Icons";

export default function About() {
  return (
    <section className="pt-[50px] sm:pt-[80px] xl:pt-[120px] lg:pb-[80px] pb-[80px] " id="about">
      <div className="container">
        <div className="mx-auto max-w-[1272px]">
          <div className="flex justify-between flex-col lg:flex-row lg:items-center xl:gap-[70px] gap-[50px]">
            <div className="flex-1 flex justify-center items-center">
              <img
                data-aos="fade-up"
                data-aos-duration={1500}
                src="assets/images/aboutus2.svg"
                alt=""
                className="max-w-full w-[100%] sm:w-full"
              />
            </div>
            <div className="flex-1" data-aos="fade-up" data-aos-duration={1500}>
              <h2 className="text-[#060359] lg:text-[50px] sm:text-[36px] text-[24px] leading-[120%] lg:leading-[56px] dm-sans-font font-bold mt-[12px] mb-[22px]">
                Our Mission
              </h2>
              
              <p className="text-[#6B7B99] text-[14px] sm:text-[18px] dm-sans-font lg:max-w-[100%] justify-center">
              We understand the hardships of battling fraud without the right ammo. We're solving that.  
              </p> <br />
              <p className="text-[#6B7B99] text-[14px] sm:text-[18px] dm-sans-font justify-center">
              We're on a mission to facilitate a safer and trusted digital environment in Africa and other developing economies. 
              </p><br />
              <p className="text-[#6B7B99] text-[14px] sm:text-[18px] dm-sans-font justify-center">
              Our aim is threefold: 
              </p>
              
              <div className="pt-[26px] pb-[36px]">
                <ul>
                  {data.map((dt, i) => (
                    <li
                      data-aos="fade-up"
                      data-aos-duration={1500 + i * 500}
                      key={i}
                      className="flex items-center gap-3 text-[#6B7B99] text-[13px] sm:text-[17px]  leading-[150%] sm:leading-[40px] font-normal dm-sans-font my-2 sm:my-0"
                    >
                      <RightMarkIcon color={dt?.color} /> {dt.text}
                    </li>
                  ))}
                </ul>
              </div>

            

              {/*<button className="text-white text-[12px] sm:text-[15px] font-semibold t leading-[12px] sm:py-[15px] py-[10px] sm:px-[31px] px-[15px] rounded-[30px] bg-[#060359] hover:bg-[#B30753]  transition-all duration-300 ease-linear border hover:border-[#B30753] border-[#060359] whitespace-nowrap plus-jakarta-sans-font">
                More
              </button>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    text: "Eliminate costly fraud losses",
    color: "#060359",
  },
  {
    text: "Increase operational efficiency",
    color: "#060359",
  },
  {
    text: "Enhance regulatory compliance",
    color: "#060359",
  },
];
