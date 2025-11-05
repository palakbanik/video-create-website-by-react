import desktopImg from "../../assets/hero-desktop-img.png";
import mblImg from "../../assets/hero-mbl-img.png";
import BlackButton from "../smallComponents/BlackButton/BlackButton";

const Hero = () => {
    return (
        <section className="w-full h-auto mt-[154px] md:mt-52">
            <div className="container flex flex-col items-center justify-center">
                {/* text content */}
                <div className="w-full flex flex-col items-center text-center gap-6 md:gap-8 md:mb-16">
                    <h1 className="font-light text-[40px] sm:text-[60px] md:text-[70px] lg:text-[96px] text-custom-text-white leading-none tracking-[-0.04em]">
                        One video is worth a <br /> thousand words
                    </h1>
                    <p className="font-light text-base md:text-xl leading-[1.28] tracking-[-0.04em] max-w-[919px] text-custom-text-primary">
                        Video messaging cuts out distractions to help teams work
                        smarter
                    </p>
                </div>

                {/* button part */}
                <div className="hidden md:block">
                    <BlackButton text={"Get started for free"} />
                </div>

                {/* image content */}

                <div className="hidden md:block">
                    <img src={desktopImg} alt="content" />
                </div>
                <div className="md:hidden">
                    <img src={mblImg} alt="content" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
