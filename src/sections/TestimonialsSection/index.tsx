import { TestimonialSlider } from "@/sections/TestimonialsSection/components/TestimonialSlider";

export const TestimonialsSection = () => {
    return (
        <div className="box-border caret-transparent pt-[50px] pb-5 md:pt-[100px] md:pb-[70px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent text-center mb-[30px] md:mb-[45px]">
                    <span className="text-red-500 box-border caret-transparent font-medium">
                        Success Stories
                    </span>
                    <h2 className="text-neutral-900 text-[28px] font-medium box-border caret-transparent leading-[33.6px] mt-2.5 mb-3.5 font-rubik_0b5097 md:text-[40px] md:leading-[48px]">
                        What Our Clients Say
                    </h2>
                    <p className="text-zinc-600 text-[15px] box-border caret-transparent leading-[27px] max-w-[650px] m-auto md:text-base md:leading-[28.8px]">
                        Read about the experiences of our satisfied customers who achieved their financial goals with Healthy Home Loans.
                    </p>
                </div>
                <TestimonialSlider />
            </div>
        </div>
    );
};
