import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialSlider = () => {
    return (
        <div className="relative box-border caret-transparent list-none z-[1] overflow-hidden mx-auto">
            <div className="relative caret-transparent flex h-full w-full z-[1]">
                <div className="relative box-border caret-transparent shrink-0 h-full w-[1296px] mr-[30px]">
                    <TestimonialCard
                        quote="I never thought getting a home loan could be this easy. The 1-hour report feature gave me clarity, and my loan was sanctioned within 7 days as promised! truly a peaceful living experience."
                        name="Rajesh Kumar"
                        role="Home Owner"
                        imageUrl="https://leza-react.envytheme.com/images/clients/man1.png"
                        imageAlt="Rajesh Kumar"
                    />
                </div>
                <div className="relative box-border caret-transparent shrink-0 h-full w-[1296px] mr-[30px]">
                    <TestimonialCard
                        quote="Healthy Home Loans helped me expand my business with their quick processing. Their network of 40+ banking partners meant I got the best interest rate available without any hassle."
                        name="Sarah Jenkins"
                        role="Entrepreneur"
                        imageUrl="https://leza-react.envytheme.com/images/clients/woman1.png"
                        imageAlt="Sarah Jenkins"
                    />
                </div>
                <div className="relative box-border caret-transparent shrink-0 h-full w-[1296px] mr-[30px]">
                    <TestimonialCard
                        quote="The transparency and professionalism were outstanding. With their 15+ years of experience, they patiently guided me to the perfect mortgage product for my needs."
                        name="Amit Patel"
                        role="Property Investor"
                        imageUrl="https://leza-react.envytheme.com/images/clients/man2.png"
                        imageAlt="Amit Patel"
                    />
                </div>
            </div>
            <div className="box-border caret-transparent text-center w-full z-10 left-0 bottom-2">
                <span className="bg-red-500 box-border caret-transparent inline-block h-3 w-3 mx-1 rounded-[50%]"></span>
                <span className="bg-black box-border caret-transparent inline-block h-3 opacity-20 w-3 mx-1 rounded-[50%] hover:bg-red-500"></span>
                <span className="bg-black box-border caret-transparent inline-block h-3 opacity-20 w-3 mx-1 rounded-[50%] hover:bg-red-500"></span>
            </div>
        </div>
    );
};
