import { ServiceTabs } from "@/sections/ServicesSection/components/ServiceTabs";

export const ServicesSection = () => {
    return (
        <div className="bg-primary box-border caret-transparent py-[50px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1240px]">
                <ServiceTabs />
            </div>
        </div>
    );
};
