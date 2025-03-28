import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import ConnectModal from "./ConnectModal";
import { Link } from "react-router-dom";

export default function Header({
  toggleModal,
  isOpenConnectModal,
  bEmail,
  setBEmail,
}) {
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    // Check if the scroll position is past a certain threshold
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //for modal/popup

  return (
    <header
      className={` fixed top-0 w-full transition-all duration-300 ease-linear z-20 ${
        isSticky ? "bg-white py-[20px]" : "py-[25px]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="#home">
            <img
              className="xl:w-[160px] w-[140px] sm:w-[160px]"
              src="assets/images/logo.svg"
              alt=""
            />
          </a>

          <nav className="hidden lg:flex xl:gap-[39px] gap-[24px] items-center">
            {navItems.map((nt, i) => (
              <a
                key={i}
                href={nt.link}
                className="text-[#060359] text-[15px] font-semibold leading-[14px] tracking-[0.32px] hover:text-[#b30753] transition-all duration-300 ease-linear flex items-center gap-1 dm-sans-font"
              >
                {nt.title}
              </a>
            ))}
          </nav>

          {/* <RightSideBtn  /> */}

          <div className="hidden lg:flex items-center gap-[24px]">
            {/*<Link
              to="/"
              className="text-[#060359] text-[16px] font-semibold leading-[14px] tracking-[0.32px] hover:text-[#b30753] transition-all duration-300 ease-linear dm-sans-font"
            >
              Login
            </Link>*/}

            <button
              className="text-white text-[14px] font-normal tracking-[0.32px] leading-[14px] sm:py-[13px] py-[10px] sm:px-[26px] px-[15px] rounded-[30px] hover:bg-[#060359] bg-[#B30753]  transition-all duration-300 ease-linear border hover:border-[#060359] border-[#B30753] dm-sans-font"
              style={{
                boxShadow: "-2px -2px 2px 0px rgba(7, 13, 29, 0.30) inset",
              }}
              onClick={toggleModal}
            >
              Get a Consult
            </button>
          </div>

          <Drawer toggleModal={toggleModal} />
        </div>
      </div>

      <ConnectModal
        bEmail={bEmail}
        toggleModal={toggleModal}
        isOpenConnectModal={isOpenConnectModal}
        setBEmail={setBEmail}
      />
    </header>
  );
}

const navItems = [
  {
    title: "HOME",
    link: "#home",
  },
  {
    title: "MISSION",
    link: "#about",
  },

  {
    title: "USE CASES",
    link: "#features",
  },
  {
    title: "FAQ",
    link: "#faq",
  },
];

const Drawer = ({ toggleModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-10 lg:hidden">
      {/* Backdrop */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out  ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-56 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="flex justify-end w-fit ml-auto"
          >
            <IoClose color="#b30753" size={32} />
          </button>

          <nav className="flex flex-col  gap-[24px] items-center pt-8">
            {navItems.map((nt, i) => (
              <a
                onClick={() => setIsOpen(false)}
                key={i}
                href={nt.link}
                className="text-[#060359] text-[16px] font-medium leading-[14px] tracking-[0.32px] hover:text-[#b30753] transition-all duration-300 ease-linear flex items-center gap-1 dm-sans-font"
              >
                {nt.title}
              </a>
            ))}

            <div className="flex flex-col mt-4 items-center gap-[24px]">
              <Link
                to="/"
                className="text-[#060359] text-[16px] font-semibold leading-[14px] tracking-[0.32px] hover:text-[#b30753] transition-all duration-300 ease-linear dm-sans-font"
              >
                Login
              </Link>

              <button
                className="text-white text-[16px] font-bold tracking-[0.32px] leading-[14px] sm:py-[14px] py-[10px] sm:px-[30px] px-[15px] rounded-[30px] hover:bg-[#060359] bg-[#B30753]  transition-all duration-300 ease-linear border hover:border-[#060359] border-[#B30753] dm-sans-font"
                style={{
                  boxShadow: "-2px -2px 2px 0px rgba(7, 13, 29, 0.30) inset",
                }}
                onClick={toggleModal}
              >
                Get in Touch
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Button to open drawer */}
      <button className=" " onClick={() => setIsOpen(true)}>
        <FiMenu color="#b30753" size={28} />
      </button>
    </div>
  );
};
