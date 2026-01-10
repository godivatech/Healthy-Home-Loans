import { ReactNode } from "react";

export type FeatureCardProps = {
    title: string;
    description: string;
    icon: ReactNode;
    variant?: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
    return (
        <div
            className={`relative bg-white box-border caret-transparent text-center z-[1] overflow-hidden p-[30px] rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center ${props.variant || ""}`}
        >
            <div className="relative box-border caret-transparent mb-5 bg-red-50 p-4 rounded-full text-primary">
                {props.icon}
            </div>
            <h3 className="text-neutral-900 text-[20px] font-semibold box-border caret-transparent leading-[26px] mb-2.5 font-rubik_0b5097">
                {props.title}
            </h3>
            <p className="text-zinc-600 text-[15px] box-border caret-transparent leading-[24px]">
                {props.description}
            </p>
        </div>
    );
};
