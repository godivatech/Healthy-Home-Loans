interface CallToActionProps {
    title?: string;
    subtitle?: string;
    phone?: string;
    phoneDisplay?: string;
}

import { FadeIn } from "@/components/animations/FadeIn";

export const CallToAction = ({
    title = "Easy Loans. Peaceful Living.",
    subtitle = "Call to discuss your loan requirements",
    phone = "+919787977711",
    phoneDisplay = "+91 97879 77711"
}: CallToActionProps) => {
    return (
        <div className="box-border caret-transparent pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-primary overflow-hidden text-center px-6 py-10 rounded-2xl md:text-start md:px-16 md:py-16 shadow-2xl shadow-primary/20">

                    {/* Premium Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -z-0"></div>

                    {/* Decorative Particles (Matching ServiceTabs) */}
                    <div className="absolute top-6 right-1/4 w-4 h-4 rounded-full border border-white/20"></div>
                    <div className="absolute bottom-10 left-1/3 w-6 h-6 opacity-20">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <path d="M12 4v16m-8-8h16" />
                        </svg>
                    </div>
                    <div className="absolute top-1/2 right-12 w-8 h-8 opacity-10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M12 4v16m-8-8h16" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center -mx-4">
                        <div className="w-full lg:w-7/12 px-4 mb-8 lg:mb-0">
                            <FadeIn direction="right" delay={0.2} fullWidth>
                                <h3 className="text-white text-2xl md:text-4xl font-bold leading-tight font-rubik_0b5097">
                                    {title} <br className="hidden md:block" />
                                    <span className="text-white/80 font-medium text-xl md:text-2xl mt-4 block">
                                        {subtitle}
                                    </span>
                                </h3>
                            </FadeIn>
                        </div>

                        <div className="w-full lg:w-5/12 px-4">
                            <FadeIn direction="left" delay={0.2} fullWidth>
                                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-end gap-6">
                                    <div className="shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-xl animate-bounce-subtle">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.143-5.124-3.443-6.267-6.267l1.293-.97.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <a
                                            href={`tel:${phone}`}
                                            className="text-white text-2xl md:text-4xl font-bold hover:text-white/90 transition-colors block"
                                        >
                                            {phoneDisplay}
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
