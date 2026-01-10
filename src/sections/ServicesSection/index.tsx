import { ServiceTabs } from "@/sections/ServicesSection/components/ServiceTabs";

export const ServicesSection = () => {
    return (
        <div className="bg-gray-50 box-border caret-transparent py-[50px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent text-center mb-[30px] md:mb-[45px]">
                    <span className="text-red-500 box-border caret-transparent font-medium">
                        Our Expertise
                    </span>
                    <h2 className="text-neutral-900 text-[28px] font-medium box-border caret-transparent leading-[33.6px] mt-2.5 mb-3.5 font-rubik_0b5097 md:text-[40px] md:leading-[48px]">
                        Comprehensive Loan Solutions
                    </h2>
                    <p className="text-zinc-600 text-[15px] box-border caret-transparent leading-[27px] max-w-[650px] m-auto md:text-base md:leading-[28.8px]">
                        We offer a wide range of loan products tailored to your specific needs. Whether you're buying your dream home, looking for personal finance, or expanding your business, Healthy Home Loans is your trusted partner.
                    </p>
                </div>
                <ServiceTabs />
            </div>
        </div>
    );
};
