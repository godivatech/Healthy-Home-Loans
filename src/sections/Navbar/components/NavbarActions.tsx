import { Link } from "react-router-dom";

export const NavbarActions = () => {
    return (
        <div className="items-center border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-zinc-100 box-border caret-transparent flex min-h-0 min-w-0 ml-0 mt-[5px] pt-[5px] border-t md:border-t-neutral-800 md:min-h-[auto] md:min-w-[auto] md:ml-[15px] md:mt-0 md:pt-0 md:border-t-0">
            <div className="relative box-border caret-transparent min-h-0 min-w-0 mr-[15px] md:min-h-[auto] md:min-w-[auto] md:mr-[30px] before:accent-auto before:bg-zinc-300 before:box-border before:caret-transparent before:text-neutral-800 before:hidden before:text-base before:not-italic before:normal-nums before:font-normal before:h-7 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:right-[-15px] before:text-start before:indent-[0px] before:normal-case before:visible before:w-px before:border-separate before:top-0 before:font-roboto_68d44c">
                <div className="relative box-border caret-transparent pl-[15px] md:pl-[45px]">
                    <div className="absolute left-0 top-1 text-primary hidden md:block">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.143-5.124-3.443-6.267-6.267l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <span className="text-zinc-600 text-[13px] box-border caret-transparent leading-[19.5px] md:text-base md:leading-6">
                        Call Us
                    </span>
                    <p className="text-zinc-600 text-[13px] font-medium box-border caret-transparent leading-[23.4px] font-rubik_0b5097 md:text-base md:leading-[28.8px]">
                        <a
                            href="tel:+919787977711"
                            className="text-neutral-900 text-[13px] box-border caret-transparent leading-[23.4px] md:text-base md:leading-[28.8px]"
                        >
                            +91 97879 77711
                        </a>
                    </p>
                </div>
            </div>
            <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                <Link
                    to="/contact"
                    className="relative text-neutral-900 text-[13px] bg-accent box-border caret-transparent inline-block leading-[19.5px] text-center z-[1] overflow-hidden mt-[5px] px-5 py-3 rounded-[5px] font-medium md:text-base md:leading-6 md:px-8 hover:bg-yellow-400 transition-colors"
                >
                    Get Loan
                </Link>
            </div>
        </div>
    );
};
