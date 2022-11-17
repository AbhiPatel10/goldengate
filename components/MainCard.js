import React from 'react'

const Maincard = () => {
    return (
        <>
            <div className="h-full main-card-container sm:px-10 px-4 sm:mx-14 mx-6 py-14 rounded">
                <p className="leading-relaxed mb-6 text-center sm:text-3xl md:text-4xl text-2xl text-gray-900 font-semibold ">Ready to join the Golden Gate Capital Community?</p>
                <button className="flex mx-auto mt-10 text-white  border-0 py-2 px-8 focus:outline-none rounded text-lg">Create Account</button>
            </div>
        </>
    )
}

export default Maincard