import React from "react";
import SectionHeader from "./section-header";
import animationData from "../public/Img/Growth.json";
import { useLottie } from "lottie-react";

const SignUpform = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View: lottie } = useLottie(defaultOptions);

  return (
    <>
      <section class="">
        <div className=" flex flex-col items-center justify-center">
          <div className="container mx-auto flex px-5 md:pb-24 md:pt-20 py-5 md:flex-row flex-col items-center ">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <div>
                { lottie }
              </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-end title-font mb-4 main_title md:whitespace-nowrap whitespace-normal z-10">Join <br /> to the greatest<br /> economic markets</h1>
            </div>
          </div>
        </div>
        <SectionHeader title="Register form" />
      </section>
      <section>
        <div class="flex flex-col items-center px-6 mx-auto mb-20 lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
             
            <form class="w-full max-w-lg m-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-100 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                  Password
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                <p class="text-gray-400 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-city">
                  City
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-state">
                  State
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-gray-500" id="grid-state">
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-zip">
                  Zip
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-100 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
              </div>
            </div>
          </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUpform;

// <div class="flex justify-between items-center mb-6">
// <div class="form-group form-check">

// </div>
// <a href="#!" class="text-gray-800">
//   Forgot password?
// </a>
// </div>
