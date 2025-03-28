import React, { useState } from "react";
import { ArrowCurvedDownIcon } from "../../Icons";

export default function Faq() {
  const [accordionActive, setAccordionActive] = useState(0);

  const handleAccordion = (num) => {
    if (accordionActive === num) {
      // If the accordion is already active, collapse it (set to null)
      setAccordionActive(null);
    } else {
      // Otherwise, set it as the active accordion
      setAccordionActive(num);
    }
  };
  return (
    <section
      className="2xl:pt-[97px] pt-[50px] sm:pt-[80px] xl:mb-[171px] mb-[100px] sm:mb-[150px]"
      id="faq"
    >
      <div className="container">
        <div
          className="max-w-[1172px] mx-auto"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <div className="">
            <h2 className=" text-[#060359] font-bold capitalize text-[24px] sm:text-[32px] lg:text-[50px] leading-[120%] lg:leading-[60px] dm-sans-font text-center">
              Got Questions?
            </h2>
            <p className="text-center text-[#6B7B99] text-[14px] sm:text-[18px] sm:leading-[14px] dm-sans-font lg:mt-[31px] mt-3">
            We've got some of the answers
          </p>
          </div>

          <div className="2xl:mt-[60px] mt-[40px] flex flex-col  w-full border-t border-dashed border-[#6B7B99] px-2">
            {data.map((fq, i) => (
              <div
                key={i}
                className={`border-dashed border-[#6B7B99] overflow-hidden border-b  ${
                  accordionActive === i
                    ? "2xl:pb-[60px] xl:pb-[30px] pb-6 2xl:pt-[34px] pt-6"
                    : "2xl:py-[60px] xl:py-[30px] py-6"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <button
                      id={`faqs-title-${i}`}
                      type="button"
                      className="flex items-center justify-between w-full text-left gap-3"
                      onClick={() => handleAccordion(i)}
                      aria-expanded={accordionActive === i}
                      aria-controls={`faqs-title-${i}`}
                    >
                      <h3 className="text-[#060359] text-[14px] sm:text-[18px] leading-[116%]  font-semibold dm-sans-font w-[90%]">
                        {fq.question}
                      </h3>
                    </button>
                    <div
                      id={`faqs-title-${i}`}
                      role="region"
                      aria-labelledby={`faqs-title-${i}`}
                      className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                        accordionActive === i
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[#6B7B99] sm:text-[16px] text-[12px] font-normal sm:leading-[30px] leading-[130%] xl:mt-[15px] mt-[10px] w-[90%] dm-sans-font">
                          {fq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative w-[36px] 2xl:w-[63px] 2xl:h-[63px] h-[36px] ${
                      accordionActive === i ? "" : "hidden"
                    }`}
                  >
                    <span
                      className={`transform origin-center transition duration-500 ease-out absolute right-0 -top-1/2 `}
                    >
                      {accordionActive === i ? <ArrowCurvedDownIcon /> : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    question: "What is Fortifiy and what does it offer?",
    answer:
      "Fortifiy is an AI based platform that automates end-to-end fraud operations making it a one stop solution for fraud operations teams to proactively fight fraud. Get in touch with us for more information on the full stack of automated operations.",
  },
  {
    question: "Who is fortify for? Can my business / organization benefit from it?",
    answer:
      "Fortifiy is for any financial institution processing digital transactions looking to automate their fraud management, so they can focus on their core business with peace of mind. See 'Use Cases section'.",
  },
  {
    question: "I want to keep my fraud system and only integrate with Fortifiy’s AI. Is this possible?",
    answer:
      "Absolutely. Integration with internally developed fraud systems is supported through our APIs. We've developed our platform with a deep understanding of unique customer needs and therefore made it extendable and modular.",
  },
];
