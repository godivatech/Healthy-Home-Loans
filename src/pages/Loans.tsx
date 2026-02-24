import arrow1 from "@/assets/images/first-arrow.png";
import arrow2 from "@/assets/images/second-arrow.png";
import { FadeIn } from "@/components/animations/FadeIn";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { PageBanner } from "@/components/PageBanner";
import { CallToAction } from "@/sections/CallToAction";
import { EligibilitySection } from "@/sections/EligibilitySection";
import { LoanCalculator } from "@/sections/FundingSection/components/LoanCalculator";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/SEO/StructuredData";
import logo from "@/assets/images/logo.png"; // Fix missing logo import

export const LoansPage = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <SEO
                title="Loans & Eligibility"
                description="Check your home loan eligibility, interest rates, and required documents. We simplify the mortgage process for salaried and self-employed individuals."
                canonicalUrl="/loans"
            />
            <StructuredData type="WebPage" data={{ name: "Loans and Eligibility - Healthy Home Loans", url: "https://healthyhomeloans.in/loans" }} />
            <Navbar />

            <PageBanner title="Loans" />
            {/* Loan Intro Section - HIDDEN */}
            {/* <div className="py-[50px] md:py-[100px]">
                <div className="max-w-[1140px] w-full mx-auto px-3">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full md:w-6/12 px-3">
                            <div className="relative text-center md:text-start">
                                <img
                                    alt="image"
                                    src="https://leza-react.envytheme.com/images/loan.png"
                                    className="w-[500px] max-w-full"
                                />
                                <div className="absolute bg-[url('https://leza-react.envytheme.com/images/about/about-shape.png')] bg-no-repeat bg-contain h-[200px] w-[200px] bg-center right-0 md:right-[60px] -bottom-5 md:bottom-0">
                                    <div className="text-center mt-[50px] px-5">
                                        <img
                                            alt="logo"
                                            src={logo}
                                            className="max-w-[130px] w-[150px] mt-auto mb-2 mx-auto scale-[1.8]"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 px-3 mt-[30px] md:mt-0">
                            <h3 className="text-neutral-900 text-3xl md:text-4xl font-medium mb-3">
                                Why choose Healthy Home Loans?
                            </h3>
                            <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                Your journey to home ownership should be smooth and transparent. At Healthy Home Loans, we simplify finance with personalized solutions, quick approvals, and dedicated support every step of the way.
                            </p>
                            <ul className="mt-4 mb-[18px] pl-0">
                                <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-primary before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                    Direct access to MD for complex cases
                                </li>
                                <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-primary before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                    Doorstep service for documents collection
                                </li>
                                <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-primary before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                    Transparent processing with no hidden charges
                                </li>
                                <li className="relative text-zinc-600 font-medium list-none capitalize pl-[18px] before:bg-primary before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                    Expert legal and technical guidance
                                </li>
                            </ul>
                            <h4 className="text-neutral-900 text-lg font-medium">
                                Resources to help you with your Loan
                            </h4>
                            <ul className="mt-4 mb-[25px] pl-0">
                                <li className="relative text-zinc-600 list-none mb-2.5 pl-[30px]">
                                    EMI Calculator
                                </li>
                                <li className="relative text-zinc-600 list-none mb-2.5 pl-[30px]">
                                    Eligibility Check
                                </li>
                                <li className="relative text-zinc-600 list-none pl-[30px]">
                                    Document Checklist
                                </li>
                            </ul>
                            <div>
                                <a
                                    href="/contact"
                                    className="relative text-white text-[15px] md:text-base bg-primary inline-block text-center z-[1] overflow-hidden px-[30px] md:px-[45px] py-3 rounded-[5px] hover:bg-neutral-900"
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Process Section */}
            <div className="relative bg-gray-50 z-[1] pt-[50px] md:pt-[100px] pb-5 md:pb-[70px]">
                <div className="max-w-[1140px] w-full mx-auto px-3 relative">
                    <div className="max-w-[570px] text-center mb-[45px] mx-auto">
                        <span className="text-primary">What’s the process?</span>
                        <h2 className="text-neutral-900 text-[28px] md:text-[40px] font-medium leading-[39.2px] md:leading-[56px] mt-2.5">
                            The Loans have helped us move our business forward
                        </h2>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-[33.3333%] px-3 relative">
                            <FadeIn direction="up" delay={0.1}>
                                <div className="text-center mb-5">
                                    <div className="relative mb-[15px]">
                                        <span className="relative text-neutral-900 text-xl font-medium shadow-[rgba(102,102,102,0.1)_0px_0px_29px_0px] inline-block h-[100px] leading-[100px] w-[100px] z-[1] rounded-[50px]">
                                            Apply
                                        </span>
                                        <strong className="absolute text-primary/10 text-[70px] font-semibold block leading-[0px] top-[50px] inset-x-0">
                                            1
                                        </strong>
                                    </div>
                                    <h3 className="text-neutral-900 text-[22px] font-medium leading-[30.8px]">
                                        Consultation <br /> & Application
                                    </h3>
                                </div>
                            </FadeIn>
                            {/* Arrow 1 */}
                            <FadeIn delay={0.3} className="hidden md:block absolute top-[30px] -right-[80px] w-[160px] z-10">
                                <img src={arrow1} alt="arrow" className="w-full" />
                            </FadeIn>
                        </div>
                        <div className="w-full md:w-[33.3333%] px-3 relative">
                            <FadeIn direction="up" delay={0.3}>
                                <div className="text-center mb-5">
                                    <div className="relative mb-[15px]">
                                        <span className="relative text-neutral-900 text-xl font-medium shadow-[rgba(102,102,102,0.1)_0px_0px_29px_0px] inline-block h-[100px] leading-[100px] w-[100px] z-[1] rounded-[50px]">
                                            Process
                                        </span>
                                        <strong className="absolute text-primary/10 text-[70px] font-semibold block leading-[0px] top-[50px] inset-x-0">
                                            2
                                        </strong>
                                    </div>
                                    <h3 className="text-neutral-900 text-[22px] font-medium leading-[30.8px]">
                                        Verification <br /> & Approval
                                    </h3>
                                </div>
                            </FadeIn>
                            {/* Arrow 2 */}
                            <FadeIn delay={0.5} className="hidden md:block absolute top-[30px] -right-[80px] w-[160px] z-10">
                                <img src={arrow2} alt="arrow" className="w-full" />
                            </FadeIn>
                        </div>
                        <div className="w-full md:w-[33.3333%] px-3">
                            <FadeIn direction="up" delay={0.5}>
                                <div className="text-center mb-5">
                                    <div className="relative mb-[15px]">
                                        <span className="relative text-neutral-900 text-xl font-medium shadow-[rgba(102,102,102,0.1)_0px_0px_29px_0px] inline-block h-[100px] leading-[100px] w-[100px] z-[1] rounded-[50px]">
                                            Support
                                        </span>
                                        <strong className="absolute text-primary/10 text-[70px] font-semibold block leading-[0px] top-[50px] inset-x-0">
                                            3
                                        </strong>
                                    </div>
                                    <h3 className="text-neutral-900 text-[22px] font-medium leading-[30.8px]">
                                        Sanction <br /> & Disbursement
                                    </h3>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            {/* How to Apply Section */}
            <div className="py-[50px] md:py-[100px]">
                <div className="max-w-[1140px] w-full mx-auto px-3">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full md:w-6/12 px-3">
                            <h3 className="text-neutral-900 text-[25px] md:text-4xl font-medium leading-[35px] md:leading-[50.4px]">
                                Our 4-Step Loan Process
                            </h3>

                            {/* Step 1 */}
                            <FadeIn direction="right" delay={0.1} fullWidth>
                                <div className="relative mt-[30px] pl-[65px] before:bg-primary before:h-[140%] before:w-px before:absolute before:left-5 before:top-0 before:z-[-1]">
                                    <span className="absolute text-primary text-2xl bg-gray-50 block h-10 leading-10 text-center w-10 border border-primary rounded-[50px] left-0 top-0">
                                        1
                                    </span>
                                    <h4 className="text-neutral-900 text-xl md:text-[22px] font-medium mb-2.5">
                                        Free Consultation
                                    </h4>
                                    <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                        We analyze your financial profile and requirements to suggest the best loan options.
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Step 2 */}
                            <FadeIn direction="right" delay={0.2} fullWidth>
                                <div className="relative mt-[30px] pl-[65px] before:bg-primary before:h-[140%] before:w-px before:absolute before:left-5 before:top-0 before:z-[-1]">
                                    <span className="absolute text-primary text-2xl bg-gray-50 block h-10 leading-10 text-center w-10 border border-primary rounded-[50px] left-0 top-0">
                                        2
                                    </span>
                                    <h4 className="text-neutral-900 text-xl md:text-[22px] font-medium mb-2.5">
                                        Document Collection
                                    </h4>
                                    <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                        Our team collects necessary documents from your doorstep and prepares your file.
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Step 3 */}
                            <FadeIn direction="right" delay={0.3} fullWidth>
                                <div className="relative mt-[30px] pl-[65px] before:bg-primary before:h-[140%] before:w-px before:absolute before:left-5 before:top-0 before:z-[-1]">
                                    <span className="absolute text-primary text-2xl bg-gray-50 block h-10 leading-10 text-center w-10 border border-primary rounded-[50px] left-0 top-0">
                                        3
                                    </span>
                                    <h4 className="text-neutral-900 text-xl md:text-[22px] font-medium mb-2.5">
                                        Legal & Technical Verification
                                    </h4>
                                    <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                        We handle all verifications with the bank to ensure smooth processing.
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Step 4 */}
                            <FadeIn direction="right" delay={0.4} fullWidth>
                                <div className="relative mt-[30px] pl-[65px]">
                                    <span className="absolute text-primary text-2xl bg-gray-50 block h-10 leading-10 text-center w-10 border border-primary rounded-[50px] left-0 top-0">
                                        4
                                    </span>
                                    <h4 className="text-neutral-900 text-xl md:text-[22px] font-medium mb-2.5">
                                        Sanction & Disbursal
                                    </h4>
                                    <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                        Once approved, the loan amount is disbursed directly to your account.
                                    </p>
                                </div>
                            </FadeIn>

                            <div className="text-center md:text-start mt-[25px]">
                                <a
                                    href="/contact"
                                    className="relative text-white text-[15px] md:text-base bg-primary inline-block text-center z-[1] overflow-hidden px-[30px] md:px-[45px] py-3 rounded-[5px] hover:bg-neutral-900"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 px-3">
                            <FadeIn direction="left" delay={0.3} fullWidth>
                                <div className="text-center md:text-start">
                                    <img
                                        alt="image"
                                        src="https://leza-react.envytheme.com/images/loan2.png"
                                        className="w-[600px] max-w-full"
                                    />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            <EligibilitySection />

            {/* Enquiry Section */}
            <div className="py-[50px] md:py-[100px]">
                <div className="max-w-[1140px] w-full mx-auto px-3">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full md:w-6/12 px-3">
                            <FadeIn direction="up" delay={0.2} fullWidth>
                                <div className="mb-[30px]">
                                    <h3 className="text-neutral-900 text-3xl md:text-4xl font-medium mb-3">
                                        Loan Enquiry
                                    </h3>
                                    <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                        Please complete the short form below with your details and one
                                        of our advisors will be touch shortly
                                    </p>
                                </div>
                                <form>
                                    <div className="flex flex-wrap -mx-3">
                                        <div className="w-full md:w-6/12 px-3">
                                            <div className="mb-4">
                                                <label className="text-zinc-600 inline-block mb-2">Your Name*</label>
                                                <input
                                                    type="text"
                                                    className="text-stone-300 bg-transparent block h-[50px] w-full border border-stone-300 px-3 py-1.5"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 px-3">
                                            <div className="mb-4">
                                                <label className="text-zinc-600 inline-block mb-2">Phone Number*</label>
                                                <input
                                                    type="text"
                                                    className="text-stone-300 bg-transparent block h-[50px] w-full border border-stone-300 px-3 py-1.5"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 px-3">
                                            <div className="mb-4">
                                                <label className="text-zinc-600 inline-block mb-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="text-stone-300 bg-transparent block h-[50px] w-full border border-stone-300 px-3 py-1.5"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 px-3">
                                            <div className="mb-4">
                                                <label className="text-zinc-600 inline-block mb-2">Postcode*</label>
                                                <input
                                                    type="text"
                                                    className="text-stone-300 bg-transparent block h-[50px] w-full border border-stone-300 px-3 py-1.5"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 px-3">
                                            <div className="mb-4">
                                                <label className="text-zinc-600 inline-block mb-2">Date of Birth</label>
                                                <input
                                                    type="date"
                                                    className="text-stone-300 bg-transparent block h-[50px] w-full border border-stone-300 px-3 py-1.5"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 px-3">
                                            <div className="mb-4">
                                                <label className="text-zinc-600 inline-block mb-2">Address</label>
                                                <input
                                                    type="text"
                                                    className="text-stone-300 bg-transparent block h-[50px] w-full border border-stone-300 px-3 py-1.5"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-6/12 px-3">
                                            <div className="mb-4">
                                                <label className="text-zinc-600 inline-block mb-2">City</label>
                                                <input
                                                    type="text"
                                                    className="text-stone-300 bg-transparent block h-[50px] w-full border border-stone-300 px-3 py-1.5"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-5">
                                        <button
                                            type="submit"
                                            className="relative text-white text-[15px] md:text-base bg-primary text-center z-[1] overflow-hidden px-[30px] md:px-[45px] py-3 rounded-[5px] hover:bg-neutral-900"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </FadeIn>
                        </div>
                        <LoanCalculator />
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <CallToAction
                title="We are here to help you."
                subtitle="Call to discuss your financial needs."
                phone="+919677719848"
                phoneDisplay="+91 96777 19848"
            />

            {/* Footer */}
            <Footer />

            {/* Copyright */}
            <Copyright />

            {/* Scroll to Top */}
            <div className="fixed text-white text-[22px] bg-neutral-900 shadow-[rgba(0,0,0,0.1)_0px_3px_10px_0px] hidden h-[45px] leading-[33px] text-center w-[45px] z-[999] rounded-[50%] right-5 bottom-5 hover:bg-primary">
                <i className="absolute text-3xl block leading-[30px] mx-auto top-2/4 inset-x-0"></i>
            </div>
        </div>
    );
};
