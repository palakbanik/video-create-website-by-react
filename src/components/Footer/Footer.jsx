import React from "react";
import BlueButton from "../smallComponents/BlueButton/BlueButton";

const links = [
    {
        id: 1,
        src: "/",
        title: "Product",
        linkOne: "Use Cases",
        linkTwo: "For Business",
        linkThree: "Resources",
        linkFour: "Pricing",
    },
    {
        id: 2,
        src: "/",
        title: "Downloads",
        linkOne: "Desktop App",
        linkTwo: "Chrome Extension",
        linkThree: "Safari Extension",
        linkFour: "iOS App",
    },
    {
        id: 3,
        src: "/",
        title: "Resources",
        linkOne: "Blog",
        linkTwo: "Help & Support",
        linkThree: "Community",
        linkFour: "Status",
    },
    {
        id: 4,
        src: "/",
        title: "Company",
        linkOne: "About Us",
        linkTwo: "Careers",
        linkThree: "Media Kit",
        linkFour: "Sitemap",
    },
];

const Footer = () => {
    return (
        <footer className="w-full py-[72-px]">
            <div className="container">
                {/* button part */}
                <div className="flex flex-col md:flex-row items-start md:justify-between gap-12 p-8 md:px-[103px] mb-[72px] md:mb-[100px] md:py-[83px] bg-radial-glow rounded-4xl border-2 border-custom-bg-black hover:border-2 hover:border-custom-bg-btn hover: duration-300">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-light text-2xl leading-[1.28em] tracking-[-0.04m]">
                            Ready to start?
                        </h3>
                        <p className="font-light text-[15px] leading-[1.44em] tracking-[0.04em] text-custom-text-primary">
                            For Mac, Windows, iOS, and Android.
                        </p>
                    </div>

                    <div>
                        <BlueButton text={"Get started for free"} />
                    </div>
                </div>

                {/* link part */}
                <div className="bg-radial-glow py-[72px] md:pt-[140px] md:pb-[172px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12">
                    {links.map((link, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-start gap-6"
                        >
                            <p className="text-custom-footer-para-text font-medium text-xs leading-none tracking-[0.04em]">
                                {link.title}
                            </p>

                            <div className="flex flex-col items-start gap-6">
                                <a
                                    href={link.src}
                                    className="font-normal text-sm leading-none tracking-[-0.04em] text-custom-text-primary transition-all hover:scale-105 hover:text-custom-text-white cursor-pointer duration-200"
                                >
                                    {link.linkOne}
                                </a>
                                <a
                                    href={link.src}
                                    className="font-normal text-sm leading-none tracking-[-0.04em] text-custom-text-primary transition-all hover:scale-105 hover:text-custom-text-white cursor-pointer duration-200"
                                >
                                    {link.linkTwo}
                                </a>
                                <a
                                    href={link.src}
                                    className="font-normal text-sm leading-none tracking-[-0.04em] text-custom-text-primary transition-all hover:scale-105 hover:text-custom-text-white cursor-pointer duration-200"
                                >
                                    {link.linkThree}
                                </a>
                                <a
                                    href={link.src}
                                    className="font-normal text-sm leading-none tracking-[-0.04em] text-custom-text-primary transition-all hover:scale-105 hover:text-custom-text-white cursor-pointer duration-200"
                                >
                                    {link.linkFour}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* copyright part */}
                <div className="w-full flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-[72px] md:mb-[113px]">
                    <div className="w-full flex items-center gap-6">
                        <p className="font-normal text-xs leading-none tracking-[-0.04em] text-custom-footer-para-text">
                            Privacy Policy
                        </p>
                        <p className="font-normal text-xs leading-none tracking-[-0.04em] text-custom-footer-para-text">
                            Terms of Service
                        </p>
                    </div>

                    <p className="w-full font-normal text-xs leading-none tracking-[-0.04em] text-custom-footer-para-text md:text-right">
                        &copy; 2025, Designed & Developed by Polok
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
