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
      <section>
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
      <section className="w-full">
        <div className="mb-10 md:p-0 p-4 w-full">
          <div className="h-full bg-gray-100 md:w-4/5 w-full m-auto sm:p-8 p-3 rounded border border-gray-500">
            <form className="w-full m-auto">
              <div className="w-full flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-first-name">
                    Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your name" />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Enter your email id" />
                </div>
              </div>
              <div className="w-full flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-first-name">
                    Password
                  </label>
                  <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your password" />
                  <p className="text-gray-400 text-xs italic">Make it as long and as crazy as you'd like</p>

                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                    Contact
                  </label>
                  <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your contact number" />
                </div>
              </div>
              <div className="w-full flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-first-name">
                    Client Code
                  </label>
                  <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your password" />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                    Authenticator Code
                  </label>
                  <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your contact number" />
                </div>
              </div>
              <div className="flex flex-wrap  mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-password">
                    Portfolio
                  </label>
                  <div>
                    <ul className="grid sm:gap-6 gap-2 w-full lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2">
                      <li>
                        <input type="radio" id="NOVA" name="hosting" value="NOVA" className="hidden peer" required />
                          <label for="NOVA" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                              <div className="w-full text-lg font-semibold">NOVA</div>
                              <div className="w-full">???60000</div>
                            </div>
                       
                          </label>
                      </li>
                      <li>
                        <input type="radio" id="NOVB" name="hosting" value="NOVB" className="hidden peer" />
                          <label for="NOVB" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                              <div className="w-full text-lg font-semibold">NOVB</div>
                              <div className="w-full">???120000</div>
                            </div>
                           
                          </label>
                      </li>
                      <li>
                        <input type="radio" id="NOVC" name="hosting" value="NOVC" className="hidden peer" />
                          <label for="NOVC" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                              <div className="w-full text-lg font-semibold">NOVC</div>
                              <div className="w-full">???180000</div>
                            </div>
          
                          </label>
                      </li>
                      <li>
                        <input type="radio" id="NOVD" name="hosting" value="NOVD" className="hidden peer" />
                          <label for="NOVD" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                              <div className="w-full text-lg font-semibold">NOVD</div>
                              <div className="w-full">???250000</div>
                            </div>
          
                          </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button className="mt-5 sm:ml-3 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUpform;

// <div className="flex justify-between items-center mb-6">
// <div className="form-group form-check">

// </div>
// <a href="#!" className="text-gray-800">
//   Forgot password?
// </a>
// </div>


// <p className="text-red-500 text-xs italic">Please fill out this field.</p>

