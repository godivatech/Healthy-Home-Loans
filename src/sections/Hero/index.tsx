import bannerImage from "@/assets/images/banner 3.jpeg";
import bannerImageMobile from "@/assets/images/Banner 1 mobile.jpeg";

export const Hero = () => {
    return (
        <section className="relative w-full">
            <picture>
                <source media="(max-width: 768px)" srcSet={bannerImageMobile} />
                <img
                    src={bannerImage}
                    alt="Healthy Home Loans Banner"
                    className="w-full h-auto"
                    width={1920}
                    height={800}
                />
            </picture>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-[1470px] w-full mx-auto px-3 h-full flex flex-col justify-center relative">
                    {/* SocialLinks removed as per request */}
                </div>
            </div>
        </section>
    );
};
