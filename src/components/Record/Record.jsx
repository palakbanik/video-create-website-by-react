import React from "react";

// image
import record from "../../assets/record-img.png";

const content = [
    {
        id: 1,
        heading: "Record your screen and camera.",
        para: "You can conveniently begin recording your screen and camera on any device by using our desktop and mobile apps or Chrome extension.",
        image: record,
    },
    {
        id: 2,
        heading: " Share with a link",
        para: "You can share your video effortlessly by copying and pasting the link to wherever your recipients are, and they can watch it without the need to log in or create an account.",
        image: record,
    },
];

const Record = () => {
    return (
        <section className="w-full py-32 sm:py-36 md:py-[220px] container">
            <div className="flex flex-col items-center gap-32 md:gap-[220px]">
                {content.map((item, idx) => (
                    <div
                        key={idx}
                        className={`w-full max-w-[1180px] flex flex-col items-center md:items-center justify-center md:justify-between md:gap-10 ${
                            idx === 0 ? "md:flex-row" : ""
                        } ${item.id === 2 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* image content */}
                        <img
                            src={item.image}
                            alt="record"
                            className="flex items-center md:place-start -mt-23"
                        />
                        {/* text content */}
                        <div className="w-full max-w-[536px] flex flex-col items-start gap-10 px-8 md:-mt-23">
                            <div
                                className={`w-6 h-6 border-5 rounded-full ${
                                    item.id === 1
                                        ? "bg-custom-bg-btn border-custom-bg-btn/24"
                                        : "bg-custom-bg border-custom-bg/24"
                                }`}
                            ></div>

                            <div className="flex flex-col items-start gap-8">
                                <h1
                                    className={`font-light ${
                                        item.id === 1
                                            ? "text-4xl lg:text-5xl"
                                            : "text-5xl"
                                    } leading-[1.28em] tracking-[-0.04em]`}
                                >
                                    {item.heading}
                                </h1>
                                <p className="text-custom-text-primary font-light text-[15px] leading-[1.44em] tracking-[-0.04em]">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Record;
