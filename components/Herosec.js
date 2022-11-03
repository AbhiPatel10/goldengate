import React from 'react'
import Image from 'next/image'
import GIF from '../public/Img/Invest.gif'

const Herosec = () => {
    return (
        <>
            <section className='main-hero'>
                <div className="hero-section flex flex-col items-center justify-center">
                    <div className="container mx-auto flex px-5 md:py-24 py-5 md:flex-row flex-col items-center ">
                    
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font mb-4 main_title md:whitespace-nowrap whitespace-normal z-10">Invest <br /> in the largest<br /> financial markets</h1>
                            <a href="#appoinment"><button className="mt-5 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start Earning</button></a>
                            <p class="leading-relaxed xl:w-2/4 lg:w-3/4 mt-5 text-xl whitespace-nowrap">Trusted by 12 million+ Investors</p>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <Image src={ GIF } alt="my gif" height={ 550 } width={ 550 } className="z-0" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosec