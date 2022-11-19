import React, { useEffect }  from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Maincard = () => {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
        AOS.refresh();
      }, []);
    return (
        <>
            <div className="h-full main-card-container sm:px-10 px-4 sm:mx-14 mx-6 py-14 rounded">
                <p data-aos='fade-up' className="leading-relaxed mb-6 text-center sm:text-3xl md:text-4xl text-2xl text-gray-900 font-semibold ">Ready to join the Golden Gate Capital Community?</p>
                <button className="flex mx-auto mt-10 text-white  border-0 py-2 px-8 focus:outline-none rounded text-lg">Create Account</button>
            </div>
        </>
    )
}

export default Maincard