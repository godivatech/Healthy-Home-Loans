import { FundingSteps } from "@/sections/FundingSection/components/FundingSteps";
import { LoanCalculator } from "@/sections/FundingSection/components/LoanCalculator";

export const FundingSection = () => {
    return (
        <div className="box-border caret-transparent py-[50px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent text-center mb-[30px] md:mb-[45px]">
                    <span className="text-red-500 box-border caret-transparent font-medium uppercase tracking-wider">
                        Our Process
                    </span>
                    <h2 className="text-neutral-900 text-[28px] font-medium box-border caret-transparent leading-[33.6px] mt-2.5 mb-3.5 font-rubik_0b5097 md:text-[40px] md:leading-[48px]">
                        How We Make Loans Easy
                    </h2>
                    <p className="text-zinc-600 text-[15px] box-border caret-transparent leading-[27px] max-w-[570px] m-auto md:text-base md:leading-[28.8px]">
                        Experience a transparent and quick loan approval process designed to get you the funds you need without the stress.
                    </p>
                </div>
                <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                    <FundingSteps />
                    <LoanCalculator />
                </div>
            </div>
        </div>
    );
};
