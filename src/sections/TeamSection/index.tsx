import { TeamGrid } from "@/sections/TeamSection/components/TeamGrid";

export const TeamSection = () => {
    return (
        <div className="bg-gray-50 box-border caret-transparent pt-[50px] pb-5 md:pt-[100px] md:pb-[70px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="box-border caret-transparent text-center mb-[30px] md:mb-[45px]">
                    <span className="text-red-500 box-border caret-transparent">
                        Expert People
                    </span>
                    <h2 className="text-neutral-900 text-[28px] font-medium box-border caret-transparent leading-[33.6px] mt-2.5 mb-3.5 font-rubik_0b5097 md:text-[40px] md:leading-[48px]">
                        Global leadership team
                    </h2>
                    <p className="text-zinc-600 text-[15px] box-border caret-transparent leading-[27px] max-w-[570px] m-auto md:text-base md:leading-[28.8px]">
                        Meet our experienced team dedicated to making your loan journey smooth and successful. With 15 years of industry expertise, we're here to guide you every step of the way.
                    </p>
                </div>
                <TeamGrid />
            </div>
        </div>
    );
};
