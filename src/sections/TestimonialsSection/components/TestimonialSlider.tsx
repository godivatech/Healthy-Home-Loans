import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";
import testimonialVideo from "@/assets/videos/testimonial.mp4";

export const TestimonialSlider = () => {
    return (
        <div className="relative box-border caret-transparent list-none z-[1] overflow-hidden mx-auto">
            <div className="relative caret-transparent flex h-full w-full z-[1]">
                <div className="relative box-border caret-transparent shrink-0 h-full w-full">
                    <TestimonialCard
                        quote="We searched for a property loan for 6 months and tried many banks without success, but Healthy Home Loans finally helped us achieve our goal."
                        name="Dr. Tamizhselvi"
                        role="Homeopathy Consultant and Psychologist"
                        videoUrl={testimonialVideo}
                    />
                </div>
            </div>
        </div>
    );
};
