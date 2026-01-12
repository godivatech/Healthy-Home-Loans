
import logo from "@/assets/images/healthy.png";
import arrow1 from "@/assets/images/First arrow.png";
import arrow2 from "@/assets/images/second arrow.png";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";

export const LoansPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Page Header */}
            <div className="relative bg-fixed bg-[url('https://leza-react.envytheme.com/images/page-title/bg-8.jpg')] bg-no-repeat bg-cover h-[265px] md:h-[400px] z-[1] bg-center before:bg-white before:block before:h-full before:w-full before:opacity-[0.77] before:absolute before:left-0 before:top-0 before:z-[-1]">
                <div className="table h-full w-full">
                    <div className="table-cell align-middle">
                        <div className="max-w-[1140px] w-full mx-auto px-3">
                            <div className="text-center -mt-2.5">
                                <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold">Loans</h2>
                                <ul className="mt-3 pl-0">
                                    <li className="relative text-zinc-600 text-[17px] font-medium inline-block mr-[30px] before:bg-zinc-600 before:block before:h-[18px] before:w-px before:absolute before:-right-3.5 before:top-[5px] before:rotate-[20deg]">
                                        <a href="/" className="text-neutral-900 inline-block hover:text-red-500">
                                            Home
                                        </a>
                                    </li>
                                    <li className="relative text-red-500 text-[17px] font-medium inline-block">
                                        Loans
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Loan Intro Section */}
            <div className="py-[50px] md:py-[100px]">
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
                                <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-red-600 before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                    Direct access to MD for complex cases
                                </li>
                                <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-red-600 before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                    Doorstep service for documents collection
                                </li>
                                <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-red-600 before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                    Transparent processing with no hidden charges
                                </li>
                                <li className="relative text-zinc-600 font-medium list-none capitalize pl-[18px] before:bg-red-600 before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
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
                                    className="relative text-white text-[15px] md:text-base bg-red-500 inline-block text-center z-[1] overflow-hidden px-[30px] md:px-[45px] py-3 rounded-[5px] hover:bg-neutral-900"
                                >
                                    Apply now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="relative bg-gray-50 z-[1] pt-[50px] md:pt-[100px] pb-5 md:pb-[70px]">
                <div className="max-w-[1140px] w-full mx-auto px-3 relative">
                    <div className="max-w-[570px] text-center mb-[45px] mx-auto">
                        <span className="text-red-500">What’s the process?</span>
                        <h2 className="text-neutral-900 text-[28px] md:text-[40px] font-medium leading-[39.2px] md:leading-[56px] mt-2.5">
                            The Loans have helped us move our business forward
                        </h2>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-[33.3333%] px-3 relative">
                            <div className="text-center mb-5">
                                <div className="relative mb-[15px]">
                                    <span className="relative text-neutral-900 text-xl font-medium shadow-[rgba(102,102,102,0.1)_0px_0px_29px_0px] inline-block h-[100px] leading-[100px] w-[100px] z-[1] rounded-[50px]">
                                        Apply
                                    </span>
                                    <strong className="absolute text-rose-200 text-[70px] font-semibold block leading-[0px] top-[50px] inset-x-0">
                                        1
                                    </strong>
                                </div>
                                <h3 className="text-neutral-900 text-[22px] font-medium leading-[30.8px]">
                                    Consultation <br /> & Application
                                </h3>
                            </div>
                            {/* Arrow 1 */}
                            <div className="hidden md:block absolute top-[30px] -right-[80px] w-[160px] z-10">
                                <img src={arrow1} alt="arrow" className="w-full" />
                            </div>
                        </div>
                        <div className="w-full md:w-[33.3333%] px-3 relative">
                            <div className="text-center mb-5">
                                <div className="relative mb-[15px]">
                                    <span className="relative text-neutral-900 text-xl font-medium shadow-[rgba(102,102,102,0.1)_0px_0px_29px_0px] inline-block h-[100px] leading-[100px] w-[100px] z-[1] rounded-[50px]">
                                        Process
                                    </span>
                                    <strong className="absolute text-rose-200 text-[70px] font-semibold block leading-[0px] top-[50px] inset-x-0">
                                        2
                                    </strong>
                                </div>
                                <h3 className="text-neutral-900 text-[22px] font-medium leading-[30.8px]">
                                    Verification <br /> & Approval
                                </h3>
                            </div>
                            {/* Arrow 2 */}
                            <div className="hidden md:block absolute top-[30px] -right-[80px] w-[160px] z-10">
                                <img src={arrow2} alt="arrow" className="w-full" />
                            </div>
                        </div>
                        <div className="w-full md:w-[33.3333%] px-3">
                            <div className="text-center mb-5">
                                <div className="relative mb-[15px]">
                                    <span className="relative text-neutral-900 text-xl font-medium shadow-[rgba(102,102,102,0.1)_0px_0px_29px_0px] inline-block h-[100px] leading-[100px] w-[100px] z-[1] rounded-[50px]">
                                        Support
                                    </span>
                                    <strong className="absolute text-rose-200 text-[70px] font-semibold block leading-[0px] top-[50px] inset-x-0">
                                        3
                                    </strong>
                                </div>
                                <h3 className="text-neutral-900 text-[22px] font-medium leading-[30.8px]">
                                    Sanction <br /> & Disbursement
                                </h3>
                            </div>
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
                            <div className="relative mt-[30px] pl-[65px] before:bg-red-500 before:h-[140%] before:w-px before:absolute before:left-5 before:top-0 before:z-[-1]">
                                <span className="absolute text-red-500 text-2xl bg-gray-50 block h-10 leading-10 text-center w-10 border border-red-500 rounded-[50px] left-0 top-0">
                                    1
                                </span>
                                <h4 className="text-neutral-900 text-xl md:text-[22px] font-medium mb-2.5">
                                    Free Consultation
                                </h4>
                                <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                    We analyze your financial profile and requirements to suggest the best loan options.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative mt-[30px] pl-[65px] before:bg-red-500 before:h-[140%] before:w-px before:absolute before:left-5 before:top-0 before:z-[-1]">
                                <span className="absolute text-red-500 text-2xl bg-gray-50 block h-10 leading-10 text-center w-10 border border-red-500 rounded-[50px] left-0 top-0">
                                    2
                                </span>
                                <h4 className="text-neutral-900 text-xl md:text-[22px] font-medium mb-2.5">
                                    Document Collection
                                </h4>
                                <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                    Our team collects necessary documents from your doorstep and prepares your file.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative mt-[30px] pl-[65px] before:bg-red-500 before:h-[140%] before:w-px before:absolute before:left-5 before:top-0 before:z-[-1]">
                                <span className="absolute text-red-500 text-2xl bg-gray-50 block h-10 leading-10 text-center w-10 border border-red-500 rounded-[50px] left-0 top-0">
                                    3
                                </span>
                                <h4 className="text-neutral-900 text-xl md:text-[22px] font-medium mb-2.5">
                                    Legal & Technical Verification
                                </h4>
                                <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                    We handle all verifications with the bank to ensure smooth processing.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="relative mt-[30px] pl-[65px]">
                                <span className="absolute text-red-500 text-2xl bg-gray-50 block h-10 leading-10 text-center w-10 border border-red-500 rounded-[50px] left-0 top-0">
                                    4
                                </span>
                                <h4 className="text-neutral-900 text-xl md:text-[22px] font-medium mb-2.5">
                                    Sanction & Disbursal
                                </h4>
                                <p className="text-zinc-600 text-[15px] md:text-base leading-[27px] md:leading-[28.8px]">
                                    Once approved, the loan amount is disbursed directly to your account.
                                </p>
                            </div>

                            <div className="text-center md:text-start mt-[25px]">
                                <a
                                    href="/contact"
                                    className="relative text-white text-[15px] md:text-base bg-red-500 inline-block text-center z-[1] overflow-hidden px-[30px] md:px-[45px] py-3 rounded-[5px] hover:bg-neutral-900"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 px-3">
                            <div className="text-center md:text-start">
                                <img
                                    alt="image"
                                    src="https://leza-react.envytheme.com/images/loan2.png"
                                    className="w-[600px] max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Eligibility Section */}
            <div className="bg-gray-50 py-[50px] md:py-[100px]">
                <div className="max-w-[1140px] w-full mx-auto px-3">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full md:w-[58.3333%] px-3">
                            <div className="text-center md:text-start">
                                <img
                                    alt="image"
                                    src="https://leza-react.envytheme.com/images/check.png"
                                    className="w-[875px] max-w-full"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-[41.6667%] px-3">
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
                                    <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-red-600 before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                        Identity & Address Proof (Aadhar, PAN)
                                    </li>
                                    <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-red-600 before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                        Income Proof (Salary Slips / ITR)
                                    </li>
                                    <li className="relative text-zinc-600 font-medium list-none capitalize mb-3 pl-[18px] before:bg-red-600 before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                        Bank Statements (Last 6 months)
                                    </li>
                                    <li className="relative text-zinc-600 font-medium list-none capitalize pl-[18px] before:bg-red-600 before:block before:h-2 before:w-2 before:rounded-[30px] before:absolute before:left-0 before:top-[7px]">
                                        Property Documents
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inquiry Section */}
            <div className="py-[50px] md:py-[100px]">
                <div className="max-w-[1140px] w-full mx-auto px-3">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full md:w-6/12 px-3">
                            <div className="mb-[30px]">
                                <h3 className="text-neutral-900 text-3xl md:text-4xl font-medium mb-3">
                                    Loan Inquiry
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
                                        className="relative text-white text-[15px] md:text-base bg-red-500 text-center z-[1] overflow-hidden px-[30px] md:px-[45px] py-3 rounded-[5px] hover:bg-neutral-900"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-6/12 px-3">
                            <div className="bg-red-500 px-5 md:px-[45px] py-[30px] md:py-[50px]">
                                <div className="text-center mb-[30px] md:mb-[35px]">
                                    <span className="text-white">Calculate your rate</span>
                                    <h3 className="text-white text-xl md:text-4xl font-medium mt-2.5">
                                        How much do you need?
                                    </h3>
                                </div>
                                <form>
                                    <div className="mb-4">
                                        <label className="text-white inline-block capitalize mb-2">Loan Amount</label>
                                        <input
                                            placeholder="₹ 1,00,000"
                                            type="text"
                                            className="text-zinc-600 block h-[50px] w-full px-3 py-1.5"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-white inline-block capitalize mb-2">Tenure (Months/Years)</label>
                                        <select className="text-zinc-600 block h-[50px] w-full pl-3 pr-9 py-1.5">
                                            <option value="5">1 month</option>
                                            <option value="1">2 month</option>
                                            <option value="2">3 month</option>
                                            <option value="0">4 month</option>
                                            <option value="3">6 month</option>
                                            <option value="3">1 Year</option>
                                            <option value="0">2 Years</option>
                                            <option value="3">3 Years</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-white inline-block capitalize mb-2">Interest Rate (%)</label>
                                        <input
                                            placeholder="8.5%"
                                            type="text"
                                            className="text-zinc-600 block h-[50px] w-full px-3 py-1.5"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-white inline-block capitalize mb-2">Loan Term</label>
                                        <input
                                            placeholder="6 months"
                                            type="text"
                                            className="text-zinc-600 block h-[50px] w-full px-3 py-1.5"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-white inline-block capitalize mb-2">The total you will pay</label>
                                        <input
                                            placeholder="₹ 1,12,000"
                                            type="text"
                                            className="text-zinc-600 block h-[50px] w-full px-3 py-1.5"
                                        />
                                    </div>
                                    <div className="mt-[25px]">
                                        <button
                                            type="submit"
                                            className="relative text-white text-[15px] md:text-base font-medium bg-red-800 w-full text-center z-[1] overflow-hidden px-[30px] py-[15px] rounded-[5px] hover:bg-neutral-900"
                                        >
                                            Apply for this loan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="relative before:bg-neutral-900 before:block before:h-[100px] before:w-full before:absolute before:left-0 before:bottom-0 before:z-[-1]">
                <div className="max-w-[1140px] w-full mx-auto px-3">
                    <div className="bg-red-500 text-center md:text-start px-5 md:px-[50px] py-[25px] md:py-[65px] rounded-[5px]">
                        <div className="flex flex-wrap items-center text-center md:text-start -mx-3">
                            <div className="w-full md:w-[58.3333%] px-3">
                                <h3 className="text-white text-3xl md:text-4xl font-medium">
                                    We are here to help you. Call to discuss your financial needs.
                                </h3>
                            </div>
                            <div className="w-full md:w-[41.6667%] px-3">
                                <div className="relative text-center md:text-right mt-[30px] md:mt-0 pl-0 md:pl-[85px]">
                                    <h3 className="text-white text-[25px] md:text-4xl font-medium text-center md:text-right mt-2.5 md:mt-0">
                                        <a href="tel:+919677719848" className="text-white">
                                            +91 96777 19848
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

            {/* Copyright */}
            <Copyright />

            {/* Scroll to Top */}
            <div className="fixed text-white text-[22px] bg-neutral-900 shadow-[rgba(0,0,0,0.1)_0px_3px_10px_0px] hidden h-[45px] leading-[33px] text-center w-[45px] z-[999] rounded-[50%] right-5 bottom-5 hover:bg-red-500">
                <i className="absolute text-3xl block leading-[30px] mx-auto top-2/4 inset-x-0"></i>
            </div>
        </div>
    );
};
