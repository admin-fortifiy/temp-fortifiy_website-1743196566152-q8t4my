import React from "react";

export const ArrowDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
    >
      <path
        d="M1 1.5L5 5.5L9 1.5"
        stroke="#202124"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
    >
      <path
        d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
        stroke="#5F6168"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M13 5.39993L10.496 7.39993C9.672 8.05593 8.32 8.05593 7.496 7.39993L5 5.39993"
        stroke="#5F6168"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RightMarkIcon = ({ color = "#060359" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <circle cx="10.8906" cy="10.6359" r="10" fill={color} />
      <path
        d="M14.8906 7.63586L9.39059 13.1359L6.89059 10.6359"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowRightIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.00024H13"
        stroke="#060359"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="group-hover:stroke-white"
      />
      <path
        d="M7 1.00024L13 7.00024L7 13.0002"
        stroke="#060359"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="group-hover:stroke-white"
      />
    </svg>
  );
};

export const ArrowCurvedDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      className="w-[36px] 2xl:w-[63px] 2xl:h-[63px] h-[36px]"
    >
      <g clip-path="url(#clip0_4_159)">
        <path
          d="M48.3575 45.3186C40.6468 38.8158 28.2786 40.8258 20.6988 49.8136M48.216 45.1995C40.5052 38.6966 40.3993 26.1667 47.9791 17.179M48.8182 45.7074L13.8981 16.2577"
          stroke="black"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_159">
          <rect
            width="45.6803"
            height="42.8253"
            fill="white"
            transform="translate(27.609) rotate(40.1424)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LinkdLinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      className="sm:w-[59px] w-[42px]"
    >
      <path
        opacity="0.1"
        d="M57.5 29C57.5 44.7401 44.7401 57.5 29 57.5C13.2599 57.5 0.5 44.7401 0.5 29C0.5 13.2599 13.2599 0.5 29 0.5C44.7401 0.5 57.5 13.2599 57.5 29Z"
        stroke="white"
      />
      <path
        d="M22.7972 24.9721C23.9984 24.9721 24.9722 23.9983 24.9722 22.7971C24.9722 21.5959 23.9984 20.6221 22.7972 20.6221C21.596 20.6221 20.6222 21.5959 20.6222 22.7971C20.6222 23.9983 21.596 24.9721 22.7972 24.9721Z"
        fill="white"
      />
      <path
        d="M24.6098 26.4224H20.9848C20.7847 26.4224 20.6223 26.5848 20.6223 26.7849V37.6599C20.6223 37.86 20.7847 38.0224 20.9848 38.0224H24.6098C24.8099 38.0224 24.9723 37.86 24.9723 37.6599V26.7849C24.9723 26.5848 24.8099 26.4224 24.6098 26.4224Z"
        fill="white"
      />
      <path
        d="M35.4101 25.9228C33.8608 25.3921 31.9228 25.8583 30.7607 26.6942C30.7208 26.5383 30.5787 26.4223 30.4098 26.4223H26.7848C26.5847 26.4223 26.4223 26.5847 26.4223 26.7848V37.6598C26.4223 37.8599 26.5847 38.0223 26.7848 38.0223H30.4098C30.6099 38.0223 30.7723 37.8599 30.7723 37.6598V29.8443C31.3581 29.3397 32.1128 29.1788 32.7305 29.4412C33.3293 29.6942 33.6723 30.3119 33.6723 31.1348V37.6598C33.6723 37.8599 33.8347 38.0223 34.0348 38.0223H37.6598C37.8599 38.0223 38.0223 37.8599 38.0223 37.6598V30.4047C37.9809 27.4257 36.5795 26.323 35.4101 25.9228Z"
        fill="white"
      />
    </svg>
  );
};
export const FacebookIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="59"
      height="58"
      viewBox="0 0 59 58"
      fill="none"
      className="sm:w-[59px] w-[42px]"
    >
      <path
        opacity="0.25"
        d="M58.4111 29C58.4111 44.7401 45.6512 57.5 29.9111 57.5C14.171 57.5 1.41113 44.7401 1.41113 29C1.41113 13.2599 14.171 0.5 29.9111 0.5C45.6512 0.5 58.4111 13.2599 58.4111 29Z"
        stroke="#928B8B"
      />
      <path
        d="M27.5899 37.8845L27.5635 29.7684H24.1111V26.2901H27.5635V23.9712C27.5635 20.8417 29.4871 19.3335 32.258 19.3335C33.5853 19.3335 34.7261 19.4331 35.0585 19.4776V22.7481L33.1367 22.749C31.6297 22.749 31.3379 23.4705 31.3379 24.5292V26.2901H35.6191L34.4683 29.7684H31.3379V37.8845H27.5899Z"
        fill="white"
      />
    </svg>
  );
};
export const InstagramIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="59"
      height="58"
      viewBox="0 0 59 58"
      fill="none"
      className="sm:w-[59px] w-[42px]"
    >
      <path
        opacity="0.25"
        d="M58.3223 29C58.3223 44.7401 45.5624 57.5 29.8223 57.5C14.0822 57.5 1.32227 44.7401 1.32227 29C1.32227 13.2599 14.0822 0.5 29.8223 0.5C45.5624 0.5 58.3223 13.2599 58.3223 29Z"
        stroke="#928B8B"
      />
      <path
        d="M34.163 25.703C34.7183 25.703 35.1684 25.2529 35.1684 24.6977C35.1684 24.1425 34.7183 23.6924 34.163 23.6924C33.6078 23.6924 33.1577 24.1425 33.1577 24.6977C33.1577 25.2529 33.6078 25.703 34.163 25.703Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6333 28.9999C25.6333 31.3101 27.512 33.1888 29.8222 33.1888C32.1324 33.1888 34.0111 31.3101 34.0111 28.9999C34.0111 26.6898 32.1324 24.811 29.8222 24.811C27.512 24.811 25.6333 26.6898 25.6333 28.9999ZM27.7278 29C27.7278 27.8449 28.6672 26.9056 29.8223 26.9056C30.9773 26.9056 31.9167 27.8449 31.9167 29C31.9167 30.1551 30.9773 31.0944 29.8223 31.0944C28.6672 31.0944 27.7278 30.1551 27.7278 29Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6333 37.3776H34.0111C36.1642 37.3776 38.2 35.3418 38.2 33.1887V24.811C38.2 22.6579 36.1642 20.6221 34.0111 20.6221H25.6333C23.4803 20.6221 21.4445 22.6579 21.4445 24.811V33.1887C21.4445 35.3418 23.4803 37.3776 25.6333 37.3776ZM23.5389 24.8111C23.5389 23.832 24.6542 22.7167 25.6333 22.7167H34.0111C34.9903 22.7167 36.1056 23.832 36.1056 24.8111V33.1889C36.1056 34.168 34.9903 35.2833 34.0111 35.2833H25.6333C24.6353 35.2833 23.5389 34.1869 23.5389 33.1889V24.8111Z"
        fill="white"
      />
    </svg>
  );
};
export const YoutubeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="59"
      height="58"
      viewBox="0 0 59 58"
      fill="none"
      className="sm:w-[59px] w-[42px]"
    >
      <path
        opacity="0.25"
        d="M58.2334 29C58.2334 44.7401 45.4735 57.5 29.7334 57.5C13.9933 57.5 1.2334 44.7401 1.2334 29C1.2334 13.2599 13.9933 0.5 29.7334 0.5C45.4735 0.5 58.2334 13.2599 58.2334 29Z"
        stroke="#928B8B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.4539 22.3533C39.3369 22.587 40.0324 23.2721 40.2694 24.1402C40.7094 25.7247 40.6888 29.0284 40.6888 29.0284C40.6888 29.0284 40.6857 32.3138 40.2591 33.8973C40.019 34.7644 39.3204 35.4484 38.4384 35.6811C36.8248 36.096 30.3695 36.0889 30.3695 36.0889C30.3695 36.0889 23.9316 36.0818 22.3016 35.6467C21.4175 35.413 20.722 34.728 20.485 33.8609C20.0626 32.2925 20.0667 28.9899 20.0667 28.9899C20.0667 28.9899 20.0708 25.7035 20.4964 24.119C20.7354 23.2518 21.4505 22.5516 22.316 22.3199C23.9306 21.9041 30.3849 21.9111 30.3849 21.9111C30.3849 21.9111 36.8403 21.9182 38.4539 22.3533ZM28.3252 25.9641L28.32 32.035L33.6904 29.0046L28.3252 25.9641Z"
        fill="white"
      />
    </svg>
  );
};

export const ArrowTopIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="58"
      viewBox="0 0 16 58"
      fill="none"
      className="h-[30px] sm:h-[58px]"
    >
      <path
        d="M8.70711 0.292892C8.31659 -0.0976295 7.68342 -0.0976296 7.2929 0.292892L0.928934 6.65685C0.53841 7.04738 0.53841 7.68054 0.928934 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 58L9 1L7 1L7 58L9 58Z"
        fill="black"
      />
    </svg>
  );
};
