import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import Record from "./components/Record/Record";
import Feature from "./components/Feature/Feature";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Marquee />
            <Record />
            <Feature />
        </div>
    );
};

export default App;
