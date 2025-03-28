import React from "react";
import { EmailIcon } from "../../Icons";

export default function HeroArea({ toggleModal, setBEmail, bEmail }) {
  return (
    <section
      className="sm:pt-[108px] pt-[88px] lg:pb-[80px] pb-[80px]"
      id="home"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[20px] lg:items-center">
          <div className="flex-1">
            {/*<h4
              className="w-fit mx-auto lg:mx-0 text-[#B30753] dm-sans-font font-semibold sm:text-[13px] sm:leading-[14px] leading-[120%] text-[10px] rounded-[30px] px-[16px] py-2"
              style={{ backgroundColor: "rgba(6, 3, 89, 0.06)" }}
            >
              TRANSACTION FRAUD MANAGEMENT
            </h4>*/}
            <h1
              className="text-[#060359] text-[30px] sm:text-[48px] lg:text-[42px] xl:text-[64px] tracking-[-0.6px] font-bold dm-sans-font xl:leading-[90px] leading-[130%] lg:max-w-[1070px] max-w-[400px] sm:max-w-[500px]  mx-auto text-center lg:text-start "
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              Transform Your Fraud Management.
            </h1>

            <p
              className="text-center lg:text-start text-[#6B7B99] md:max-w-[480px]  max-w-[500px] mx-auto lg:mx-0 text-sm sm:text-[16px] md:text-[18px] tracking-[0.2px] font-normal leading-[110%] sm:leading-[30px] pb-[15px] sm:pb-[30px] pt-[9px] dm-sans-font"
              data-aos="fade-up"
              data-aos-duration={2000}
            >
              End-to-End AI FraudOps automation platform
            </p>

            {/* search bar */}
            {/* <div
              className="px-[10px] lg:px-[0px]"
              data-aos="fade-up"
              data-aos-duration={2500}
            >
              <div
                className="max-w-[468px] mx-auto lg:mx-0 rounded-[40px] bg-white pl-4 sm:pl-[24px] py-2 pr-2 flex items-center sm:gap-3 gap-2 justify-between"
                style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)" }}
              >
                <div className="flex items-center mt-0.5">
                  <EmailIcon />
                </div>
                <input
                  onChange={(e) => setBEmail(e.target.value)}
                  type="email"
                  name="email"
                  value={bEmail}
                  className="text-[14px] leading-[14px] border-0 bg-transparent outline-none flex-1 text-[#595B62] dm-sans-font placeholder:text-[#70737D] w-full"
                  placeholder="Business email adress"
                />
                <button
                  onClick={toggleModal}
                  className="text-white text-[14px] font-normal tracking-[0.32px] leading-[14px] sm:py-[14px] py-[10px] sm:px-[31px] px-[15px] rounded-[30px] hover:bg-[#060359] bg-[#B30753]  transition-all duration-300 ease-linear border hover:border-[#060359] border-[#B30753] dm-sans-font"
                  style={{
                    boxShadow: "-2px -2px 2px 0px rgba(7, 13, 29, 0.30) inset",
                  }}
                >
                  Sign Up for a Demo
                </button>
              </div>
            </div>*/}
            
          </div>

          {/* hero image */}

          <div className="flex-1 w-full">
            {" "}
            <img
              data-aos="zoom-in"
              data-aos-duration={1500 + 500}
              src="assets/images/hero.svg"
              className="max-w-[720px] w-[100%] mx-auto "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
