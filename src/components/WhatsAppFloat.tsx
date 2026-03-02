import { motion } from "framer-motion";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const WhatsAppFloat = () => {
    const phoneNumber = "919677719848";
    const message = "Hello, I would like to know more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 left-6 z-[999] bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center cursor-pointer group"
            title="Chat on WhatsApp"
        >
            <WhatsAppIcon size={32} className="w-8 h-8 md:w-9 md:h-9" />

            {/* Pulsing Effect Background */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] -z-10 animate-ping opacity-20"></div>
        </motion.a>
    );
};
