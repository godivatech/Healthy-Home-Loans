import { motion } from "framer-motion";
import { Hammer, HardHat, Mail, Phone } from "lucide-react";
import logo from "@/assets/images/logo.jpg";

export const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background glowing effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#68d44c] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 bg-neutral-800/60 backdrop-blur-2xl border border-neutral-700/50 p-8 md:p-14 rounded-3xl shadow-2xl max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <img
            src={logo}
            alt="Healthy Home Loans Logo"
            className="w-40 h-auto object-contain rounded-2xl shadow-lg border border-neutral-700/50 bg-white/5 p-2"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <HardHat className="text-[#68d44c] w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            Coming Soon
          </h1>
          <Hammer className="text-[#68d44c] w-10 h-10 md:w-12 md:h-12" />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-neutral-300 text-lg md:text-xl xl:leading-relaxed mb-10 max-w-lg mx-auto"
        >
          We're working hard behind the scenes to build the perfect digital experience for you. 
          Our new website for <span className="text-white font-semibold">Healthy Home Loans</span> is under construction and will be launching very soon.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-neutral-700/50 pt-8 mt-4"
        >
          <p className="text-neutral-400 font-medium sm:w-full sm:text-left text-center">
            Excited? Check back soon!
          </p>
          <div className="flex gap-4 w-full justify-center sm:justify-end">
            <a 
              href="mailto:info@healthyhomeloans.com.au" 
              className="flex items-center justify-center gap-2 bg-neutral-700/80 hover:bg-neutral-600 text-white px-5 py-3 rounded-full transition-all text-sm font-medium w-full sm:w-auto shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#68d44c]" />
              Email Us
            </a>
            <a 
              href="tel:1300000000" 
              className="flex items-center justify-center gap-2 bg-[#68d44c]/10 text-[#68d44c] hover:bg-[#68d44c]/20 border border-[#68d44c]/30 px-5 py-3 rounded-full transition-all text-sm font-medium w-full sm:w-auto shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Animated dots */}
      <motion.div 
        className="mt-16 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-[#68d44c]"
            animate={{
              y: ["0%", "-50%", "0%"],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
