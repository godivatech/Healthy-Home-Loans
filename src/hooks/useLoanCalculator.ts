import { useState, useCallback, useEffect } from "react";
import { LOAN_CONSTANTS } from "../constants/loanConstants";

export type CalculationResult = {
    emi: number;
    totalPayable: number;
    totalInterest: number;
};

export type TenureType = "months" | "years";

export const useLoanCalculator = () => {
    // Raw inputs as strings to handle typing comfortably
    const [amount, setAmount] = useState<string>("");
    const [rate, setRate] = useState<string>("");
    const [tenure, setTenure] = useState<string>("");
    const [tenureType, setTenureType] = useState<TenureType>("months");

    const [result, setResult] = useState<CalculationResult | null>(null);

    // Debounced Calculation Logic
    // In a real 'heavy' app we might use a proper debounce hook, 
    // but for this simple math, useEffect with a small timeout works well enough 
    // to prevent thrashing without adding dependencies.
    useEffect(() => {
        const timer = setTimeout(() => {
            calculate();
        }, 300);

        return () => clearTimeout(timer);
    }, [amount, rate, tenure, tenureType]);

    const calculate = useCallback(() => {
        // 1. Parse & Sanitize
        const principal = parseFloat(amount.replace(/,/g, ''));
        const interestRate = parseFloat(rate);
        let time = parseFloat(tenure);

        // Validation - Soft Fail (Just don't calculate)
        if (!principal || isNaN(principal) || !interestRate || isNaN(interestRate) || !time || isNaN(time)) {
            setResult(null);
            return;
        }

        // Normalize Tenure to Months
        if (tenureType === "years") {
            time = time * 12;
        }

        // Edge Case: 0% Interest
        // Although unlikely for a business, code should handle it gracefully
        if (interestRate === 0) {
            const total = principal;
            const emi = time > 0 ? principal / time : 0;
            setResult({
                emi: Math.round(emi),
                totalPayable: Math.round(total),
                totalInterest: 0
            });
            return;
        }

        // Standard EMI Formula
        // E = P * r * (1+r)^n / ((1+r)^n - 1)
        const monthlyRate = interestRate / 12 / 100;

        // Edge case: Time = 0 (Divide by zero prevention)
        if (time <= 0) {
            setResult(null);
            return;
        }

        const pow = Math.pow(1 + monthlyRate, time);
        const emi = (principal * monthlyRate * pow) / (pow - 1);
        const totalPayable = emi * time;
        const totalInterest = totalPayable - principal;

        setResult({
            emi: Math.round(emi),
            totalPayable: Math.round(totalPayable),
            totalInterest: Math.round(totalInterest)
        });

    }, [amount, rate, tenure, tenureType]);

    // Formatters
    const formatCurrency = (val: string | number) => {
        const num = typeof val === 'string' ? parseFloat(val.replace(/,/g, '')) : val;
        if (isNaN(num)) return "";
        return new Intl.NumberFormat('en-IN', {
            maximumFractionDigits: 0
        }).format(num);
    };

    // Input Handlers
    const handleAmountChange = (val: string) => {
        // Allow numbers and one decimal only (though INR usually doesn't decimals for loans, let's stick to ints for now)
        const sanitized = val.replace(/[^0-9]/g, '');

        // Prevent leading zeros
        if (sanitized.length > 0 && sanitized[0] === '0') {
            setAmount(sanitized.substring(1));
            return;
        }

        // Cap length (The Billionaire Problem)
        if (sanitized.length > 15) return;

        // Store formatted val for display? 
        // Strategy: Store RAW string in state to avoid cursor jumping, 
        // calculate on raw, but maybe format on blur? 
        // For simplicity and robustness in this specific UI pattern:
        // We will store the raw number string.
        setAmount(sanitized);
    };

    return {
        amount,
        setAmount: handleAmountChange,
        rate,
        setRate,
        tenure,
        setTenure,
        tenureType,
        setTenureType,
        result,
        formatCurrency,
        LOAN_CONSTANTS
    };
};
