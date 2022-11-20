import React from 'react'
import Link from 'next/link'

const Pricing = () => {
    return (
        <>
            <section className="text-gray-600 body-font h-full">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="md:w-1/2 w-full">
                            <div className="h-full p-8 rounded-xl Pricing-box-left">
                                <h1 className='title-font text-2xl flex justify-center pb-3'> PAY AS YOU GO</h1>
                                <hr />
                                <p className='text-base text-center mt-2'>Access a complete payments platform with simple, pay-as-you-go pricing starting at.</p>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col justify-center py-7 px-4'>
                                        <h1 className='text-5xl text-center'>2%</h1>
                                        <p className='text-lg flex justify-center text-center'>for cards issued in India</p>
                                    </div>
                                    <div className='flex flex-col justify-center py-7 px-2'>
                                        <h1 className='text-5xl text-center'>7%</h1>
                                        <p className='text-lg flex justify-center text-center'>profit if we beat the index + 2 %.</p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            No setup, monthly, or hidden fees
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            Pay only for what you use
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                            Real-time fee reporting
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/register">
                                    <button className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create Account</button>
                                </Link>
                            </div>
                        </div>
                        <div className="py-10 md:w-1/2 w-full">
                            <div className="h-full p-8 rounded-xl Pricing-box-right">
                                <h1 className='title-font text-2xl flex justify-center text-white pb-3'>ENTERPRISE</h1>
                                <hr />
                                <div className="flex flex-wrap mt-5">
                                    <div className="w-1/2 p-1">
                                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <div className="flex-grow">
                                                <h2 className="text-white title-font font-medium">
                                                    Account management</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-1/2 p-1">
                                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <div className="flex-grow">
                                                <h2 className="text-white title-font font-medium">Volume discounts</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap ">
                                    <div className="w-1/2 p-1">
                                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <div className="flex-grow">
                                                <h2 className="text-white title-font font-medium">
                                                    Migration assistance</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-1/2 p-1">
                                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <div className="flex-grow">
                                                <h2 className="text-white title-font font-medium">	Dedicated support</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="#about">
                                    <button className="flex mx-auto mt-5 text-slate-900 bg-gray-300 border-0 py-2 px-8 focus:outline-none rounded text-lg">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing