import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";

export const NotFoundPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 px-4">
                <div className="text-center">
                    <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
                    >
                        <span>Return to Home</span>
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};
