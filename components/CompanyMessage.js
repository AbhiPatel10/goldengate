import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link'

const Companymessage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1800
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="Message-From-Company py-24 my-10">
                <div className="container px-5  mx-auto flex mt-3">
                    <div className="bg-white rounded-lg p-12 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-2xl">
                        <h1 data-aos='fade-up' className="md:text-6xl sm:text-4xl text-2xl font-bold CompanyMessage flex md:justify-end md:text-end">We are directly involved <br /> in the process.</h1>
                        <p data-aos='fade-up' className="mt-5 md:w-2/3 md:text-base text-base text-justify">With 10 years industry experience, Ashley Maddison is the creative founder of AM Interior Studio and has experience within the residential and commercial sector. With a degree and diploma in Interior Design, she has worked with Architects, builders and kitchen designers, designing and managing projects from boutique commercial office fitouts to high end luxury homes.</p>
                        <div>
                            <Link href="#about">
                                <button className="flex mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Companymessage;
