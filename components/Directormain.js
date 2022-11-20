import React from 'react'

const Directormain = () => {
    return (
        <>
            <section className='mt-10 md:px-10 px-3'>
                <div className='w-full flex '>
                    <div className='w-1/3 p-5'>
                        <div className=' bg-gray-200 p-8 rounded-md mb-10'>
                            <form className="w-full m-auto">
                                <div className="w-full flex flex-wrap mb-6">
                                    <div className="w-full px-3 ">
                                        <label className="block tracking-wide text-gray-900 text-base font-bold mb-5" for="grid-last-name">
                                            Gain Percentage
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                                    </div>
                                </div>
                                <div className="w-full flex justify-center">
                                    <button className="mt-3 item-center sm:ml-3 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Generate Profit fee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='w-1/3 p-5'>
                        <div className="bg-gray-200 p-8 rounded-md mb-10">
                            <div className="w-full flex flex-wrap mb-6">
                                <div className="w-full px-3 ">
                                    <label className="block tracking-wide text-gray-900 text-base font-bold mb-1" for="grid-last-name">
                                        Remind Profit fee
                                    </label>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="item-center sm:ml-3 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Remind Profit fee</button>
                            </div>
                        </div>
                        <div className="bg-gray-200 p-8 rounded-md ">
                            <div className="w-full flex flex-wrap mb-6">
                                <div className="w-full px-3 ">
                                    <label className="block tracking-wide text-gray-900 text-base font-bold mb-1" for="grid-last-name">
                                        Get Symbol Token
                                    </label>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="item-center sm:ml-3 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Symbol Token</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 p-5'>
                        <div className='m-auto bg-gray-200 p-8 rounded-md mb-10'>
                            <div className="w-full flex flex-wrap mb-6">
                                <div className="w-full px-3 ">
                                    <label className="block tracking-wide text-gray-900 text-base font-bold mb-5" for="grid-last-name">
                                        Reset Auth Status
                                    </label>
                                    <p>To be done after the trading day close of login, so the system knows that there login is invalid</p>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="mt-3 item-center sm:ml-3 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Reset Auth Status</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex w-full'>
                    <div className='max-w-md bg-gray-200 w-1/4 p-8 rounded-md m-5'>
                        <form className="w-full m-auto">
                            <div className="w-full flex flex-wrap mb-6">
                                <div className="w-full px-3 ">
                                    <h1 className="block tracking-wide text-gray-900 text-base font-bold mb-6" for="grid-last-name">Generate Profit Fee</h1>
                                    <label className="block tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                                        Plan
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your plan" />
                                    <label className="block tracking-wide text-gray-900 text-xs font-bold mb-2 mt-5" for="grid-last-name">
                                        Gain Percentage
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"  />
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="mt-3 item-center sm:ml-3 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Generate Profit Fee</button>
                            </div>
                        </form>
                    </div>
                    <div className=' bg-gray-200 p-8 w-1/4 rounded-md m-5 mb-28'>
                        <form className="w-full m-auto">
                            <div className="w-full flex flex-wrap mb-6">
                                <div className="w-full px-3 ">
                                    <h1 className="block tracking-wide text-gray-900 text-base font-bold mb-6" for="grid-last-name">Fund</h1>

                                    <label className="block tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                                        Fund Password
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your password" />
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="mt-5 item-center sm:ml-3 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Logout</button>
                            </div>
                        </form>
                    </div>
                    <div className='bg-gray-200 w-2/4 p-8 rounded-md m-5'>
                        <h1 className="block tracking-wide text-gray-900 text-base font-bold mb-6 ml-2" for="grid-last-name">Place an Order</h1>
                        <form className="w-full m-auto">

                            <div className="w-full flex flex-wrap mb-6">

                                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-first-name">
                                        Plan
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your plan" />
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                                        Type
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Enter type" />
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap mb-6">
                                <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-first-name">
                                        Symbol
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter symbol" />
                                </div>
                                <div className="w-full px-3 md:w-1/2">
                                    <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                                        Quantity
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className="mt-5 sm:ml-3 item text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Place Order</button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="h-full bg-gray-100 md:w-4/5 w-full m-auto sm:p-8 p-3 rounded my-10">
                    <form className="w-full m-auto">
                    <h1 className="block tracking-wide text-gray-900 text-base font-bold mb-6 ml-3" for="grid-last-name">Letter to Investors</h1>

                        <div className="w-full flex flex-wrap mb-6">
                            <div className="w-full md:w-1/2 px-3  mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-first-name">
                                    Plan
                                </label>
                                <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your plan" />
                            </div>
                            <div className="w-full px-3 md:w-1/2">
                                <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                                    Subject
                                </label>
                                <input className="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Enter your subject" />
                            </div>
                            <div className="w-full px-3 ">
                                <label className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2" for="grid-last-name">
                                    Body
                                </label>
                                <textarea class="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" rows="3" placeholder="Your message"
                                ></textarea>
                            </div>
                        </div>
                        <button className="mt-5 sm:ml-3 text-white bg-indigo-500 border-0 lg:py-2 lg:px-6 px-4 py-1 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Letter</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Directormain