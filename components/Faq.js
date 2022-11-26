import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
    useEffect(() => {
        AOS.init({
          duration : 1300
        });
        AOS.refresh();
      }, []);
    return (
        <>
            <div className="m-auto px-4 container grid lg:grid-cols-6 md:grid-cols-3 grid-rows-2 lg:gap-4 md:gap-2 gap-2">
                <div className="lg:col-span-3">
                    <div className="h-full overflow-hidden FAQ-main-container border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">

                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font text-xl font-bold"  data-aos='fade-up'>
                                        Q. What is an Individual Savings Account (ISA)?
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-100 text-base text-justify"  data-aos='fade-up'>
                            An ISA, or Individual Savings Account, is a savings account that you never pay any tax on. It does come with one restriction, which is the amount of money you can save or invest in an ISA in a single tax year – also known as your annual ISA allowance. For the current tax year this allowance is £20,000.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <div className="h-full overflow-hidden FAQ-main-container border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">

                                <div className="flex-grow" >
                                    <h2 className="text-gray-900 title-font text-xl font-bold"  data-aos='fade-up'>
                                        Q. Where must I travel to/from to get 2FOR1 or other offers?
                                    </h2>

                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-base text-justify text-gray-100" data-aos='fade-up'>
                            All tickets should show that you have travelled to the attraction by train, whether that be ‘London Terminals’ for 2FOR1 London or other offer attractions, or the train station nearest to the attraction itself. Tickets that have a destination too far from the attraction’s location may be denied by attraction staff.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-2 md:col-span-2 row-span-1">
                    <div className="h-full overflow-hidden FAQ-main-container border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">

                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font text-xl font-bold" data-aos='fade-up'>
                                        Q. What is a Cash ISA?
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-base text-justify text-gray-100"  data-aos='fade-up'>
                            As somebody who has pretty much tried all new age banks/fintechs,
                            I can certainly say it’s @sliceit_ that has hit it out of the
                            park. Great job. When you build a great product, your customers
                            become your ambassadors.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-2 col-span-1">
                    <div className="h-full overflow-hidden FAQ-main-container border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">

                                <div className="flex-grow" >
                                    <h2 className="text-gray-900 title-font text-xl font-bold"  data-aos='fade-up'>
                                        Q. How do the offers work?
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-base text-justify text-gray-100"  data-aos='fade-up'>
                            Most offers are 2FOR1 entry, valid on full price adult tickets only. In the event of a full price and concessionary admission ticket being purchased together, the cheapest will be deducted,
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-2 md:col-span-2 row-span-2">
                    <div className="h-full border-gray-200 FAQ-main-container border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">

                                <div className="flex-grow" >
                                    <h2 className="text-gray-900 title-font text-xl font-bold"  data-aos='fade-up'>
                                        Q. What is a Stocks & Shares ISA?
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-base text-justify  text-gray-100"  data-aos='fade-up'>
                            The ISA for investments is called a Stocks and Shares ISA: rather than simply saving, you are investing in things like stocks and shares, bonds, gilts or commercial properties to help your savings grow over time and any interest or returns you get are tax free.
                            <br />
                            <br />
                            Stocks and Shares ISAs may have the potential for quicker or greater growth, but because they are based on the stock market there’s always a risk the amount of money in your ISA could go down as well as up.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-4">
                    <div className="h-full overflow-hidden FAQ-main-container border-gray-200 border py-4 lg:px-4 md:px-3 px-3 rounded-lg shadow-md">
                        <div className="flex justify-between">
                            <div className="flex">

                                <div className="flex-grow" >
                                    <h2 className="text-gray-900 title-font text-xl font-bold" data-aos='fade-up'>
                                        Q. How do I keep my train tickets to use them for a 2FOR1 or other offer?
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-base text-justify text-gray-100" data-aos='fade-up'>
                            If you are worried that the ticket barrier will keep your ticket when you exit the station, please ask a member of staff to let you through manually. This will ensure you retain your tickets to redeem 2FOR1 or other offers at attractions.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Faq