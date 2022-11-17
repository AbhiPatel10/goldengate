import React from "react";
import { AiFillLinkedin } from 'react-icons/ai';
import Avtar from "../public/Img/avtar.jpg"
import Image from "next/image";

const Testimonial = () => {
    return (
        <>
            <div className="m-auto px-4 container grid lg:grid-cols-4 md:grid-cols-3 grid-rows-2 lg:gap-4 md:gap-2 gap-2">
                <div className="lg:col-span-1 md:col-span-1 row-span-2">
                    <div className="h-full border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <Image
                                    alt="team"
                                    className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
                                    src={Avtar}
                                />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font text-xl font-medium">
                                        Abhi Patel
                                    </h2>
                                    <p className="text-blue-700 text-xs">@AbhiPat38814974</p>
                                </div>
                            </div>
                            <AiFillLinkedin className="text-blue-700 text-xl m-5" />
                        </div>
                        <p className="mt-4 text-base text-justify">
                            As somebody who has pretty much tried all new age banks/fintechs,
                            I can certainly say it’s @sliceit_ that has hit it out of the
                            park. Great job. When you build a great product, your customers
                            become your ambassadors. As somebody who has pretty much tried all new age banks/fintechs,
                            I can certainly say it’s @sliceit_ that has hit it out of the
                            park. Great job. When you build a great product, your customers
                            become your ambassadors.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-2 md:col-span-2 row-span-1">
                    <div className="h-full overflow-hidden border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <Image
                                    alt="team"
                                    className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
                                    src={Avtar}
                                />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font text-xl font-medium">
                                        Abhi Patel
                                    </h2>
                                    <p className="text-blue-700 text-xs">@AbhiPat38814974</p>
                                </div>
                            </div>
                            <AiFillLinkedin className="text-blue-700 text-xl m-5" />
                        </div>
                        <p className="mt-4 text-base text-justify">
                        As somebody who has pretty much tried all new age banks/fintechs,
                        I can certainly say it’s @sliceit_ that has hit it out of the
                        park. Great job. When you build a great product, your customers
                        become your ambassadors.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-1 col-span-1">
                    <div className="h-full overflow-hidden border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <Image
                                    alt="team"
                                    className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
                                    src={Avtar}
                                />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font text-xl font-medium">
                                        Abhi Patel
                                    </h2>
                                    <p className="text-blue-700 text-xs">@AbhiPat38814974</p>
                                </div>
                            </div>
                            <AiFillLinkedin className="text-blue-700 text-xl m-5" />
                        </div>
                        <p className="mt-4 text-base text-justify">
                            As somebody who has pretty much tried all new age banks/fintechs
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="h-full overflow-hidden border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <Image
                                    alt="team"
                                    className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
                                    src={Avtar}
                                />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font text-xl font-medium">
                                        Abhi Patel
                                    </h2>
                                    <p className="text-blue-700 text-xs">@AbhiPat38814974</p>
                                </div>
                            </div>
                            <AiFillLinkedin className="text-blue-700 text-xl m-5 relative" />
                        </div>
                        <p className="mt-4 text-base text-justify">
                            As somebody who has pretty much tried all new age banks/fintechs,
                            I can certainly say it’s @sliceit_ that has hit it out of the
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-2 md:col-span-3">
                    <div className="h-full overflow-hidden border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <Image
                                    alt="team"
                                    className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
                                    src={Avtar}
                                />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font text-xl font-medium">
                                        Abhi Patel
                                    </h2>
                                    <p className="text-blue-700 text-xs">@AbhiPat38814974</p>
                                </div>
                            </div>
                            <AiFillLinkedin className="text-blue-700 text-xl m-4" />
                        </div>
                        <p className="mt-4 text-base text-justify">
                            As somebody who has pretty much tried all new age banks/fintechs,
                            I can certainly say it’s @sliceit_ that has hit it out of the
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
