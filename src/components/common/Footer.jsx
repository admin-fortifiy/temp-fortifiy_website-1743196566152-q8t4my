import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkdLinIcon,
  YoutubeIcon,
} from "../../Icons";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="relative ">
      <ScrollToTop />
      <div className="relative footer-content  xl:pt-[84px] sm:mt-[50px] pt-[20px] pb-[20px]">
        <div className="container ">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-8">
            <a href="#home">
              <img
                className="2xl:w-[160px] w-[188px]"
                src="assets/images/white-logo.svg"
                alt=""
              />
            </a>

            <div className="flex flex-col sm:gap-[17px] gap-2">
              {/*<h4 className="text-white xl:text-[16px] leadong-[120% xl:leading-[24px] font-semibold dm-sans-font text-center">
                Follow us on our Socials
              </h4>*/}

              <div className="flex items-center sm:gap-[18px] gap-2 justify-center">
              <div className="flex justify-center sm:gap-[20px] gap-3">
              <Link to="https://www.linkedin.com/company/fortifiy/">
              <LinkdLinIcon />
              </Link>
              <Link to="https://www.facebook.com/fortifiy/">
              <FacebookIcon />
              </Link>
              <Link to="">
              <InstagramIcon />
              </Link>
              <Link to="https://www.youtube.com/@fortifiy">
              <YoutubeIcon />
              </Link>
              </div>
                {/*<Link to="">
                  {" "}
                  <img
                    src="assets/images/pci.svg"
                    className="w-[50px] sm:w-[60px] xl:w-[77px]"
                    alt=""
                  />
                </Link>
                <Link to="">
                  {" "}
                  <img
                    src="assets/images/soc.svg"
                    className="w-[50px] sm:w-[60px] xl:w-[77px]"
                    alt=""
                  />
                </Link>
                <Link to="">
                  {" "}
                  <img
                    src="assets/images/gdpr.svg"
                    className="w-[50px] sm:w-[60px] xl:w-[77px]"
                    alt=""
                  />
                </Link>
                <Link to="">
                  {" "}
                  <img
                    src="assets/images/ccpa.svg"
                    className="w-[50px] sm:w-[60px] xl:w-[77px]"
                    alt=""
                  />
                </Link>*/}
              </div>
            </div>
          </div>

          <div className="2xl:mt-[83px] mt-8 sm:mb-[0px] mb-4 py-[35px] border-y border-[#383841] flex flex-col-reverse lg:flex-row gap-8 items-center ">
            <p className="text-white text-[16px] leading-[100%]   whitespace-nowrap text-left flex-1 w-full">
              © 2024 Fortifiy , All Right Receved.
            </p>
            
            <nav className="flex sm:items-center justify-end flex-col sm:flex-row gap-x-[40px] gap-y-4 w-full flex-1 ">
              {/*<Link
                to=""
                className="text-white hover:text-[#b30753] transition duration-150 text-[16px] font-normal dm-sans-font "
              >
                Support
              </Link>*/}
              <Link
                to=""
                className="text-white hover:text-[#b30753] transition duration-150 text-[16px] font-normal dm-sans-font"
              >
                Privacy policy
              </Link>
              <Link
                to=""
                className="text-white hover:text-[#b30753] transition duration-150 text-[16px] font-normal dm-sans-font"
              >
                Terms and conditions
              </Link>
            </nav>
          </div>

          

          
        </div>
      </div>
    </footer>
  );
}
