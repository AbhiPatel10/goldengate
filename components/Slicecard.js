import React from 'react'
import Image from 'next/image'
import RocketJPG from '../public/Img/SliceRobot.png'

const Slicecard = () => {
    return (
        <>
            <div class="">
                <div class="p-4 lg:w-2/3 md:w-full m-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/2 w-full">
                            <div class="slicecard-BG bg-gray-100 md:p-14 p-8 rounded">
                                <p className="flex flex-col md:text-6xl text-4xl font-bold md:leading-tight leading-normal slicecard-family">
                                    <span> No annual </span>
                                    <span>fees.</span>
                                    <span> NO joining </span>
                                    <span>fees.</span>
                                    <span> NO hidden </span>
                                    <span>fees.</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/2 w-full">
                            <div class="h-full bg-gray-100  rounded">
                                <h1 className='SlideCard-right px-8 pt-8'>Your purchase power* now calculated in real-time.</h1>
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