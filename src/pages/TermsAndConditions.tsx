import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageBanner } from "@/components/PageBanner";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/SEO/StructuredData";
import { FadeIn } from "@/components/animations/FadeIn";

export const TermsAndConditionsPage = () => {
    return (
        <div className="text-neutral-800 font-roboto_68d44c overflow-x-hidden">
            <SEO
                title="Terms & Conditions"
                description="Read the terms and conditions of Healthy Home Loans. Review our consultancy guidelines, service details, and regulations in Madurai and Tenkasi."
                canonicalUrl="/terms-and-conditions"
            />
            <StructuredData
                type="WebPage"
                data={{
                    name: "Terms & Conditions - Healthy Home Loans",
                    url: "https://www.healthyhomeloans.in/terms-and-conditions",
                }}
            />
            <Navbar />

            <PageBanner title="Terms & Conditions" headingLevel="h1" />

            <div className="py-[100px] bg-white">
                <div className="max-w-[850px] mx-auto px-6">
                    <FadeIn direction="up" className="text-content" delay={0.2}>
                        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                            Welcome to <strong>HEALTHY HOME LOANS</strong>. By accessing or using this website, you agree to comply with these Terms & Conditions.
                        </p>

                        {/* Effective Date */}
                        <div className="mb-8 p-4 bg-gray-50 rounded-lg inline-block border border-gray-100">
                            <span className="text-sm font-semibold text-zinc-800">Effective Date: 04.07.2026</span>
                        </div>

                        {/* Disclaimer Callout */}
                        <div className="p-6 bg-red-50/50 rounded-2xl border-l-4 border-primary mb-10 shadow-sm">
                            <p className="text-zinc-700 italic leading-relaxed text-[15px]">
                                <strong>Disclaimer:</strong> HEALTHY HOME LOANS is a loan consultancy and financial advisory service. We are not a bank, NBFC, or housing finance company. Loan approval, interest rates, and disbursement are subject to the policies and discretion of the respective banks and financial institutions.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                1. Nature of Service
                            </h2>
                            <p className="text-zinc-600 mb-3 leading-relaxed">
                                HEALTHY HOME LOANS is a loan consultancy and financial advisory service.
                            </p>
                            <p className="text-zinc-600 mb-3 leading-relaxed">
                                We assist customers in identifying and applying for suitable loan products offered by banks and financial institutions.
                            </p>
                            <p className="text-zinc-600 leading-relaxed font-medium">
                                HEALTHY HOME LOANS is not a Bank, Non-Banking Financial Company (NBFC), or Housing Finance Company.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                2. No Guarantee of Loan Approval
                            </h2>
                            <p className="text-zinc-600 mb-3 leading-relaxed">
                                Submitting an enquiry through this website does not guarantee loan approval.
                            </p>
                            <p className="text-zinc-600 mb-3 leading-relaxed">
                                Loan approval is solely at the discretion of the respective bank or financial institution and depends on:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-600 leading-relaxed">
                                <li>Applicant eligibility</li>
                                <li>Credit assessment</li>
                                <li>Documentation</li>
                                <li>Property verification</li>
                                <li>Applicable policies and regulations</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                3. Customer Responsibility
                            </h2>
                            <p className="text-zinc-600 mb-3 leading-relaxed">
                                Applicants are responsible for providing accurate, complete and truthful information.
                            </p>
                            <p className="text-zinc-600 leading-relaxed">
                                Providing false or misleading information may result in rejection of the application by the lending bank or NBFC.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                4. Fees
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                Any consultancy or service charges, if applicable, will be communicated before processing. No hidden charges will be collected.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                5. Third-Party Decisions
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                HEALTHY HOME LOANS cannot influence or guarantee the decisions of banks or financial institutions regarding loan approval or disbursement.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                6. Website Content
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                The information provided on this website is for general guidance only. Interest rates, schemes and eligibility criteria are subject to change without prior notice.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                7. Intellectual Property
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                All content, logos, graphics, text and other materials on this website are the property of HEALTHY HOME LOANS unless otherwise stated. Unauthorized use, copying or reproduction is prohibited.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                8. Limitation of Liability
                            </h2>
                            <p className="text-zinc-600 mb-3 leading-relaxed">
                                HEALTHY HOME LOANS shall not be liable for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-600 leading-relaxed">
                                <li>Loan rejection</li>
                                <li>Processing delays</li>
                                <li>Changes in bank policies</li>
                                <li>Technical interruptions</li>
                                <li>Decisions made by banks or financial institutions</li>
                            </ul>
                        </div>

                        {/* Section 9 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                9. Governing Law
                            </h2>
                            <p className="text-zinc-600 mb-3 leading-relaxed">
                                These Terms & Conditions shall be governed by the laws of India.
                            </p>
                            <p className="text-zinc-600 leading-relaxed">
                                Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Madurai, Tamil Nadu.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div className="mb-10 p-6 md:p-8 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900">
                                10. Contact Us
                            </h2>
                            <p className="text-neutral-900 font-semibold mb-2 text-lg">HEALTHY HOME LOANS</p>
                            
                            <div className="space-y-4 mt-4 text-zinc-600">
                                <div>
                                    <p className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-1">Head Office:</p>
                                    <p className="leading-relaxed">423/6, JK Complex, Veeramudian Barathi Nagar, Alagappan Nagar (Near Muthupatti Railway Gate), Madurai – 625003</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-1">Branch Office:</p>
                                    <p className="leading-relaxed">36, Byraha Complex, Thavalapuram 2nd Street, Tenkasi – 627811</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-200">
                                    <div>
                                        <p className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-1">Email:</p>
                                        <a href="mailto:healthyhomeloanss@gmail.com" className="text-primary hover:underline">
                                            healthyhomeloanss@gmail.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-neutral-800 text-sm uppercase tracking-wider mb-1">Phone:</p>
                                        <div className="flex flex-col">
                                            <a href="tel:+919677719848" className="text-primary hover:underline">+91 96777 19848</a>
                                            <a href="tel:+917845837740" className="text-primary hover:underline">+91 78458 37740</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <Footer />
            <Copyright />
            <ScrollToTop />
        </div>
    );
};
