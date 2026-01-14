import { Link } from "react-router-dom";

export const HeroContent = () => {
    return (
        <div className="box-border caret-transparent max-w-full md:max-w-[800px]">
            <span className="text-neutral-900 text-lg font-medium box-border caret-transparent leading-[27px] uppercase tracking-wider">
                Welcome to Healthy Home Loans
            </span>
            <h1 className="text-neutral-900 text-[33px] font-bold box-border caret-transparent leading-[1.2] mt-2.5 mb-6 font-rubik_0b5097 md:text-[60px] md:leading-[1.1]">
                Easy Loans. <br />
                <span className="text-primary">Peaceful Living.</span>
            </h1>
            <p className="text-zinc-600 text-lg box-border caret-transparent leading-[30px] max-w-[650px] mb-8">
                With 15+ years of expertise and 40+ banking partners, we ensure the fastest loan sanctions.
                Experience 1-hour report generation and 7-day sanctions for your dream home or business.
            </p>
            <div className="box-border caret-transparent flex gap-4">
                <Link
                    to="/contact"
                    className="relative text-white text-[15px] bg-primary box-border caret-transparent inline-block leading-[22.5px] text-center z-[1] overflow-hidden px-[30px] py-3.5 rounded-[5px] font-medium md:text-base md:leading-6 md:px-[45px] hover:bg-red-800 transition-colors"
                >
                    Get Loan
                </Link>
                <Link
                    to="/services"
                    className="relative text-primary text-[15px] bg-white border border-primary box-border caret-transparent inline-block leading-[22.5px] text-center z-[1] overflow-hidden px-[30px] py-3.5 rounded-[5px] font-medium md:text-base md:leading-6 md:px-[45px] hover:bg-gray-50 transition-colors"
                >
                    Our Services
                </Link>
            </div>
        </div>
    );
};
