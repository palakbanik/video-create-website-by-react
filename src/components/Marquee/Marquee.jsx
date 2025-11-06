import React from "react";
import "./Marquee.css";
import HeadingBtnText from "../smallComponents/HeadingBtnText/HeadingBtnText";
import HeadingText from "../smallComponents/HeadingText/HeadingText";

// images
import marqueeOne from "../../assets/marquee-one.png";
import marqueeTwo from "../../assets/marquee-two.png";
import marqueeThree from "../../assets/marquee-three.png";
import marqueeFour from "../../assets/marquee-four.png";
import marqueeFive from "../../assets/marquee-five.png";
import marqueeSix from "../../assets/marquee-six.png";

const logos = [
    { id: 1, image: marqueeOne },
    { id: 2, image: marqueeTwo },
    { id: 3, image: marqueeThree },
    { id: 4, image: marqueeFour },
    { id: 5, image: marqueeFive },
    { id: 6, image: marqueeSix },
    { id: 7, image: marqueeOne },
    { id: 8, image: marqueeTwo },
    { id: 9, image: marqueeThree },
    { id: 10, image: marqueeFour },
];

const Marquee = () => {
    return (
        <section>
            <div className="flex flex-col items-center gap-[72px] md:gap-[77px]">
                {/* text content */}
                <div className="flex flex-col items-center gap-6 md:gap-8 px-8">
                    <div className="">
                        <HeadingBtnText
                            headingBtnText={"More than 500 clients"}
                        />
                    </div>

                    <div>
                        <HeadingText
                            headingText={
                                "Fueling the success of the best product teams globally,from emerging startups to established corporations."
                            }
                        />
                    </div>
                </div>

                {/* marquee content */}
                <div className="w-full bg-custom-bg-black overflow-hidden">
                    {/* Main Container */}
                    <div className="relative">
                        {/* Gradient Overlays - Paser dui side e fade effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-[460px] bg-linear-to-r from-custom-bg-black to-custom-bg-black/0 z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-[460px] bg-linear-to-l from-custom-bg-black to-custom-bg-black/0 z-10"></div>

                        {/* Scrolling Container */}
                        <div className="flex flex-col gap-14 items-center ">
                            {/* First Set of Logos */}
                            <div className="flex gap-16 px-8 animate-scroll-right">
                                {logos.map((logo, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center text-custom-marquee-text shrink-0 "
                                    >
                                        <img
                                            src={logo.image}
                                            alt="logo"
                                            height={200}
                                            draggable="false"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* second set of logos */}
                            <div className="flex gap-16 px-8 animate-scroll-left">
                                {logos.map((logo, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center text-custom-marquee-text shrink-0 "
                                    >
                                        <img
                                            src={logo.image}
                                            alt="logo"
                                            height={200}
                                            draggable="false"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marquee;
