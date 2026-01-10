import { WhyChooseContent } from "@/sections/WhyChooseSection/components/WhyChooseContent";
import { WhyChooseFeatures } from "@/sections/WhyChooseSection/components/WhyChooseFeatures";

export const WhyChooseSection = () => {
    return (
        <div className="bg-gray-50 box-border caret-transparent pt-[50px] pb-5 md:pt-[100px] md:pb-[70px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent flex flex-wrap -mx-3">
                    <WhyChooseContent />
                    <WhyChooseFeatures />
                </div>
            </div>
        </div>
    );
};
