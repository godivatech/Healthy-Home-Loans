import { FeatureCard } from "@/sections/WhyChooseSection/components/FeatureCard";
import { Clock, FileText, Users, Award } from "lucide-react";

export const WhyChooseFeatures = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12 pt-3">
                    <FeatureCard
                        icon={<Clock size={40} />}
                        title="7 Days Sanction"
                        description="Experience the fastest loan processing with our streamlined sanction process."
                    />
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12 pt-3">
                    <FeatureCard
                        icon={<FileText size={40} />}
                        title="1 Hour Reports"
                        description="Get detailed property and eligibility reports generated within just one hour."
                    />
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12 pt-6">
                    <FeatureCard
                        icon={<Users size={40} />}
                        title="40+ Partners"
                        description="Access a vast network of 40+ banks and NBFCs for the best interest rates."
                    />
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12 pt-6">
                    <FeatureCard
                        icon={<Award size={40} />}
                        title="15+ Years"
                        description="Trust the expertise of Madurai's leading financial consultancy since 2009."
                    />
                </div>
            </div>
        </div>
    );
};
