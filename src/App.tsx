import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { LogoSlider } from "@/sections/LogoSlider";
import { AboutSection } from "@/sections/AboutSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { FundingSection } from "@/sections/FundingSection";
import { CallToAction } from "@/sections/CallToAction";
import { ServicesSection } from "@/sections/ServicesSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { EligibilitySection } from "@/sections/EligibilitySection";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LoansPage } from "@/pages/Loans";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/SEO/StructuredData";

const HomePage = () => {
    const financialServiceSchema = {
        name: "Healthy Home Loans",
        image: "https://healthyhomeloans.in/assets/og-image-default.jpg",
        "@id": "https://healthyhomeloans.in",
        url: "https://healthyhomeloans.in",
        telephone: "+919677719848",
        priceRange: "₹₹",
        address: {
            "@type": "PostalAddress",
            streetAddress: "423/6, JK Complex, Veeramudian Barathi Nagar, Alagappan Nagar",
            addressLocality: "Madurai",
            postalCode: "625003",
            addressCountry: "IN",
            addressRegion: "Tamil Nadu",
        },
        description: "Provider of premium Home Loans, Personal Loans, Mortgage Loans, and Financial Advisory Services in Madurai and South India.",
        areaServed: [
            { "@type": "City", name: "Madurai" },
            { "@type": "City", name: "Tenkasi" },
            { "@type": "State", name: "Tamil Nadu" }
        ],
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "18:00",
        },
    };

    return (
        <div className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto_68d44c overflow-x-hidden">
            <SEO
                title="Home Loans in Madurai & Tenkasi"
                description="Healthy Home Loans offers fast, transparent, and hassle-free home financing in Madurai and Tenkasi. Partnered with 160+ banks and NBFCs."
                canonicalUrl="/"
            />
            <StructuredData type="FinancialService" data={financialServiceSchema} />
            <Navbar />
            <Hero />
            <LogoSlider />
            <AboutSection />
            <WhyChooseSection />
            <FundingSection />
            <EligibilitySection />
            <ServicesSection />
            <TestimonialsSection />
            <CallToAction />
            <Footer />
            <Copyright />
            <ScrollToTop />
            <div className="absolute box-border caret-transparent block"></div>
        </div>
    );
};

import { AboutPage } from "@/pages/About";

import { ServicesPage } from "@/pages/Services";

import { ContactPage } from "@/pages/Contact";
import { PartnersPage } from "@/pages/Partners";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/loans" element={<LoansPage />} />
            </Routes>
            <WhatsAppFloat />
        </Router>
    );
};
