export const AboutContent = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
            <div className="box-border caret-transparent mt-[50px] md:mt-0">
                <span className="text-red-500 box-border caret-transparent">
                    About Healthy Home Loans
                </span>
                <h3 className="text-neutral-900 text-[25px] font-medium box-border caret-transparent leading-[30px] mt-2.5 mb-3.5 font-rubik_0b5097 md:text-4xl md:leading-[43.2px] md:mb-4">
                    Providing holistically-designed financial solutions for over 15 years.
                </h3>
                <p className="text-zinc-600 text-[15px] box-border caret-transparent leading-[27px] mb-[15px] md:text-base md:leading-[28.8px]">
                    We are dedicated to optimizing each family's current financial health and long-term wealth. Our mission is to make loans easy and living peaceful by providing accessible and transparent financial services.
                </p>
                <strong className="text-zinc-600 text-lg box-border caret-transparent leading-[27px]">
                    Our Core Values
                </strong>
                <ul className="box-border caret-transparent mt-5 mb-[25px] pl-0">
                    <li className="relative text-zinc-600 box-border caret-transparent list-none mb-2.5 pl-[30px]">
                        <i className="absolute text-red-500 text-xl italic box-border caret-transparent block leading-[normal] left-0 top-0 before:accent-auto before:box-border before:caret-transparent before:text-red-500 before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                        Trust & Transparency
                    </li>
                    <li className="relative text-zinc-600 box-border caret-transparent list-none mb-2.5 pl-[30px]">
                        <i className="absolute text-red-500 text-xl italic box-border caret-transparent block leading-[normal] left-0 top-0 before:accent-auto before:box-border before:caret-transparent before:text-red-500 before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                        Speed & Efficiency
                    </li>
                    <li className="relative text-zinc-600 box-border caret-transparent list-none pl-[30px]">
                        <i className="absolute text-red-500 text-xl italic box-border caret-transparent block leading-[normal] left-0 top-0 before:accent-auto before:box-border before:caret-transparent before:text-red-500 before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                        Customer-First Approach
                    </li>
                </ul>
                <div className="box-border caret-transparent">
                    <a
                        href="/about"
                        className="relative text-white text-[15px] bg-red-500 box-border caret-transparent inline-block leading-[22.5px] text-center z-[1] overflow-hidden px-[30px] py-3 rounded-[5px] md:text-base md:leading-6 md:px-[45px] hover:bg-neutral-900 transition-colors"
                    >
                        Learn More{" "}
                        <span className="absolute text-red-500 text-[15px] bg-neutral-900 box-border caret-transparent block h-0 leading-[22.5px] w-0 z-[-1] rounded-[5px] md:text-base md:leading-6"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};
