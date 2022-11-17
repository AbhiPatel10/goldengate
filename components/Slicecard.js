import React, { useEffect } from 'react'
import Image from 'next/image'
import RocketJPG from '../public/Img/SliceRobot.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Slicecard = () => {
    useEffect(() => {
        AOS.init({
          duration : 1800
        });
        AOS.refresh();
      }, []);
    return (
        <>
            <div className="">
                <div className="p-4 lg:w-2/3 md:w-full m-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="slicecard-BG md:p-14 p-8 rounded-2xl">
                                <p data-aos='fade-up' className="flex flex-col md:text-6xl text-4xl font-bold md:leading-tight leading-normal slicecard-family">
                                    <span> No annual </span>
                                    <span>fees.</span>
                                    <span> NO joining </span>
                                    <span>fees.</span>
                                    <span> NO hidden </span>
                                    <span>fees.</span>
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full SlideCard-right-main rounded-2xl">
                                <h1 data-aos='fade-up' className='SlideCard-right px-8 pt-8'>Your purchase power* now calculated in real-time.</h1>
                                <Image height={350} className='m-auto' src={RocketJPG}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slicecard