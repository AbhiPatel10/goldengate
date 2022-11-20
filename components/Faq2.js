import React from 'react'
import faqImage from '../public/Img/faq-img.png'
import Image from 'next/image'

const Faq = () => {
    return (
        <>
            <section className='Faq-Section2 py-20 my-16'>
                <div className='w-full'>
                    <div className="h-full Faq-card px-4 rounded-2xl max-w-5xl m-auto py-14">
                        <div class=" mx-auto">
                            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                                <div className='lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded'>
                                    <Image className='rounded' src={ faqImage } />
                                </div>
                                <div class="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">What are entry requirements? </h1>

                                    <p class="leading-relaxed mt-5 ">Entry requirements vary between universities and colleges – a full list of universities and colleges and their minimum entry criteria can be found in our search tool. If you are unsure you meet a university/college's criteria, it is best to contact their admissions team for further guidance.</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq