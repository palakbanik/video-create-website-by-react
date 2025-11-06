import React from "react";

const BlueButton = ({ text }) => {
    return (
        <a href="/">
            <button className="bg-custom-bg-btn text-custom-text-white text-sm font-normal leading-none tracking-wider py-[15px] px-6 rounded-full border-2 border-custom-bg-btn cursor-pointer transition-all duration-300 hover:bg-transparent hover:border-custom-text-white">
                {text}
            </button>
        </a>
    );
};

export default BlueButton;

/* 

ul 
className="hidden md:flex items-center gap-6"

li 
    className=" "

download btn
className="hidden md:block"

  


  

*/
