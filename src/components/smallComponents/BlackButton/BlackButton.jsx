import React from "react";

const BlackButton = ({ text }) => {
    return (
        <a href="/">
            <button className="font-normal text-sm leading-none tracking-[-0.04em] text-custom-text-primary border border-border-gray rounded-full px-8 py-5.5 cursor-pointer hover:shadow-2xs hover:shadow-custom-text-primary duration-300 bg-radial-glow">
                {text}
            </button>
        </a>
    );
};

export default BlackButton;
