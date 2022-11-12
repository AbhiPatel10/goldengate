import React from 'react'

const Feestructure = () => {
    return (
        <>
            <section className=" text-gray-600 body-font ">
                <div className="container mx-auto">
                    <div className="flex flex-wrap ">
                        <div className="p-2 md:w-1/2  ">
                            <div className='p-12 bg-gray-100 rounded-md flex flex-col items-start'>
                                <h2 className="sm:text-3xl text-2xl title-font font-bold text-gray-900 mt-4 mb-4">2% Management fee </h2>
                                <p className="leading-relaxed text-lg text-gray-600 font-semibold ">7% of profit if we beat the index + 2 %.</p>
                                <p className="leading-relaxed mb-8 mt-4">When our clients deposit their accounts, the commission is always 2%. We cover all expenses. Choose the payment system according to your convenience, not cost effectiveness.</p>
                            </div>
                        </div>
                        <div className="p-2 md:w-1/2 ">
                            <div className='p-12 h-full bg-gray-100 rounded-md flex flex-col items-start'>
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Instant Withdrawals</h2>
                                <ul className="list-disc text-gray-900 text-xl mt-4">
                                    <li>Automatic withdrawal system: withdrawals within a minute for certain payment methods</li>
                                    <li className="mt-2">System works 24/7</li>
                                    <li className="mt-2">Simple, reliable, and fast</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feestructure