import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AboutSection } from "@/sections/AboutSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { CallToAction } from "@/sections/CallToAction";

import photo from "@/assets/images/photo.png";

export const AboutPage = () => {
    return (
        <div className="text-neutral-800 font-roboto_68d44c">
            <Navbar />

            {/* Page Banner */}
            <div className="bg-neutral-900 py-[80px] text-center">
                <h1 className="text-white text-4xl font-bold font-rubik_0b5097 mb-2">About Us</h1>
                <p className="text-zinc-400">Home / About Us</p>
            </div>

            <AboutSection />

            {/* MD Profile Section */}
            <div className="py-[100px] bg-white">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-8 md:mb-0">
                            <img
                                src={photo}
                                alt="S. Mabubasha Shah Hussain"
                                className="rounded-lg shadow-lg w-full max-w-[400px] mx-auto"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <h2 className="text-3xl font-bold font-rubik_0b5097 mb-4 text-neutral-900">Meet Our Managing Director</h2>
                            <h3 className="text-xl text-primary font-medium mb-4">S. Mabubasha Shah Hussain</h3>
                            <p className="text-zinc-600 mb-4 leading-relaxed">
                                With over 15 years of hands-on experience in the financial services industry, Mr. Hussain has successfully facilitated loans worth over ₹100 Crores. His deep understanding of the Tamil Nadu financial market and strong relationships with 40+ banking partners have helped over 1000+ clients achieve their financial dreams.
                            </p>
                            <p className="text-zinc-600 leading-relaxed">
                                "My mission is to provide holistically-designed financial solutions that optimize each family's current financial health and long-term wealth, making loans easy and living peaceful."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-[100px] bg-gray-50">
                <div className="max-w-[1140px] mx-auto px-3 text-center">
                    <div className="flex flex-wrap -mx-3 justify-center">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                                <h3 className="text-xl font-bold font-rubik_0b5097 mb-4 text-neutral-900">Our Mission</h3>
                                <p className="text-zinc-600">
                                    To provide holistically-designed financial solutions that optimize each family's current financial health and long-term wealth, making loans easy and living peaceful.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                                <h3 className="text-xl font-bold font-rubik_0b5097 mb-4 text-neutral-900">Our Vision</h3>
                                <p className="text-zinc-600">
                                    To be South India's most trusted and customer-centric loan consultancy, empowering dreams through accessible and transparent financial services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <WhyChooseSection />
            <CallToAction />
            <Footer />
            <Copyright />
            <ScrollToTop />
        </div>
    );
};
