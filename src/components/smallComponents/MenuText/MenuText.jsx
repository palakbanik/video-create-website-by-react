import React from "react";

const MenuText = ({ text }) => {
    return (
        <div className="border border-border-gray rounded-full px-6 py-[15px] text-sm font-normal leading-none tracking-[-0.04em] bg-radial-[at_50%_5%] from-custom-text-white/5 to-80% to-custom-text-white/0">
            {text}
        </div>
    );
};

export default MenuText;
