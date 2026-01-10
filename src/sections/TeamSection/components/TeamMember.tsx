export type TeamMemberProps = {
    imageUrl: string;
    name: string;
    position: string;
};

export const TeamMember = (props: TeamMemberProps) => {
    return (
        <div className="box-border caret-transparent text-center mb-[30px]">
            <div className="relative box-border caret-transparent overflow-hidden">
                <img
                    alt="image"
                    src={props.imageUrl}
                    className="text-transparent box-border max-w-full w-full md:w-[300px]"
                />
                <ul className="absolute box-border caret-transparent list-none mx-auto pl-0 bottom-5 inset-x-0"></ul>
            </div>
            <div className="box-border caret-transparent mt-[25px]">
                <h3 className="text-neutral-900 text-[22px] font-medium box-border caret-transparent leading-[26.4px] mb-2 font-rubik_0b5097">
                    {props.name}
                </h3>
                <span className="text-zinc-600 box-border caret-transparent">
                    {props.position}
                </span>
            </div>
        </div>
    );
};
