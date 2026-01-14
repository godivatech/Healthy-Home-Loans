import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { SocialLinks } from "@/components/SocialLinks";
import bannerImage from "@/assets/images/banner 1.png";

export const Hero = () => {
    return (
        <div
            className="relative bg-fixed bg-no-repeat bg-cover box-border caret-transparent h-full z-[1] bg-center py-[50px] md:h-[870px] md:py-0 before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-neutral-800 before:hidden before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-60 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:left-0 before:top-0 before:font-roboto_68d44c before:md:opacity-50"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className="box-border caret-transparent table h-full w-full">
                <div className="box-border caret-transparent table-cell align-middle">
                    <div className="box-border caret-transparent max-w-[1470px] w-full mx-auto px-3">
                        <HeroContent />
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    );
};
