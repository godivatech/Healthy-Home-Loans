import { NavbarLinks } from "@/sections/Navbar/components/NavbarLinks";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";

export const NavbarMenu = () => {
    return (
        <div className="items-center box-border caret-transparent hidden basis-full grow min-h-0 min-w-0 md:flex md:basis-auto md:min-h-[auto] md:min-w-[auto]">
            <NavbarLinks />
            <NavbarActions />
        </div>
    );
};
