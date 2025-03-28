import React from "react";
import Marquee from "react-fast-marquee";

export default function Client() {
  return (
    <section className="">
      <div className="container">
        <p className="text-center text-[16px] sm:text-[20px] leading-[120%] sm:leading-[27px] text-[#8A90A2] dm-sans-font font-medium">
        <span className="text-[#292930] font-bold"> Trusted by</span>
        </p>

        <div className="max-w-[1272px] mx-auto  pt-[30px] ">
          <Marquee>
            <div
              className="flex items-end  justify-between"
              data-aos="zoom-in"
              data-aos-duration={1500}
            >
              {data.map((dt, i) => (
                <img
                  key={i}
                  className="max-w-full lg:w-full w-[120px] xl:px-[60px] px-[20px] sm:px-[30px]"
                  src={dt}
                  alt=""
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

const data = [
  "assets/images/scale.svg",
  "assets/images/affirm.svg",
  "assets/images/paysafe.svg",
  "assets/images/qlik.svg",
  "assets/images/walmart.svg",
  "assets/images/square.svg",
];
