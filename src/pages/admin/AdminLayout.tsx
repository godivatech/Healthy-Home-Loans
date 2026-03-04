import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { AdminAuth } from './AdminAuth';
import { AdminDashboard } from './AdminDashboard';
import { LogOut } from 'lucide-react';
import logo from "@/assets/images/healthy.png"; // Actual Brand Logo

export const AdminLayout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const authStatus = sessionStorage.getItem('isAdminAuthenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleAuthenticated = () => {
        setIsAuthenticated(true);
        navigate('/admin');
    };

    const handleLogout = () => {
        sessionStorage.removeItem('isAdminAuthenticated');
        setIsAuthenticated(false);
        navigate('/'); // Use navigate instead of string replacement if outside router, but layout should be fine
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <AdminAuth onAuthenticated={handleAuthenticated} />;
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-rubik_0b5097 selection:bg-primary/20">
            {/* Luxury Minimal Navigation Bar */}
            <header className="bg-white shadow-sm border-b border-slate-200 z-10 sticky top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
                    {/* Brand Section */}
                    <div className="flex items-center gap-6 pl-2">
                        <img
                            src={logo}
                            alt="Healthy Home Loans"
                            className="h-16 scale-[1.3] w-auto object-contain cursor-pointer"
                            onClick={() => navigate('/')}
                        />
                        <div className="h-8 w-px bg-slate-200 hidden sm:block ml-2"></div>
                        <h1 className="font-bold text-primary text-lg tracking-tight hidden sm:block uppercase">Admin Portal</h1>
                    </div>

                    {/* Controls Section */}
                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                            <span className="w-2 h-2 rounded-full bg-primary relative">
                                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                            </span>
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">System Online</span>
                        </div>
                        <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red-600 transition-colors group uppercase tracking-wider"
                        >
                            <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="*" element={<Navigate to="/admin" replace />} />
                </Routes>
            </main>
        </div>
    );
};
