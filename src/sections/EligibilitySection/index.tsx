import { FadeIn } from "@/components/animations/FadeIn";

export const EligibilitySection = () => {
    return (
        <div className="bg-gray-50 py-[50px] md:py-[100px]">
            <div className="max-w-[1140px] w-full mx-auto px-3">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full md:w-[58.3333%] px-3">
                        <FadeIn direction="right" delay={0.2} fullWidth>
                            <div className="text-center md:text-start">
                                <img
                                    alt="Eligibility illustration"
                                    src="https://leza-react.envytheme.com/images/check.png"
                                    className="w-[875px] max-w-full"
                                />
                            </div>
                        </FadeIn>
                    </div>
                    <div className="w-full md:w-[41.6667%] px-3">
                        <FadeIn direction="left" delay={0.4} fullWidth>
                            <div className="my-[30px] md:mt-0">
                                <h3 className="text-neutral-900 text-[26px] md:text-4xl font-medium mb-3">
                                    Eligibility Criteria
                                </h3>
                                <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                    We assist both salaried and self-employed individuals. Our team helps optimize your profile to meet bank usage for maximum eligibility.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-neutral-900 text-[26px] md:text-4xl font-medium mb-3">
                                    Documents Required
                                </h3>
                                <ul className="mt-3 pl-0">
                                    <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-primary before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                        Identity & Address Proof (Aadhar, PAN)
                                    </li>
                                    <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-primary before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                        Income Proof (Salary Slips / ITR / GST)
                                    </li>
                                    <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-primary before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                        Bank Statements (Past 6 Months to 1 Year)
                                    </li>
                                    <li className="relative text-zinc-600 font-medium list-none capitalize pl-[18px] before:bg-primary before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                        Property Documents
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
};
