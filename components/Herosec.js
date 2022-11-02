import React from 'react'

const Herosec = () => {
    return (
        <>
            <section >
                <div className=" hero-section flex flex-col items-center justify-center">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-6xl  md:text-4xl lg:text-6xl text-4xl font-bold  mb-4 text-white md:whitespace-nowrap whitespace-normal">Invest in the largest <br />financial markets</h1>
                            <p className="font-semibold lg:text-3xl md:text-lg text-blue-400 whitespace-nowrap">on competitive conditions</p>
                            <ul class="list-disc text-gray-400 mt-4">
                                <li>More than 12,000 financial instruments</li>
                                <li>Spreads from 0 points</li>
                                <li>Trading with up to 1:2000</li>
                           
                            </ul>
                            <a href="#appoinment"><button className="mt-5 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start Earning</button></a>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosec