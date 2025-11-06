import React from "react";
import HeadingBtnText from "../smallComponents/HeadingBtnText/HeadingBtnText";
import HeadingText from "../smallComponents/HeadingText/HeadingText";

// images
import iconOne from "../../assets/feature-icon-one.svg";
import iconTwo from "../../assets/feature-icon-two.svg";
import iconThree from "../../assets/feature-icon-three.svg";
import iconFour from "../../assets/feature-icon-four.svg";

const icons = [
    { id: 1, icon: iconOne, text: "Record in 4K", name: "4k" },
    { id: 2, icon: iconTwo, text: "Make a playlist", name: "youtube" },
    { id: 3, icon: iconThree, text: "Edit your videos", name: "screenshot" },
    { id: 4, icon: iconFour, text: "Share as a link", name: "video" },
];

const Feature = () => {
    return (
        <section className="w-full h-auto ">
            <div className="container flex flex-col items-center justify-center gap-12 md:gap-24 py-[72px] md:pt-24 md:pb-32 px-4">
                <div className="w-full max-w-[1180px] flex flex-col items-center justify-center gap-12 md:gap-24 bg-radial-glow rounded-3xl pt-24">
                    <div className="flex flex-col items-center gap-6 md:gap-8">
                        <div>
                            <HeadingBtnText
                                headingBtnText={"More amazing features"}
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

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
                        {icons.map((icon, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center gap-8"
                            >
                                <img
                                    src={icon.icon}
                                    alt={icon.name}
                                    draggable="false"
                                    className="bg-custom-text-white/2 p-8.5 rounded-3xl"
                                />
                                <p className="font-light text-[15px] md:text-xl leading-[1.28em] tracking-[-0.04em]">
                                    {icon.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
