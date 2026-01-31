import { FadeIn } from "@/components/animations/FadeIn";
import { useLoanCalculator } from "@/hooks/useLoanCalculator";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

export const LoanCalculator = () => {
    const {
        amount,
        setAmount,
        rate,
        setRate,
        tenure,
        setTenure,
        tenureType,
        setTenureType,
        result,
        formatCurrency,
        LOAN_CONSTANTS
    } = useLoanCalculator();

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="box-border shrink-0 max-w-full w-full px-3 md:w-6/12">
            <FadeIn direction="left" delay={0.4} fullWidth>
                <div className="bg-primary box-border px-5 py-[30px] md:px-[45px] md:py-[50px] rounded-lg shadow-xl">
                    <div className="box-border text-center mb-[30px] md:mb-[35px]">
                        <span className="text-white/80 box-border font-medium tracking-wide uppercase text-sm">
                            Calculate your rate
                        </span>
                        <h3 className="text-white text-xl font-bold box-border leading-6 mt-2.5 font-rubik_0b5097 md:text-3xl md:leading-tight">
                            How much do you need?
                        </h3>
                    </div>

                    <div className="box-border space-y-5">
                        {/* Loan Amount */}
                        <div className="box-border">
                            <label className="text-white box-border inline-block font-medium mb-2 font-rubik_0b5097">
                                Loan Amount (₹)
                            </label>
                            <input
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="e.g. 1,00,000"
                                inputMode="numeric"
                                type="text"
                                className="text-zinc-800 bg-white rounded-md border-0 focus:ring-4 focus:ring-secondary/30 outline-none transition-shadow block h-[50px] w-full px-4 text-lg font-medium placeholder:text-gray-400"
                            />
                            {/* Fixed height container to prevent layout shift */}
                            <div className="min-h-[20px] mt-1">
                                {amount && (
                                    <p className="text-white/70 text-xs text-right animate-in fade-in slide-in-from-top-1">
                                        {formatCurrency(amount)}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Loan Tenure Group */}
                        <div className="box-border">
                            <label className="text-white box-border inline-block font-medium mb-2 font-rubik_0b5097">
                                Loan Tenure
                            </label>
                            <div className="flex gap-3">
                                <input
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value.replace(/[^0-9]/g, ''))}
                                    placeholder={tenureType === 'months' ? "e.g. 24" : "e.g. 2"}
                                    inputMode="numeric"
                                    type="text"
                                    maxLength={3}
                                    className="flex-1 text-zinc-800 bg-white rounded-md border-0 focus:ring-4 focus:ring-secondary/30 outline-none transition-shadow block h-[50px] px-4 text-lg font-medium placeholder:text-gray-400"
                                />
                                <div className="w-[120px] relative">
                                    <select
                                        value={tenureType}
                                        onChange={(e) => setTenureType(e.target.value as any)}
                                        className="w-full h-[50px] text-zinc-800 bg-white rounded-md border-0 pl-4 pr-10 font-medium outline-none focus:ring-4 focus:ring-secondary/30 cursor-pointer appearance-none"
                                    >
                                        <option value="months">Months</option>
                                        <option value="years">Years</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div className="box-border">
                            <label className="text-white box-border inline-block font-medium mb-2 font-rubik_0b5097">
                                Interest Rate (%)
                            </label>
                            <input
                                value={rate}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    // Allow decimals
                                    if (val === '' || /^\d*\.?\d*$/.test(val)) {
                                        setRate(val);
                                    }
                                }}
                                placeholder={`e.g. ${LOAN_CONSTANTS.DEFAULT_INTEREST_RATE}`}
                                inputMode="decimal"
                                type="text"
                                maxLength={5}
                                className="text-zinc-800 bg-white rounded-md border-0 focus:ring-4 focus:ring-secondary/30 outline-none transition-shadow block h-[50px] w-full px-4 text-lg font-medium placeholder:text-gray-400"
                            />
                        </div>

                        {/* Results Section */}
                        <div className="bg-white/10 rounded-lg p-5 mt-6 border border-white/10 backdrop-blur-sm">
                            <div className="box-border mb-4">
                                <label className="text-white/80 text-sm box-border inline-block mb-1">
                                    Est. Monthly EMI
                                </label>
                                <div className="text-white text-3xl font-bold tracking-tight">
                                    {result ? `₹ ${formatCurrency(result.emi)}` : "₹ 0"}
                                </div>
                            </div>

                            <div className="h-px bg-white/20 my-3"></div>

                            <div className="box-border">
                                <label className="text-white/80 text-sm box-border inline-block mb-1">
                                    Total Amount Payable
                                </label>
                                <div className="text-white text-xl font-medium">
                                    {result ? `₹ ${formatCurrency(result.totalPayable)}` : "₹ 0"}
                                </div>
                            </div>
                        </div>

                        <div className="box-border mt-[25px]">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="relative text-primary text-[15px] font-bold bg-white leading-[22.5px] text-center align-middle w-full overflow-hidden px-[30px] py-[15px] rounded-md md:text-base md:leading-6 hover:bg-gray-100 transition-colors shadow-lg active:scale-[0.98] transform duration-100"
                            >
                                Apply for this loan
                            </button>
                        </div>
                    </div>
                </div>
            </FadeIn>

            <LeadCaptureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                loanDetails={result && amount ? {
                    amount: `₹ ${formatCurrency(amount)}`,
                    tenure: `${tenure} ${tenureType}`,
                    emi: formatCurrency(result.emi)
                } : null}
            />
        </div>
    );
};
