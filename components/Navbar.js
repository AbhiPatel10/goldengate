import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Img/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="Navbar md:px-24 sm:10">
        <Link href={"/"}>
          <span className="nav-logo flex justify-center items-center">
            <Image width={45} src={Logo} className="mr-2"></Image>{" "}
            <span className="font-bold md:text-2xl text-lg text-blue-800">
              Golden Gate Capital
            </span>
          </span>
        </Link>
        <ul className={`nav-items ${isOpen && "open"}`}>
          <Link href={"#about"}>
            <li>About Us</li>
          </Link>
          <Link href={"/directors"}>
            <li>Directors</li>
          </Link>
          <Link href={"/authenticator"}>
            <li>Authenticator</li>
          </Link>
          <Link href={"/register"}>
            <li>Register</li>
          </Link>
        </ul>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
