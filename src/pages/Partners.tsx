import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageBanner } from "@/components/PageBanner";
import hdfcLogo from "@/assets/images/bank-partners/hdfc-bank-logo.svg";
import axisLogo from "@/assets/images/bank-partners/axis-bank-logo.png";
import kotakLogo from "@/assets/images/bank-partners/kotak_mahindra_bank-logo.png";
import janaLogo from "@/assets/images/bank-partners/Jana Small Finance Bank.png";
import equitasLogo from "@/assets/images/bank-partners/Equitas Small Finance Bank.png";
import idfcLogo from "@/assets/images/bank-partners/IDFC First Bank.png";
import dcbLogo from "@/assets/images/bank-partners/DCB Bank.svg";
import dbsLogo from "@/assets/images/bank-partners/DBS Bank.svg";
import yesLogo from "@/assets/images/bank-partners/Yes Bank.png";
import federalLogo from "@/assets/images/bank-partners/Federal Bank.png";

// NBFC Logos
import ahamLogo from "@/assets/images/NPFC/AHAM hosuing finance.jpg";
import aadharLogo from "@/assets/images/NPFC/Aadhar Housing Finanance.png";
import adityaLogo from "@/assets/images/NPFC/Aditya Birla Hosuing Finanace.jpg";
import axisFinanceLogo from "@/assets/images/NPFC/Axis Finanance.webp";
import bajajLogo from "@/assets/images/NPFC/Bajaj Finance.webp";
import cholaLogo from "@/assets/images/NPFC/Cholamandalam Finanace.png";
import credLogo from "@/assets/images/NPFC/Cred Right Finance.png";
import easyLogo from "@/assets/images/NPFC/Easy Hosuing Finance.png";
import fiveStarLogo from "@/assets/images/NPFC/Five star finance.png";
import godrejLogo from "@/assets/images/NPFC/Godrej capital.webp";
import gosceryLogo from "@/assets/images/NPFC/Goscery Finanace.png";
import hdbLogo from "@/assets/images/NPFC/HDB Finance.svg";
import hindujaLogo from "@/assets/images/NPFC/Hinduja Finance.png";
import homeFirstLogo from "@/assets/images/NPFC/Home first housing finance.svg";
import iciciHomeLogo from "@/assets/images/NPFC/ICCI home finance.svg";
import iiflLogo from "@/assets/images/NPFC/IIFL home finance.png";
import ikfLogo from "@/assets/images/NPFC/IKF Housing finanance.png";
import indiaShelterLogo from "@/assets/images/NPFC/India shelter.png";
import manapuramLogo from "@/assets/images/NPFC/Manapuram Housing Finance.png";
import mothilalLogo from "@/assets/images/NPFC/Mothilal oswal finanace.svg";
import muthootLogo from "@/assets/images/NPFC/Muthoot Fincorp.jpg";
import pnbLogo from "@/assets/images/NPFC/PNB housing finance.webp";
import piramalLogo from "@/assets/images/NPFC/Piramal finance.svg";
import protiumLogo from "@/assets/images/NPFC/Protium Finanace.png";
import sasvithaLogo from "@/assets/images/NPFC/Sasvitha home finance.png";
import smfgLogo from "@/assets/images/NPFC/Smfg finance.svg";
import subhamLogo from "@/assets/images/NPFC/Subham Finance.svg";
import tataLogo from "@/assets/images/NPFC/Tata capital finance.svg";
import tigerLogo from "@/assets/images/NPFC/Tiger capital finance.png";
import truhomeLogo from "@/assets/images/NPFC/Truhome finance.webp";
import incredLogo from "@/assets/images/NPFC/incred housing finance.svg";

export const PartnersPage = () => {
    const banks = [
        { name: "HDFC Bank", logo: hdfcLogo },
        { name: "Axis Bank", logo: axisLogo },
        { name: "Kotak Mahindra Bank", logo: kotakLogo },
        { name: "Jana Small Finance Bank", logo: janaLogo },
        { name: "Equitas Small Finance Bank", logo: equitasLogo },
        { name: "IDFC First Bank", logo: idfcLogo },
        { name: "DCB Bank", logo: dcbLogo },
        { name: "DBS Bank", logo: dbsLogo },
        { name: "Yes Bank", logo: yesLogo },
        { name: "Federal Bank", logo: federalLogo }
    ];

    const nbfcs = [
        { name: "Axis Finance", logo: axisFinanceLogo },
        { name: "Aadhar Housing Finance", logo: aadharLogo },
        { name: "Protium Finance", logo: protiumLogo },
        { name: "HDB Finance", logo: hdbLogo },
        { name: "IKF Housing Finance", logo: ikfLogo },
        { name: "Home First Finance", logo: homeFirstLogo },
        { name: "Subham Finance", logo: subhamLogo },
        { name: "Hinduja Finance", logo: hindujaLogo },
        { name: "Goscery Finance", logo: gosceryLogo },
        { name: "Aditya Birla Housing Finance", logo: adityaLogo },
        { name: "Credright Finance", logo: credLogo },
        { name: "Truhome Finance", logo: truhomeLogo },
        { name: "India Shelter", logo: indiaShelterLogo },
        { name: "Cholamandalam Finance", logo: cholaLogo },
        { name: "Muthoot Fincorp", logo: muthootLogo },
        { name: "Easy Housing Finance", logo: easyLogo },
        { name: "Manappuram Housing Finance", logo: manapuramLogo },
        { name: "Tiger Capital Finance", logo: tigerLogo },
        { name: "Motilal Oswal Finance", logo: mothilalLogo },
        { name: "Sasvitha Home Finance", logo: sasvithaLogo },
        { name: "Aham Housing Finance", logo: ahamLogo },
        { name: "Home First Housing Finance", logo: homeFirstLogo },
        { name: "Godrej Capital", logo: godrejLogo },
        { name: "Five Star Finance", logo: fiveStarLogo },
        { name: "Incred Housing Finance", logo: incredLogo },
        { name: "SMFG Finance", logo: smfgLogo },
        { name: "Tata Capital Finance", logo: tataLogo },
        { name: "Piramal Capital", logo: piramalLogo },
        { name: "PNB Housing Finance", logo: pnbLogo },
        { name: "IIFL Home Finance", logo: iiflLogo },
        { name: "Bajaj Finance", logo: bajajLogo },
        { name: "ICICI Home Finance", logo: iciciHomeLogo }
    ];

    return (
        <div className="text-neutral-800 font-roboto_68d44c">
            <Navbar />

            <PageBanner title="Our Partners" />

            {/* Partners Content */}
            <div className="py-[50px] md:py-[100px]">
                <div className="max-w-[1140px] w-full mx-auto px-3">

                    {/* Intro Text */}
                    <div className="text-center mb-12">
                        <p className="text-zinc-600 text-base md:text-lg max-w-3xl mx-auto">
                            We have partnered with <span className="font-semibold text-red-600">{banks.length}+ leading banks</span> and <span className="font-semibold text-red-600">{nbfcs.length}+ NBFCs</span> to provide you with the best loan options, competitive interest rates, and seamless processing.
                        </p>
                    </div>

                    {/* Banking Partners Section */}
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-neutral-900 text-2xl md:text-3xl font-semibold font-rubik_0b5097 mb-2">
                                Banking Partners
                            </h2>
                            <p className="text-zinc-500 text-sm">
                                {banks.length} Leading Banks
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {banks.map((bank, index) => {
                                const isObject = typeof bank === 'object';
                                const bankName = isObject ? bank.name : bank;
                                const bankLogo = isObject ? bank.logo : null;

                                // Custom scaling for smaller logos to balance visual appearance
                                let scaleClass = "";
                                if (bankName === "Axis Bank") {
                                    scaleClass = "scale-[1.3]"; // Little bit larger
                                } else if (bankName === "Kotak Mahindra Bank") {
                                    scaleClass = "scale-[1.6]"; // More than little bit larger
                                }

                                return (
                                    <div
                                        key={index}
                                        className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all duration-300 hover:border-red-500"
                                    >
                                        <div className="h-[60px] flex items-center justify-center mb-3">
                                            {bankLogo ? (
                                                <img
                                                    src={bankLogo}
                                                    alt={bankName}
                                                    className={`max-h-full max-w-full object-contain ${scaleClass}`}
                                                />
                                            ) : (
                                                <span className="text-sm font-medium text-gray-400 text-center">Logo</span>
                                            )}
                                        </div>
                                        <h3 className="text-sm md:text-base font-medium text-neutral-900 text-center">
                                            {bankName}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* NBFC Partners Section */}
                    <div>
                        <div className="text-center mb-8">
                            <h2 className="text-neutral-900 text-2xl md:text-3xl font-semibold font-rubik_0b5097 mb-2">
                                NBFC Partners
                            </h2>
                            <p className="text-zinc-500 text-sm">
                                {nbfcs.length} Non-Banking Financial Companies & Housing Finance Companies
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {nbfcs.map((nbfc, index) => (
                                <div
                                    key={index}
                                    className="p-4 border border-red-200 rounded-lg bg-white hover:shadow-md transition-all duration-300 group flex flex-col items-center justify-center min-h-[120px]"
                                >
                                    <div className="h-[60px] flex items-center justify-center mb-3 w-full">
                                        <img
                                            src={nbfc.logo}
                                            alt={nbfc.name}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-sm font-medium text-neutral-900 text-center">
                                        {nbfc.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Total Count */}
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg shadow-md">
                            <p className="text-3xl font-bold">{banks.length + nbfcs.length}+</p>
                            <p className="text-sm mt-1">Total Partners</p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
            <Copyright />
            <ScrollToTop />
        </div>
    );
};
