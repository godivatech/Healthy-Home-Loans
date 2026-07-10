import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageBanner } from "@/components/PageBanner";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/SEO/StructuredData";
import { FadeIn } from "@/components/animations/FadeIn";

export const PrivacyPolicyPage = () => {
    return (
        <div className="text-neutral-800 font-roboto_68d44c overflow-x-hidden">
            <SEO
                title="Privacy Policy"
                description="Read the privacy policy of Healthy Home Loans. Learn how we protect your personal and financial information in Madurai and Tenkasi."
                canonicalUrl="/privacy-policy"
            />
            <StructuredData
                type="WebPage"
                data={{
                    name: "Privacy Policy - Healthy Home Loans",
                    url: "https://www.healthyhomeloans.in/privacy-policy",
                }}
            />
            <Navbar />

            <PageBanner title="Privacy Policy" headingLevel="h1" />

            <div className="py-[100px] bg-white">
                <div className="max-w-[850px] mx-auto px-6">
                    <FadeIn direction="up" className="text-content" delay={0.2}>
                        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                            At <strong>HEALTHY HOME LOANS</strong>, we respect your privacy and are committed to protecting the personal information you provide through our website and consulting services.
                        </p>

                        {/* Effective Date */}
                        <div className="mb-8 p-4 bg-gray-50 rounded-lg inline-block border border-gray-100">
                            <span className="text-sm font-semibold text-zinc-800">Effective Date: 04.07.2026</span>
                        </div>

                        {/* Section 1 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                1. Information We Collect
                            </h2>
                            <p className="text-zinc-600 mb-3 leading-relaxed">We may collect:</p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-600 leading-relaxed">
                                <li>Full Name</li>
                                <li>Mobile Number / Contact Numbers</li>
                                <li>Email Address</li>
                                <li>City/Location / Address Details</li>
                                <li>Loan Requirements (Home, Business, Personal, Mortgage, or Car Loans)</li>
                                <li>Income and employment details (salaried or self-employed status)</li>
                                <li>Property Details (for verification and valuation reports)</li>
                                <li>Financial documents voluntarily submitted by you (bank statements, identity proofs, etc.)</li>
                                <li>Any other information shared through our enquiry forms or consultation sessions.</li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-zinc-600 mb-3 leading-relaxed">Your information is used to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-600 leading-relaxed">
                                <li>Contact you regarding your loan enquiry.</li>
                                <li>Assess your loan eligibility and generate custom property reports.</li>
                                <li>Coordinate with our partner banks and financial institutions on your behalf.</li>
                                <li>Improve our customer support and website performance.</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                3. Information Sharing
                            </h2>
                            <p className="text-zinc-600 mb-4 leading-relaxed">
                                HEALTHY HOME LOANS does not sell or rent your personal information.
                            </p>
                            <p className="text-zinc-600 mb-3 leading-relaxed">
                                Your information may be shared only with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-600 leading-relaxed">
                                <li>Partner Banks, Small Finance Banks, and Housing Finance Companies</li>
                                <li>Non-Banking Financial Companies (NBFCs)</li>
                                <li>Government or regulatory authorities where required by law.</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                4. Data Security
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                We take reasonable technical and administrative measures to protect your personal information against unauthorized access, loss, misuse, or disclosure.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                5. Cookies
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                Our website may use cookies to improve user experience and monitor website performance.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                6. Third-Party Links
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                Our website may contain links to third-party websites. HEALTHY HOME LOANS is not responsible for the privacy practices or content of such external websites.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                7. Your Consent
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                By using this website or sharing your details, you agree to this Privacy Policy.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900 border-b pb-2">
                                8. Changes to this Policy
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                HEALTHY HOME LOANS reserves the right to update this Privacy Policy at any time without prior notice.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div className="mb-10 p-6 md:p-8 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm">
                            <h2 className="text-2xl font-bold font-rubik_0b5097 mb-4 text-neutral-900">
                                9. Contact Us
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
