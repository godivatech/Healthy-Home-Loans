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
                                    <i className="italic box-border caret-transparent leading-[normal] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                                </a>
                            </li>
                        )}
                        {props.socialLinks?.instagram && (
                            <li className="text-white box-border caret-transparent inline-block list-none mr-2.5">
                                <a
                                    href={props.socialLinks.instagram}
                                    className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                                >
                                    <i className="italic box-border caret-transparent leading-[normal] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                                </a>
                            </li>
                        )}
                        {props.socialLinks?.facebook && (
                            <li className="text-white box-border caret-transparent inline-block list-none mr-2.5">
                                <a
                                    href={props.socialLinks.facebook}
                                    className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                                >
                                    <i className="italic box-border caret-transparent leading-[normal] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                                </a>
                            </li>
                        )}
                        {props.socialLinks?.linkedin && (
                            <li className="text-white box-border caret-transparent inline-block list-none">
                                <a
                                    href={props.socialLinks.linkedin}
                                    className="box-border caret-transparent hover:text-red-500 hover:border-red-500"
                                >
                                    <i className="italic box-border caret-transparent leading-[normal] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
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
                            <i className="absolute text-white text-xl italic font-bold box-border caret-transparent block leading-[normal] left-0 top-[5px] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-xl before:not-italic before:normal-nums before:font-bold before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
                            <span className="text-white box-border caret-transparent">
                                {props.address}
                            </span>
                        </div>
                    )}
                    {props.emails && props.emails.length > 0 && (
                        <div className="relative box-border caret-transparent mb-5 pl-10">
                            <i className="absolute text-white text-xl italic font-bold box-border caret-transparent block leading-[normal] left-0 top-[5px] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-xl before:not-italic before:normal-nums before:font-bold before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
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
                            <i className="absolute text-white text-xl italic font-bold box-border caret-transparent block leading-[normal] left-0 top-[5px] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-xl before:not-italic before:normal-nums before:font-bold before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-flaticon"></i>
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
