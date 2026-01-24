import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Home,
    User,
    Building2,
    Car,
    Map as MapIcon,
    CreditCard,
    Briefcase,
    PiggyBank
} from "lucide-react";

export const ServiceTabs = () => {
    const [page, setPage] = useState(0);

    const services = [
        {
            icon: <Home size={32} />,
            title: "Housing Loan",
            description: "Purchase your dream home with our easy housing loan options.",
            link: "/services"
        },
        {
            icon: <User size={32} />,
            title: "Personal Loan",
            description: "Quick personal loans for all your immediate financial needs.",
            link: "/services"
        },
        {
            icon: <Building2 size={32} />,
            title: "Mortgage Loan",
            description: "Unlock the value of your property with our loan against property.",
            link: "/services"
        },
        {
            icon: <Car size={32} />,
            title: "Car Loan",
            description: "Drive your dream car with our competitive auto loan options.",
            link: "/services"
        },
        {
            icon: <MapIcon size={32} />,
            title: "Land Purchase",
            description: "Invest in your future with our land purchase financing solutions.",
            link: "/services"
        },
        {
            icon: <CreditCard size={32} />,
            title: "Credit Card",
            description: "Enjoy flexible spending with our range of credit card options.",
            link: "/services"
        },
        {
            icon: <Briefcase size={32} />,
            title: "Business Loan",
            description: "Fuel your business growth with our tailored business finance solutions.",
            link: "/services"
        },
        {
            icon: <PiggyBank size={32} />,
            title: "Fixed Deposit",
            description: "Grow your savings with secure and high-return fixed deposit schemes.",
            link: "/services"
        }
    ];

    const currentServices = services.slice(page * 4, (page + 1) * 4);

    return (
        <div className="box-border caret-transparent">
            <div className="flex flex-wrap -mx-4 items-center">
                {/* Left Column: Header & Image */}
                <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
                    <div className="h-full flex flex-col">
                        <div className="mb-8">
                            <span className="text-white/80 font-medium tracking-wide text-sm uppercase mb-2 block">
                                // Our Expertise
                            </span>
                            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 font-rubik_0b5097">
                                Comprehensive <br /> Loan Solutions
                            </h2>
                        </div>

                        <div className="relative mb-10 group flex-grow max-h-[400px] flex items-center justify-center">
                            {/* Decorative Background Circles - Blurred */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl -z-10"></div>

                            {/* Sharp Decorative Particles (from reference) */}
                            <div className="absolute top-4 left-4 w-6 h-6 rounded-full border-2 border-white/20 -z-10"></div>
                            <div className="absolute bottom-12 left-0 w-4 h-4 rounded-full bg-white/10 -z-10"></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 -z-10 opacity-20">
                                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                    <path d="M12 4v16m-8-8h16" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 right-1/4 w-8 h-8 -z-10 opacity-30">
                                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M12 4v16m-8-8h16" />
                                </svg>
                            </div>
                            <div className="absolute bottom-4 right-10 w-10 h-10 rounded-full border-4 border-white/10 -z-10"></div>

                            {/* Blob Image Container */}
                            <div className="relative overflow-hidden shadow-2xl w-full h-full transition-transform duration-700 hover:scale-[1.02]" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}>
                                <img
                                    alt="Loan Solutions"
                                    src="https://leza-react.envytheme.com/images/services-tab.png"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        </div>

                        <div>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary transition-all duration-200 bg-white rounded-full hover:bg-neutral-900 hover:text-white hover:-translate-y-1 shadow-lg shadow-black/20"
                            >
                                Get A Quote
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column: Service Grid with Navigation */}
                <div className="w-full lg:w-7/12 px-4 relative flex items-center justify-center">
                    <div className="flex-grow min-h-[480px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={page}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 w-full"
                            >
                                {currentServices.map((service, index) => (
                                    <div key={index} className="group">
                                        <div className="flex items-start gap-5">
                                            <div className="shrink-0">
                                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-inner">
                                                    <div className="text-white group-hover:text-primary transition-colors duration-300">
                                                        {service.icon}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300 leading-tight">
                                                    {service.title}
                                                </h3>
                                                <p className="text-white/80 text-base leading-relaxed mb-4">
                                                    {service.description}
                                                </p>
                                                <Link to={service.link} className="inline-flex items-center text-white font-semibold text-lg hover:underline decoration-white underline-offset-8 transition-all">
                                                    Learn More
                                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrow */}
                    <div className="ml-8 flex flex-col gap-6 items-center shrink-0">
                        <button
                            onClick={() => setPage((prev) => (prev === 0 ? 1 : 0))}
                            className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 group shadow-lg"
                            aria-label="Toggle services"
                        >
                            <svg className="w-7 h-7 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Pagination Dots Indicator */}
                        <div className="flex flex-col gap-3 items-center">
                            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${page === 0 ? 'bg-white scale-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-white/20'}`} />
                            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${page === 1 ? 'bg-white scale-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-white/20'}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
