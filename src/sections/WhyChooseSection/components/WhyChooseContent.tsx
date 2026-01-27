

import { FadeIn } from "@/components/animations/FadeIn";


export const WhyChooseContent = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
            <FadeIn direction="right" fullWidth>
                <div className="box-border caret-transparent text-center md:text-start">
                    <span className="text-secondary box-border caret-transparent text-center md:text-start font-medium uppercase tracking-wider">
                        Our Expertise
                    </span>
                    <h2 className="text-neutral-900 text-[25px] font-medium box-border caret-transparent leading-[30px] text-center mt-2.5 mb-3.5 font-rubik_0b5097 md:text-4xl md:leading-[43.2px] md:text-start">
                        Why Choose Healthy Home Loans?
                    </h2>
                    <p className="text-zinc-600 text-[15px] box-border caret-transparent leading-[27px] max-w-full text-center m-auto md:text-base md:leading-[28.8px] md:max-w-[570px] md:text-start">
                        We are dedicated to making your financial journey smooth and stress-free. With our "Easy Loans, Peaceful Living" philosophy, we handle the complexities of bank financing so you can focus on your dreams.
                    </p>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <p className="text-zinc-700">Doorstep service across Madurai & Southern Districts</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <p className="text-zinc-700">Personalized financial advice for your unique needs</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <p className="text-zinc-700">End-to-end support from application to disbursement</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};
