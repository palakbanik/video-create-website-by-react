import React from "react";

const HeadingBtnText = ({ headingBtnText }) => {
    return (
        <div className="font-medium text-xs leading-none tracking-[0.04em] text-center text-custom-text-white border bg-custom-text-white/3 border-custom-text-white/6 px-4 py-3 rounded-full">
            {headingBtnText}
        </div>
    );
};

export default HeadingBtnText;
