import { Link, useLocation } from "react-router-dom";

export const NavbarLinks = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    const links = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Loans", path: "/loans" },
        { name: "Partners", path: "/partners" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <ul className="border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-zinc-100 box-border caret-transparent flex flex-col list-none min-h-0 min-w-0 overflow-visible ml-0 mt-0 pl-0 pr-0 pt-0 border-t-0 md:border-t-neutral-800 md:flex-row md:max-h-none md:min-h-[auto] md:min-w-[auto] md:ml-auto md:mt-0 md:pr-0 md:pt-0 md:bg-transparent w-full md:w-auto">
            {links.map((link) => (
                <li key={link.name} className="relative box-border caret-transparent min-h-0 min-w-0 mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-2.5 w-full md:w-auto border-b border-gray-50 md:border-none last:border-none">
                    <Link
                        to={link.path}
                        className={`text-neutral-900 font-medium box-border caret-transparent block capitalize bg-[position:0px_0px] py-4 px-2 md:px-0 font-rubik_0b5097 md:py-[25px] hover:text-primary transition-colors text-[15px] md:text-base ${isActive(link.path) ? "text-primary bg-primary/5 md:bg-transparent pl-4 md:pl-0 font-semibold" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
