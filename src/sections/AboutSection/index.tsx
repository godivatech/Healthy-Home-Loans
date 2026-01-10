import { AboutContent } from "./components/AboutContent";
import { AboutImage } from "./components/AboutImage";

export const AboutSection = () => {
    return (
        <div className="box-border caret-transparent py-[50px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
                <div className="flex flex-wrap box-border caret-transparent -mx-3">
                    <AboutImage />
                    <AboutContent />
                </div>
            </div>
        </div>
    );
};
