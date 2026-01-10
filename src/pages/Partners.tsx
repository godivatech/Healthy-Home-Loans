import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";

export const PartnersPage = () => {
    return (
        <div className="text-neutral-800 font-roboto_68d44c">
            <Navbar />

            {/* Page Header */}
            <div className="bg-gray-50 py-[50px] md:py-[80px]">
                <div className="max-w-[1140px] w-full mx-auto px-3 text-center">
                    <h1 className="text-neutral-900 text-3xl md:text-5xl font-medium mb-4">Our Partners</h1>
                    <p className="text-zinc-600 text-[15px] md:text-base">
                        We collaborate with top banks and NBFCs to bring you the best financial solutions.
                    </p>
                </div>
            </div>

            {/* Partners Grid */}
            <div className="py-[50px] md:py-[100px]">
                <div className="max-w-[1140px] w-full mx-auto px-3">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                        {/* Add Partner Logos here. Using placeholders for now with names. */}
                        {["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak Mahindra Bank", "Bank of Baroda",
                            "Bajaj Finserv", "Tata Capital", "Aditya Birla Capital", "L&T Finance", "Cholamandalam", "Sundaram Finance"
                        ].map((partner, index) => (
                            <div key={index} className="p-6 border border-gray-100 rounded-lg shadow-sm w-full text-center hover:shadow-md transition-shadow">
                                <div className="h-[80px] flex items-center justify-center bg-gray-50 rounded mb-4">
                                    {/* In a real scenario, use <img> tags here */}
                                    <span className="text-lg font-bold text-gray-400">{partner} Logo</span>
                                </div>
                                <h3 className="text-lg font-medium text-neutral-900">{partner}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
            <Copyright />
            <ScrollToTop />
        </div>
    );
};
