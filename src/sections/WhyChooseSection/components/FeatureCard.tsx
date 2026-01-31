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
            className={`relative bg-white box-border caret-transparent z-[1] overflow-hidden p-8 rounded-xl border border-primary/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-start text-left ${props.variant || ""}`}
        >
            {/* Decorative Corner Blob */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary/10 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110"></div>

            <div className="relative box-border caret-transparent mb-6 bg-red-50 p-4 rounded-2xl text-primary inline-flex items-center justify-center border border-primary/10">
                {props.icon}
            </div>
            <h3 className="text-neutral-900 text-xl md:text-2xl font-bold box-border caret-transparent leading-tight mb-3 font-rubik_0b5097">
                {props.title}
            </h3>
            <p className="text-zinc-600 text-[15px] md:text-base box-border caret-transparent leading-relaxed z-10 relative flex-grow">
                {props.description}
            </p>
        </div>
    );
};
