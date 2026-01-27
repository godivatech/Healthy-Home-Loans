import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CallToAction } from "@/sections/CallToAction";
import { PageBanner } from "@/components/PageBanner";
import { Home, User, Building2, Briefcase, Car, Map as MapIcon, CreditCard, Wallet, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ServicesPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const services = [
        {
            title: "Housing Loan",
            description: "Complete home financing solutions for purchase, construction, or renovation.",
            features: [
                "New property purchase",
                "Under-construction properties",
                "Resale properties",
                "Home extension/renovation"
            ],
            amount: "₹5 Lakhs - ₹25 Crores",
            tenure: "Up to 30 years",
            icon: Home
        },
        {
            title: "Personal Loan",
            description: "Flexible loans for personal needs without collateral.",
            features: [
                "Medical emergencies",
                "Wedding expenses",
                "Education fees",
                "Debt consolidation"
            ],
            amount: "₹50,000 - ₹40 Lakhs",
            tenure: "1 - 5 years",
            icon: User
        },
        {
            title: "Mortgage Loan",
            description: "Secured loans against residential or commercial property.",
            features: [
                "Business expansion capital",
                "Working capital needs",
                "Medical expenses"
            ],
            amount: "₹5 Lakhs - ₹10 Crores",
            tenure: "Up to 15 years",
            icon: Building2
        },
        {
            title: "Business Loan",
            description: "Comprehensive business financing for SMEs and enterprises.",
            features: [
                "Working capital loans",
                "Equipment financing",
                "Unsecured business loans",
                "MSME loan schemes"
            ],
            amount: "₹1 Lakh - ₹10 Crores",
            tenure: "1 - 10 years",
            icon: Briefcase
        },
        {
            title: "Car Loan",
            description: "New and used vehicle financing with flexible terms.",
            features: ["New car loans", "Used car loans", "Refinance options"],
            amount: "₹1 Lakh - ₹1 Crore",
            tenure: "1 - 7 years",
            icon: Car
        },
        {
            title: "Land Purchase Loan",
            description: "Financing for purchasing residential or commercial land.",
            features: ["Residential plots", "Commercial land", "Clear title verification"],
            amount: "₹5 Lakhs - ₹5 Crores",
            tenure: "Up to 15 years",
            icon: MapIcon
        },
        {
            title: "Credit Card",
            description: "Credit card facilitation with leading banks.",
            features: ["Lifestyle cards", "Business credit cards", "Reward programs"],
            amount: "Limit: ₹50k - ₹10L",
            tenure: "Revolving",
            icon: CreditCard
        },
        {
            title: "Fixed Deposit",
            description: "Investment products for wealth creation.",
            features: ["Competitive interest rates", "Senior citizen benefits", "Loan against FD"],
            amount: "Min: ₹10,000",
            tenure: "7 days - 10 years",
            icon: Wallet
        }
    ];

    return (
        <div className="text-neutral-800 font-roboto_68d44c overflow-x-hidden">
            <Navbar />

            <PageBanner title="Our Services" breadcrumb="Home" />

            <div className="py-[100px] bg-white">
                <div className="max-w-[1140px] mx-auto px-3">
                    {/* Desktop Grid - Hidden on Mobile */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <FadeIn key={index} direction="up" delay={index * 0.1} className="h-full">
                                <div className="group relative bg-white border border-gray-100 rounded-lg p-6 pt-[75px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 text-center overflow-hidden flex flex-col h-full">
                                    {/* Curved Background Shape */}
                                    <div className="absolute top-0 -left-[10%] w-[120%] h-[120px] bg-primary rounded-b-[100%] transition-colors duration-500"></div>

                                    {/* Icon */}
                                    <div className="relative z-10 w-[90px] h-[90px] mx-auto bg-white rounded-full shadow-md flex items-center justify-center text-[40px] text-primary mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                                        <service.icon size={40} strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold font-rubik_0b5097 mb-3 text-neutral-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-zinc-600 mb-5 text-sm leading-6">
                                            {service.description}
                                        </p>

                                        <div className="mb-4 text-left">
                                            <h4 className="font-medium text-neutral-800 mb-2 text-sm text-center">Key Features:</h4>
                                            <ul className="list-disc pl-5 text-sm text-zinc-600">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="mb-1">{feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                                            <div className="flex justify-between text-sm mb-1 px-2">
                                                <span className="text-zinc-500">Amount:</span>
                                                <span className="font-medium text-neutral-800">{service.amount}</span>
                                            </div>
                                            <div className="flex justify-between text-sm mb-4 px-2">
                                                <span className="text-zinc-500">Tenure:</span>
                                                <span className="font-medium text-neutral-800">{service.tenure}</span>
                                            </div>

                                            <a
                                                href="/contact"
                                                className="text-primary font-medium text-[15px] inline-block hover:text-primary/80 transition-colors uppercase tracking-wide"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Mobile Accordion - Hidden on Desktop */}
                    <div className="md:hidden space-y-3">
                        {services.map((service, index) => (
                            <FadeIn key={index} direction="up" delay={index * 0.05} fullWidth>
                                <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <service.icon size={24} strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-base font-bold font-rubik_0b5097 text-neutral-900">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Accordion Body */}
                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-4 pt-0 border-t border-gray-100">
                                                    <p className="text-zinc-600 text-sm leading-6 mb-4">
                                                        {service.description}
                                                    </p>

                                                    <div className="mb-4">
                                                        <h4 className="font-medium text-neutral-800 mb-2 text-sm">Key Features:</h4>
                                                        <ul className="space-y-1">
                                                            {service.features.map((feature, idx) => (
                                                                <li key={idx} className="text-sm text-zinc-600 flex items-start">
                                                                    <span className="text-primary mr-2">•</span>
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                                        <div className="flex justify-between text-sm mb-2">
                                                            <span className="text-zinc-500">Amount:</span>
                                                            <span className="font-medium text-neutral-800">{service.amount}</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-zinc-500">Tenure:</span>
                                                            <span className="font-medium text-neutral-800">{service.tenure}</span>
                                                        </div>
                                                    </div>

                                                    <a
                                                        href="/contact"
                                                        className="block w-full text-center bg-primary text-white font-medium text-sm py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                                                    >
                                                        Learn More
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>

            <CallToAction />
            <Footer />
            <Copyright />
            <ScrollToTop />
        </div>
    );
};
