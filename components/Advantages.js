import React from 'react'
import Image from 'next/image'
import SpreadImg from '../public/Img/spreads.jpg'
import FastOrder from '../public/Img/fast-order.jpg'
import Currencies from '../public/Img/currencies.jpg'
import MicroAccounts from '../public/Img/micro-accounts.jpg'
import Assets from '../public/Img/assets.jpg'
import Affiliate from '../public/Img/affiliate.jpg'

const Advantages = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-10 pt-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">No limits in providing outstanding benefits to our clients.</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div className="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" className="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ SpreadImg } />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p className="text-gray-500">from 0 pips</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div className="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" className="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ FastOrder } />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Fastest Order</h2>
                                    <p className="text-gray-500">execution</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div className="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" className="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ Currencies } />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p className="text-gray-500">from 0 pips</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div className="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" className="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ MicroAccounts } />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p className="text-gray-500">from 0 pips</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div className="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" className="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ Assets } />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p className="text-gray-500">from 0 pips</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div className="h-full  border-gray-200 p-4 rounded-lg">
                                <Image alt="team" className="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ Affiliate } />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p className="text-gray-500">from 0 pips</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantages