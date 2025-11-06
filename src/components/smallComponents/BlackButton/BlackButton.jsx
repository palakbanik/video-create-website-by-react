import React from "react";

const BlackButton = ({ text }) => {
    return (
        <a href="/">
            <button
                className={`bg-radial-glow font-normal text-sm leading-none tracking-[-0.04em] text-custom-text-primary border border-border-gray rounded-full ${
                    text === "Follow us on Twitter"
                        ? "px-6 py-[15px]"
                        : "px-8 py-5.5"
                } cursor-pointer hover:border-custom-text-white hover:text-custom-text-white duration-300`}
            >
                {text}
            </button>
        </a>
    );
};

export default BlackButton;
