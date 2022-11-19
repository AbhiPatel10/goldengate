import React from 'react'

const Faq = () => {
    return (
        <>
            <section className='Faq-Section py-20'>
                <div className='w-full'>
                    <div className="h-full sm:px-10 Faq-card px-4 rounded-2xl max-w-5xl m-auto py-14">
                        <h1 className="leading-relaxed mb-6 sm:text-3xl md:text-4xl text-2xl text-gray-900 font-bold Faq-card-header">Q. When is a FAQ page appropriate?</h1>
                        <p className='my-3 text-lg Faq-card-ans'>An FAQ page can be a distraction or an asset, depending on how you execute it.</p>
                        <p className='my-3 Faq-card-ans'>But to ensure that it’s the latter, here are some indications that it’s time to incorporate a FAQ page as part of your website:</p>
                        <ul className="list-disc ">
                            <li className='Faq-card-ans'>Customers email you with the same questions on an ongoing basis, so it’s better to address them publicly and prominently.</li>
                            <li className='Faq-card-ans'>You have or plan to create content/landing pages that you can link to and continue the journey from question to conversion.</li>
                            <li className='Faq-card-ans'>Your product/service/business raises questions and concerns that are best handled in a straightforward manner.</li>
                        </ul>
                        <p className='my-3 Faq-card-ans'>That last point is especially important as a FAQ page presents a unique opportunity to directly address concerns and remove obstacles on the path to purchase.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq