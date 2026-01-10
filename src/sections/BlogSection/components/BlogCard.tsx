export type BlogCardProps = {
    imageUrl: string;
    imageAlt: string;
    date: string;
    title: string;
    detailsUrl: string;
    readMoreText: string;
};

export const BlogCard = (props: BlogCardProps) => {
    return (
        <div className="box-border caret-transparent mb-[30px]">
            <div className="box-border caret-transparent">
                <a
                    href={props.detailsUrl}
                    className="text-neutral-900 box-border caret-transparent hover:text-red-500 hover:border-red-500"
                >
                    <img
                        alt={props.imageAlt}
                        src={props.imageUrl}
                        className="text-transparent box-border max-w-full w-full md:w-[390px]"
                    />
                </a>
            </div>
            <div className="box-border caret-transparent mt-[25px]">
                <span className="text-red-500 text-sm box-border caret-transparent leading-[21px] font-rubik_0b5097">
                    {props.date}
                </span>
                <h3 className="text-neutral-900 text-xl font-medium box-border caret-transparent leading-7 mt-3 mb-3.5 font-rubik_0b5097 md:text-[25px] md:leading-[35px]">
                    <a
                        href={props.detailsUrl}
                        className="text-xl box-border caret-transparent leading-7 md:text-[25px] md:leading-[35px] hover:text-red-500 hover:border-red-500"
                    >
                        {props.title}
                    </a>
                </h3>
                <a
                    href={props.detailsUrl}
                    className="text-neutral-900 font-medium box-border caret-transparent inline-block font-rubik_0b5097"
                >
                    {props.readMoreText}
                </a>
            </div>
        </div>
    );
};
