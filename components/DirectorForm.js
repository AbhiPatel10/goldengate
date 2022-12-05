import React from 'react'
import animationData from "../public/Img/directorpage.json";
import SectionHeader from "./section-header";
import { useLottie } from "lottie-react";

const DirectorForm = () => {

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
            <section >
                <div className=" flex flex-col items-center h-screen justify-center">
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
                <SectionHeader title="Director" />
            </section>
            <section >
                <div className='max-w-md m-auto bg-gray-200 p-8 rounded-md mb-24 border border-gray-500'>
                    <form className="w-full m-auto">
                        <div className="w-full flex flex-wrap mb-6">
                            <div className="w-full px-3 ">
                                <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                                    Director Fund
                                </label>
                                <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your key" />
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="mt-5 item-center sm:ml-3 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Director fund login</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default DirectorForm