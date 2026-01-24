import { NavbarLinks } from "@/sections/Navbar/components/NavbarLinks";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";
import { motion, AnimatePresence } from "framer-motion";

type NavbarMenuProps = {
    isOpen: boolean;
};

export const NavbarMenu = ({ isOpen }: NavbarMenuProps) => {
    return (
        <>
            {/* Desktop Menu - Always Visible on MD+ */}
            <div className="hidden md:flex items-center box-border caret-transparent basis-auto grow min-h-[auto] min-w-[auto]">
                <NavbarLinks />
                <NavbarActions />
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[100%] left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 md:hidden flex flex-col"
                    >
                        <div className="p-6 space-y-4">
                            <NavbarLinks />
                        </div>
                        <div className="p-6 bg-zinc-50 border-t border-gray-100 flex flex-col items-center gap-4">
                            <NavbarActions />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
