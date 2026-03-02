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
                className="text-transparent h-[100px] w-auto box-border max-w-full text-nowrap object-contain scale-[2.5]"
            />
        </a>
    );
};
