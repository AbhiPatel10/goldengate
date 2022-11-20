import React from 'react'
import Image from 'next/image'
import FooterImg from '../public/Img/FullLogoo.png'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 Footer-Main body-font" id='about'>
                <div className="container px-5 pb-16 pt-44 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Image src={FooterImg} width={180} />
                        </a>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-200 tracking-widest text-xl mb-3">Company</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-300 hover:text-gray-800">Home</a>
                                </li>
                                <li className="my-2">
                                    <a className="text-gray-300 hover:text-gray-800">Authenticate</a>
                                </li>
                                <li>
                                    <a className="text-gray-300 hover:text-gray-800">Register</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-200 tracking-widest text-xl mb-3">Contact us</h2>
                            <nav className="list-none mb-10">
                                <li className="flex flex-col">
                                    <a className="text-gray-300 hover:text-gray-800">+91-8048329999</a>
                                    <a className="text-gray-300 hover:text-gray-800 mt-2">help@sliceit.com</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-200 tracking-widest text-center text-sm mb-3">Connect with us</h2>
                            <nav className="list-none flex justify-evenly mt-7">
                                <li>
                                    <a className="text-gray-300 hover:text-gray-800 flex justify-center items-center"><BsLinkedin className='text-xl mr-2' /> LinkedIn</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Golden Gate Capital - All Rights Reserved</a>
                        </p>
                     
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer