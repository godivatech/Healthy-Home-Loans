import { ValuesList } from "@/sections/CompanyValues/components/ValueList";
import { ValuesImage } from "@/sections/CompanyValues/components/ValueImages";

export const CompanyValues = () => {
    return (
        <div className="box-border caret-transparent py-[50px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                    <ValuesList />
                    <ValuesImage />
                </div>
            </div>
        </div>
    );
};
