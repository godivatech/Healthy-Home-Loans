import hdfcLogo from "@/assets/images/bank-partners/hdfc-bank-logo.svg";
import iciciLogo from "@/assets/images/bank-partners/ICCI.svg";
import axisLogo from "@/assets/images/bank-partners/axis-bank-logo.png";
import kotakLogo from "@/assets/images/bank-partners/kotak_mahindra_bank-logo.png";

export const LogoSlider = () => {
    const partners = [
        { name: "HDFC Bank", logo: hdfcLogo },
        { name: "ICICI Bank", logo: iciciLogo },
        { name: "Axis Bank", logo: axisLogo },
        { name: "Kotak Mahindra Bank", logo: kotakLogo },
    ];

    return (
        <div id="partners" className="bg-white border-b-zinc-100 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent py-[50px] border-b md:py-[100px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="text-center mb-10">
                    <h2 className="text-neutral-900 text-[28px] font-medium font-rubik_0b5097 md:text-[36px]">
                        Our Trusted Banking Partners
                    </h2>
                    <p className="text-zinc-600 mt-2">
                        We work with 10+ leading banks and 32+ NBFCs to get you the best deals.
                    </p>
                </div>
                <div className="relative box-border caret-transparent overflow-hidden mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
                        {partners.map((partner) => (
                            <div
                                key={partner.name}
                                className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
                            >
                                <img
                                    alt={partner.name}
                                    src={partner.logo}
                                    className="max-w-full h-auto max-h-16 md:max-h-20 object-contain transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-zinc-500 text-sm mt-8">
                        + 36 more banking and NBFC partners
                    </p>
                </div>
            </div>
        </div>
    );
};
