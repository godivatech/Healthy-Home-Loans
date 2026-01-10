import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 box-border caret-transparent pt-[50px] pb-5 md:pt-[100px] md:pb-[70px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <FooterContent />
            </div>
        </footer>
    );
};
