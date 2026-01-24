export type TestimonialCardProps = {
    quote: string;
    name: string;
    role: string;
    imageUrl?: string;
    imageAlt?: string;
    videoUrl?: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
    return (
        <div className="relative bg-white box-border caret-transparent mb-[30px]">
            <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
                    <div className="box-border caret-transparent flex flex-col justify-center h-full pl-4 md:pl-10">
                        <svg className="w-16 h-16 text-primary/10 mb-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18.009C14.017 16.896 14.119 15.93 14.322 15.112C14.524 14.294 14.897 13.568 15.439 12.934C15.9082 12.3853 16.4357 11.8953 17.013 11.472C17.5902 11.0487 18.1568 10.7068 18.706 10.45V10.158C18.706 8.951 18.3973 7.94233 17.78 7.132C17.1627 6.32167 16.0967 5.916 14.582 5.916V2.296C17.2033 2.296 19.1557 3.01433 20.439 4.451C21.7223 5.88767 22.364 8.01633 22.364 10.837V21H14.017ZM5.00002 21L5.00002 18.009C5.00002 16.896 5.10169 15.93 5.30502 15.112C5.50836 14.294 5.88102 13.568 6.42302 12.934C6.89221 12.3853 7.41974 11.8953 7.99702 11.472C8.57431 11.0487 9.14088 10.7068 9.69002 10.45V10.158C9.69002 8.951 9.38136 7.94233 8.76402 7.132C8.14669 6.32167 7.08069 5.916 5.56602 5.916V2.296C8.18736 2.296 10.1397 3.01433 11.423 4.451C12.7064 5.88767 13.348 8.01633 13.348 10.837V21H5.00002Z" />
                        </svg>
                        <p className="text-neutral-900 text-2xl md:text-3xl box-border caret-transparent leading-relaxed font-rubik_0b5097 mb-6">
                            "{props.quote}"
                        </p>
                        <div>
                            <h3 className="text-primary text-lg font-medium box-border caret-transparent leading-[19.2px] mb-2 font-rubik_0b5097">
                                {props.name}
                            </h3>
                            <span className="text-zinc-500 box-border caret-transparent text-base">
                                {props.role}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
                    <div className="relative box-border caret-transparent text-center flex justify-center">
                        {props.videoUrl ? (
                            <video
                                controls
                                className="rounded-lg shadow-lg max-h-[500px] w-auto mx-auto"
                                style={{ aspectRatio: "478/850" }}
                                src={props.videoUrl}
                            />
                        ) : (
                            <>
                                <img
                                    alt={props.imageAlt}
                                    src={props.imageUrl}
                                    className="text-transparent box-border max-w-full m-auto"
                                />
                                <div className="absolute box-border caret-transparent left-[90px] bottom-[55px] bg-white shadow-[rgba(0,0,0,0.09)_0px_2px_28px_0px] flex items-center justify-center h-20 w-20 rounded-[50px] hover:bg-primary transition-colors group">
                                    <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
