export const SocialLinks = () => {
    return (
        <div className="absolute box-border caret-transparent hidden z-[1] left-[45px] bottom-[50px] md:block">
            <ul className="box-border caret-transparent pl-0">
                <li className="text-neutral-900 box-border caret-transparent inline-block list-none mr-5">
                    <span className="relative box-border caret-transparent mr-[30px] before:accent-auto before:bg-neutral-900 before:box-border before:caret-transparent before:text-neutral-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:right-[-38px] before:text-start before:indent-[0px] before:normal-case before:visible before:w-[30px] before:border-separate before:top-2.5 before:font-roboto_68d44c">
                        Follow us
                    </span>
                </li>
                <li className="text-neutral-900 box-border caret-transparent inline-block list-none mr-5">
                    <a
                        href="https://www.twitter.com/"
                        className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                    >
                        <i className="italic box-border caret-transparent leading-[normal] transform-none origin-[100%_100%] md:-rotate-90 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                    </a>
                </li>
                <li className="text-neutral-900 box-border caret-transparent inline-block list-none mr-5">
                    <a
                        href="https://www.instagram.com/"
                        className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                    >
                        <i className="italic box-border caret-transparent leading-[normal] transform-none origin-[100%_100%] md:-rotate-90 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                    </a>
                </li>
                <li className="text-neutral-900 box-border caret-transparent inline-block list-none mr-5">
                    <a
                        href="https://www.facebook.com/"
                        className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                    >
                        <i className="italic box-border caret-transparent leading-[normal] transform-none origin-[100%_100%] md:-rotate-90 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                    </a>
                </li>
                <li className="text-neutral-900 box-border caret-transparent inline-block list-none">
                    <a
                        href="https://www.linkedin.com/"
                        className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                    >
                        <i className="italic box-border caret-transparent leading-[normal] transform-none origin-[100%_100%] md:-rotate-90 before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};