import { useState } from "react";
import { Link } from "react-router-dom";

export const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const services = [
        {
            icon: "flaticon-house",
            title: "Housing Loan",
            description: "Purchase your dream home with our easy housing loan options.",
            details: "Get up to 90% funding with flexible repayment tenures up to 30 years.",
            subServices: ["Home Purchase Loans", "Home Construction Loans", "Home Renovation Loans", "Plot Loans"],
            link: "/services"
        },
        {
            icon: "flaticon-money",
            title: "Personal Loan",
            description: "Quick personal loans for all your immediate financial needs.",
            details: "Instant approval for salaried and self-employed individuals with minimal documentation.",
            subServices: ["Medical Emergency", "Wedding Expenses", "Travel & Vacation", "Debt Consolidation"],
            link: "/services"
        },
        {
            icon: "flaticon-contract",
            title: "Mortgage Loan",
            description: "Unlock the value of your property with our loan against property.",
            details: "High loan amounts against residential or commercial property with lower interest rates.",
            subServices: ["Loan Against Property", "Lease Rental Discounting", "Commercial Purchase", "Top-up Loans"],
            link: "/services"
        },
        {
            icon: "flaticon-car",
            title: "Business Loan",
            description: "Fuel your business growth with our tailored business finance solutions.",
            details: "Collateral-free loans for MSMEs and startups to expand operations.",
            subServices: ["Working Capital", "Machinery Loan", "Business Expansion", "MSME Loans"],
            link: "/services"
        }
    ];

    return (
        <div className="box-border caret-transparent">
            {/* Tabs Header */}
            <ul className="border-b-stone-300 border-t-stone-200 box-border caret-transparent list-none text-center mb-10 pl-0 border-b border-t py-4 flex flex-wrap justify-center gap-4">
                {services.map((service, index) => (
                    <li
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`text-neutral-900 font-medium box-border caret-transparent inline-block capitalize cursor-pointer px-6 py-3 rounded-md transition-all duration-300 ${activeTab === index
                                ? "bg-red-500 text-white shadow-md"
                                : "bg-white text-zinc-600 hover:bg-gray-100"
                            }`}
                    >
                        {service.title}
                    </li>
                ))}
            </ul>

            {/* Tab Content */}
            <div className="box-border caret-transparent animate-fade-in">
                <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
                        <div className="box-border caret-transparent text-center mb-[30px] md:text-start md:mb-0">
                            <img
                                alt={services[activeTab].title}
                                src="https://leza-react.envytheme.com/images/services-tab.png"
                                className="text-transparent box-border max-w-full text-center w-[580px] md:text-start rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
                        <div className="box-border caret-transparent">
                            <h3 className="text-neutral-900 text-xl font-medium box-border caret-transparent leading-[30px] mb-2.5 font-rubik_0b5097 md:text-[28px] md:leading-[34px]">
                                {services[activeTab].title}
                            </h3>
                            <p className="text-zinc-600 text-[15px] box-border caret-transparent leading-[27px] mb-[20px] md:text-base md:leading-[28.8px]">
                                {services[activeTab].description}
                            </p>

                            <div className="mb-6">
                                <h4 className="text-neutral-900 text-lg font-medium mb-3">Key Features:</h4>
                                <ul className="box-border caret-transparent pl-0 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {services[activeTab].subServices.map((sub, idx) => (
                                        <li key={idx} className="relative text-zinc-600 box-border caret-transparent list-none pl-[20px] font-rubik_0b5097 before:content-['✓'] before:text-red-500 before:font-bold before:absolute before:left-0">
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-zinc-500 text-sm italic mb-6 border-l-4 border-red-500 pl-4 py-2 bg-gray-50">
                                {services[activeTab].details}
                            </p>

                            <Link
                                to={services[activeTab].link}
                                className="relative text-white text-[15px] bg-red-500 box-border caret-transparent inline-block leading-[22.5px] text-center z-[1] overflow-hidden px-[30px] py-3 rounded-[5px] md:text-base md:leading-6 md:px-[45px] hover:bg-neutral-900 transition-colors shadow-md"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
