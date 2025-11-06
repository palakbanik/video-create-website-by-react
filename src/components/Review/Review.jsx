import React from "react";
import BlackButton from "./../smallComponents/BlackButton/BlackButton";

import customReview from "../../assets/review.png";

const Review = () => {
    return (
        <section className="w-full">
            <div className="container flex flex-col md:flex-row items-center gap-8 md:justify-between">
                {/* text part */}
                <div className="flex flex-col items-start gap-8">
                    <div className="flex flex-col">
                        <h2 className="font-light text-[30px] leading-[1.28em] tracking-[-0.04em] text-custom-text-white">
                            Don’t just take our word fo it.
                        </h2>
                        <p className="font-light text-[15px] leading-[1.44em] tracking-[-0.04em] text-custom-text-primary">
                            Here’s what our customers have to say.
                        </p>
                    </div>

                    <div>
                        <BlackButton text={"Follow us on Twitter"} />
                    </div>
                </div>

                {/* image part */}
                <div>
                    <img src={customReview} alt="review" draggable="false" />
                </div>
            </div>
        </section>
    );
};

export default Review;
