import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    fullWidth?: boolean;
    padding?: boolean;
    className?: string; // Allow custom classes
}

export const FadeIn = ({
    children,
    direction = "up",
    delay = 0.2,
    fullWidth = false,
    padding = false,
    className = "",
}: FadeInProps) => {
    // Determine initial offset based on direction
    const getInitial = () => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: 40 };
            case "down":
                return { opacity: 0, y: -40 };
            case "left":
                return { opacity: 0, x: 40 };
            case "right":
                return { opacity: 0, x: -40 };
            default:
                return { opacity: 0, y: 0 };
        }
    };

    return (
        <motion.div
            initial={getInitial()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // Trigger slightly before element is fully in view
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like easing
            }}
            className={`${fullWidth ? "w-full" : ""} ${padding ? "px-3" : ""} ${className}`}
        >
            {children}
        </motion.div>
    );
};
