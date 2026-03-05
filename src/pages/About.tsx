import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { CallToAction } from "@/sections/CallToAction";
import { PageBanner } from "@/components/PageBanner";

import photo from "@/assets/images/photo.png";
import { FadeIn } from "@/components/animations/FadeIn";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/SEO/StructuredData";

export const AboutPage = () => {
    return (
        <div className="text-neutral-800 font-roboto_68d44c overflow-x-hidden">
            <SEO
                title="About Us"
                description="Learn about Healthy Home Loans and our Managing Director, S. Mabubasha Shah Hussain. We have helped over 1000+ clients achieve their financial dreams in Tamil Nadu."
                canonicalUrl="/about"
            />
            <StructuredData type="WebPage" data={{ name: "About Healthy Home Loans", url: "https://healthyhomeloans.in/about" }} />
            <Navbar />

            <PageBanner title="About Us" headingLevel="h1" />

            {/* MD Profile Section - Premium Card */}
            <div className="py-[100px] bg-white">
                <div className="max-w-[1050px] mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row">
                        {/* Image Side */}
                        <FadeIn direction="right" className="w-full md:w-5/12 relative min-h-[400px]" delay={0.2}>
                            <img
                                src={photo}
                                alt="S. Mabubasha Shah Hussain"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                        </FadeIn>

                        {/* Content Side */}
                        <FadeIn direction="left" className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center" delay={0.4}>
                            <h2 className="text-3xl md:text-[32px] font-bold font-rubik_0b5097 mb-2 text-neutral-900">
                                Meet Our Managing Director
                            </h2>
                            <h3 className="text-xl text-primary font-medium mb-6">
                                S. Mabubasha Shah Hussain
                            </h3>

                            <p className="text-zinc-600 mb-6 leading-[1.8] text-base md:text-lg">
                                With over 15 years of hands-on experience in the financial services industry, Mr. Hussain has successfully facilitated loans worth over <span className="font-semibold text-neutral-800">₹100 Crores</span>. His deep understanding of the Tamil Nadu financial market and strong relationships with 160+ banking partners have helped over <span className="font-semibold text-neutral-800">1000+ clients</span> achieve their financial dreams.
                            </p>

                            <div className="relative">
                                <p className="text-zinc-600 leading-[1.8] italic text-base md:text-lg">
                                    "My mission is to provide holistically-designed financial solutions that optimize each family's current financial health and long-term wealth, making loans easy and living peaceful."
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>



            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Our Mission - Navy Background */}
                <FadeIn direction="up" className="bg-neutral-900 py-20 px-8 md:px-16 flex items-center justify-center min-h-[500px]" delay={0.2}>
                    <div className="max-w-[500px] text-center">
                        <div className="mb-8">
                            <svg className="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold font-rubik_0b5097 mb-6 text-white">Our Mission</h2>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            To provide holistically-designed financial solutions that optimize each family's current financial health and long-term wealth, making loans easy and living peaceful.
                        </p>
                    </div>
                </FadeIn>

                {/* Our Vision - Cyan Background */}
                <FadeIn direction="up" className="bg-primary py-20 px-8 md:px-16 flex items-center justify-center min-h-[500px]" delay={0.4}>
                    <div className="max-w-[500px] text-center">
                        <div className="mb-8">
                            <svg className="w-16 h-16 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold font-rubik_0b5097 mb-6 text-white">Our Vision</h2>
                        <p className="text-white text-lg leading-relaxed">
                            To be South India's most trusted and customer-centric loan consultancy, empowering dreams through accessible and transparent financial services.
                        </p>
                    </div>
                </FadeIn>
            </div>

            <WhyChooseSection />
            <CallToAction />
            <Footer />
            <Copyright />
            <ScrollToTop />
        </div>
    );
};
