import { NavbarBrand } from "@/sections/Navbar/components/NavbarBrand";
import { MobileMenuToggle } from "@/sections/Navbar/components/MobileMenuToggle";
import { NavbarMenu } from "@/sections/Navbar/components/NavbarMenu";

export const NavbarContainer = () => {
    return (
        <div className="box-border caret-transparent">
            <div className="box-border caret-transparent max-w-[1470px] w-full mx-auto px-3">
                <nav className="relative items-center box-border caret-transparent flex flex-wrap justify-between md:flex-nowrap md:justify-start">
                    <NavbarBrand />
                    <MobileMenuToggle />
                    <NavbarMenu />
                </nav>
            </div>
        </div>
    );
};
