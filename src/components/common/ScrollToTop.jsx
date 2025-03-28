import React, { useEffect, useState } from "react";
import { ArrowTopIcon } from "../../Icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      // Adjust the scroll threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="absolute sm:w-[120px] w-[80px]  h-[80px] sm:h-[120px] rounded-full  left-1/2 transform -translate-x-1/2  top-[5px] -translate-y-1/2  border border-[#EFF2F6]"
    >
      <div className="w-full h-full bg-[#B30753] rounded-full relative">
        <div className="animation-up-down absolute sm:top-[-40px] sm:left-[50px]  left-[30px] top-[-30px]">
          <ArrowTopIcon />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;
