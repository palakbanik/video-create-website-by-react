import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { RiCloseLargeFill } from "react-icons/ri";

import logo from "../../assets/logo.png";
import BlueButton from "../smallComponents/BlueButton/BlueButton";
import MenuText from "../smallComponents/MenuText/MenuText";

const navLinks = [
    { id: 1, title: "Use Cases", link: "/" },
    { id: 2, title: "For Business", link: "/" },
    { id: 3, title: "Resources", link: "/" },
    { id: 4, title: "Pricing", link: "/" },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="w-full max-w-[1440px] mx-auto px-8 md:px-10 bg-custom-bg-black/30 backdrop-blur-md fixed top-10 left-0 right-0 z-50">
            <nav className="flex items-center justify-between">
                {/* logo */}
                <a href="/">
                    <img src={logo} alt="logo" draggable="false" />
                </a>

                {/* nav links */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link, idx) => (
                        <li
                            key={idx}
                            className="font-normal text-sm capitalize leading-none tracking-[-0.04em] transition-all duration-300 cursor-pointer hover:scale-110 hover:text-shadow-2xs hover:text-shadow-custom-bg-btn"
                        >
                            <a key={link.id} href={link.link}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* download btn */}
                <div className="hidden md:block">
                    <BlueButton text={"Download Now"} />
                </div>

                {/* menu icon */}
                <button
                    className="md:hidden"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {showMenu ? (
                        <MenuText text={"Close"} />
                    ) : (
                        <MenuText text={"Menu"} />
                    )}
                </button>
            </nav>

            <div className="md:hidden w-full relative z-50">
                <nav
                    className={`w-full absolute top-0 ${
                        showMenu ? "right-0" : "-right-[200%]"
                    } duration-400 ease-in`}
                >
                    <ul className="flex flex-col items-center justify-center gap-5 sm:gap-8 py-10 sm:py-20 mt-5 border border-custom-text-primary rounded-3xl bg-black backdrop-blur-3xl">
                        {navLinks.map((link, idx) => (
                            <li
                                key={idx}
                                className="text-base font-normal capitalize"
                                onClick={() => setShowMenu(false)}
                            >
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

//  flex items-center justify-between mx-8 md:mx-10 mt-10 rounded-full
