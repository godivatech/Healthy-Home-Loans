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
                        <div className="absolute box-border caret-transparent left-[90px] bottom-[55px]">
                            <i className="text-red-500 text-[50px] italic bg-white shadow-[rgba(0,0,0,0.09)_0px_2px_28px_0px] box-border caret-transparent inline-block h-20 leading-[80px] w-20 rounded-[50px] before:accent-auto before:box-border before:caret-transparent before:text-red-500 before:text-[50px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[80px] before:list-outside before:list-none before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon hover:text-white hover:bg-red-500 hover:border-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
