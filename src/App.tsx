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
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LoansPage } from "@/pages/Loans";

const HomePage = () => {
    return (
        <div className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto_68d44c">
            <Navbar />
            <Hero />
            <LogoSlider />
            <AboutSection />
            <WhyChooseSection />
            <FundingSection />
            <CallToAction />
            <ServicesSection />
            <TestimonialsSection />
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
        </Router>
    );
};
