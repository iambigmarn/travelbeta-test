import React from "react";
import { Link } from "react-router-dom";

const SingleBook = () => {
  return (
    <div className="bg-white lg:bg-transparent px-6 lg:px-52 mt-6 lg:mt-24 lg:pb-36">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2">
          <h1 className="text-neutral-100 font-semibold text-2xl lg:text-3xl">
            Hostel 639
          </h1>
          <div className="flex items-center text-base lg:text-2xl leading-none mt-2 lg:mt-5">
            <div className="flex items-center space-x-1">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  className="text-cta"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  className="text-gray-300"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  className="text-gray-300"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  className="text-gray-300"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  className="text-gray-300"
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </div>
            <span className="ml-5 text-prim-default">(1)</span>
          </div>
          <div className="lg:space-y-4 mt-6 lg:mt-9">
            <p className="flex items-center space-x-3 text-xs lg:text-base text-neutral-200">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </span>
              <span>639 Harrow Road ; Kensal Green</span>
            </p>
            <p className="hidden lg:flex items-center space-x-3 text-base text-neutral-200">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span>N/A</span>
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-x-7 gap-y-6 mt-7 lg:mt-9 lg:w-11/12">
            <li className="flex items-center space-x-1">
              <span className="text-neutral-300 Hotel_text_9l__2J1bp text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.671 14.307C16.184 12.819 14.17 12 12 12s-4.184.819-5.671 2.307l1.414 1.414c1.11-1.11 2.621-1.722 4.257-1.722 1.636.001 3.147.612 4.257 1.722l1.414-1.414z" />
                  <path d="M20.437 11.292c-4.572-4.573-12.301-4.573-16.873 0l1.414 1.414c3.807-3.807 10.238-3.807 14.045 0l1.414-1.414z" />
                  <circle cx={12} cy={18} r={2} />
                </svg>
              </span>
              <p className="Hotel_text_9l__2J1bp text-base leading-none text-neutral-300">
                Free Wi-FI
              </p>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-neutral-300 Hotel_text_9l__2J1bp text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0012 5a2.006 2.006 0 00-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" />
                </svg>
              </span>
              <p className="Hotel_text_9l__2J1bp text-base leading-none text-neutral-300">
                Free breakfast
              </p>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-neutral-300 Hotel_text_9l__2J1bp text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </svg>
              </span>
              <p className="Hotel_text_9l__2J1bp text-base leading-none text-neutral-300">
                Free parking
              </p>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-neutral-300 Hotel_text_9l__2J1bp text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 21.688C126.7 21.688 21.687 126.698 21.687 256 21.688 385.3 126.7 490.313 256 490.313c129.3 0 234.313-105.012 234.313-234.313C490.313 126.7 385.3 21.687 256 21.687zm-201.47 9A22.53 22.53 0 0 0 32 53.218 22.53 22.53 0 0 0 54.53 75.75a22.53 22.53 0 0 0 22.532-22.53 22.53 22.53 0 0 0-22.53-22.532zm404.25 0a22.53 22.53 0 0 0-22.53 22.53 22.53 22.53 0 0 0 22.53 22.532 22.53 22.53 0 0 0 22.533-22.53 22.53 22.53 0 0 0-22.532-22.532zm-202.78 9c119.573 0 216.313 96.74 216.313 216.312 0 119.573-96.74 216.313-216.313 216.313S39.687 375.572 39.687 256 136.428 39.687 256 39.687zm43.684 22.433c-.485-.01-.955-.008-1.41.003-6.047.15-9.43 2.236-8.545 6.738 10.475 42.195 11.75 85.79-5.087 124.314 12.714 5.83 23.38 15.397 30.556 27.297 28.976-24.022 58.114-55.318 76.618-79.786 26.14-34.564-61.598-77.91-92.134-78.563zm-98.278 4.392c-40.03-.548-110.755 59.8-90.63 66.685 41.8 12.03 80.21 32.736 105.154 66.608 11.014-7.883 24.416-12.613 38.882-12.86-6.316-37.106-18.853-77.99-30.79-106.25-4.202-9.947-12.412-14.044-22.616-14.183zM438.22 190.227c-1.095.02-2.198.483-3.298 1.443-31.292 30.16-68.396 53.055-110.16 57.748.206 2.168.322 4.36.322 6.582 0 12.156-3.18 23.588-8.732 33.53 35.294 13.084 76.97 22.67 107.416 26.462 49.867 6.21 33.393-126.102 14.453-125.765zm-353.636 5.58c-48.158.507-27.205 141.674-7.564 124.533 31.307-30.175 68.43-53.08 110.218-57.756-.207-2.17-.322-4.363-.322-6.584 0-12.144 3.174-23.567 8.717-33.502-35.305-13.093-77.003-22.687-107.46-26.48-1.238-.154-2.433-.224-3.59-.21zM256 204.917c-11.406 0-21.907 3.696-30.387 9.958 1.986 3.567 3.84 7.256 5.55 11.074 6.763-5.608 15.427-8.99 24.837-8.99.844 0 1.68.035 2.51.09-.264-3.93-.632-7.967-1.108-12.1-.467-.01-.932-.034-1.402-.034zm20.42 4.22c-2.088 3.49-4.345 6.925-6.785 10.302 9.298 3.5 16.938 10.46 21.336 19.29 3.297-2.21 6.634-4.567 10-7.066-5.402-10.007-14.048-17.97-24.55-22.527zm-63.98 20.088c-4.77 7.775-7.524 16.938-7.524 26.775 0 1.94.116 3.85.324 5.73 4.05.066 8.14.303 12.268.727-.355-2.103-.55-4.258-.55-6.457 0-7.987 2.44-15.436 6.606-21.643-3.563-1.75-7.273-3.464-11.123-5.132zM256 234.96c-11.728 0-21.04 9.312-21.04 21.04s9.312 21.04 21.04 21.04 21.04-9.312 21.04-21.04-9.312-21.04-21.04-21.04zm38.494 14.6c.353 2.098.547 4.247.547 6.44 0 8-2.446 15.46-6.624 21.672 3.564 1.75 7.275 3.465 11.125 5.133 4.785-7.782 7.544-16.955 7.544-26.805 0-1.935-.115-3.84-.322-5.72-4.05-.062-8.14-.297-12.268-.72zm-73.478 23.686c-3.297 2.21-6.633 4.567-10 7.065 5.394 10.005 14.03 17.97 24.52 22.534 2.09-3.488 4.346-6.925 6.786-10.3-9.287-3.51-16.918-10.472-21.306-19.298zm59.773 12.846c-6.758 5.583-15.403 8.95-24.79 8.95-.865 0-1.72-.04-2.572-.097.264 3.93.632 7.968 1.107 12.102.488.013.974.037 1.465.037 11.385 0 21.867-3.684 30.338-9.924-1.986-3.565-3.84-7.252-5.55-11.068zm-84.005 5.408c-28.992 24.028-58.15 55.347-76.664 79.828-32.065 42.4 107.234 98.014 102.09 71.82-10.48-42.204-11.75-85.81 5.1-124.343-12.704-5.837-23.356-15.407-30.525-27.305zm99.242 20.727c-11.02 7.875-24.43 12.594-38.902 12.828 6.316 37.11 18.854 77.997 30.793 106.26 20.686 48.97 138.5-43.86 113.242-52.5-41.79-12.027-80.187-32.73-105.133-66.588zM52.803 436.25a22.53 22.53 0 0 0-22.532 22.53 22.53 22.53 0 0 0 22.533 22.533 22.53 22.53 0 0 0 22.53-22.532 22.53 22.53 0 0 0-22.53-22.53zm406.156 0a22.53 22.53 0 0 0-22.532 22.53 22.53 22.53 0 0 0 22.53 22.533 22.53 22.53 0 0 0 22.532-22.532 22.53 22.53 0 0 0-22.53-22.53z" />
                </svg>
              </span>
              <p className="Hotel_text_9l__2J1bp text-base leading-none text-neutral-300">
                Air conditioned
              </p>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-neutral-300 Hotel_text_9l__2J1bp text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
                </svg>
              </span>
              <p className="Hotel_text_9l__2J1bp text-base leading-none text-neutral-300">
                Bar/Lounge
              </p>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-neutral-300 Hotel_text_9l__2J1bp text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z" />
                  <circle cx="16.5" cy="5.5" r="2.5" />
                </svg>
              </span>
              <p className="Hotel_text_9l__2J1bp text-base leading-none text-neutral-300">
                Swimming pool
              </p>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-neutral-300 Hotel_text_9l__2J1bp text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
                </svg>
              </span>
              <p className="Hotel_text_9l__2J1bp text-base leading-none text-neutral-300">
                Restaurant
              </p>
            </li>
            <li className="flex items-center space-x-1">
              <span className="transform rotate-90 Hotel_text_9l__2J1bp text-xl text-neutral-300">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <p className="Hotel_text_9l__2J1bp text-base leading-none text-neutral-300">
                Fitness Centre
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:flex flex-row justify-between lg:justify-center lg:flex-col items-end h-full px-6 lg:px-0 py-6 lg:py-0">
          <div>
            <h3 className="text-3xl lg:text-3xl text-neutral-100 leading-none font-semibold">
              ₦47,817
            </h3>
            <p className="mt-1 lg:mt-2 text-xs lg:text-base leading-none font-semibold text-neutral-300">
              Per 3 nights &amp; 1 room
            </p>
          </div>
          <p className="hidden lg:block text-neutral-300 text-sm leading-none mt-14">
            ₦47,817 for 3 nights 1 room
          </p>
          <a href="#select_room"  className="py-4 px-10 bg-cta text-white font-bold text-sm leading-none rounded lg:mt-6">
            Select Room
          </a>
        </div>
      </div>

      <div className="mt-20">
        <ul className="space-x-14 hidden lg:flex items-center py-2 border-b border-neutral-400">
          <li>
            <button className="text-base leading-none text-neutral-100 font-bold">
              Overview
            </button>
          </li>
          <li>
            <button className="text-base leading-none text-neutral-300">
              Rooms
            </button>
          </li>
          <li>
            <button className="text-base leading-none text-neutral-300">
              About
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-14 hidden lg:block">
        <img
          src="https://us.dotwconnect.com/poze_hotel/15/1551558/P1yOyhkn_71978f270694c14541f78503ede68acb.jpg"
          className="Hotel_h_103__13Xq5 h-screen w-full"
        />
      </div>
      <div className="mt-10 lg:mt-20">
        <h3 id="select_room" className="text-xl leading-none text-neutral-100 font-semibold">
          Kindly choose room
        </h3>

        <div className="mt-10 lg:mt-16 space-y-6 flex flex-col">

          <div className="flex lg:grid flex-col lg:grid-cols-7 h-52 items-center">
            <div className="lg:col-span-2 w-full h-full">
              <img
                src="https://us.dotwconnect.com/poze_hotel/15/1551558/P1yOyhkn_71978f270694c14541f78503ede68acb.jpg"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="lg:col-span-3 w-full h-full lg:h-52 bg-white p-6 lg:p-8">
              <h2 className="text-base lg:text-2xl font-semibold text-neutral-100">
                1 Person in 12-Bed Dormitory - Mixed
              </h2>
              <div className="mt-6 lg:mt-6 flex items-center space-x-2">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </span>
                <p className="w-11/12 text-xs text-neutral-200">
                  1 guests maximum
                </p>
              </div>
              <div className="mt-6 lg:mt-2 flex items-center space-x-2">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="w-11/12 text-xs text-neutral-200">
                  Non Refundable
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 w-full flex flex-row lg:flex-col items-center bg-light-blue h-full lg:h-52 px-6 lg:px-8 py-6 lg:py-7">
              <div>
                <h3 className="text-2xl lg:text-3xl text-neutral-100 leading-none font-semibold">
                  ₦62,645
                </h3>
                <p className="mt-1 lg:mt-2 text-xs lg:text-base leading-none font-semibold text-neutral-300 lg:text-neutral-100">
                  3 nights &amp; 1 room
                </p>
              </div>
              <Link className="py-4 px-11 bg-cta text-white font-bold text-sm leading-none rounded lg:rounded-none lg:mt-6 text-center" to="/additionalinformation">Book</Link>
            </div>
          </div>
          <div className="flex lg:grid flex-col lg:grid-cols-7 h-52 items-center">
            <div className="lg:col-span-2 w-full h-full">
              <img
                src="https://us.dotwconnect.com/poze_hotel/15/1551558/P1yOyhkn_71978f270694c14541f78503ede68acb.jpg"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="lg:col-span-3 w-full h-full lg:h-52 bg-white p-6 lg:p-8">
              <h2 className="text-base lg:text-2xl font-semibold text-neutral-100">
                1 Person in 12-Bed Dormitory - Mixed
              </h2>
              <div className="mt-6 lg:mt-6 flex items-center space-x-2">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </span>
                <p className="w-11/12 text-xs text-neutral-200">
                  1 guests maximum
                </p>
              </div>
              <div className="mt-6 lg:mt-2 flex items-center space-x-2">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="w-11/12 text-xs text-neutral-200">
                  Non Refundable
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 w-full flex flex-row lg:flex-col items-center bg-light-blue h-full lg:h-52 px-6 lg:px-8 py-6 lg:py-7">
              <div>
                <h3 className="text-2xl lg:text-3xl text-neutral-100 leading-none font-semibold">
                  ₦62,645
                </h3>
                <p className="mt-1 lg:mt-2 text-xs lg:text-base leading-none font-semibold text-neutral-300 lg:text-black-100">
                  3 nights &amp; 1 room
                </p>
              </div>
              <Link className="py-4 px-11 bg-cta text-white font-bold text-sm leading-none rounded lg:rounded-none lg:mt-6 text-center" to="/additionalinformation">Book</Link>
            </div>
          </div>
          <div className="flex lg:grid flex-col lg:grid-cols-7 h-52 items-center">
            <div className="lg:col-span-2 w-full h-full">
              <img
                src="https://us.dotwconnect.com/poze_hotel/15/1551558/P1yOyhkn_71978f270694c14541f78503ede68acb.jpg"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="lg:col-span-3 w-full h-full lg:h-52 bg-white p-6 lg:p-8">
              <h2 className="text-base lg:text-2xl font-semibold text-neutral-100">
                1 Person in 12-Bed Dormitory - Mixed
              </h2>
              <div className="mt-6 lg:mt-6 flex items-center space-x-2">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </span>
                <p className="w-11/12 text-xs text-neutral-200">
                  1 guests maximum
                </p>
              </div>
              <div className="mt-6 lg:mt-2 flex items-center space-x-2">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="w-11/12 text-xs text-neutral-200">
                  Non Refundable
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 w-full flex flex-row lg:flex-col items-center bg-light-blue h-full lg:h-52 px-6 lg:px-8 py-6 lg:py-7">
              <div>
                <h3 className="text-2xl lg:text-3xl text-neutral-100 leading-none font-semibold">
                  ₦62,645
                </h3>
                <p className="mt-1 lg:mt-2 text-xs lg:text-base leading-none font-semibold text-neutral-300 lg:text-neutral-100">
                  3 nights &amp; 1 room
                </p>
              </div>
              <Link className="py-4 px-11 bg-cta text-white font-bold text-sm leading-none rounded lg:rounded-none lg:mt-6 text-center" to="/additionalinformation">Book</Link>
            </div>
          </div>

        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-xl leading-none font-semibold text-neutral-100 py-2 border-b border-neutral-400">
          About
        </h3>
        <p className="text-base text-neutral-100 mt-14" />
        <p className="text-base text-neutral-100 mt-4">Check-in time: N/A</p>
        <p className="text-base text-neutral-100 mt-1">Check-out time: 12:00</p>
        <div className="mt-8">
          <h4 className="text-base text-neutral-100 font-bold">
            Address &amp; contact information
          </h4>
          <p className="flex items-center space-x-3 text-base text-neutral-200 mt-4">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
            </span>
            <span>73 Lambeth Walk</span>
          </p>
          <p className="flex items-center space-x-3 text-base text-neutral-200 mt-4">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </span>
            <span>N/A</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
