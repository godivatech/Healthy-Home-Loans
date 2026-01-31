export const LOAN_CONSTANTS = {
    DEFAULT_INTEREST_RATE: 8.5,
    MIN_INTEREST_RATE: 1, // 1%
    MAX_INTEREST_RATE: 30, // 30%

    MIN_LOAN_AMOUNT: 10000, // ₹10k
    MAX_LOAN_AMOUNT: 1000000000, // ₹100 Cr (High limit to avoid blocking genuine high value loans)

    MIN_TENURE_MONTHS: 1,
    MAX_TENURE_YEARS: 30,

    DEFAULT_LOAN_AMOUNT: 100000,
    DEFAULT_TENURE_MONTHS: 12,
};
