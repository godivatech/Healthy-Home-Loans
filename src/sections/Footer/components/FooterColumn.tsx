export type FooterColumnProps = {
    variant: "logo" | "links" | "contact";
    title?: string;
    logoUrl?: string;
    logoAlt?: string;
    description?: string;
    socialLinks?: {
        twitter?: string;
        instagram?: string;
        facebook?: string;
        linkedin?: string;
    };
    links?: Array<{
        text: string;
        url: string;
    }>;
    address?: string;
    emails?: Array<{
        text: string;
        url: string;
    }>;
    phones?: Array<{
        text: string;
        url: string;
    }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
    if (props.variant === "logo") {
        return (
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                <div className="box-border caret-transparent mb-[25px]">
                    <div className="box-border caret-transparent">
                        <a
                            href="/"
                            className="text-neutral-900 box-border caret-transparent hover:text-red-500 hover:border-red-500"
                        >
                            <img
                                alt={props.logoAlt || "image"}
                                src={props.logoUrl}
                                className="text-transparent box-border max-w-full w-[150px] mb-[-30px] brightness-0 invert scale-[1.8]"
                            />
                        </a>
                    </div>
                    <p className="text-white text-[15px] box-border caret-transparent leading-[27px] mb-[15px] md:text-base md:leading-[28.8px]">
                        {props.description}
                    </p>
                    <ul className="box-border caret-transparent mt-5 pl-0">
                        <li className="text-white box-border caret-transparent inline-block list-none mr-2.5">
                            <b className="font-bold box-border caret-transparent">
                                Follow us:
                            </b>
                        </li>
                        {props.socialLinks?.twitter && (
                            <li className="text-white box-border caret-transparent inline-block list-none mr-2.5">
                                <a
                                    href={props.socialLinks.twitter}
                                    className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                                >
                                    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </li>
                        )}
                        {props.socialLinks?.instagram && (
                            <li className="text-white box-border caret-transparent inline-block list-none mr-2.5">
                                <a
                                    href={props.socialLinks.instagram}
                                    className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                                >
                                    <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                            </li>
                        )}
                        {props.socialLinks?.facebook && (
                            <li className="text-white box-border caret-transparent inline-block list-none mr-2.5">
                                <a
                                    href={props.socialLinks.facebook}
                                    className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                                >
                                    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            </li>
                        )}
                        {props.socialLinks?.linkedin && (
                            <li className="text-white box-border caret-transparent inline-block list-none">
                                <a
                                    href={props.socialLinks.linkedin}
                                    className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                                >
                                    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }

    if (props.variant === "links") {
        return (
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                <div className="box-border caret-transparent mb-[25px]">
                    <h3 className="text-white text-[22px] font-medium border-b-neutral-700 box-border caret-transparent leading-[26.4px] mb-[22px] pb-5 border-t-white border-x-white border-b font-rubik_0b5097 md:text-[25px] md:leading-[30px]">
                        {props.title}
                    </h3>
                    <ul className="box-border caret-transparent pl-0">
                        {props.links?.map((link, index) => (
                            <li
                                key={index}
                                className={`text-white box-border caret-transparent list-none ${index < props.links!.length - 1 ? "mb-[15px]" : ""}`}
                            >
                                <a href={link.url} className="box-border caret-transparent">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    if (props.variant === "contact") {
        return (
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                <div className="box-border caret-transparent mb-[25px]">
                    <h3 className="text-white text-[22px] font-medium border-b-neutral-700 box-border caret-transparent leading-[26.4px] mb-[22px] pb-5 border-t-white border-x-white border-b font-rubik_0b5097 md:text-[25px] md:leading-[30px]">
                        {props.title}
                    </h3>
                    {props.address && (
                        <div className="relative box-border caret-transparent mb-5 pl-10">
                            <svg className="absolute left-0 top-[5px] w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white box-border caret-transparent">
                                {props.address}
                            </span>
                        </div>
                    )}
                    {props.emails && props.emails.length > 0 && (
                        <div className="relative box-border caret-transparent mb-5 pl-10">
                            <svg className="absolute left-0 top-[5px] w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            {props.emails.map((email, index) => (
                                <span
                                    key={index}
                                    className="text-white box-border caret-transparent"
                                >
                                    <a
                                        href={email.url}
                                        className="box-border caret-transparent block hover:text-red-500 hover:border-red-500"
                                    >
                                        {email.text}
                                    </a>
                                </span>
                            ))}
                        </div>
                    )}
                    {props.phones && props.phones.length > 0 && (
                        <div className="relative box-border caret-transparent pl-10">
                            <svg className="absolute left-0 top-[5px] w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.143-5.124-3.443-6.267-6.267l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            {props.phones.map((phone, index) => (
                                <span
                                    key={index}
                                    className="text-white box-border caret-transparent"
                                >
                                    <a
                                        href={phone.url}
                                        className="box-border caret-transparent block hover:text-red-500 hover:border-red-500"
                                    >
                                        {phone.text}
                                    </a>
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return null;
};
