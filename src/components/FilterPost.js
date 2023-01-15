import React, {useState, useEffect} from "react";
import { Img, Text, Button, Input, SelectBox, Grid, List } from "components";
import { Link, useNavigate } from "react-router-dom";
import data from './hotel.json';

const FilterPost = () => {
    const [items,setItems] = React.useState([]);
    const [showModal, setShowModal] = useState(false);
    const history = useNavigate();

    const handleButtonClick = () => {
      setShowModal(true);
    }

    useEffect(() => {
      if (showModal) {
        setTimeout(() => {
          history.push('/hotelsearchResultsThree');
        }, 2000);
      }
    }, [showModal, history]);
  

    React.useEffect(() => {
        let items = [];
        for (let i = 0; i < 5; i++) {
            items.push(<span key={i}>
              <svg
                stroke="#FFB712"
                fill="#FFB712"
                strokeWidth={0}
                viewBox="0 0 20 20"
                className="text-cta"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>);
        }
        setItems(items);
    }, []);

  return (
    
    <div >


{showModal && (

<div
  class="fixed w-screen h-screen top-0 left-0 items-center justify-center z-50 px-7 lg:px-0 metropolis flex"
  style="background: rgba(0, 0, 0, 0.7);"
>
  <div
    class="Loading_w_500__1Gkqd bg-white py-14 px-10 lg:p-14 flex flex-col items-center rounded-2xl"
  >
    <div class="flex w-full justify-center">
      <img
        src="https://res.cloudinary.com/diapyzzws/image/upload/c_scale,h_150/v1639304259/Website%20Images/7e4df11fc750b4bec985e5cefe290eb8.gif"
        class="h-24"
      />
    </div>
    <div
      class="flex flex-col justify-center lg:justify-between mt-7 items-center w-full space-y-3 lg:space-y-5"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="text-2xl text-neutral-100"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"
        ></path>
      </svg>
      <p class="text-2xl font-semibold text-neutral-100 text-center">
        Abuja, Nigeria
      </p>
    </div>
    <p
      class="text-sm leading-none text-neutral-100 mt-6 w-52 lg:w-full text-center"
    >
      Please wait, while we find the best hotels for you
    </p>
    <p class="text-sm leading-none text-neutral-100 font-bold mt-4 text-center">
      Sun, Jan 15 2023 - Wed, Jan 18 2023
    </p>
    <p class="text-sm leading-none text-neutral-100 font-bold mt-4">
      1 Room, 1 Guest
    </p>
  </div>
</div>


)}

    <div className="flex flex-col lg:px-24 lg:mt-24 mb-8 lg:flex-row lg:space-x-8">
      
      <div className="w-full lg:flex px-0 lg:w-1/4 hidden">
        <div className="metropolis w-full sticky">
          <div className="p-8 flex w-full justify-between items-center bg-[#d7e7ff]">
            <h3 className="text-2xl leading-none font-bold">Filter</h3>
            <button className="text-sm leading-none text-prim-default font-bold clear-filter">
              Clear all
            </button>
          </div>
          <div className="bg-white p-8 flex flex-col">
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <div className="text-base leading-none text-neutral-100 font-bold">
                  Hotel Name
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 relative">
                <input
                  type="text"
                  className="bg-neutral-100 text-base placeholder-neutral-300 text-neutral-300 leading-none w-full py-5 pr-4 pl-8 border border-solid border-[#CED4DA]"
                  placeholder="Enter hotel name"
                  defaultValue=""
                />
                <button className="absolute left-3 text-lg text-neutral-300">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <p className="flex justify-end italic text-neutral-300 text-xs">
                Press enter to appy filter...
              </p>
            </div>
            <div className="flex flex-col w-full mt-16">
              <div className="flex justify-between items-center">
                <div className="text-base leading-none text-neutral-100 font-bold">
                  Budget per night
                </div>
                <div className="flex items-center">
                  <span className="text-base leading-none text-prim-default">
                    Clear
                  </span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    className="text-base leading-none text-prim-default ml-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center mt-9">
                <div
                  className="w-full h-2 bg-gray-300 rounded"
                  style={{ position: "relative" }}
                >
                  <div
                    className="h-2 track track-0"
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "244px",
                    }}
                  />
                  <div
                    className="h-2 track track-1"
                    style={{
                      position: "absolute",
                      left: "0px",
                      right: "0.000575825px",
                    }}
                  />
                  <div
                    className="h-2 track track-2"
                    style={{
                      position: "absolute",
                      left: "243.999px",
                      right: "0px",
                    }}
                  />
                  <div
                    className="w-4 h-4 -mt-1 bg-cta rounded-full shadow cursor-pointer w-4 h-4 -mt-1 bg-cta rounded-full shadow cursor-pointer-0"
                    tabIndex={0}
                    role="slider"
                    aria-orientation="horizontal"
                    aria-valuenow="48500.2056"
                    aria-valuemin="48500.2056"
                    aria-valuemax="199690.56240000002"
                    style={{
                      position: "absolute",
                      touchAction: "none",
                      zIndex: 1,
                      left: "0px",
                    }}
                  />
                  <div
                    className="w-4 h-4 -mt-1 bg-cta rounded-full shadow cursor-pointer w-4 h-4 -mt-1 bg-cta rounded-full shadow cursor-pointer-1"
                    tabIndex={0}
                    role="slider"
                    aria-orientation="horizontal"
                    aria-valuenow="199690.2056"
                    aria-valuemin="48500.2056"
                    aria-valuemax="199690.56240000002"
                    style={{
                      position: "absolute",
                      touchAction: "none",
                      zIndex: 2,
                      left: "243.999px",
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-xs leading-none text-neutral-100 font-bold">
                  ₦48500
                </p>
                <p className="text-xs leading-none text-neutral-100 font-bold">
                  ₦199691
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full mt-24">
              <div className="flex justify-between items-center">
                <div className="text-base leading-none text-neutral-100 font-bold">
                  Hotel class
                </div>
                <div className="flex items-center">
                  <span className="text-base leading-none text-prim-default">
                    Clear
                  </span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    className="text-base leading-none text-prim-default ml-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col w-full mt-9">
                <div className="flex flex-col space-y-5">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="n2"
                        className=" absolute h-5 w-5"
                        defaultValue={2}
                      />
                      <div className="bg-white border-2 border-gray-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-3 focus-within:border-blue-500">
                        <svg
                          className="fill-current hidden w-3 h-3 text-white pointer-events-none"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fillRule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <label
                        htmlFor="n2"
                        className="select-none w-full flex items-center justify-between"
                      ></label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex">
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="n3"
                        className=" absolute h-5 w-5"
                        defaultValue={3}
                      />
                      <div className="bg-white border-2 border-gray-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-3 focus-within:border-blue-500">
                        <svg
                          className="fill-current hidden w-3 h-3 text-white pointer-events-none"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fillRule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <label
                        htmlFor="n3"
                        className="select-none w-full flex items-center justify-between"
                      ></label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex">
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="n4"
                        className=" absolute h-5 w-5"
                        defaultValue={4}
                      />
                      <div className="bg-white border-2 border-gray-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-3 focus-within:border-blue-500">
                        <svg
                          className="fill-current hidden w-3 h-3 text-white pointer-events-none"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fillRule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <label
                        htmlFor="n4"
                        className="select-none w-full flex items-center justify-between"
                      ></label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex">
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="n5"
                        className=" absolute h-5 w-5"
                        defaultValue={5}
                      />
                      <div className="bg-white border-2 border-gray-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-3 focus-within:border-blue-500">
                        <svg
                          className="fill-current hidden w-3 h-3 text-white pointer-events-none"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#FFB712"
                        >
                          <g fill="none" fillRule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <label
                        htmlFor="n5"
                        className="select-none w-full flex items-center justify-between"
                      ></label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex">
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        <span>
                          <svg
                            stroke="#FFB712"
                            fill="#FFB712"
                            strokeWidth={0}
                            viewBox="0 0 20 20"
                            className="text-cta text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-16">
              <div className="flex justify-between items-center">
                <div className="text-base leading-none text-neutral-100 font-bold">
                  Facilities
                </div>
                <div className="flex items-center">
                  <span className="text-base leading-none text-prim-default">
                    Clear
                  </span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    className="text-base leading-none text-prim-default ml-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col w-full mt-4">
                <div className="grid gap-x-2 gap-y-4 grid-cols-2">
                  <button className="py-3 rounded flex flex-col items-center cursor-pointer">
                    <span className="text-neutral-100">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.671 14.307C16.184 12.819 14.17 12 12 12s-4.184.819-5.671 2.307l1.414 1.414c1.11-1.11 2.621-1.722 4.257-1.722 1.636.001 3.147.612 4.257 1.722l1.414-1.414z" />
                        <path d="M20.437 11.292c-4.572-4.573-12.301-4.573-16.873 0l1.414 1.414c3.807-3.807 10.238-3.807 14.045 0l1.414-1.414z" />
                        <circle cx={12} cy={18} r={2} />
                      </svg>
                    </span>
                    <p className="mt-2 text-sm leading-none text-neutral-100">
                      Free Wi-FI
                    </p>
                  </button>
                  <div className="py-3 rounded flex flex-col items-center cursor-pointer">
                    <span className="text-neutral-100">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path d="M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0012 5a2.006 2.006 0 00-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" />
                      </svg>
                    </span>
                    <p className="mt-2 text-sm leading-none text-neutral-100">
                      Free breakfast
                    </p>
                  </div>
                  <div className="py-3 rounded flex flex-col items-center cursor-pointer">
                    <span className="text-neutral-100">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" />
                      </svg>
                    </span>
                    <p className="mt-2 text-sm leading-none text-neutral-100">
                      Free parking
                    </p>
                  </div>
                  <div className="py-3 rounded flex flex-col items-center cursor-pointer">
                    <span className="text-neutral-100">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 21.688C126.7 21.688 21.687 126.698 21.687 256 21.688 385.3 126.7 490.313 256 490.313c129.3 0 234.313-105.012 234.313-234.313C490.313 126.7 385.3 21.687 256 21.687zm-201.47 9A22.53 22.53 0 0 0 32 53.218 22.53 22.53 0 0 0 54.53 75.75a22.53 22.53 0 0 0 22.532-22.53 22.53 22.53 0 0 0-22.53-22.532zm404.25 0a22.53 22.53 0 0 0-22.53 22.53 22.53 22.53 0 0 0 22.53 22.532 22.53 22.53 0 0 0 22.533-22.53 22.53 22.53 0 0 0-22.532-22.532zm-202.78 9c119.573 0 216.313 96.74 216.313 216.312 0 119.573-96.74 216.313-216.313 216.313S39.687 375.572 39.687 256 136.428 39.687 256 39.687zm43.684 22.433c-.485-.01-.955-.008-1.41.003-6.047.15-9.43 2.236-8.545 6.738 10.475 42.195 11.75 85.79-5.087 124.314 12.714 5.83 23.38 15.397 30.556 27.297 28.976-24.022 58.114-55.318 76.618-79.786 26.14-34.564-61.598-77.91-92.134-78.563zm-98.278 4.392c-40.03-.548-110.755 59.8-90.63 66.685 41.8 12.03 80.21 32.736 105.154 66.608 11.014-7.883 24.416-12.613 38.882-12.86-6.316-37.106-18.853-77.99-30.79-106.25-4.202-9.947-12.412-14.044-22.616-14.183zM438.22 190.227c-1.095.02-2.198.483-3.298 1.443-31.292 30.16-68.396 53.055-110.16 57.748.206 2.168.322 4.36.322 6.582 0 12.156-3.18 23.588-8.732 33.53 35.294 13.084 76.97 22.67 107.416 26.462 49.867 6.21 33.393-126.102 14.453-125.765zm-353.636 5.58c-48.158.507-27.205 141.674-7.564 124.533 31.307-30.175 68.43-53.08 110.218-57.756-.207-2.17-.322-4.363-.322-6.584 0-12.144 3.174-23.567 8.717-33.502-35.305-13.093-77.003-22.687-107.46-26.48-1.238-.154-2.433-.224-3.59-.21zM256 204.917c-11.406 0-21.907 3.696-30.387 9.958 1.986 3.567 3.84 7.256 5.55 11.074 6.763-5.608 15.427-8.99 24.837-8.99.844 0 1.68.035 2.51.09-.264-3.93-.632-7.967-1.108-12.1-.467-.01-.932-.034-1.402-.034zm20.42 4.22c-2.088 3.49-4.345 6.925-6.785 10.302 9.298 3.5 16.938 10.46 21.336 19.29 3.297-2.21 6.634-4.567 10-7.066-5.402-10.007-14.048-17.97-24.55-22.527zm-63.98 20.088c-4.77 7.775-7.524 16.938-7.524 26.775 0 1.94.116 3.85.324 5.73 4.05.066 8.14.303 12.268.727-.355-2.103-.55-4.258-.55-6.457 0-7.987 2.44-15.436 6.606-21.643-3.563-1.75-7.273-3.464-11.123-5.132zM256 234.96c-11.728 0-21.04 9.312-21.04 21.04s9.312 21.04 21.04 21.04 21.04-9.312 21.04-21.04-9.312-21.04-21.04-21.04zm38.494 14.6c.353 2.098.547 4.247.547 6.44 0 8-2.446 15.46-6.624 21.672 3.564 1.75 7.275 3.465 11.125 5.133 4.785-7.782 7.544-16.955 7.544-26.805 0-1.935-.115-3.84-.322-5.72-4.05-.062-8.14-.297-12.268-.72zm-73.478 23.686c-3.297 2.21-6.633 4.567-10 7.065 5.394 10.005 14.03 17.97 24.52 22.534 2.09-3.488 4.346-6.925 6.786-10.3-9.287-3.51-16.918-10.472-21.306-19.298zm59.773 12.846c-6.758 5.583-15.403 8.95-24.79 8.95-.865 0-1.72-.04-2.572-.097.264 3.93.632 7.968 1.107 12.102.488.013.974.037 1.465.037 11.385 0 21.867-3.684 30.338-9.924-1.986-3.565-3.84-7.252-5.55-11.068zm-84.005 5.408c-28.992 24.028-58.15 55.347-76.664 79.828-32.065 42.4 107.234 98.014 102.09 71.82-10.48-42.204-11.75-85.81 5.1-124.343-12.704-5.837-23.356-15.407-30.525-27.305zm99.242 20.727c-11.02 7.875-24.43 12.594-38.902 12.828 6.316 37.11 18.854 77.997 30.793 106.26 20.686 48.97 138.5-43.86 113.242-52.5-41.79-12.027-80.187-32.73-105.133-66.588zM52.803 436.25a22.53 22.53 0 0 0-22.532 22.53 22.53 22.53 0 0 0 22.533 22.533 22.53 22.53 0 0 0 22.53-22.532 22.53 22.53 0 0 0-22.53-22.53zm406.156 0a22.53 22.53 0 0 0-22.532 22.53 22.53 22.53 0 0 0 22.53 22.533 22.53 22.53 0 0 0 22.532-22.532 22.53 22.53 0 0 0-22.53-22.53z" />
                      </svg>
                    </span>
                    <p className="mt-2 text-sm leading-none text-neutral-100">
                      Air conditioned
                    </p>
                  </div>
                  <div className="py-3 rounded flex flex-col items-center cursor-pointer">
                    <span className="text-neutral-100">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
                      </svg>
                    </span>
                    <p className="mt-2 text-sm leading-none text-neutral-100">
                      Bar/Lounge
                    </p>
                  </div>
                  <div className="py-3 rounded flex flex-col items-center cursor-pointer">
                    <span className="text-neutral-100">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z" />
                        <circle cx="16.5" cy="5.5" r="2.5" />
                      </svg>
                    </span>
                    <p className="mt-2 text-sm leading-none text-neutral-100">
                      Swimming pool
                    </p>
                  </div>
                  <div className="py-3 rounded flex flex-col items-center cursor-pointer">
                    <span className="text-neutral-100">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
                      </svg>
                    </span>
                    <p className="mt-2 text-sm leading-none text-neutral-100">
                      Restaurant
                    </p>
                  </div>
                  <div className="py-3 rounded flex flex-col items-center cursor-pointer">
                    <span className="transform rotate-90">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={22}
                        width={22}
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
                    <p className="mt-2 text-sm leading-none text-neutral-100">
                      Fitness Centre
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/4 flex-col flex">
        <div className="px-6 lg:px-0 py-8 justify-between items-center flex">
          <ul className="flex h-12 lg:h-auto w-full lg:justify-between items-center space-x-16 lg:space-x-0">
            <li className="h-full flex items-center lg:hidden">
              <button className="text-xs leading-none text-prim-default flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="mr-2"
                  height={16}
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" />
                </svg>
                Filter
              </button>
            </li>
            <li className="h-full flex items-center relative">
              <button className="text-xs lg:text-xl lg:leading-7 leading-none text-prim-default flex items-center font-semibold">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  className="mr-2"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                </svg>
                Sort by
              </button>
              <ul
                className="absolute top-full left-0 rounded-lg shadow-md w-56 pt-6 px-6 pb-8 z-20 bg-white mt-4 hidden"
                style={{
                  boxShadow: "rgba(81, 81, 81, 0.19) 0px 3px 24px -19px",
                }}
              >
                <div className="text-base leading-none font-bold text-black mb-2">
                  Price
                </div>
                <li className="pl-2 py-2">
                  <button className="text-base leading-none text-neutral-100 flex items-center space-x-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 20 20"
                      className="text-prim-default"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Highest to lowest</span>
                  </button>
                </li>
                <li className="pl-2 py-2">
                  <button className="text-base leading-none text-neutral-100 flex items-center space-x-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 20 20"
                      className="text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Lowest to highest</span>
                  </button>
                </li>
                <div className="text-base leading-none font-bold text-black my-4">
                  Star
                </div>
                <li className="pl-2 py-2">
                  <button className="text-base leading-none text-neutral-100 flex items-center space-x-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 20 20"
                      className="text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>5 stars to 1 star</span>
                  </button>
                </li>
                <li className="pl-2 py-2">
                  <button className="text-base leading-none text-neutral-100 flex items-center space-x-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 20 20"
                      className="text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1 star to 5 stars</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {data.hotels.map((hotel, index) => (
        <div key={index} className="flex flex-col space-y-6 mb-10">
          <div className="flex flex-col lg:flex-row items-center shadow-sm h-fit">
            <div className="w-full lg:w-4/12">
              <div className="carousel">
                <div className="bg-white pt-6 lg:pt-0 px-6 lg:px-0 w-full relative">
                  <div
                    className="horizontalSlider___281Ls carousel__slider carousel__slider--horizontal h-56 no-padding"
                    aria-live="polite"
                    aria-label="slider"
                    tabIndex={0}
                    role="listbox"
                  >
                    <div className="carousel__slider-tray-wrapper carousel__slider-tray-wrap--horizontal">
                      <div
                        className="sliderTray___-vHFQ sliderAnimation___300FY carousel__slider-tray carousel__slider-tray--horizontal"
                        style={{
                          display: "flex",
                          alignItems: "stretch",
                          width: "100%",
                          transform: "translateX(0%) translateX(0px)",
                          flexDirection: "row",
                        }}
                      >
                        <div
                          tabIndex={0}
                          aria-selected="true"
                          aria-label="slide"
                          role="option"
                          className="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible"
                          style={{
                            width: "100%",
                            paddingBottom: "unset",
                            height: "unset",
                          }}
                        >
                          <div
                            className="slideInner___2mfX9 carousel__inner-slide"
                            style={{ position: "unset" }}
                          >
                            <img
                              src="https://us.dotwconnect.com/poze_hotel/16/1655428/29cVhc58_d2b5ca33bd970f64a6301fa75ae2eb22.png"
                              className="w-full object-cover h-56"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center h-14 justify-between space-x-1 mt-1">
                    <button
                      aria-label="slide dot"
                      type="button"
                      className="dot___3c3SI carousel__dot carousel__dot--0 carousel__dot--selected w-full"
                      disabled
                    >
                      <img
                        src="https://us.dotwconnect.com/poze_hotel/16/1655428/29cVhc58_d2b5ca33bd970f64a6301fa75ae2eb22.png"
                        className="object-cover h-14 w-full"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 h-full bg-white p-6 lg:p-8">
              <h2 className="text-xl leading-none font-semibold text-neutral-100">
                {hotel.name}
              </h2>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center space-x-1">
                  {items}
                </div>
                <span>(1)</span>
              </div>
              <div className="mt-6 lg:mt-4 flex items-center space-x-2">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <p className="w-11/12 text-xs lg:text-sm text-neutral-200">
                {hotel.address}
                </p>
              </div>
              <ul className="grid grid-cols-3 gap-y-2 gap-x-0.5 mt-7 lg:mt-4">
                <li className="flex items-center space-x-1">
                  <span className="text-neutral-100 Hotel_text_9l__2J1bp">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 576 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M296 464h-56V338.78l168.74-168.73c15.52-15.52 4.53-42.05-17.42-42.05H24.68c-21.95 0-32.94 26.53-17.42 42.05L176 338.78V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM432 0c-62.61 0-115.35 40.2-135.18 96h52.54c16.65-28.55 47.27-48 82.64-48 52.93 0 96 43.06 96 96s-43.07 96-96 96c-14.04 0-27.29-3.2-39.32-8.64l-35.26 35.26C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0z" />
                    </svg>
                  </span>
                  <p className="Hotel_text_9l__2J1bp leading-none text-neutral-200">
                    Bar
                  </p>
                </li>
                <li className="flex items-center space-x-1">
                  <span className="text-neutral-100 Hotel_text_9l__2J1bp">
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
                      <path d="M9.17 16.83a4.008 4.008 0 005.66 0 4.008 4.008 0 000-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                    </svg>
                  </span>
                  <p className="Hotel_text_9l__2J1bp leading-none text-neutral-200">
                    Laundry Service
                  </p>
                </li>
                <li className="flex items-center space-x-1">
                  <span className="text-neutral-100 Hotel_text_9l__2J1bp">
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
                  <p className="Hotel_text_9l__2J1bp leading-none text-neutral-200">
                    Restaurant
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-3/12 flex flex-row justify-between lg:flex-col items-center bg-[#D7E7FF] h-full px-6 lg:px-8 py-6 lg:py-9 ">
              <div>
                <h3 className="text-2xl lg:text-3xl text-neutral-100 leading-none font-semibold">
                {hotel.amount}
                </h3>
                <p className="mt-1 lg:mt-2 text-xs lg:text-base leading-none font-semibold text-neutral-800 lg:text-neutral-800">
                {hotel.how_long}
                </p>
              </div>
              <p className="hidden lg:block text-neutral-200 text-xs leading-none mt-10">
              {hotel.amount} for {hotel.how_long}
              </p>
              <Link onClick={handleButtonClick} className="py-4 w-40 lg:w-full bg-cta text-white font-bold text-sm leading-none rounded lg:rounded-none lg:mt-6 bg-yellow-500 text-center" to="/hotelsearchResultsThree">Book</Link>
            
            </div>
          </div>
        </div>
      ))}
        
      </div>
    </div>

</div>
  );
};

export default FilterPost;
