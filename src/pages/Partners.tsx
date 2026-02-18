import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageBanner } from "@/components/PageBanner";
import { FadeIn } from "@/components/animations/FadeIn";

// --- Public Sector Banks ---
import sbiLogo from "@/assets/images/bank-partners/SBI.png";
import pnbLogo from "@/assets/images/bank-partners/Punjab National Bank.jpg";
import bobLogo from "@/assets/images/bank-partners/Bank of Baroda.png";
import canaraLogo from "@/assets/images/bank-partners/Canara Bank.png";
import unionLogo from "@/assets/images/bank-partners/Union Bank of India.png";
import boiLogo from "@/assets/images/bank-partners/Bank of India.png";
import indianLogo from "@/assets/images/bank-partners/Indian Bank.png";
import centralLogo from "@/assets/images/bank-partners/Central Bank of India.svg";
import iobLogo from "@/assets/images/bank-partners/Indian Overseas Bank.png";
import ucoLogo from "@/assets/images/bank-partners/UCO Bank.png";
import bomLogo from "@/assets/images/bank-partners/Bank of Maharashtra.svg";
import psbLogo from "@/assets/images/bank-partners/Punjab & Sind Bank.png";

// --- Private Sector Banks ---
import hdfcLogo from "@/assets/images/bank-partners/hdfc-bank-logo.svg";
import iciciLogo from "@/assets/images/bank-partners/ICICI Bank.svg";
import axisLogo from "@/assets/images/bank-partners/axis-bank-logo.png";
import kotakLogo from "@/assets/images/bank-partners/kotak_mahindra_bank-logo.png";
import indusIndLogo from "@/assets/images/bank-partners/IndusInd Bank.png";
import idfcLogo from "@/assets/images/bank-partners/IDFC First Bank.png";
import yesLogo from "@/assets/images/bank-partners/Yes Bank.png";
import rblLogo from "@/assets/images/bank-partners/RBL Bank.png";
import federalLogo from "@/assets/images/bank-partners/Federal Bank.png";
import southIndianLogo from "@/assets/images/bank-partners/South Indian Bank.png";
import tmbLogo from "@/assets/images/bank-partners/Tamilnad Mercantile Bank.webp";
import cityUnionLogo from "@/assets/images/bank-partners/City Union Bank.jpg";
import kvbLogo from "@/assets/images/bank-partners/Karur Vysya Bank.png";
import dhanlaxmiLogo from "@/assets/images/bank-partners/Dhanlaxmi Bank.png";
import dcbLogo from "@/assets/images/bank-partners/DCB Bank.svg";
import dbsLogo from "@/assets/images/bank-partners/DBS Bank.svg";

// --- Small Finance Banks ---
import auLogo from "@/assets/images/bank-partners/AU Small Finance Bank.svg";
import equitasLogo from "@/assets/images/bank-partners/Equitas Small Finance Bank.png";
import ujjivanLogo from "@/assets/images/bank-partners/Ujjivan Small Finance Bank.webp";
import janaLogo from "@/assets/images/bank-partners/Jana Small Finance Bank.png";
import esafLogo from "@/assets/images/bank-partners/ESAF Small Finance Bank.png";
import utkarshLogo from "@/assets/images/bank-partners/Utkarsh Small Finance Bank.svg";
import suryodayLogo from "@/assets/images/bank-partners/Suryoday Small Finance Bank.webp";

// --- NBFC Logos ---
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
import pnbHousingLogo from "@/assets/images/NPFC/PNB housing finance.webp";
import piramalLogo from "@/assets/images/NPFC/Piramal finance.svg";
import protiumLogo from "@/assets/images/NPFC/Protium Finanace.png";
import sasvithaLogo from "@/assets/images/NPFC/Sasvitha home finance.png";
import smfgLogo from "@/assets/images/NPFC/Smfg finance.svg";
import subhamLogo from "@/assets/images/NPFC/Subham Finance.svg";
import tataLogo from "@/assets/images/NPFC/Tata capital finance.svg";
import tigerLogo from "@/assets/images/NPFC/Tiger capital finance.png";
import truhomeLogo from "@/assets/images/NPFC/Truhome finance.webp";
import incredLogo from "@/assets/images/NPFC/incred housing finance.svg";
import ugroLogo from "@/assets/images/NPFC/Ugro Capital.webp";
import shriramLogo from "@/assets/images/NPFC/Shriram Finance.svg";
import nivasLogo from "@/assets/images/NPFC/Nivas Housing Finance.png";
import lntLogo from "@/assets/images/NPFC/L&T Finance.webp";
import grihumLogo from "@/assets/images/NPFC/Grihum Finance.svg";
import nidoLogo from "@/assets/images/NPFC/Nido Finance.png";
import repcoLogo from "@/assets/images/NPFC/Repco Finance.svg";
import veritasLogo from "@/assets/images/NPFC/Veritas Finance.png";
import sammanLogo from "@/assets/images/NPFC/Samman Capital.svg";
import heroLogo from "@/assets/images/NPFC/Hero Housing Finance.webp";
import ambitLogo from "@/assets/images/NPFC/Ambit Housing Finance.avif";

export const PartnersPage = () => {
    // ... existing bank arrays ...
    const publicSectorBanks = [
        { name: "State Bank of India (SBI)", logo: sbiLogo },
        { name: "Punjab National Bank (PNB)", logo: pnbLogo },
        { name: "Bank of Baroda", logo: bobLogo },
        { name: "Canara Bank", logo: canaraLogo },
        { name: "Union Bank of India", logo: unionLogo },
        { name: "Bank of India", logo: boiLogo },
        { name: "Indian Bank", logo: indianLogo },
        { name: "Central Bank of India", logo: centralLogo },
        { name: "Indian Overseas Bank", logo: iobLogo },
        { name: "UCO Bank", logo: ucoLogo },
        { name: "Bank of Maharashtra", logo: bomLogo },
        { name: "Punjab & Sind Bank", logo: psbLogo },
    ];

    const privateSectorBanks = [
        { name: "HDFC Bank", logo: hdfcLogo },
        { name: "ICICI Bank", logo: iciciLogo },
        { name: "Axis Bank", logo: axisLogo },
        { name: "Kotak Mahindra Bank", logo: kotakLogo },
        { name: "IndusInd Bank", logo: indusIndLogo },
        { name: "IDFC First Bank", logo: idfcLogo },
        { name: "Yes Bank", logo: yesLogo },
        { name: "RBL Bank", logo: rblLogo },
        { name: "Federal Bank", logo: federalLogo },
        { name: "South Indian Bank", logo: southIndianLogo },
        { name: "Tamilnad Mercantile Bank", logo: tmbLogo },
        { name: "City Union Bank", logo: cityUnionLogo },
        { name: "Karur Vysya Bank", logo: kvbLogo },
        { name: "Dhanlaxmi Bank", logo: dhanlaxmiLogo },
        { name: "DCB Bank", logo: dcbLogo },
        { name: "DBS Bank", logo: dbsLogo },
    ];

    const smallFinanceBanks = [
        { name: "AU Small Finance Bank", logo: auLogo },
        { name: "Equitas Small Finance Bank", logo: equitasLogo },
        { name: "Ujjivan Small Finance Bank", logo: ujjivanLogo },
        { name: "Jana Small Finance Bank", logo: janaLogo },
        { name: "ESAF Small Finance Bank", logo: esafLogo },
        { name: "Utkarsh Small Finance Bank", logo: utkarshLogo },
        { name: "Suryoday Small Finance Bank", logo: suryodayLogo },
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
        { name: "Godrej Capital", logo: godrejLogo },
        { name: "Five Star Finance", logo: fiveStarLogo },
        { name: "Incred Housing Finance", logo: incredLogo },
        { name: "SMFG Finance", logo: smfgLogo },
        { name: "Tata Capital Finance", logo: tataLogo },
        { name: "Piramal Capital", logo: piramalLogo },
        { name: "PNB Housing Finance", logo: pnbHousingLogo },
        { name: "IIFL Home Finance", logo: iiflLogo },
        { name: "Bajaj Finance", logo: bajajLogo },
        { name: "ICICI Home Finance", logo: iciciHomeLogo },
        { name: "Ugro Capital", logo: ugroLogo },
        { name: "Shriram Finance", logo: shriramLogo },
        { name: "Nivas Housing Finance", logo: nivasLogo },
        { name: "L&T Finance", logo: lntLogo },
        { name: "Grihum Finance", logo: grihumLogo },
        { name: "Nido Finance", logo: nidoLogo },
        { name: "Repco Finance", logo: repcoLogo },
        { name: "Veritas Finance", logo: veritasLogo },
        { name: "Samman Capital", logo: sammanLogo },
        { name: "Hero Housing Finance", logo: heroLogo },
        { name: "Ambit Housing Finance", logo: ambitLogo }
    ];

    const totalBanks = publicSectorBanks.length + privateSectorBanks.length + smallFinanceBanks.length;

    const renderBankSection = (title: string, banks: { name: string; logo: string }[]) => (
        <div className="mb-12">
            <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-semibold font-rubik_0b5097 text-neutral-800 mb-2 relative inline-block">
                    {title}
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full opacity-60"></span>
                </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {banks.map((bank, index) => {
                    // Custom scaling for specific logos
                    let scaleClass = "";
                    if (bank.name.includes("Axis")) scaleClass = "scale-[1.2]";
                    else if (bank.name.includes("Kotak")) scaleClass = "scale-[1.5]";
                    else if (bank.name.includes("City Union")) scaleClass = "scale-[1.1]";

                    return (
                        <FadeIn key={index} direction="up" delay={(index % 4) * 0.05} className="h-full">
                            <div className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 group h-full flex flex-col justify-between">
                                <div className="h-[70px] flex items-center justify-center mb-4 overflow-hidden">
                                    <img
                                        src={bank.logo}
                                        alt={bank.name}
                                        className={`max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 ${scaleClass}`}
                                    />
                                </div>
                                <h4 className="text-sm font-medium text-neutral-700 text-center group-hover:text-primary transition-colors">
                                    {bank.name}
                                </h4>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="text-neutral-800 font-roboto_68d44c overflow-x-hidden bg-gray-50/50">
            <Navbar />

            <PageBanner title="Our Partners" />

            {/* Partners Content */}
            <div className="py-[50px] md:py-[100px]">
                <div className="max-w-[1140px] w-full mx-auto px-3">

                    {/* Intro Text */}
                    <div className="text-center mb-16">
                        <p className="text-zinc-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                            We have partnered with <span className="font-semibold text-primary">{totalBanks}+ leading banks</span> and <span className="font-semibold text-primary">150+ NBFCs</span> to provide you with the best loan options, competitive interest rates, and seamless processing.
                        </p>
                    </div>

                    {/* Banking Partners Section */}
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <h2 className="text-neutral-900 text-3xl md:text-4xl font-bold font-rubik_0b5097 mb-3">
                                Banking Partners
                            </h2>
                            <p className="text-zinc-500">
                                Trusted by the nation's best financial institutions
                            </p>
                        </div>

                        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                            {renderBankSection("Public Sector Banks", publicSectorBanks)}
                            {renderBankSection("Private Sector Banks", privateSectorBanks)}
                            {renderBankSection("Small Finance Banks", smallFinanceBanks)}
                        </div>
                    </div>

                    {/* NBFC Partners Section */}
                    <div>
                        <div className="text-center mb-10">
                            <h2 className="text-neutral-900 text-3xl md:text-4xl font-bold font-rubik_0b5097 mb-3">
                                NBFC Partners
                            </h2>
                            <p className="text-zinc-500">
                                150+ Non-Banking Financial Companies & Housing Finance Companies
                            </p>
                        </div>

                        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                {nbfcs.map((nbfc, index) => (
                                    <FadeIn key={index} direction="up" delay={(index % 4) * 0.05} className="h-full">
                                        <div className="p-4 border border-gray-100 rounded-lg bg-white hover:shadow-md hover:border-primary transition-all duration-300 group flex flex-col h-full justify-between items-center">
                                            <div className="h-[60px] flex items-center justify-center mb-3 w-full overflow-hidden">
                                                <img
                                                    src={nbfc.logo}
                                                    alt={nbfc.name}
                                                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <h3 className="text-xs md:text-sm font-medium text-neutral-700 text-center group-hover:text-primary transition-colors">
                                                {nbfc.name}
                                            </h3>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
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
