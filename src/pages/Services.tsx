import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CallToAction } from "@/sections/CallToAction";
import { PageBanner } from "@/components/PageBanner";
import { Home, User, Building2, Briefcase, Car, Map as MapIcon, CreditCard, Wallet } from "lucide-react";

export const ServicesPage = () => {
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
        <div className="text-neutral-800 font-roboto_68d44c">
            <Navbar />

            <PageBanner title="Our Services" breadcrumb="Home" />

            <div className="py-[100px] bg-white">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group relative bg-white border border-gray-100 rounded-lg p-6 pt-[75px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 text-center overflow-hidden flex flex-col h-full">
                                {/* Curved Background Shape */}
                                <div className="absolute top-0 -left-[10%] w-[120%] h-[120px] bg-red-50 rounded-b-[100%] transition-colors duration-500 group-hover:bg-red-600"></div>

                                {/* Icon */}
                                <div className="relative z-10 w-[90px] h-[90px] mx-auto bg-white rounded-full shadow-md flex items-center justify-center text-[40px] text-red-600 mb-6 transition-transform duration-500 group-hover:-translate-y-2">
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
                                            className="text-red-500 font-medium text-[15px] inline-block hover:text-red-700 transition-colors uppercase tracking-wide"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
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
