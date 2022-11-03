import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../public/Img/Logo.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="Navbar">
                <span className="nav-logo flex justify-center items-center"><Image width={ 45 } src={ Logo } className="mr-2" ></Image> <span className=" md:text-2xl text-lg text-blue-800">Golden Gate Capital</span></span>
                <ul className={ `nav-items ${isOpen && "open"}` }>
                    <Link href={ '/' }><li>Home</li></Link>
                    <Link href={ '/about' }><li>About</li></Link>
                    <Link href={ '/' }><li>Service</li></Link>
                    <Link href={ '/' }><li>Contact</li></Link>
                </ul>
                <div
                    className={ `nav-toggle ${isOpen && "open"}` }
                    onClick={ () => setIsOpen(!isOpen) }
                >
                    <div className="bar"></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar