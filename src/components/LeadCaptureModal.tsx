import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2, AlertCircle } from "lucide-react";
import { submitLeadCapture } from "@/lib/firebase";

interface LeadCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    loanDetails?: {
        amount: string;
        tenure: string;
        emi: string;
    } | null;
}

export const LeadCaptureModal = ({ isOpen, onClose, loanDetails }: LeadCaptureModalProps) => {
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        mobile: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
            newErrors.mobile = "Please enter a valid 10-digit number";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        setSubmitError(null);

        const result = await submitLeadCapture({
            ...formData,
            loanDetails: loanDetails || null
        });

        setIsLoading(false);

        if (result.success) {
            setStep('success');
        } else {
            console.error(result.error);
            setSubmitError("Failed to submit. Please try again or call us directly.");
        }
    };

    const handleClose = () => {
        setStep('form');
        setFormData({ name: "", city: "", mobile: "" });
        setErrors({});
        setSubmitError(null);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            {step === 'form' ? (
                                <div className="p-6 md:p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 font-rubik_0b5097">Get Started</h3>
                                            <p className="text-gray-500 text-base mt-1">Fill in your details to process your application.</p>
                                        </div>
                                        <button
                                            onClick={handleClose}
                                            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    {loanDetails && (
                                        <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/10">
                                            <p className="text-base font-medium text-primary mb-2">Applying for:</p>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <span className="text-base text-gray-500 uppercase tracking-wider block">Loan Amount</span>
                                                    <span className="font-bold text-gray-900">{loanDetails.amount}</span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-base text-gray-500 uppercase tracking-wider block">Est. EMI</span>
                                                    <span className="font-bold text-gray-900">₹ {loanDetails.emi}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {submitError && (
                                        <div className="mb-6 p-3 bg-red-50 text-red-700 text-base border border-red-200 rounded-lg flex items-start gap-2">
                                            <AlertCircle size={18} className="shrink-0 mt-0.5" />
                                            <span>{submitError}</span>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-base font-medium text-gray-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all`}
                                                placeholder="Enter your name"
                                            />
                                            {errors.name && <p className="text-red-500 text-base mt-1">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-base font-medium text-gray-700 mb-1">City</label>
                                            <input
                                                type="text"
                                                value={formData.city}
                                                onChange={e => setFormData({ ...formData, city: e.target.value })}
                                                className={`w-full px-4 py-2 rounded-lg border ${errors.city ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all`}
                                                placeholder="Enter your city"
                                            />
                                            {errors.city && <p className="text-red-500 text-base mt-1">{errors.city}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-base font-medium text-gray-700 mb-1">Mobile Number</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</span>
                                                <input
                                                    type="tel"
                                                    value={formData.mobile}
                                                    onChange={e => {
                                                        const val = e.target.value.replace(/\D/g, '');
                                                        if (val.length <= 10) setFormData({ ...formData, mobile: val });
                                                    }}
                                                    className={`w-full pl-12 pr-4 py-2 rounded-lg border ${errors.mobile ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-primary/20'} focus:outline-none focus:ring-4 transition-all`}
                                                    placeholder="98765 43210"
                                                />
                                            </div>
                                            {errors.mobile && <p className="text-red-500 text-base mt-1">{errors.mobile}</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-primary text-white font-bold py-3 rounded-lg mt-6 hover:bg-neutral-900 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={20} />
                                                    Processing...
                                                </>
                                            ) : (
                                                "Submit Application"
                                            )}
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className="p-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <Check size={32} strokeWidth={3} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-rubik_0b5097">Submitted Successfully!</h3>
                                    <p className="text-gray-500 mb-8">
                                        Thank you, {formData.name}. Our team will contact you shortly at +91 {formData.mobile}.
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        className="bg-gray-100 text-gray-700 font-semibold px-8 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
