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

const menu = "Menu";
const close = "Close";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50 ">
            {/* desktop view */}
            <nav className="max-w-[1440px] flex items-center justify-between mx-8 md:mx-10 mt-10 bg-custom-bg-black text-custom-text-primary rounded-full sticky top-0 left-0">
                {/* logo */}
                <a href="/">
                    <img src={logo} alt="logo" draggable="false" />
                </a>

                {/* nav links */}
                <ul className="hidden md:flex items-center gap-6 ">
                    {navLinks.map((link, idx) => (
                        <li
                            key={idx}
                            className="font-normal text-sm capitalize leading-none tracking-[-0.04em] transition-all duration-300 cursor-pointer hover:text-custom-bg-btn"
                        >
                            <a key={link.id} href={link.link}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* download button */}
                <div className="hidden md:block">
                    <BlueButton />
                </div>

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

            {/* mobile view */}
            <nav></nav>
        </header>
    );
};

export default Navbar;
