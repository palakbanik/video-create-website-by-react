import React from "react";

const HeadingText = ({ headingText }) => {
    return (
        <h2 className="w-full max-w-[742px] font-light text-base sm:text-xl md:text-[30px] text-center leading-[1.28] tracking-[-0.04em] text-custom-text-white">
            {headingText}
        </h2>
    );
};

export default HeadingText;
