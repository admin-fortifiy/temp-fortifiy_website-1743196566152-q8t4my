import React from "react";
import { ArrowRightIcon } from "../../Icons";
export default function Features() {
  return (
    <section className="pt-[50px] sm:pt-[80px] xl:pt-[127px] " id="features">
      <div className="container">
        <h2 className="text-[#060359] text-[24px] sm:text-[32px] leading-[120%] lg:text-[50px] lg:leading-[40%] font-bold dm-sans-font text-center tracking-[0.5px] mt-[12px] mb-[20px]">
          Use Cases
        </h2>
        {/*<p className="text-center text-[#6B7B99] text-[14px] sm:text-[18px] sm:leading-[14px] dm-sans-font lg:mt-[31px] mt-3">
        Our platform detects and prevents fraud on cards, mobile money, and crypto across diverse industries in Africa.
        </p>*/}
        <div className="pt-[55px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1170px] mx-auto">
          {data.map((dt, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration={1500 + i * 500}
              className="bg-white sm:rounded-[30px] rounded-[20px] feature-box gap-[30px] flex flex-col justify-between transition-all duration-300 ease-linear group overflow-hidden  2xl:pt-[50px] pt-[25px]  2xl:pb-[30px] pb-[20px]"
            >
              <div className="">
                <div className="w-full flex  justify-between items-center gap-y-[32px]  duration-[1000ms] ease-linear  gap-4   2xl:pl-[40px] 2xl:pr-[21px] px-[20px]">
                  <img
                    src={dt.icon}
                    className="max-w-full  w-[30px] sm:w-[50px]"
                    alt=""
                  />

                  <h3 className="text-[#01103D] md:text-[24px] text-[18px] md:leading-[32px] leading-[120%] font-bold dm-sans-font">
                    {dt.title}
                  </h3>
                </div>
                <div className="relative  flex items-center gap-2 pl-2 pr-4 lg:mt-[26px] mt-[16px]">
                  <button className="w-[44px] h-[44px] rounded-full bg-[#6865FF1A] transition-all duration-300 ease-linear group-hover:bg-[#B30753] flex justify-center items-center ">
                    <ArrowRightIcon className="transition-transform duration-300 ease-linear group-hover:translate-x-2" />
                  </button>
                  <p className=" text-[#6B7B99] text-[14px] sm:text-[16px]  sm:leading-[187%]   dm-sans-font flex-1">
                    {dt.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    icon: "assets/images/banking.svg",
    title: "Issuers, Banks & Processors",
    text: "Augment your card authorization decisioning with real-time, risk-based fraud evaluation to prevent approving fraudulent transactions",
  },
  {
    icon: "assets/images/merchant.svg",
    title: "Acquirers & Merchants",
    text: "Get real-time merchant risk profiles and customer spend patterns to detect merchant fraud and colluding customers",
  },
  {
    icon: "assets/images/processor.svg",
    title: "PSPs, Gateways & Switches",
    text: "Elevate your customer offering and earn extra revenue with value add fraud detection and prevention services",
  },
  {
    icon: "assets/images/card.svg",
    title: "Physical & Virtual Card Payments",
    text: "Proactively protect your card payments and cardholders against BIN attacks, enumeration attacks, Account Takeover, CNP fraud and CP fraud",
  },
  {
    icon: "assets/images/mobilemoney.svg",
    title: "Telcos & Mobile Money Payments",
    text: "Detect and block sim swap, account takeover and other mobile payment fraud attacks",
  },
  {
    icon: "assets/images/aml.svg",
    title: "AML & Money Mule Accounts",
    text: "Swiftly identify and intercept money mule activity patterns through device, transaction and channel fingerprinting",
  },
];
