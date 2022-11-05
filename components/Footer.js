import React from 'react'
import Image from 'next/image'
import FooterImg from '../public/Img/FullLogoo.png'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <>
            <footer class="text-gray-600 Footer-Main body-font">
                <div class="container px-5 pb-16 pt-60 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Image src={FooterImg} width={180} />
                        </a>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-bold text-gray-200 tracking-widest text-xl mb-3">Company</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Home</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">About</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Service</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">Contact</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-200 tracking-widest text-xl mb-3">Legel</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">privacy</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">terms of service</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">disclaimer</a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800">banking partners</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-200 tracking-widest text-xl mb-3">Contact us</h2>
                            <nav class="list-none mb-10">
                                <li className="flex flex-col">
                                    <a class="text-gray-300 hover:text-gray-800">+91-8048329999</a>
                                    <a class="text-gray-300 hover:text-gray-800">help@sliceit.com</a>
                                </li>
                                <h1 className="text-xl text-gray-200 tracking-widest title-font font-medium mt-3">Registered office</h1>
                                <p className="mt-2 text-gray-300">GaragePreneurs Internet Pvt Ltd
                                747, Pooja Building,
                                80ft Road, 4th Block,
                                Koramangala
                                
                                Bangalore - 560034
                                
                                CIN U72900KA2015PTC080871</p>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-200 tracking-widest text-center text-sm mb-3">Connect with us</h2>
                            <nav class="list-none flex justify-evenly mt-7">
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800"><BsFacebook  className='text-xl' /> </a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800"><BsInstagram className='text-xl' /></a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800"><BsTwitter className='text-xl' /></a>
                                </li>
                                <li>
                                    <a class="text-gray-300 hover:text-gray-800"><BsLinkedin className='text-xl' /></a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-500 text-sm text-center sm:text-left">© 2022 —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@Golden Gate Capital - All Rights Reserved</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a class="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer