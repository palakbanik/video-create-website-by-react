import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Marquee />
        </div>
    );
};

export default App;
