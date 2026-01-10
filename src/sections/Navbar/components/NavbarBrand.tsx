import logo from "@/assets/images/healthy.png";

export const NavbarBrand = () => {
    return (
        <a
            href="/"
            className="text-black text-xl box-border caret-transparent block leading-[30px] text-nowrap mr-4"
        >
            <img
                alt="Healthy Home Loans"
                src={logo}
                className="text-transparent h-[110px] w-auto box-border max-w-full text-nowrap object-contain scale-[1.8]"
            />
        </a>
    );
};
