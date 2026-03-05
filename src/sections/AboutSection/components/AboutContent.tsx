import { FadeIn } from "@/components/animations/FadeIn";
import { ShieldCheck, Zap, Users } from "lucide-react";

export const AboutContent = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
            <FadeIn direction="left" delay={0.4} fullWidth>
                <div className="box-border caret-transparent mt-[80px] md:mt-0">
                    <span className="text-primary box-border caret-transparent">
                        About Healthy Home Loans
                    </span>
                    <h3 className="text-neutral-900 text-[25px] font-medium box-border caret-transparent leading-[30px] mt-2.5 mb-3.5 font-rubik_0b5097 md:text-4xl md:leading-[43.2px] md:mb-4">
                        Providing holistically-designed financial solutions for over 15 years.
                    </h3>
                    <p className="text-zinc-600 text-base box-border caret-transparent leading-[27px] mb-[15px] md:text-lg md:leading-[28.8px]">
                        We are dedicated to optimizing each family's current financial health and long-term wealth. Our mission is to make loans easy and living peaceful by providing accessible and transparent financial services.
                    </p>
                    <strong className="text-zinc-600 text-lg box-border caret-transparent leading-[27px]">
                        Our Core Values
                    </strong>
                    <ul className="box-border caret-transparent mt-5 mb-[25px] pl-0">
                        <li className="relative text-zinc-600 box-border caret-transparent list-none mb-3 pl-[35px] flex items-center">
                            <ShieldCheck className="absolute left-0 text-primary w-6 h-6" strokeWidth={2} />
                            Trust & Transparency
                        </li>
                        <li className="relative text-zinc-600 box-border caret-transparent list-none mb-3 pl-[35px] flex items-center">
                            <Zap className="absolute left-0 text-primary w-6 h-6" strokeWidth={2} />
                            Speed & Efficiency
                        </li>
                        <li className="relative text-zinc-600 box-border caret-transparent list-none pl-[35px] flex items-center">
                            <Users className="absolute left-0 text-primary w-6 h-6" strokeWidth={2} />
                            Customer-First Approach
                        </li>
                    </ul>
                    <div className="box-border caret-transparent">
                        <a
                            href="/about"
                            className="relative text-white text-base bg-primary box-border caret-transparent inline-block leading-[22.5px] text-center z-[1] overflow-hidden px-[30px] py-3 rounded-[5px] md:text-lg md:leading-6 md:px-[45px] hover:bg-neutral-900 transition-colors"
                        >
                            Learn More{" "}
                            <span className="absolute text-primary text-base bg-neutral-900 box-border caret-transparent block h-0 leading-[22.5px] w-0 z-[-1] rounded-[5px] md:text-lg md:leading-6"></span>
                        </a>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};
