import bannerImage from "@/assets/images/banner-3.png";

interface PageBannerProps {
    title: string;
    breadcrumb?: string;
}

export const PageBanner = ({ title, breadcrumb = "Home" }: PageBannerProps) => {
    return (
        <div
            className="relative bg-fixed bg-no-repeat bg-cover h-[265px] md:h-[400px] z-[1] bg-center before:bg-white before:block before:h-full before:w-full before:opacity-[0.77] before:absolute before:left-0 before:top-0 before:z-[-1]"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className="table h-full w-full">
                <div className="table-cell align-middle">
                    <div className="max-w-[1140px] w-full mx-auto px-3">
                        <div className="text-center -mt-2.5">
                            <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold">{title}</h2>
                            <ul className="mt-3 pl-0">
                                <li className="relative text-zinc-600 text-[17px] font-medium inline-block mr-[30px] before:bg-zinc-600 before:block before:h-[18px] before:w-px before:absolute before:-right-3.5 before:top-[5px] before:rotate-[20deg]">
                                    <a href="/" className="text-neutral-900 inline-block hover:text-red-500">
                                        {breadcrumb}
                                    </a>
                                </li>
                                <li className="relative text-red-500 text-[17px] font-medium inline-block">
                                    {title}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
