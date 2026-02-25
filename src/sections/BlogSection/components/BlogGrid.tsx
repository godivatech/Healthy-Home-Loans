import { BlogCard } from "@/sections/BlogSection/components/BlogCard";

export const BlogGrid = () => {
    return (
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                <BlogCard
                    imageUrl="https://leza-react.envytheme.com/images/blog/blog1.jpg"
                    imageAlt="Small business financing discussion"
                    date="July 05, 2024"
                    title="Financing loans available to small businesses"
                    detailsUrl="#"
                    readMoreText="Read More"
                />
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                <BlogCard
                    imageUrl="https://leza-react.envytheme.com/images/blog/blog2.jpg"
                    imageAlt="Business success planning and strategy"
                    date="July 04, 2024"
                    title="5 Ways you can prepare your business for success"
                    detailsUrl="#"
                    readMoreText="Read More"
                />
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                <BlogCard
                    imageUrl="https://leza-react.envytheme.com/images/blog/blog3.jpg"
                    imageAlt="Investment and money saving guide"
                    date="July 03, 2024"
                    title="Tips for saving money and better guide for investment"
                    detailsUrl="#"
                    readMoreText="Read More"
                />
            </div>
        </div>
    );
};
