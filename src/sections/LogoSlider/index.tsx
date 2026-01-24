import hdfcLogo from "@/assets/images/bank-partners/hdfc-bank-logo.svg";
import yesLogo from "@/assets/images/bank-partners/Yes Bank.png";
import axisLogo from "@/assets/images/bank-partners/axis-bank-logo.png";
import kotakLogo from "@/assets/images/bank-partners/kotak_mahindra_bank-logo.png";
import janaLogo from "@/assets/images/bank-partners/Jana Small Finance Bank.png";
import equitasLogo from "@/assets/images/bank-partners/Equitas Small Finance Bank.png";
import idfcLogo from "@/assets/images/bank-partners/IDFC First Bank.png";
import dcbLogo from "@/assets/images/bank-partners/DCB Bank.svg";
import dbsLogo from "@/assets/images/bank-partners/DBS Bank.svg";
import federalLogo from "@/assets/images/bank-partners/Federal Bank.png";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";

// Inline wrap utility instead of importing from @motionone/utils
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxTextProps {
    children: React.ReactNode;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller flex flex-nowrap whitespace-nowrap" style={{ x }}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

export const LogoSlider = () => {
    const partners = [
        { name: "HDFC Bank", logo: hdfcLogo },
        { name: "Yes Bank", logo: yesLogo },
        { name: "Axis Bank", logo: axisLogo },
        { name: "Kotak Mahindra Bank", logo: kotakLogo },
        { name: "Jana Small Finance Bank", logo: janaLogo },
        { name: "Equitas Small Finance Bank", logo: equitasLogo },
        { name: "IDFC First Bank", logo: idfcLogo },
        { name: "DCB Bank", logo: dcbLogo },
        { name: "DBS Bank", logo: dbsLogo },
        { name: "Federal Bank", logo: federalLogo }
    ];

    return (
        <div id="partners" className="bg-white border-b-zinc-100 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent py-[50px] border-b md:py-[100px] overflow-hidden relative">
            <div className="box-border caret-transparent w-full">
                <div className="text-center mb-10 px-3">
                    <h2 className="text-neutral-900 text-[28px] font-medium font-rubik_0b5097 md:text-[36px]">
                        Our Trusted Banking Partners
                    </h2>
                    <p className="text-zinc-600 mt-2">
                        We work with 10+ leading banks and 32+ NBFCs to get you the best deals.
                    </p>
                </div>

                {/* Parallax Marquee 1 (Left to Right) */}
                <div className="relative w-full overflow-hidden">
                    <ParallaxText baseVelocity={-2}>
                        <div className="flex items-center gap-16 mx-8">
                            {partners.map((partner, index) => {
                                // Custom scaling
                                let scaleClass = "";
                                if (partner.name === "Axis Bank") scaleClass = "scale-[1.3]";
                                else if (partner.name === "Kotak Mahindra Bank") scaleClass = "scale-[1.6]";
                                else if (partner.name === "Federal Bank") scaleClass = "scale-[0.9]";

                                return (
                                    <div key={index} className="flex items-center justify-center min-w-[180px]">
                                        <img
                                            alt={partner.name}
                                            src={partner.logo}
                                            className={`max-w-full max-h-[60px] object-contain ${scaleClass} hover:scale-110 transition-transform duration-300`}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </ParallaxText>
                </div>
            </div>
        </div>
    );
};
