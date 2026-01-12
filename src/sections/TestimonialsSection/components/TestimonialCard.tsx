export type TestimonialCardProps = {
    quote: string;
    name: string;
    role: string;
    imageUrl: string;
    imageAlt: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
    return (
        <div className="relative bg-white box-border caret-transparent mb-[30px]">
            <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
                    <div className="box-border caret-transparent">
                        <p className="text-neutral-900 text-2xl box-border caret-transparent leading-9 font-rubik_0b5097">
                            "{props.quote}"
                        </p>
                        <h3 className="text-red-500 font-medium box-border caret-transparent leading-[19.2px] mt-5 mb-2 font-rubik_0b5097">
                            {props.name}
                        </h3>
                        <span className="text-zinc-600 box-border caret-transparent">
                            {props.role}
                        </span>
                    </div>
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
                    <div className="relative box-border caret-transparent text-center">
                        <img
                            alt={props.imageAlt}
                            src={props.imageUrl}
                            className="text-transparent box-border max-w-full m-auto"
                        />
                        <div className="absolute box-border caret-transparent left-[90px] bottom-[55px] bg-white shadow-[rgba(0,0,0,0.09)_0px_2px_28px_0px] flex items-center justify-center h-20 w-20 rounded-[50px] hover:bg-red-500 transition-colors group">
                            <svg className="w-10 h-10 text-red-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
