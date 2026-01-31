import { FeatureCard } from "@/sections/WhyChooseSection/components/FeatureCard";
import { Clock, FileText, Users, Award } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export const WhyChooseFeatures = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12 pt-3">
                    <FadeIn direction="left" delay={0.1} fullWidth>
                        <FeatureCard
                            icon={<Clock size={40} />}
                            title="7 Days Sanction"
                            description="Experience the fastest loan processing with our streamlined sanction process."
                        />
                    </FadeIn>
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12 pt-3">
                    <FadeIn direction="left" delay={0.2} fullWidth>
                        <FeatureCard
                            icon={<FileText size={40} />}
                            title="1 Hour Reports"
                            description="Get detailed property and eligibility reports generated within just one hour."
                        />
                    </FadeIn>
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12 pt-6">
                    <FadeIn direction="left" delay={0.3} fullWidth>
                        <FeatureCard
                            icon={<Users size={40} />}
                            title="160+ Partners"
                            description="Access a vast network of 160+ banks and NBFCs for the best interest rates."
                        />
                    </FadeIn>
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12 pt-6">
                    <FadeIn direction="left" delay={0.4} fullWidth>
                        <FeatureCard
                            icon={<Award size={40} />}
                            title="15+ Years"
                            description="Trust the expertise of Madurai's leading financial consultancy since 2009."
                        />
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};
