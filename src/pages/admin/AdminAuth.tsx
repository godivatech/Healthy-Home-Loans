import { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from "@/assets/images/healthy.png"; // Actual Brand Logo

interface AdminAuthProps {
    onAuthenticated: () => void;
}

export const AdminAuth = ({ onAuthenticated }: AdminAuthProps) => {
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check against environment variable, fallback for development
        const correctPasscode = import.meta.env.VITE_ADMIN_PASSCODE || 'healthyadmin2026';

        if (passcode === correctPasscode) {
            sessionStorage.setItem('isAdminAuthenticated', 'true');
            onAuthenticated();
        } else {
            setError(true);
            setPasscode('');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-rubik_0b5097">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
            >
                {/* Brand Header */}
                <div className="p-10 flex flex-col items-center border-b border-slate-100 bg-white">
                    <img
                        src={logo}
                        alt="Healthy Home Loans"
                        className="h-28 scale-125 w-auto object-contain mb-8"
                    />
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Admin Portal</h1>
                    <p className="text-slate-500 text-base mt-2 text-center">Secure access to management dashboard</p>
                </div>

                {/* Form Area */}
                <div className="p-10 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-base font-bold text-primary mb-2 uppercase tracking-wider">
                                Secure Passcode
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="password"
                                    value={passcode}
                                    onChange={(e) => {
                                        setPasscode(e.target.value);
                                        setError(false);
                                    }}
                                    className={`block w-full pl-11 pr-4 py-3.5 bg-slate-50 border ${error ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} rounded-lg focus:outline-none focus:ring-4 transition-all text-slate-900 font-medium`}
                                    placeholder="••••••••"
                                    autoFocus
                                />
                            </div>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mt-2 text-base text-red-600 font-medium flex items-center gap-1.5"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block"></span>
                                    Incorrect passcode. Please try again.
                                </motion.p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3.5 px-4 rounded-lg transition-all focus:ring-4 focus:ring-primary/20 active:scale-[0.98] shadow-md shadow-primary/20"
                        >
                            <span>Access Dashboard</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="mt-8 text-center pt-6 border-t border-slate-50">
                        <a href="/" className="text-base font-medium text-slate-400 hover:text-primary transition-colors">
                            &larr; Return to main site
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
