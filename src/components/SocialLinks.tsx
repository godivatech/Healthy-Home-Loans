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
                        className="box-border caret-transparent hover:text-red-500 hover:border-red-500 inline-block transform md:-rotate-90"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </li>
                <li className="text-neutral-900 box-border caret-transparent inline-block list-none mr-5">
                    <a
                        href="https://www.instagram.com/"
                        className="box-border caret-transparent hover:text-red-500 hover:border-red-500 inline-block transform md:-rotate-90"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>
                </li>
                <li className="text-neutral-900 box-border caret-transparent inline-block list-none mr-5">
                    <a
                        href="https://www.facebook.com/"
                        className="box-border caret-transparent hover:text-red-500 hover:border-red-500 inline-block transform md:-rotate-90"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                </li>
                <li className="text-neutral-900 box-border caret-transparent inline-block list-none">
                    <a
                        href="https://www.linkedin.com/"
                        className="box-border caret-transparent hover:text-red-500 hover:border-red-500 inline-block transform md:-rotate-90"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};