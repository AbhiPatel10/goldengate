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
            <section class="text-gray-600 body-font">
                <div class="container px-5 pb-10 pt-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-10">
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">No limits in providing outstanding benefits to our clients.</p>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div class="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" class="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ SpreadImg } />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p class="text-gray-500">from 0 pips</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div class="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" class="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ FastOrder } />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Fastest Order</h2>
                                    <p class="text-gray-500">execution</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div class="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" class="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ Currencies } />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p class="text-gray-500">from 0 pips</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div class="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" class="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ MicroAccounts } />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p class="text-gray-500">from 0 pips</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div class="h-full border-gray-200 p-4 rounded-lg">
                                <Image alt="team" class="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ Assets } />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p class="text-gray-500">from 0 pips</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full flex justify-center items-center">
                            <div class="h-full  border-gray-200 p-4 rounded-lg">
                                <Image alt="team" class="w-16 h-16 m-auto bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4" src={ Affiliate } />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Tight spreads</h2>
                                    <p class="text-gray-500">from 0 pips</p>
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