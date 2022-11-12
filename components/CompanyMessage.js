import React from "react";
import SectionHeader from "./section-header";

const Companymessage = () => {
    return (
        <>
            <div className="Message-From-Company py-24 mb-10">
                <SectionHeader title="Message From Company" />
                <div class="container px-5  mx-auto flex mt-16">
                    <div class=" bg-white rounded-lg p-12 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-2xl">
                        <h1 className="text-6xl font-bold CompanyMessage flex justify-end text-end">We are directly involved <br /> in the process.</h1>
                        <p className="mt-5 md:w-2/3 text-justify">With 10 years industry experience, Ashley Maddison is the creative founder of AM Interior Studio and has experience within the residential and commercial sector. With a degree and diploma in Interior Design, she has worked with Architects, builders and kitchen designers, designing and managing projects from boutique commercial office fitouts to high end luxury homes.</p>
                        <div>
                            <button class="flex mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Companymessage;