import logo from "@/assets/images/healthy.png";

export const NavbarBrand = () => {
    return (
        <a
            href="/"
            className="text-black text-xl box-border caret-transparent flex items-center leading-[30px] text-nowrap mr-4 pl-3 md:pl-0 h-full"
        >
            <img
                alt="Healthy Home Loans"
                src={logo}
                className="w-[150px] md:w-[210px] h-auto object-contain"
            />
        </a>
    );
};
